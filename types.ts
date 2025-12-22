
export type TransactionType = 'INCOME' | 'EXPENSE' | 'TRANSFER';

export interface Category {
  id: string;
  name: string;
  color?: string;
  icon?: string;
  folder_id?: string;
}

export interface CategoryFolder {
  id: string;
  name: string;
  color?: string;
  icon?: string;
}

export interface Transaction {
  id: string;
  amount: number;
  type: TransactionType;
  category: string;
  subCategory?: string;
  account: string;
  description: string;
  date: string;
  icon: string;
  account_id?: string;
  category_id?: string;
  status?: 'COMPLETED' | 'PENDING';
  location?: string;
  notes?: string;
  isRecurring?: boolean;
}

export interface Account {
  id: string;
  name: string;
  balance: number;
  type: 'DEBIT' | 'CREDIT' | 'CASH' | 'INVESTMENT';
  lastFour?: string;
  bank?: string;
  status?: 'Active' | 'Inactive';
  limit?: number;
  closingDate?: string;
  dueDate?: string;
}

export interface InstallmentPlan {
  id: string;
  name: string;
  merchant: string;
  category: string;
  totalAmount: number;
  paidAmount: number;
  totalInstallments: number;
  currentInstallment: number;
  nextPaymentDate: string;
  monthlyAmount: number;
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  spent: number;
  period: 'MONTHLY' | 'WEEKLY' | 'YEARLY';
  severity: 'NORMAL' | 'URGENT';
}

export interface Commitment {
  id: string;
  name: string;
  amount: number;
  frequency: 'MONTHLY' | 'WEEKLY' | 'ANNUAL';
  nextDueDate: string;
  status: 'PAID' | 'PENDING';
}

export interface RecurringRule {
  id: string;
  name: string;
  category: string;
  account: string;
  amount: number;
  type: TransactionType;
  frequency: string;
  nextDate: string;
  active: boolean;
  icon: string;
}

export interface Ledger {
  id: string;
  name: string;
  description: string;
  balance: number;
  isActive: boolean;
  isArchived: boolean;
  lastUpdate: string;
  icon: string;
  color: 'blue' | 'purple' | 'green' | 'orange';
  type: 'SAVINGS' | 'BUSINESS' | 'PERSONAL';
  members?: string[];
  currency?: string;
}
