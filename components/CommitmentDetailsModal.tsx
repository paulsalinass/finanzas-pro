import React, { useState, useEffect } from 'react';
import { createPortal } from "react-dom";
import { Commitment } from '@/types';
import { useFinance } from '@/context/FinanceContext';
import { CategoryIcon } from './CategoryIcon';
import { DeleteConfirmModal } from './DeleteConfirmModal';

interface CommitmentDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    commitment: Commitment | null;
    onEdit: (c: Commitment) => void;
    onDelete: (id: string) => void;
}

const COLOR_MAP: Record<string, { bg: string, text: string }> = {
    red: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-600 dark:text-red-400' },
    orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400' },
    amber: { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-600 dark:text-amber-400' },
    yellow: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-600 dark:text-yellow-400' },
    lime: { bg: 'bg-lime-100 dark:bg-lime-900/30', text: 'text-lime-600 dark:text-lime-400' },
    green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400' },
    emerald: { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-600 dark:text-emerald-400' },
    teal: { bg: 'bg-teal-100 dark:bg-teal-900/30', text: 'text-teal-600 dark:text-teal-400' },
    cyan: { bg: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-600 dark:text-cyan-400' },
    sky: { bg: 'bg-sky-100 dark:bg-sky-900/30', text: 'text-sky-600 dark:text-sky-400' },
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400' },
    indigo: { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-600 dark:text-indigo-400' },
    violet: { bg: 'bg-violet-100 dark:bg-violet-900/30', text: 'text-violet-600 dark:text-violet-400' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400' },
    fuchsia: { bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30', text: 'text-fuchsia-600 dark:text-fuchsia-400' },
    pink: { bg: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-600 dark:text-pink-400' },
    rose: { bg: 'bg-rose-100 dark:bg-rose-900/30', text: 'text-rose-600 dark:text-rose-400' },
    slate: { bg: 'bg-slate-100 dark:bg-slate-800', text: 'text-slate-600 dark:text-slate-400' },
    gray: { bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-600 dark:text-gray-400' },
    zinc: { bg: 'bg-zinc-100 dark:bg-zinc-800', text: 'text-zinc-600 dark:text-zinc-400' },
    neutral: { bg: 'bg-neutral-100 dark:bg-neutral-800', text: 'text-neutral-600 dark:text-neutral-400' },
    stone: { bg: 'bg-stone-100 dark:bg-stone-800', text: 'text-stone-600 dark:text-stone-400' },
};

export const CommitmentDetailsModal = ({ isOpen, onClose, commitment, onEdit, onDelete }: CommitmentDetailsModalProps) => {
    // ... context...

    const {
        ledgers,
        activeBookId,
        accounts,
        categories,
        toggleCommitmentStatus,
        updateCommitment,
        transactions
    } = useFinance();

    // ... state ...
    const [history, setHistory] = useState<any[]>([]);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
    const [cachedCommitment, setCachedCommitment] = useState<Commitment | null>(null);

    const [isEditingPaymentMethod, setIsEditingPaymentMethod] = useState(false);
    const [selectedFundingAccount, setSelectedFundingAccount] = useState<string>('');

    // Init Portal
    useEffect(() => {
        setIsMounted(true);
        setPortalElement(document.body);
        return () => setIsMounted(false);
    }, []);

    // Handle open/close animations and caching
    useEffect(() => {
        if (isOpen && commitment) {
            setIsMounted(true);
            setCachedCommitment(commitment);
            // Double rAF ensures the browser validates the 'closed' state first, then transitions to 'open' in the next frame
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsVisible(true));
            });
        } else {
            setIsVisible(false);
            const timer = setTimeout(() => {
                setCachedCommitment(null);
                // Only unmount if we're truly closing and not swapping commitments (though this modal works on single instances usually)
                // Keeping it mounted is fine until caching is cleared, or we can clear mounted here if we want strict tearing down.
                // Behaving like other modals:
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen, commitment]);

    const handleClose = () => {
        onClose();
    };

    // Handle ESC key
    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    // Use cached commitment for rendering during exit animation
    const displayCommitment = isOpen ? commitment : cachedCommitment;
    // Use displayCommitment for all references below
    const commitmentToRender = displayCommitment;

    // Fetch history
    useEffect(() => {
        if (!commitmentToRender || !isOpen) return;
        const related = transactions.filter(t =>
            (t.commitment_id === commitmentToRender.id) ||
            (t.description.includes(commitmentToRender.name) && t.description.includes('[Compromiso]'))
        ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 5);

        setHistory(related);
    }, [commitmentToRender, isOpen, transactions]);

    if (!isVisible && !isOpen && !cachedCommitment) return null;
    if (!displayCommitment) return null;

    // ... effects ...


    const activeLedger = ledgers.find(l => l.id === activeBookId);
    const currency = activeLedger?.currency || 'USD';
    const currencySymbol = currency === 'PEN' ? 'S/.' : (currency === 'EUR' ? '€' : '$');

    // Determine Account Name to display (Funding > Linked)
    const linkedAccount = accounts.find(a => a.id === commitmentToRender.accountId);
    const fundingAccount = accounts.find(a => a.id === commitmentToRender.fundingAccountId);

    // For CC payments, show Funding Account if set, otherwise fallback to generic or linked
    // But if it's a regular commitment, usually linked account IS the funding account.
    // We check if it's a CC payment type commitment
    const isCreditCardPayment = commitmentToRender.transaction_type === 'INCOME' && linkedAccount?.type === 'CREDIT';

    const displayAccountName = isCreditCardPayment
        ? (fundingAccount?.name || 'Sin asignar')
        : (linkedAccount?.name || commitmentToRender.account || 'Sin cuenta');

    const categoryObj = categories.find(c => c.id === commitmentToRender.categoryId) || categories.find(c => c.name === commitmentToRender.category);
    const categoryName = categoryObj?.name || commitmentToRender.category || 'General';
    const categoryIcon = categoryObj?.icon || 'grid_view';
    // Use COLOR_MAP logic
    const colorKey = categoryObj?.color || 'slate';
    const itemColors = COLOR_MAP[colorKey] || COLOR_MAP.slate;

    const getDaysRemaining = (dateStr: string) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        // Parse YYYY-MM-DD manually to prevent UTC timezone shift
        const [year, month, day] = dateStr.split('-').map(Number);
        const due = new Date(year, month - 1, day);
        due.setHours(0, 0, 0, 0);
        const diff = due.getTime() - today.getTime();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    };

    const daysRemaining = getDaysRemaining(commitmentToRender.nextDueDate);
    // ... status constants ...
    const isOverdue = daysRemaining < 0 && commitmentToRender.status === 'PENDING';
    const isPaid = commitmentToRender.status === 'PAID';

    const frequencyMap: Record<string, string> = {
        'ONCE': 'Una vez',
        'DAILY': 'Diario',
        'WEEKLY': 'Semanal',
        'BIWEEKLY': 'Quincenal',
        'MONTHLY': 'Mensual',
        'YEARLY': 'Anual'
    };
    const translatedFrequency = frequencyMap[commitmentToRender.frequency] || commitmentToRender.frequency;

    const handleToggleStatus = async () => {
        await toggleCommitmentStatus(commitmentToRender.id, commitmentToRender.status);
        handleClose();
    };

    const handleSaveFundingAccount = async () => {
        if (!selectedFundingAccount) return;
        // Optimization: Create a specific function in context or use updateCommitment
        // We have onEdit, but that opens the full edit modal. We want quick update.
        // We need updateCommitment from context
        // Accessing context via hook at top level
        // Currently `updateCommitment` is not destructured. Let's assume we can add it or use `onEdit` differently?
        // Ah, `onEdit` passed from parent might just open modal.
        // We should probably expose updateCommitment in this component or use the context one.
        // The modal receives `onEdit` for the full form.
        // Let's grab `updateCommitment` from context.
    };

    // Filter debit accounts for selection
    const debitAccounts = accounts.filter(a => a.type === 'DEBIT' || a.type === 'CASH');

    const handleDeleteClick = () => {
        setIsDeleteConfirmOpen(true);
    };

    // Confirm Close Logic
    const confirmDelete = () => {
        onDelete(commitmentToRender.id);
        setIsDeleteConfirmOpen(false);
        handleClose();
    };

    if (!isMounted || !portalElement) return null;

    return createPortal(
        <>
            <div
                className={`fixed inset-0 z-40 flex items-center justify-center p-4 lg:pl-[var(--sidebar-width)] bg-black/10 backdrop-blur-md transition-all duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleClose}
            >
                <div
                    className={`bg-white dark:bg-[#1e2530] w-full max-w-2xl rounded-3xl shadow-premium overflow-hidden flex flex-col max-h-[90vh] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex justify-between items-start p-6 border-b border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="size-14 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-3xl">
                                {commitmentToRender.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white leading-tight">{commitmentToRender.name}</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-2">
                                    <span className="capitalize">{categoryName}</span>
                                    <span className="size-1 rounded-full bg-gray-300"></span>
                                    <span className="capitalize">{translatedFrequency}</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className={`px-3 py-1 rounded-full text-xs font-bold border ${isPaid ? 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' :
                                isOverdue ? 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20' :
                                    'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20'
                                }`}>
                                {isPaid ? 'Pagado' : isOverdue ? 'Vencido' : 'Pendiente'}
                            </div>
                            <button onClick={() => onEdit(commitmentToRender)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button onClick={handleDeleteClick} className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:bg-rose-500 hover:text-white transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
                        {/* Main Payment Info */}
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Monto a pagar</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black text-gray-800 dark:text-white tracking-tight">
                                    {currencySymbol}{commitmentToRender.amount.toFixed(2)}
                                </span>
                                <span className="text-sm font-bold text-gray-400 uppercase">{currency}</span>
                            </div>
                        </div>

                        {/* Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Next Due */}
                            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Próximo Vencimiento</span>
                                </div>
                                <div className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-1">
                                    {(() => {
                                        const [y, m, d] = commitmentToRender.nextDueDate.split('-').map(Number);
                                        const localDate = new Date(y, m - 1, d);
                                        return localDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
                                    })()}
                                </div>
                                <div className="w-full bg-blue-200 dark:bg-blue-800/30 h-1.5 rounded-full overflow-hidden mt-2">
                                    {/* Simple progress visual: 100% full if overdue/today, partial otherwise */}
                                    <div
                                        className={`h-full rounded-full ${daysRemaining < 3 ? 'bg-rose-500' : 'bg-blue-500'}`}
                                        style={{ width: `${Math.max(0, Math.min(100, 100 - (daysRemaining * 3)))}%` }} // Arbitrary filling logic
                                    ></div>
                                </div>
                                <p className="text-xs font-medium text-blue-600/70 dark:text-blue-400/70 mt-2 text-right">
                                    {daysRemaining < 0 ? `${Math.abs(daysRemaining)} días vencido` : daysRemaining === 0 ? 'Vence hoy' : `${daysRemaining} días restantes`}
                                </p>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 gap-2">
                                <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-500">
                                        <span className="material-symbols-outlined text-[18px]">credit_card</span>
                                    </div>
                                    <div className="overflow-hidden flex-1">
                                        <div className="flex items-center justify-between">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Método de Pago</p>
                                            {isCreditCardPayment && !isPaid && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setIsEditingPaymentMethod(!isEditingPaymentMethod);
                                                        setSelectedFundingAccount(commitmentToRender.fundingAccountId || '');
                                                    }}
                                                    className="text-[10px] text-primary font-bold hover:underline cursor-pointer"
                                                >
                                                    {isEditingPaymentMethod ? 'Cancelar' : 'Cambiar'}
                                                </button>
                                            )}
                                        </div>

                                        {isEditingPaymentMethod ? (
                                            <div onClick={(e) => e.stopPropagation()} className="mt-1">
                                                <select
                                                    value={selectedFundingAccount}
                                                    onChange={async (e) => {
                                                        const newVal = e.target.value;
                                                        setSelectedFundingAccount(newVal);
                                                        // Auto save on change
                                                        if (newVal) {
                                                            await updateCommitment(commitmentToRender.id, { fundingAccountId: newVal });
                                                            setIsEditingPaymentMethod(false);
                                                        }
                                                    }}
                                                    className="w-full text-xs p-1 rounded border border-gray-200 dark:border-white/10 bg-white dark:bg-black/20 text-gray-800 dark:text-white"
                                                    autoFocus
                                                >
                                                    <option value="">Seleccionar...</option>
                                                    {debitAccounts.map(acc => (
                                                        <option key={acc.id} value={acc.id}>{acc.name} ({acc.currency})</option>
                                                    ))}
                                                </select>
                                            </div>
                                        ) : (
                                            <p className="text-sm font-bold text-gray-700 dark:text-gray-200 truncate">{displayAccountName}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-500">
                                        <span className="material-symbols-outlined text-[18px]">update</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Frecuencia</p>
                                        <p className="text-sm font-bold text-gray-700 dark:text-gray-200 capitalize">{translatedFrequency}</p>
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center gap-3">
                                    <div className={`size-8 rounded-lg flex items-center justify-center ${itemColors.bg} ${itemColors.text}`}>
                                        <CategoryIcon icon={categoryIcon} className="text-[18px]" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Categoría</p>
                                        <p className="text-sm font-bold text-gray-700 dark:text-gray-200 truncate">{categoryName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* History */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-sm font-bold text-gray-800 dark:text-white">Historial de Pagos</h3>
                                <button className="text-xs font-medium text-primary hover:underline cursor-pointer">Ver todo</button>
                            </div>
                            <div className="border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden">
                                {history.length === 0 ? (
                                    <div className="p-8 text-center text-gray-400 text-sm">No hay historial reciente</div>
                                ) : (
                                    <table className="w-full">
                                        <thead className="bg-gray-50 dark:bg-white/5 text-xs text-gray-400 font-semibold uppercase tracking-wider text-left">
                                            <tr>
                                                <th className="px-4 py-3">Fecha</th>
                                                <th className="px-4 py-3">Estado</th>
                                                <th className="px-4 py-3 text-right">Monto</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                                            {history.map((h, i) => (
                                                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                    <td className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                                                        {new Date(h.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                                                            <span className="material-symbols-outlined text-[12px]">check</span> Pagado
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-right text-sm font-bold text-gray-800 dark:text-white">
                                                        {currencySymbol}{Number(h.amount).toFixed(2)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-black/20 flex gap-3">
                        <button
                            onClick={handleToggleStatus}
                            disabled={isPaid}
                            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] ${isPaid
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                                : 'bg-primary text-white hover:bg-gray-800 cursor-pointer'
                                }`}
                        >
                            {isPaid ? (
                                <>
                                    <span className="material-symbols-outlined">check_circle</span>
                                    Pagado
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined">check_circle</span>
                                    Marcar como Pagado
                                </>
                            )}
                        </button>
                        {!isPaid && (
                            <button className="px-6 py-3.5 rounded-xl font-bold text-gray-600 dark:text-gray-300 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer">
                                <span className="material-symbols-outlined">calendar_clock</span>
                                Posponer
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <DeleteConfirmModal
                isOpen={isDeleteConfirmOpen}
                onClose={() => setIsDeleteConfirmOpen(false)}
                onConfirm={confirmDelete}
                title="¿Eliminar Compromiso?"
                message="Estás a punto de eliminar este compromiso. Si existen transacciones pasadas, se mantendrán en el historial."
                itemName={commitmentToRender.name}
            />
        </>,
        portalElement
    );
};
