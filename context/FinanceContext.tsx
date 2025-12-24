
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createClient } from '../utils/supabase/client';
import { Transaction, Account, Budget, Commitment, RecurringRule, Ledger, TransactionType, Category, CategoryFolder } from '../types';
import { useRouter } from 'next/navigation';

// Database types mapping could be strictly done here, but for now we map manually
// to match the specific "Ledger" vs "Book" terminology change requested by user logic vs DB logic.
// The user "Ledger" in UI maps to "Book" in DB.

interface FinanceContextType {
  transactions: Transaction[];
  accounts: Account[];
  categories: Category[];
  categoryFolders: CategoryFolder[];
  budgets: Budget[];
  commitments: Commitment[];
  recurringRules: RecurringRule[];
  ledgers: Ledger[];

  // Actions
  addTransaction: (t: Omit<Transaction, 'id'>) => Promise<void>;
  deleteTransaction: (id: string) => Promise<void>;
  addAccount: (a: Omit<Account, 'id'>) => Promise<void>;
  updateAccount: (id: string, a: Partial<Account>) => Promise<void>;
  deleteAccount: (id: string) => Promise<void>;
  addCommitment: (c: Omit<Commitment, 'id'>) => Promise<void>;
  updateCommitment: (id: string, updates: Partial<Commitment>) => Promise<void>;
  deleteCommitment: (id: string) => Promise<void>;
  toggleCommitmentStatus: (id: string, currentStatus: string) => Promise<void>;
  toggleRuleStatus: (id: string) => void;
  updateTransaction: (id: string, updates: Partial<Transaction>) => Promise<void>;
  duplicateTransaction: (id: string) => Promise<void>;
  activateLedger: (id: string) => void;
  generateSampleData: () => Promise<void>;

  totalBalance: number;
  isDarkMode: boolean;
  toggleTheme: () => void;
  isLoading: boolean;
  activeBookId: string | null;
  refreshBooks: () => Promise<void>;
  formatAmount: (amount: number) => string;
  isTransactionModalOpen: boolean;
  openTransactionModal: () => void;
  closeTransactionModal: () => void;
  addBudget: (b: { amount: number; categoryId: string; recurrenceType?: string; recurrenceInterval?: number; startDate?: string; endDate?: string }) => Promise<void>;
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

export const FinanceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const supabase = createClient();
  const router = useRouter();

