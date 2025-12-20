"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFinance } from '@/context/FinanceContext';
import { TransactionType } from '@/types';

export default function EditTransaction() {
    const router = useRouter();
    const { addTransaction, accounts, categories } = useFinance();

    const [amount, setAmount] = useState('0.00');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [account, setAccount] = useState('');

    // Set default categories
    React.useEffect(() => {
        if (categories.length > 0 && !categoryId) {
            setCategoryId(categories[0].id);
        }
    }, [categories, categoryId]);

    // Set default or ensure valid account
    React.useEffect(() => {
        if (accounts.length > 0) {
            // If current account is empty OR not found in the new accounts list
            const exists = accounts.find(a => a.name === account);
            if (!account || !exists) {
                setAccount(accounts[0].name);
            }
        }
    }, [accounts, account]);
    const [type, setType] = useState<TransactionType>('EXPENSE');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const handleSave = () => {
        const numAmount = parseFloat(amount);
        if (isNaN(numAmount) || numAmount <= 0) return alert('Por favor ingresa un monto válido');
        if (!description.trim()) return alert('Por favor ingresa una descripción');

        addTransaction({
            amount: numAmount,
            type,
            description,
            date: new Date(date).toISOString(),
            category: '',
            category_id: categoryId,
            account: account, // Pass account name so context can find ID
            icon: 'attach_money'
        });

        router.push('/transactions');
    };

    return (
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide flex flex-col items-center">
            <div className="glass-card w-full max-w-[900px] rounded-[3rem] shadow-glass flex flex-col relative transition-all duration-500 mb-20 animate-fade-in lg:mt-10">
                <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100/50 dark:border-slate-800/50">
                    <h2 className="text-xl font-black tracking-tight text-text-main dark:text-white flex items-center gap-2 uppercase text-[14px] tracking-widest">Nuevo Movimiento</h2>
                    <button onClick={() => router.back()} className="p-2.5 rounded-2xl hover:bg-gray-100 dark:hover:bg-slate-800 text-text-muted transition-all">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-[40%] p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100/50 dark:border-slate-800/50 flex flex-col gap-10 bg-white/30 dark:bg-slate-900/30">
                        <div className="flex-1 flex flex-col justify-center items-center py-6">
                            <label className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">Monto Final</label>
                            <div className="relative flex items-center justify-center w-full group">
                                <span className="text-5xl font-black text-text-light/50 dark:text-slate-700 absolute left-4 top-1/2 -translate-y-1/2">$</span>
                                <input
                                    autoFocus
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full bg-transparent border-none text-center text-7xl font-black text-text-main dark:text-white placeholder-gray-200 focus:ring-0 p-0 leading-none h-24 tracking-tighter"
                                    placeholder="0.00"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                            <button
                                onClick={() => setType('EXPENSE')}
                                className={`flex-1 py-3 px-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg transition-all ${type === 'EXPENSE' ? 'bg-primary text-white shadow-blue-500/20' : 'bg-white/50 dark:bg-slate-800/50 text-text-muted border border-gray-100 dark:border-slate-700'}`}
                            >
                                Gasto
                            </button>
                            <button
                                onClick={() => setType('INCOME')}
                                className={`flex-1 py-3 px-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${type === 'INCOME' ? 'bg-success text-white' : 'bg-white/50 dark:bg-slate-800/50 text-text-muted border border-gray-100 dark:border-slate-700'}`}
                            >
                                Ingreso
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-between gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="col-span-1 md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black text-text-muted dark:text-slate-500 uppercase tracking-widest ml-2">Descripción del comercio</label>
                                <input
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="block w-full px-6 py-4 border-none ring-1 ring-gray-200 dark:ring-slate-700 rounded-[1.5rem] focus:ring-2 focus:ring-primary text-text-main dark:text-white placeholder-gray-400 bg-white/50 dark:bg-slate-900/50 font-bold transition-all"
                                    placeholder="Ej. Mercadona, Amazon..."
                                    type="text"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-text-muted dark:text-slate-500 uppercase tracking-widest ml-2">Categoría</label>
                                <select
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    className="block w-full px-6 py-4 border-none ring-1 ring-gray-200 dark:ring-slate-700 rounded-[1.5rem] focus:ring-2 focus:ring-primary text-text-main dark:text-white bg-white/50 dark:bg-slate-900/50 font-bold appearance-none cursor-pointer"
                                >
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.icon || '🏷️'} {cat.name}</option>
                                    ))}
                                    {categories.length === 0 && <option value="">Cargando...</option>}
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-text-muted dark:text-slate-500 uppercase tracking-widest ml-2">Cuenta Origen</label>
                                <select
                                    value={account}
                                    onChange={(e) => setAccount(e.target.value)}
                                    className="block w-full px-6 py-4 border-none ring-1 ring-gray-200 dark:ring-slate-700 rounded-[1.5rem] focus:ring-2 focus:ring-primary text-text-main dark:text-white bg-white/50 dark:bg-slate-900/50 font-bold appearance-none cursor-pointer"
                                >
                                    {accounts.map(acc => (
                                        <option key={acc.id} value={acc.name}>{acc.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-1 md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black text-text-muted dark:text-slate-500 uppercase tracking-widest ml-2">Fecha del movimiento</label>
                                <input
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="block w-full px-6 py-4 border-none ring-1 ring-gray-200 dark:ring-slate-700 rounded-[1.5rem] focus:ring-2 focus:ring-primary text-text-main dark:text-white placeholder-gray-400 bg-white/50 dark:bg-slate-900/50 font-bold transition-all"
                                    type="date"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 pt-6">
                            <button onClick={() => router.back()} className="flex-1 py-4 px-6 rounded-2xl border border-gray-200 dark:border-slate-800 text-text-muted dark:text-slate-400 font-black text-[10px] uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-slate-800 transition-all">Cancelar</button>
                            <button onClick={handleSave} className="flex-[2] py-4 px-6 rounded-2xl bg-primary hover:bg-primary-hover text-white font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-500/30 transition-all flex justify-center items-center gap-2">Guardar Registro</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
