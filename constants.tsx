
import { Transaction, Account, Budget, Commitment, InstallmentPlan, RecurringRule, Ledger } from './types';

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    amount: 124.50,
    type: 'EXPENSE',
    category: 'Alimentos',
    subCategory: 'Supermercado',
    account: 'Santander Nómina',
    description: 'Whole Foods Market',
    date: '2023-10-20T10:00:00Z',
    icon: 'shopping_bag'
  },
  {
    id: '2',
    amount: 45.00,
    type: 'EXPENSE',
    category: 'Transporte',
    subCategory: 'Combustible',
    account: 'Visa Platinum',
    description: 'Shell Station',
    date: '2023-10-18T15:30:00Z',
    icon: 'local_gas_station'
  },
  {
    id: '3',
    amount: 15.99,
    type: 'EXPENSE',
    category: 'Entretenimiento',
    subCategory: 'Streaming',
    account: 'Visa Platinum',
    description: 'Netflix Subscription',
    date: '2023-10-15T09:00:00Z',
    icon: 'movie'
  }
];

export const MOCK_ACCOUNTS: Account[] = [
  {
    id: 'acc1',
    name: 'Santander Nómina',
    balance: 8250.20,
    type: 'DEBIT',
    lastFour: '4829',
    bank: 'Santander',
    status: 'Active',
    currency: 'MXN'
  },
  {
    id: 'acc2',
    name: 'Visa Platinum',
    balance: 1850.00,
    type: 'CREDIT',
    lastFour: '4242',
    bank: 'Santander',
    status: 'Active',
    currency: 'USD',
    limit: 5000,
    closingDate: 'Oct 25',
    dueDate: 'Nov 05'
  }
];

export const MOCK_INSTALLMENTS: InstallmentPlan[] = [
  {
    id: 'inst1',
    name: 'MacBook Pro M3 Purchase',
    merchant: 'Apple Store',
    category: 'Electronics',
    totalAmount: 2400.00,
    paidAmount: 800.00,
    totalInstallments: 12,
    currentInstallment: 4,
    nextPaymentDate: 'Nov 01, 2023',
    monthlyAmount: 200.00
  }
];

export const MOCK_BUDGETS: Budget[] = [
  {
    id: 'b1',
    category: 'Supermercado',
    limit: 600,
    spent: 450,
    period: 'MONTHLY',
    severity: 'NORMAL'
  }
];

export const MOCK_COMMITMENTS: Commitment[] = [
  {
    id: 'c1',
    name: 'Alquiler',
    amount: 800,
    frequency: 'MONTHLY',
    nextDueDate: '2024-11-01',
    status: 'PENDING'
  }
];

export const MOCK_RULES: RecurringRule[] = [
  {
    id: 'r1',
    name: 'Alquiler Apartamento',
    category: 'Vivienda',
    account: 'Banco Principal',
    amount: 850.00,
    type: 'EXPENSE',
    frequency: 'Mensual (Día 5)',
    nextDate: '5 Oct',
    active: true,
    icon: 'home'
  },
  {
    id: 'r2',
    name: 'Suscripción Spotify',
    category: 'Entretenimiento',
    account: 'Tarjeta Crédito',
    amount: 10.00,
    type: 'EXPENSE',
    frequency: 'Mensual',
    nextDate: '15 Oct',
    active: true,
    icon: 'music_note'
  },
  {
    id: 'r3',
    name: 'Sueldo Mensual',
    category: 'Ingresos',
    account: 'Banco Principal',
    amount: 3200.00,
    type: 'INCOME',
    frequency: 'Mensual (Día 30)',
    nextDate: '30 Oct',
    active: true,
    icon: 'payments'
  },
  {
    id: 'r4',
    name: 'Gimnasio',
    category: 'Salud',
    account: 'Tarjeta Débito',
    amount: 45.00,
    type: 'EXPENSE',
    frequency: 'Mensual',
    nextDate: 'Pausado',
    active: false,
    icon: 'fitness_center'
  }
];

export const MOCK_LEDGERS: Ledger[] = [
  {
    id: 'l1',
    name: 'Personal',
    description: 'Gastos del día a día',
    balance: 12450.00,
    isActive: true,
    isArchived: false,
    lastUpdate: 'Hace 2h',
    icon: 'home',
    color: 'blue',
    type: 'PERSONAL'
  },
  {
    id: 'l2',
    name: 'Freelance Design',
    description: 'Ingresos y Facturas',
    balance: 3200.50,
    isActive: false,
    isArchived: false,
    lastUpdate: 'Ayer',
    icon: 'work',
    color: 'purple',
    type: 'BUSINESS'
  },
  {
    id: 'l3',
    name: 'Viaje a Japón',
    description: 'Ahorro Meta 2024',
    balance: 800.00,
    isActive: false,
    isArchived: false,
    lastUpdate: 'Hace 3 días',
    icon: 'flight',
    color: 'green',
    type: 'SAVINGS'
  }
];