  // State
  const [activeBookId, setActiveBookId] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryFolders, setCategoryFolders] = useState<CategoryFolder[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [commitments, setCommitments] = useState<Commitment[]>([]);
  const [recurringRules, setRecurringRules] = useState<RecurringRule[]>([]); // Migration TODO: Link to commitments?
  const [ledgers, setLedgers] = useState<Ledger[]>([]); // These are 'books' now

  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme Logic
  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      if (typeof window !== 'undefined') {
        const root = window.document.documentElement;
        if (newMode) root.classList.add('dark');
        else root.classList.remove('dark');
      }
      return newMode;
    });
  };

  const fetchBooks = async () => {
    setIsLoading(true);
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      setIsLoading(false);
      return;
    }

    const { data: books, error } = await supabase.from('books').select('*');

    if (books && books.length > 0) {
      const mappedLedgers: Ledger[] = books.map(b => ({
        id: b.id,
        name: b.name,
        description: b.short_description || '',
        balance: 0,
        isActive: false,
        isArchived: false,
        lastUpdate: b.created_at,
        icon: b.icon || 'Wallet',
        color: b.color || 'blue', // Default
        type: 'PERSONAL',
        members: [],
        currency: b.currency
      }));

      setLedgers(mappedLedgers);

      // Initial activation logic can be here or in useEffect
      // We will activate first if none active in useEffect or consumer
    } else {
      await createDefaultBook(user.id);
    }
    setIsLoading(false);
  };

  // Initial Load
  useEffect(() => {
    fetchBooks().then((mappedLedgers) => {
      // Logic moved inside to have access to the fetched ledgers directly if returned, 
      // or we rely on state updates which might be async.
      // Better approach: fetchBooks updates state. We wait for that.
    });
  }, []);

  // Effect to handle initial active book selection once ledgers are loaded
  useEffect(() => {
    if (!isLoading && ledgers.length > 0 && !activeBookId) {
      // Try to recover from localStorage
      const savedBookId = localStorage.getItem('finance_active_book_id');
      const targetBook = ledgers.find(l => l.id === savedBookId);

      if (targetBook) {
        handleChangeActiveBook(targetBook.id);
      } else {
        // Default to first if no saved book or saved book not found/deleted
        handleChangeActiveBook(ledgers[0].id);
      }
    }
  }, [isLoading, ledgers, activeBookId]);

  // Helper to format currency based on active book
  const formatAmount = (amount: number) => {
    const activeLedger = ledgers.find(l => l.id === activeBookId);
    const currency = activeLedger?.currency || 'MXN';

    let locale = 'es-MX';
    if (currency === 'USD') locale = 'en-US';
    if (currency === 'EUR') locale = 'es-ES';
    if (currency === 'PEN') return `S/ ${amount.toLocaleString('es-PE', { minimumFractionDigits: 2 })}`;
    if (currency === 'COP') locale = 'es-CO';

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const refreshBooks = async () => {
    await fetchBooks();
    if (activeBookId) {
      await Promise.all([
        fetchAccounts(activeBookId),
        fetchCategories(activeBookId),
        fetchCategoryFolders(activeBookId),
        fetchTransactions(activeBookId),
        fetchCommitments(activeBookId),
        fetchBudgets(activeBookId),
        fetchRecurringRules(activeBookId)
      ]);
    }
  };

  const createDefaultBook = async (userId: string) => {
    const { data, error } = await supabase.from('books').insert({
      name: 'Personal',
      user_id: userId
    }).select().single();

    if (data) {
      const newLedger: Ledger = {
        id: data.id,
        name: data.name,
        description: 'Mi primer libro contable',
        balance: 0,
        isActive: true,
        isArchived: false,
        lastUpdate: new Date().toISOString(),
        icon: 'person',
        color: 'blue',
        type: 'PERSONAL',
        members: []
      };
      setLedgers([newLedger]);
      handleChangeActiveBook(data.id);
    }
  };

  const handleChangeActiveBook = async (bookId: string) => {
    setActiveBookId(bookId);
    localStorage.setItem('finance_active_book_id', bookId); // Persist selection
    setLedgers(prev => prev.map(l => ({ ...l, isActive: l.id === bookId })));

    // Fetch Data for this Book
    await Promise.all([
      fetchAccounts(bookId),
      fetchCategories(bookId),
      fetchCategoryFolders(bookId),
      fetchTransactions(bookId),
      fetchCommitments(bookId),
      fetchBudgets(bookId),
      fetchRecurringRules(bookId)
    ]);
  };

  const fetchCategories = async (bookId: string) => {
    const { data } = await supabase.from('categories').select('*').eq('book_id', bookId);
    if (data) {
      setCategories(data.map((cat: any) => ({
        id: cat.id,
        name: cat.name,
        color: cat.color || '#2563eb',
        icon: cat.icon || 'category',
        folder_id: cat.folder_id || null
      })));
    }
  };

  const fetchCategoryFolders = async (bookId: string) => {
    const { data } = await supabase.from('category_folders').select('*').eq('book_id', bookId);
    if (data) {
      setCategoryFolders(data.map((folder: any) => ({
        id: folder.id,
        name: folder.name,
        color: folder.color || '#6366f1',
        icon: folder.icon || 'folder'
      })));
    }
  };

  const fetchAccounts = async (bookId: string) => {
    const { data } = await supabase.from('accounts').select('*').eq('book_id', bookId);
    if (data) {
      setAccounts(data.map(a => ({
        ...a,
        // Ensure types match UI expectation
        type: a.type as any
      })));
    }
  };

  const fetchTransactions = async (bookId: string) => {
    const { data } = await supabase
      .from('transactions')
      .select(`
        *,
        categories (name, icon, color),
        accounts (name)
      `)
      .eq('book_id', bookId)
      .order('occurred_at', { ascending: false });

    if (data) {
      setTransactions(data.map((t: any) => ({
        id: t.id,
        amount: t.amount,
        type: t.type as any,
        category: t.categories?.name || 'Uncategorized',
        category_id: t.category_id,
        account: t.accounts?.name || 'Unknown',
        account_id: t.account_id,
        description: t.description || '',
        date: t.occurred_at,
        icon: t.categories?.icon || 'attach_money',
        status: t.status as any,
        location: t.location_text, // Map DB location_text to UI location
        notes: t.notes,
        beneficiary: t.beneficiary,
        created_at: t.created_at,
        updated_at: t.updated_at
      })));
    }
  };

  const fetchCommitments = async (bookId: string) => {
    const { data, error } = await supabase
      .from('commitments')
      .select(`
        *,
        categories (name),
        accounts:account_id (name)
      `)
      .eq('book_id', bookId);

    if (error) {
      console.error('Error fetching commitments:', error);
    }

    if (data) {
      setCommitments(data.map((c: any) => ({
        id: c.id,
        name: c.title,
        amount: c.amount,
        frequency: c.frequency as any,
        nextDueDate: c.next_due_date,
        status: c.status as any,
        type: c.type as any || 'FIXED',
        isActive: c.is_active ?? true,
        endDate: c.end_date,
        category: c.categories?.name || 'General',
        account: c.accounts?.name || 'Cuenta principal',
        categoryId: c.category_id,
        accountId: c.account_id,
        recurrence: c.recurrence,
        transaction_type: c.transaction_type
      })));
    }
  };

  const fetchBudgets = async (bookId: string) => {
    // Joining handled client-side in UI to ensure robustness
    const { data, error } = await supabase
      .from('budgets')
      .select('*')
      .eq('book_id', bookId);

    if (error) {
      console.warn('Error loading budgets', error.message);
      return;
    }
    if (data) {
      setBudgets(data.map((b: any) => ({
        id: b.id,
        category: 'Loading...', // Main mapping done in Page via category_id
        category_id: b.category_id,
        limit: Number(b.amount || 0),
        spent: 0,
        period: 'MONTHLY',
        severity: 'NORMAL',
        start_date: b.start_date,
        end_date: b.end_date,
        recurrence_type: b.recurrence_type,
        recurrence_interval: b.recurrence_interval
      })));
    }
  };

  const fetchRecurringRules = async (bookId: string) => {
    const { data, error } = await supabase
      .from('recurring_rules')
      .select(`
        *,
        categories (name, icon, color),
        accounts (name)
      `)
      .eq('book_id', bookId);

    if (error) {
      console.warn('No fue posible cargar reglas recurrentes', error.message);
      return;
    }
    if (data) {
      setRecurringRules(data.map((r: any) => ({
        id: r.id,
        name: r.name,
        category: r.categories?.name || 'General',
        account: r.accounts?.name || 'Cuenta principal',
        amount: Number(r.amount ?? 0),
        type: (r.type as TransactionType) || 'EXPENSE',
        frequency: r.frequency || 'Mensual',
        nextDate: r.next_run_at || '',
        active: r.is_active ?? true,
        icon: r.categories?.icon || 'autorenew'
      })));
    }
  };

  // ACTIONS
  const addTransaction = async (t: Omit<Transaction, 'id'>) => {
    if (!activeBookId) return;

    // Find account ID by name (current UI passes name)
    // In future UI should pass ID. For now, matching by name:
    const account = accounts.find(a => a.name === t.account);
    const accountId = account?.id; // Fallback?

    if (!accountId) {
      console.error("Account not found forTransaction name:", t.account); // Log the name we looked for
      alert("Error: No se encontró la cuenta seleccionada ('" + t.account + "'). Por favor selecciona una cuenta válida.");
      return;
    }

    // Find category ID
    // If t.category is a name, find ID. If t.category_id is provided, use it.
    let categoryId = t.category_id;
    if (!categoryId && t.category) {
      const cat = categories.find(c => c.name === t.category);
      categoryId = cat?.id;
    }

    const { data, error } = await supabase.from('transactions').insert({
      book_id: activeBookId,
      account_id: accountId,
      type: t.type,
      amount: t.amount,
      description: t.description,
      occurred_at: t.date,
      category_id: categoryId,
      currency: account.currency || 'USD',
      location_text: t.location,
      notes: t.notes,
      beneficiary: t.beneficiary,
      frequency: t.frequency, // Save frequency to transaction
      commitment_id: t.commitment_id // Save commitment link
    }).select().single();

    if (error) {
      console.error("Error creating transaction:", error);
      alert("Error al guardar: " + error.message);
      return;
    }

    // Update Account Balance manually since no triggers exist
    if (account) {
      let newBalance = Number(account.balance);
      if (t.type === 'INCOME') {
        newBalance += Number(t.amount);
      } else {
        newBalance -= Number(t.amount);
      }

      const { error: accError } = await supabase
        .from('accounts')
        .update({ balance: newBalance })
        .eq('id', accountId);

      if (accError) {
        console.error("Error updating account balance:", accError);
      }
    }

    // Create Recurring Rule if needed
    if (data && t.frequency) {
      // Calculate next run? For now, we just create the rule.
      // Logic for next run could be complex (e.g. 1 month from now). 
      // For simplicity, we set next_run_at to the transaction date + interval (or just the date if the rule runner handles it).
      // Let's assume we want the NEXT occurrence.

      let nextDate = new Date(t.date);
      // Simple logic for next date
      if (t.frequency === 'DAILY') nextDate.setDate(nextDate.getDate() + 1);
      if (t.frequency === 'WEEKLY') nextDate.setDate(nextDate.getDate() + 7);
      if (t.frequency === 'BIWEEKLY') nextDate.setDate(nextDate.getDate() + 14);
      if (t.frequency === 'MONTHLY') nextDate.setMonth(nextDate.getMonth() + 1);
      if (t.frequency === 'ANNUAL') nextDate.setFullYear(nextDate.getFullYear() + 1);
      // ... add others if strict needed, or rely on null/logic elsewhere.

      const { error: ruleError } = await supabase.from('recurring_rules').insert({
        book_id: activeBookId,
        name: t.description,
        amount: t.amount,
        category_id: categoryId,
        account_id: accountId,
        type: t.type,
        frequency: t.frequency,
        next_run_at: nextDate.toISOString(),
        end_date: t.end_date,
        is_active: true
      });

      if (ruleError) {
        console.warn("Failed to create recurring rule:", ruleError);
      } else {
        fetchRecurringRules(activeBookId);
      }
    }

    if (data) {
      // UI Optimistic Update or Refetch
      fetchTransactions(activeBookId);
      fetchAccounts(activeBookId); // Update balances
    }
  };

  const addAccount = async (a: Omit<Account, 'id'>) => {
    if (!activeBookId) return;

    // Prepare payload - casting to any to bypass strict database types until migration is run
    const payload: any = {
      book_id: activeBookId,
      name: a.name,
      type: a.type,
      balance: a.balance,
      currency: a.currency,
      is_default: a.isDefault,
      // Credit Card Fields
      credit_limit: a.creditLimit,
      available_credit: a.availableCredit,
      cutoff_day: a.cutoffDay,
      pay_day: a.payDay,
      network: a.network,
      auto_pay: a.autoPay,
      last_four: a.lastFour, // Ensure this exists or is removed if unused
      color: 'blue', // Default for now, or passed from 'a' if added to Account type
      icon: 'account_balance' // Default
    };

    const { error } = await supabase.from('accounts').insert(payload);

    if (error) {
      console.error("Error creating account:", error);
      alert("Error creating account: " + error.message);
      return;
    }

    fetchAccounts(activeBookId);
    fetchAccounts(activeBookId);
  };

  const updateAccount = async (id: string, a: Partial<Account>) => {
    if (!activeBookId) return;

    // Prepare payload
    const payload: any = {
      name: a.name,
      type: a.type,
      balance: a.balance,
      currency: a.currency,
      is_default: a.isDefault,
      credit_limit: a.creditLimit,
      available_credit: a.availableCredit,
      cutoff_day: a.cutoffDay,
      pay_day: a.payDay,
      network: a.network,
      auto_pay: a.autoPay,
      last_four: a.lastFour,
      color: a.color || 'blue', // preserve or update
    };

    // Remove undefined keys
    Object.keys(payload).forEach(key => payload[key] === undefined && delete payload[key]);

    const { error } = await supabase.from('accounts').update(payload).eq('id', id);

    if (error) {
      console.error("Error updating account:", error);
      alert("Error updating account: " + error.message);
      return;
    }

    fetchAccounts(activeBookId);
  };

  const deleteAccount = async (id: string) => {
    if (!activeBookId) return;

    // Check for dependencies? Ideally transactions cascade or block. 
    // Supabase usually set to CASECADE or RESTRICT. Assuming CASCADE or user handled.
    const { error } = await supabase.from('accounts').delete().eq('id', id);

    if (error) {
      console.error("Error deleting account:", error);
      alert("Error al eliminar cuenta: " + error.message);
      return;
    }

    fetchAccounts(activeBookId);
  };

  const addCommitment = async (c: Omit<Commitment, 'id'>) => {
    if (!activeBookId) return;

    const payload: any = {
      book_id: activeBookId,
      title: c.name,
      amount: c.amount,
      frequency: c.frequency,
      next_due_date: c.nextDueDate,
      status: c.status,
      type: c.type,
      is_active: c.isActive,
      end_date: c.endDate,
      category_id: c.categoryId,
      account_id: c.accountId,
      recurrence: c.recurrence,
      transaction_type: c.transaction_type
    };

    if (!c.categoryId && c.category) {
      const cat = categories.find(cat => cat.name === c.category);
      if (cat) payload.category_id = cat.id;
    }

    if (!c.accountId && c.account) {
      const acc = accounts.find(a => a.name === c.account);
      if (acc) payload.account_id = acc.id;
    }

    const { error } = await supabase.from('commitments').insert(payload);

    if (error) {
      console.error('Error creating commitment:', error);
      alert('Error al crear compromiso: ' + error.message);
      return;
    }

    fetchCommitments(activeBookId);
  };

  const updateCommitment = async (id: string, updates: Partial<Commitment>) => {
    if (!activeBookId) return;

    const payload: any = {};
    if (updates.name !== undefined) payload.title = updates.name;
    if (updates.amount !== undefined) payload.amount = updates.amount;
    if (updates.frequency !== undefined) payload.frequency = updates.frequency;
    if (updates.nextDueDate !== undefined) payload.next_due_date = updates.nextDueDate;
    if (updates.status !== undefined) payload.status = updates.status;
    if (updates.type !== undefined) payload.type = updates.type;
    if (updates.isActive !== undefined) payload.is_active = updates.isActive;
    if (updates.endDate !== undefined) payload.end_date = updates.endDate;
    if (updates.recurrence !== undefined) payload.recurrence = updates.recurrence;
    if (updates.transaction_type !== undefined) payload.transaction_type = updates.transaction_type;

    if (updates.categoryId !== undefined) payload.category_id = updates.categoryId;
    if (updates.accountId !== undefined) payload.account_id = updates.accountId;

    // Fallback for names
    if (!updates.categoryId && updates.category) {
      const cat = categories.find(c => c.name === updates.category);
      if (cat) payload.category_id = cat.id;
    }
    if (!updates.accountId && updates.account) {
      const acc = accounts.find(a => a.name === updates.account);
      if (acc) payload.account_id = acc.id;
    }

    const { error } = await supabase.from('commitments').update(payload).eq('id', id);

    if (error) {
      console.error('Error updating commitment:', error);
      alert('Error updating commitment: ' + error.message);
      return;
    }

    fetchCommitments(activeBookId);
  };

  const deleteCommitment = async (id: string) => {
    const { error } = await supabase.from('commitments').delete().eq('id', id);
    if (error) {
      console.error("Error deleting commitment:", error);
      alert("Error deleting commitment: " + error.message);
      return;
    }
    if (activeBookId) fetchCommitments(activeBookId);
  };

  const deleteTransaction = async (id: string) => {
    // 1. Fetch transaction details to revert balance
    const { data: transaction } = await supabase
      .from('transactions')
      .select('*')
      .eq('id', id)
      .single();

    const { error } = await supabase.from('transactions').delete().eq('id', id);
    if (error) {
      console.error("Error deleting transaction:", error);
      alert("Error deleting transaction: " + error.message);
      return;
    }

    // 2. Revert Balance
    if (transaction && transaction.account_id) {
      const { data: account } = await supabase
        .from('accounts')
        .select('balance')
        .eq('id', transaction.account_id)
        .single();

      if (account) {
        let newBalance = Number(account.balance);
        // Inverse logic: Deleting Income -> Remove money (Subtract)
        // Inverse logic: Deleting Expense -> Give back money (Add)
        if (transaction.type === 'INCOME') {
          newBalance -= Number(transaction.amount);
        } else {
          newBalance += Number(transaction.amount);
        }

        await supabase
          .from('accounts')
          .update({ balance: newBalance })
          .eq('id', transaction.account_id);
      }
    }

    // 3. Update Commitment Status if linked
    if (transaction && transaction.commitment_id) {
      await supabase
        .from('commitments')
        .update({ status: 'PENDING' })
        .eq('id', transaction.commitment_id);

      fetchCommitments(activeBookId);
    }

    if (activeBookId) {
      fetchTransactions(activeBookId);
      fetchAccounts(activeBookId);
    }
  };

  const updateTransaction = async (id: string, updates: Partial<Transaction>) => {
    // Map UI fields to DB fields
    const payload: any = {};
    if (updates.amount !== undefined) payload.amount = updates.amount;
    if (updates.description !== undefined) payload.description = updates.description;
    if (updates.date !== undefined) payload.occurred_at = updates.date;
    if (updates.type !== undefined) payload.type = updates.type;
    if (updates.notes !== undefined) payload.notes = updates.notes;
    if (updates.location !== undefined) payload.location_text = updates.location;
    if (updates.beneficiary !== undefined) payload.beneficiary = updates.beneficiary;
    if (updates.frequency !== undefined) payload.frequency = updates.frequency;
    if (updates.end_date !== undefined) payload.end_date = updates.end_date;
    if (updates.end_date !== undefined) payload.end_date = updates.end_date;
    // Relationship updates
    if (updates.category_id) payload.category_id = updates.category_id;
    if (updates.account_id) payload.account_id = updates.account_id;
    // Also support name-based updates if IDs not passed (legacy/UI compatibility)
    if (!updates.category_id && updates.category) {
      const cat = categories.find(c => c.name === updates.category);
      if (cat) payload.category_id = cat.id;
    }

    payload.updated_at = new Date().toISOString();

    const { error } = await supabase.from('transactions').update(payload).eq('id', id);

    if (error) {
      console.error("Error updating transaction:", error);
      alert("Error updating transaction: " + error.message);
      return;
    }
    if (activeBookId) {
      fetchTransactions(activeBookId);
      fetchAccounts(activeBookId); // Balance might change
    }
  };

  const duplicateTransaction = async (id: string) => {
    const original = transactions.find(t => t.id === id);
    if (!original) return;

    const newTrans: Omit<Transaction, 'id'> = {
      ...original,
      date: new Date().toISOString(), // Update to current time
      notes: (original.notes ? original.notes + " " : "") + "(Copia)",
      created_at: undefined, // Let DB set this
      updated_at: undefined
    };

    await addTransaction(newTrans);
  };

  const toggleCommitmentStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'PAID' ? 'PENDING' : 'PAID';

    // Optimistic update
    await updateCommitment(id, { status: newStatus as any });

    // If marking as PAID, generate the transaction
    if (newStatus === 'PAID') {
      const commitment = commitments.find(c => c.id === id);
      if (commitment) {
        const transactionData: any = {
          book_id: activeBookId,
          amount: commitment.amount,
          type: commitment.transaction_type || 'EXPENSE', // Fallback to expense if not set
          account: commitment.account, // Name is used by addTransaction
          account_id: commitment.accountId, // Pass ID if available for precision
          category: commitment.category,
          category_id: commitment.categoryId,
          description: `[Compromiso] ${commitment.name}`,
          date: new Date().toISOString(),
          notes: 'Generado automáticamente desde Compromisos',
          commitment_id: id // Link back to commitment
        };

        await addTransaction(transactionData);
        // Toast or feedback could go here

        // Generate Next Occurrence for Recurring Commitments
        if (commitment.frequency) {
          const currentDate = new Date(commitment.nextDueDate);
          // Ensure valid date
          if (!isNaN(currentDate.getTime())) {
            const nextDate = new Date(currentDate);

            // Add time based on frequency (using UTC-safe or local logic? standard JS methods use local)
            // Just basic iteration:
            switch (commitment.frequency) {
              case 'DAILY': nextDate.setDate(nextDate.getDate() + 1); break;
              case 'WEEKLY': nextDate.setDate(nextDate.getDate() + 7); break;
              case 'BIWEEKLY': nextDate.setDate(nextDate.getDate() + 14); break;
              case 'MONTHLY': nextDate.setMonth(nextDate.getMonth() + 1); break;
              case 'QUARTERLY': nextDate.setMonth(nextDate.getMonth() + 3); break;
              case 'SEMIANNUAL': nextDate.setMonth(nextDate.getMonth() + 6); break;
              case 'ANNUAL': nextDate.setFullYear(nextDate.getFullYear() + 1); break;
            }

            // Check End Date
            const hasEndDate = commitment.endDate && commitment.endDate.trim() !== '';
            const isAfterEnd = hasEndDate && new Date(commitment.endDate!) < nextDate;

            if (!isAfterEnd) {
              // Create the next commitment
              // We omit 'id' effectively by constructing a new object.
              // We pass the new calculated date.
              const nextCommitment = {
                ...commitment,
                // Reset status to PENDING for the new one
                status: 'PENDING' as const,
                nextDueDate: nextDate.toISOString(),
                // Keep the rest (name, amount, etc)
              };

              // Remove IDs from the spread object to avoid TS issues if possible, 
              // but addCommitment accepts Omit<Commitment, 'id'>. 
              // We can cast or just rely on addCommitment implementation ignoring them.
              // Let's rely on addCommitment implementation which constructs payload explicitly.
              await addCommitment(nextCommitment);
            }
          }
        }
      }
    }
  };

  const toggleRuleStatus = (id: string) => {
    // impl
  };

  const activateLedger = (id: string) => {
    handleChangeActiveBook(id);
  };

  const generateSampleData = async () => {
    if (!activeBookId) return;

    setIsLoading(true);

    // 1. Create Accounts
    const accountsData = [
      { book_id: activeBookId, name: 'Chase Sapphire', type: 'CREDIT', balance: -1250.00, last_four: '4242' },
      { book_id: activeBookId, name: 'Bank of America', type: 'DEBIT', balance: 5430.50, last_four: '8899' },
      { book_id: activeBookId, name: 'Efectivo', type: 'CASH', balance: 200.00, last_four: 'N/A' },
      { book_id: activeBookId, name: 'Inversiones', type: 'INVESTMENT', balance: 15000.00, last_four: 'N/A' }
    ];

    const { data: newAccounts } = await supabase.from('accounts').insert(accountsData).select();

    if (newAccounts) {
      // 2. Create Transactions (Random dates in last 30 days)
      const categories = ['Alimentos', 'Transporte', 'Vivienda', 'Entretenimiento', 'Salud', 'Servicios'];
      const types: TransactionType[] = ['EXPENSE', 'EXPENSE', 'EXPENSE', 'INCOME']; // More expenses usually

      const transactionsData = Array.from({ length: 20 }).map((_, i) => {
        const type = types[Math.floor(Math.random() * types.length)];
        const amount = Math.floor(Math.random() * 500) + 10;
        const account = newAccounts[Math.floor(Math.random() * newAccounts.length)];
        const category = categories[Math.floor(Math.random() * categories.length)];
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 30));

        return {
          book_id: activeBookId,
          account_id: account.id,
          type: type,
          amount: type === 'INCOME' ? amount * 5 : amount,
          description: `Movimiento de prueba ${i + 1}`,
          category_id: null, // text for now
          occurred_at: date.toISOString(),
          // Metadata stored in JSON or simplified for this quick mocked context
        };
      });

      await supabase.from('transactions').insert(transactionsData);

      // 3. Create Commitments
      await supabase.from('commitments').insert([
        { book_id: activeBookId, title: 'Netflix Premium', amount: 15.99, frequency: 'MONTHLY', next_due_date: new Date().toISOString(), status: 'PENDING' },
        { book_id: activeBookId, title: 'Spotify Couple', amount: 12.99, frequency: 'MONTHLY', next_due_date: new Date().toISOString(), status: 'PAID' },
        { book_id: activeBookId, title: 'Gym Membership', amount: 45.00, frequency: 'MONTHLY', next_due_date: new Date().toISOString(), status: 'PENDING' },
      ]);
    }

    // Refresh all
    await handleChangeActiveBook(activeBookId);
    setIsLoading(false);
  };

  const addBudget = async (budgetData: { amount: number; categoryId: string; recurrenceType?: string; recurrenceInterval?: number; startDate?: string; endDate?: string }) => {
    if (!activeBookId) return;

    const { error } = await supabase.from('budgets').insert({
      book_id: activeBookId,
      category_id: budgetData.categoryId,
      amount: budgetData.amount,
      recurrence_type: budgetData.recurrenceType || 'MONTHLY',
      recurrence_interval: budgetData.recurrenceInterval || 1,
      start_date: budgetData.startDate || new Date().toISOString(),
      end_date: budgetData.endDate || null,
      period: 'MONTHLY' // Default for legacy/required DB column if I made it NOT NULL default 'MONTHLY'
    });

    if (error) {
      console.error('Error creating budget:', error);
      alert('Error al crear presupuesto: ' + error.message);
      return;
    }

    await fetchBudgets(activeBookId);
  };

  // Modal State
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  const openTransactionModal = () => setIsTransactionModalOpen(true);
  const closeTransactionModal = () => setIsTransactionModalOpen(false);

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <FinanceContext.Provider value={{
      transactions, accounts, categories, categoryFolders, budgets, commitments, recurringRules, ledgers,
      addTransaction, deleteTransaction, addAccount, updateAccount, deleteAccount,
      addCommitment, updateCommitment, deleteCommitment, toggleCommitmentStatus,
      toggleRuleStatus, activateLedger, generateSampleData, totalBalance,
      isDarkMode, toggleTheme, isLoading, activeBookId, refreshBooks, formatAmount,
      isTransactionModalOpen, openTransactionModal, closeTransactionModal,
      addBudget, updateTransaction, duplicateTransaction
    }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const context = useContext(FinanceContext);
  if (!context) throw new Error('useFinance must be used within a FinanceProvider');
  return context;
};
