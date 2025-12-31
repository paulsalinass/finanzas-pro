
import React, { useState, useEffect } from 'react';
import { useFinance } from '@/context/FinanceContext';

interface AccountModalProps {
    isOpen: boolean;
    onClose: () => void;
    account?: any; // Optional account for editing
    onSave?: (data: any) => Promise<void>;
}

const accountTypes = [
    { id: 'cash', label: 'Efectivo', icon: 'payments' },
    { id: 'debit', label: 'Débito', icon: 'credit_card' },
    { id: 'credit', label: 'Crédito', icon: 'credit_card_gear' },
    { id: 'investment', label: 'Inversión', icon: 'trending_up' },
    { id: 'savings', label: 'Ahorros', icon: 'savings' }
];

const colors = [
    { id: 'blue', hex: '#3b82f6' },
    { id: 'indigo', hex: '#6366f1' },
    { id: 'emerald', hex: '#10b981' },
    { id: 'amber', hex: '#f59e0b' },
    { id: 'rose', hex: '#f43f5e' },
    { id: 'purple', hex: '#8b5cf6' },
    { id: 'cyan', hex: '#06b6d4' },
    { id: 'slate', hex: '#64748b' }
];

export function AccountModal({ isOpen, onClose, account, onSave }: AccountModalProps) {
    const { addAccount, updateAccount } = useFinance();
    const isEditing = !!account;

    // Form State
    const [accountName, setAccountName] = useState('');
    const [initialBalance, setInitialBalance] = useState('');
    const [accountType, setAccountType] = useState('cash');
    const [labelColor, setLabelColor] = useState('blue');
    const [selectedCurrency, setSelectedCurrency] = useState('PEN');
    const [isDefault, setIsDefault] = useState(false);

    // Credit Card Specifics
    const [cardNetwork, setCardNetwork] = useState('VISA');
    const [lastFour, setLastFour] = useState('');
    const [cutoffDay, setCutoffDay] = useState('');
    const [payDay, setPayDay] = useState('');
    const [creditLimit, setCreditLimit] = useState('');
    const [availableCredit, setAvailableCredit] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [autoBilling, setAutoBilling] = useState(false);

    // Initialize Form on Open
    useEffect(() => {
        if (isOpen) {
            if (account) {
                setAccountName(account.name);
                setIsDefault(account.isDefault || false);
                setCardholderName(account.cardholderName || '');
                setExpiryDate(account.expiryDate || '');
                setAccountType(account.type.toLowerCase());
                if (account.type === 'CREDIT') {
                    // For Credit Cards, Balance is usually negative (Debt). Show positive "Used Amount".
                    const debt = Math.abs(account.balance);
                    setInitialBalance(debt.toString());

                    setCardNetwork(account.network || 'VISA');
                    setLastFour(account.lastFour || '');
                    setCutoffDay(account.cutoffDay || '');
                    setPayDay(account.payDay || '');

                    const limit = account.creditLimit || 0;
                    setCreditLimit(limit.toString());

                    // Always calculate available based on Limit - Debt (ignore potentially stale DB value)
                    setAvailableCredit((limit - debt).toString());

                    setAutoBilling(account.autoPay || false);
                } else {
                    setInitialBalance(account.balance.toString());
                }
            } else {
                // Reset defaults
                setAccountName('');
                setInitialBalance('');
                setAccountType('cash');
                setLabelColor('blue');
                setSelectedCurrency('PEN');
                setIsDefault(false);
                setCardNetwork('VISA');
                setLastFour('');
                setCutoffDay('');
                setPayDay('');
                setCreditLimit('');
                setAvailableCredit('');
                setAvailableCredit('');
                setCardholderName('');
                setExpiryDate('');
                setAutoBilling(false);
            }
        }
    }, [isOpen, account]);

    // Animation & Interaction Logic
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Small delay to ensure browser paints initial state before animating
            const timer = setTimeout(() => {
                setIsVisible(true);
                setIsClosing(false);
            }, 10);
            return () => clearTimeout(timer);
        } else {
            setIsClosing(true);
            // Delay unmounting for animation
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsVisible(false);
        }, 300);
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) handleClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    // Auto-calculate available credit on change
    useEffect(() => {
        if (accountType === 'credit') {
            const limit = parseFloat(creditLimit) || 0;
            const debt = parseFloat(initialBalance) || 0;
            setAvailableCredit((limit - debt).toString());
        }
    }, [creditLimit, initialBalance, accountType]);

    const handleSave = async () => {
        const payload: any = {
            name: accountName,
            balance: parseFloat(initialBalance) || 0,
            type: accountType.toUpperCase(),
            currency: selectedCurrency,
            isDefault: isDefault,
            color: labelColor,
        };

        if (accountType === 'credit') {
            // For credit cards, store balance as negative (Liability/Debt)
            payload.balance = -Math.abs(parseFloat(initialBalance) || 0);

            payload.autoPay = autoBilling;
            payload.cutoffDay = parseInt(cutoffDay) || null;
            payload.payDay = parseInt(payDay) || null;
            payload.creditLimit = parseFloat(creditLimit) || 0;
            payload.availableCredit = parseFloat(availableCredit) || 0;
        }

        // Common extended fields for valid types
        if (['credit', 'debit', 'savings', 'cash'].includes(accountType)) {
            payload.cardholderName = cardholderName;
            payload.network = cardNetwork;
        }

        // Card specific fields
        if (['credit', 'debit', 'savings'].includes(accountType)) {
            payload.lastFour = lastFour;
            payload.expiryDate = expiryDate;
        }

        try {
            if (isEditing && account) {
                await updateAccount(account.id, payload);
            } else {
                await addAccount(payload);
            }
            if (onSave) await onSave(payload);
            handleClose();
        } catch (error) {
            console.error(error);
            alert('Error al guardar la cuenta');
        }
    };

    if (!isOpen && !isVisible) return null;

    return (
        <div
            className={`fixed top-0 right-0 bottom-0 left-0 lg:left-[var(--sidebar-width)] z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isVisible && !isClosing ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
        >
            <main
                onClick={(e) => e.stopPropagation()}
                className={`w-full max-w-2xl bg-white dark:bg-[#1e293b] rounded-[2rem] shadow-premium flex flex-col max-h-[90vh] overflow-hidden relative border border-slate-200 dark:border-slate-700 transition-all duration-300 transform ${isVisible && !isClosing ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            >
                {/* Modal Header */}
                <header className="flex-none px-8 py-6 flex justify-between items-start border-b border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">{isEditing ? 'Editar Cuenta' : 'Detalles de la Cuenta'}</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{isEditing ? 'Modifica los datos de la cuenta.' : 'Configura los detalles de tu nueva cuenta.'}</p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                </header>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col gap-8 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">

                    {/* Account Type Selection */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                        {accountTypes.map(type => (
                            <button
                                type="button"
                                key={type.id}
                                onClick={() => setAccountType(type.id)}
                                className={`p-3 flex flex-col items-center justify-center gap-2 rounded-2xl border transition-all duration-200 min-h-[80px] ${accountType === type.id
                                    ? 'border-primary bg-primary/5 ring-1 ring-primary'
                                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800'
                                    }`}
                            >
                                <span className={`material-symbols-outlined text-2xl ${accountType === type.id ? 'text-primary' : 'text-slate-500'}`}>
                                    {type.icon}
                                </span>
                                <span className={`text-[10px] font-bold uppercase tracking-tight ${accountType === type.id ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}>
                                    {type.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Main Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Nombre</label>
                            <div className="flex items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 h-12 px-4 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                                <input
                                    value={accountName}
                                    onChange={(e) => setAccountName(e.target.value)}
                                    className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400 text-sm font-semibold"
                                    placeholder="Ej. BCP Ahorros"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Divisa</label>
                            <div className="flex gap-2">
                                {['PEN', 'USD', 'MXN', 'EUR'].map(curr => (
                                    <button
                                        type="button"
                                        key={curr}
                                        onClick={() => setSelectedCurrency(curr)}
                                        className={`flex-1 h-12 rounded-xl border text-xs font-bold transition-all ${selectedCurrency === curr
                                            ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900'
                                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:border-slate-300'}`}
                                    >
                                        {curr}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Balance & Default */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">
                                {accountType === 'credit' ? 'Deuda Inicial (Saldo Usado)' : 'Saldo Inicial'}
                            </label>
                            <div className="flex items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 px-4 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                                <span className="text-slate-400 font-bold mr-2 text-xs">{selectedCurrency}</span>
                                <input
                                    value={initialBalance}
                                    onChange={(e) => setInitialBalance(e.target.value)}
                                    className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400 text-lg font-bold"
                                    placeholder="0.00"
                                    type="number"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 mt-6">
                            <div
                                onClick={() => setIsDefault(!isDefault)}
                                className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${isDefault ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}
                            >
                                <div className={`size-4 bg-white rounded-full shadow-sm transition-transform ${isDefault ? 'translate-x-4' : ''}`} />
                            </div>
                            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 select-none cursor-pointer" onClick={() => setIsDefault(!isDefault)}>Cuenta Predeterminada</span>
                        </div>
                    </div>

                    {/* EXTENDED FIELDS: Credit, Debit, Savings, Cash */}
                    {['credit', 'debit', 'savings', 'cash'].includes(accountType) && (
                        <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800 animate-slide-down">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-indigo-500">
                                    {accountType === 'cash' ? 'badge' : 'credit_card'}
                                </span>
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                                    {accountType === 'cash' ? 'Detalles de Titular' : 'Detalles de Tarjeta'}
                                </h3>
                            </div>

                            {/* Cardholder */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Titular {accountType === 'cash' ? 'de Cuenta' : 'de Tarjeta'}</label>
                                <input
                                    value={cardholderName}
                                    onChange={(e) => setCardholderName(e.target.value.toUpperCase())}
                                    className="w-full h-10 px-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="NOMBRE APELLIDO"
                                />
                            </div>

                            {/* Network & Number (For Cards) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        {accountType === 'cash' ? 'Tipo / Red' : 'Red de Tarjeta'}
                                    </label>
                                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                        {['VISA', 'MASTERCARD', 'AMEX', 'DINERS'].map(net => (
                                            <button
                                                type="button"
                                                key={net}
                                                onClick={() => setCardNetwork(net)}
                                                className={`px-4 py-2 rounded-lg border text-xs font-bold whitespace-nowrap transition-all ${cardNetwork === net
                                                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-900/30 dark:border-indigo-800 dark:text-indigo-400'
                                                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'}`}
                                            >
                                                {net}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {['credit', 'debit', 'savings'].includes(accountType) && (
                                    <>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Últimos 4 Dígitos</label>
                                            <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 h-10">
                                                <span className="text-slate-400 text-sm mr-2">•••• •••• ••••</span>
                                                <input
                                                    value={lastFour}
                                                    onChange={(e) => {
                                                        const val = e.target.value.replace(/\D/g, '').slice(0, 4);
                                                        setLastFour(val);
                                                    }}
                                                    className="w-full bg-transparent border-none outline-none text-sm font-semibold text-slate-900 dark:text-white"
                                                    placeholder="4679"
                                                    type="text"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2 col-span-2 md:col-span-1">
                                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Expiración (MM/YY)</label>
                                            <input
                                                value={expiryDate}
                                                onChange={(e) => {
                                                    let val = e.target.value.replace(/\D/g, '');
                                                    if (val.length > 4) val = val.slice(0, 4);
                                                    if (val.length > 2) {
                                                        val = val.slice(0, 2) + '/' + val.slice(2);
                                                    }
                                                    setExpiryDate(val);
                                                }}
                                                maxLength={5}
                                                className="w-full h-10 px-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 text-center tracking-widest"
                                                placeholder="MM/YY"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>


                            {/* CREDIT ONLY: Limits & Dates */}
                            {accountType === 'credit' && (
                                <>
                                    {/* Credit Lines */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Línea Total</label>
                                            <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 h-10">
                                                <span className="text-slate-500 text-xs font-bold mr-2">{selectedCurrency}</span>
                                                <input
                                                    value={creditLimit}
                                                    onChange={(e) => setCreditLimit(e.target.value)}
                                                    className="w-full bg-transparent border-none outline-none text-sm font-semibold text-slate-900 dark:text-white placeholder:text-slate-400"
                                                    placeholder="0.00"
                                                    type="number"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Línea Disponible</label>
                                            <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 h-10">
                                                <span className="text-slate-500 text-xs font-bold mr-2">{selectedCurrency}</span>
                                                <input
                                                    value={availableCredit}
                                                    onChange={(e) => setAvailableCredit(e.target.value)}
                                                    className="w-full bg-transparent border-none outline-none text-sm font-semibold text-slate-900 dark:text-white placeholder:text-slate-400"
                                                    placeholder="0.00"
                                                    type="number"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dates */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Día de Cierre</label>
                                            <select
                                                value={cutoffDay}
                                                onChange={(e) => setCutoffDay(e.target.value)}
                                                className="w-full h-10 px-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-none text-xs font-medium appearance-none cursor-pointer"
                                            >
                                                <option value="">Seleccionar día</option>
                                                {[...Array(31)].map((_, i) => (
                                                    <option key={i} value={i + 1}>Día {i + 1}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Día de Pago</label>
                                            <select
                                                value={payDay}
                                                onChange={(e) => setPayDay(e.target.value)}
                                                className="w-full h-10 px-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-none text-xs font-medium appearance-none cursor-pointer"
                                            >
                                                <option value="">Seleccionar día</option>
                                                {[...Array(31)].map((_, i) => (
                                                    <option key={i} value={i + 1}>Día {i + 1}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Auto Billing */}
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-indigo-500 text-lg">autorenew</span>
                                            <span className="text-xs font-bold text-indigo-900 dark:text-indigo-300">Facturación Automática</span>
                                        </div>
                                        <div
                                            onClick={() => setAutoBilling(!autoBilling)}
                                            className={`w-9 h-5 rounded-full p-0.5 cursor-pointer transition-colors ${autoBilling ? 'bg-indigo-500' : 'bg-slate-300 dark:bg-slate-600'}`}
                                        >
                                            <div className={`size-4 bg-white rounded-full shadow-sm transition-transform ${autoBilling ? 'translate-x-4' : ''}`} />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {/* Color Selection */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Color de Etiqueta</label>
                        <div className="flex flex-wrap gap-3">
                            {colors.map(color => (
                                <button
                                    type="button"
                                    key={color.id}
                                    onClick={() => setLabelColor(color.id)}
                                    style={{ backgroundColor: color.hex }}
                                    className={`size-8 rounded-full transition-transform hover:scale-110 ${labelColor === color.id
                                        ? 'ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-slate-900 scale-110'
                                        : ''
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <footer className="flex-none px-8 py-5 flex justify-end gap-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <button
                        onClick={handleClose}
                        className="px-5 py-2.5 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 font-bold text-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-6 py-2.5 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 active:scale-95"
                    >
                        <span className="material-symbols-outlined text-[18px]">check</span>
                        {isEditing ? 'Actualizar Cuenta' : 'Guardar Cuenta'}
                    </button>
                </footer>
            </main>
        </div>
    );
}
