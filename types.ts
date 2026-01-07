
export type TransactionType = 'INCOME' | 'EXPENSE' | 'TRANSFER';

export interface Category {
  id: string;
  name: string;
  color?: string;
  icon?: string;
  folder_id?: string;
  order?: number;
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
  latitude?: number;
  longitude?: number;
  notes?: string;
  isRecurring?: boolean;
  frequency?: string;
  end_date?: string | null;
  beneficiary?: string;
  created_at?: string;
  updated_at?: string;
  commitment_id?: string;
}

export interface Account {
  id: string;
  name: string;
  balance: number;
  type: 'DEBIT' | 'CREDIT' | 'CASH' | 'INVESTMENT';
  currency: string;
  isDefault?: boolean;
  color?: string;
  // Credit Card Specifics
  lastFour?: string;
  bank?: string;
  status?: 'Active' | 'Inactive';
  creditLimit?: number;
  availableCredit?: number;
  cutoffDay?: number; // Day of month
  payDay?: number; // Day of month
  closingDate?: string;
  dueDate?: string;
  cardholderName?: string;
  expiryDate?: string;
  network?: 'VISA' | 'MASTERCARD' | 'AMEX' | 'DINERS';
  autoPay?: boolean;
}

export type CreditCardNetwork = 'VISA' | 'MASTERCARD' | 'AMEX' | 'DINERS';

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
  // Extended fields
  category_id?: string;
  start_date?: string;
  end_date?: string;
  recurrence_type?: string;
  recurrence_interval?: number;
  created_at?: string;
}

export interface Commitment {
  id: string;
  name: string;
  amount: number;
  frequency: 'MONTHLY' | 'WEEKLY' | 'ANNUAL' | 'DAILY' | 'BIWEEKLY' | 'QUARTERLY' | 'SEMIANNUAL';
  nextDueDate: string;
  status: 'PENDING' | 'PAID' | 'LATE' | 'SKIPPED';
  isAutoPay?: boolean;
  type: 'FIXED' | 'TEMPORAL';
  isActive: boolean;
  endDate?: string;
  category?: string;
  account?: string;
  categoryId?: string;
  accountId?: string;
  recurrence?: string;
  transaction_type?: 'INCOME' | 'EXPENSE';
  fundingAccountId?: string;
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

export interface UserProfile {
  id: string;
  full_name: string;
  username: string;
  email: string;
  phone?: string;
  bio?: string;
  avatar_url?: string;
  currency?: string;
  language?: string;
  country?: string;
  city?: string;
  notifications_enabled?: boolean;
  two_factor_enabled?: boolean;
  updated_at?: string;
  location_lat?: number;
  location_lng?: number;
  is_location_enabled?: boolean;
  email_confirmed_at?: string | null;
  active_book_id?: string; // Persisted active book selection
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'WARNING' | 'INFO' | 'SUCCESS' | 'ERROR';
  read: boolean;
  link?: string;
}
