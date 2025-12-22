
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
  addCommitment: (c: Omit<Commitment, 'id'>) => Promise<void>;
  toggleCommitmentStatus: (id: string, currentStatus: string) => Promise<void>; // Updated signature
  toggleRuleStatus: (id: string) => void;
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
    if (currency === 'PEN') locale = 'es-PE';
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
        location: t.location,
        notes: t.notes
      })));
    }
  };

  const fetchCommitments = async (bookId: string) => {
    const { data } = await supabase.from('commitments').select('*').eq('book_id', bookId);
    if (data) {
      setCommitments(data.map(c => ({
        id: c.id,
        name: c.title,
        amount: c.amount,
        frequency: c.frequency as any,
        nextDueDate: c.next_due_date,
        status: c.status as any
      })));
    }
  };

  const fetchBudgets = async (bookId: string) => {
    const { data, error } = await supabase.from('budgets').select('*').eq('book_id', bookId);
    if (error) {
      console.warn('No fue posible cargar presupuestos', error.message);
      return;
    }
    if (data) {
      setBudgets(data.map((b: any) => ({
        id: b.id,
        category: b.category || b.name || 'Sin categoría',
        limit: Number(b.limit ?? b.amount_limit ?? 0),
        spent: Number(b.spent ?? 0),
        period: (b.period as Budget['period']) || 'MONTHLY',
        severity: (b.severity as Budget['severity']) || 'NORMAL'
      })));
    }
  };

  const fetchRecurringRules = async (bookId: string) => {
    const { data, error } = await supabase.from('recurring_rules').select('*').eq('book_id', bookId);
    if (error) {
      console.warn('No fue posible cargar reglas recurrentes', error.message);
      return;
    }
    if (data) {
      setRecurringRules(data.map((r: any) => ({
        id: r.id,
        name: r.name,
        category: r.category || 'General',
        account: r.account || r.account_name || 'Cuenta principal',
        amount: Number(r.amount ?? 0),
        type: (r.type as TransactionType) || 'EXPENSE',
        frequency: r.frequency || 'Mensual',
        nextDate: r.next_run_at || r.next_date || '',
        active: r.is_active ?? true,
        icon: r.icon || 'autorenew'
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
      category_id: categoryId
    }).select().single();

    if (error) {
      console.error("Error creating transaction:", error);
      alert("Error al guardar: " + error.message);
      return;
    }

    if (data) {
      // UI Optimistic Update or Refetch
      fetchTransactions(activeBookId);
      fetchAccounts(activeBookId); // Update balances
    }
  };

  const addAccount = async (a: Omit<Account, 'id'>) => {
    if (!activeBookId) return;
    const { error } = await supabase.from('accounts').insert({
      book_id: activeBookId,
      name: a.name,
      type: a.type,
      balance: a.balance,
      // map other fields
    });
    if (!error) fetchAccounts(activeBookId);
  };

  const addCommitment = async (c: Omit<Commitment, 'id'>) => {
    if (!activeBookId) return;
    // implementation...
  };

  const deleteTransaction = async (id: string) => {
    await supabase.from('transactions').delete().eq('id', id);
    if (activeBookId) {
      fetchTransactions(activeBookId);
      fetchAccounts(activeBookId);
    }
  };

  const toggleCommitmentStatus = async (id: string, currentStatus: string) => {
    // impl
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

  // Modal State
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  const openTransactionModal = () => setIsTransactionModalOpen(true);
  const closeTransactionModal = () => setIsTransactionModalOpen(false);

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <FinanceContext.Provider value={{
      transactions, accounts, categories, categoryFolders, budgets, commitments, recurringRules, ledgers,
      addTransaction, deleteTransaction, addAccount, addCommitment,
      toggleCommitmentStatus, toggleRuleStatus, activateLedger, generateSampleData, totalBalance,
      isDarkMode, toggleTheme, isLoading, activeBookId, refreshBooks, formatAmount,
      isTransactionModalOpen, openTransactionModal, closeTransactionModal
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
