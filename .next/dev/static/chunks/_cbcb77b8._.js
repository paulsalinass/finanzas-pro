(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CommitmentModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommitmentModal",
    ()=>CommitmentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/FinanceContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CommitmentModal = ({ isOpen, onClose, commitmentToEdit })=>{
    _s();
    const { addCommitment, updateCommitment, accounts, categories, ledgers, activeBookId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinance"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [frequency, setFrequency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('MONTHLY');
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('FIXED');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('PENDING');
    const [transactionType, setTransactionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('EXPENSE');
    const [nextDueDate, setNextDueDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // Optional
    const [categoryId, setCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [accountId, setAccountId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Populate form on open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommitmentModal.useEffect": ()=>{
            if (!isOpen) return; // Only run when opening
            if (commitmentToEdit) {
                setName(commitmentToEdit.name);
                setAmount(commitmentToEdit.amount.toString());
                setFrequency(commitmentToEdit.frequency);
                setType(commitmentToEdit.type || 'FIXED');
                setStatus(commitmentToEdit.status || 'PENDING');
                setTransactionType(commitmentToEdit.transaction_type || 'EXPENSE');
                // Format date for input type="date"
                const dueDate = commitmentToEdit.nextDueDate ? new Date(commitmentToEdit.nextDueDate).toISOString().split('T')[0] : '';
                setNextDueDate(dueDate);
                const endD = commitmentToEdit.endDate ? new Date(commitmentToEdit.endDate).toISOString().split('T')[0] : '';
                setEndDate(endD);
                setCategoryId(commitmentToEdit.categoryId || categories.find({
                    "CommitmentModal.useEffect": (c)=>c.name === commitmentToEdit.category
                }["CommitmentModal.useEffect"])?.id || '');
                setAccountId(commitmentToEdit.accountId || accounts.find({
                    "CommitmentModal.useEffect": (a)=>a.name === commitmentToEdit.account
                }["CommitmentModal.useEffect"])?.id || '');
                setIsActive(commitmentToEdit.isActive ?? true);
            } else {
                // Only reset if we are NOT already editing (prevent clearing on minor re-renders if logic was flaky, but mostly focus on open)
                // Actually, we just want to set defaults for NEW.
                // Problem: If I type, and this effect runs again, it wipes it.
                // Solution: This effect should ONLY run when `isOpen` changes.
                // But we need `commitmentToEdit` in deps.
                // We can check if we have already initialized? No, simpler to trust dependencies but ensure parent doesn't unstable-ref `commitmentToEdit`.
                // Better: Only reset if `name` is empty? No.
                // Best: Split into two effects or use a ref tracking previous `isOpen`. 
                // OR simply remove `accounts` and `categories` from deps? 
                // If they load late, we might miss setting initial IDs.
                // But for 'New', we set defaults.
                // Let's go with the standard pattern:
                setName('');
                setAmount('');
                setFrequency('MONTHLY');
                setType('FIXED');
                setStatus('PENDING');
                setTransactionType('EXPENSE');
                setNextDueDate(new Date().toISOString().split('T')[0]);
                setEndDate('');
                setCategoryId('');
                setAccountId(accounts[0]?.id || '');
                setIsActive(true);
            }
        }
    }["CommitmentModal.useEffect"], [
        isOpen,
        commitmentToEdit
    ]); // Removed accounts/categories to prevent reset on background fetch
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const numAmount = parseFloat(amount);
        if (isNaN(numAmount) || numAmount <= 0) {
            alert('Por favor ingresa un monto válido');
            return;
        }
        if (!name.trim()) {
            alert('Por favor ingresa un nombre para el compromiso');
            return;
        }
        const data = {
            name,
            amount: numAmount,
            frequency,
            type,
            status,
            transaction_type: transactionType,
            nextDueDate: new Date(nextDueDate).toISOString(),
            isActive,
            categoryId: categoryId || undefined,
            accountId: accountId || undefined,
            category: categories.find((c)=>c.id === categoryId)?.name,
            account: accounts.find((a)=>a.id === accountId)?.name
        };
        if (endDate) {
            data.endDate = new Date(endDate).toISOString();
        }
        try {
            if (commitmentToEdit) {
                await updateCommitment(commitmentToEdit.id, data);
            } else {
                await addCommitment(data);
            }
            onClose();
        } catch (error) {
            console.error("Error saving commitment:", error);
        }
    };
    // Close on Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommitmentModal.useEffect": ()=>{
            const handleKeyDown = {
                "CommitmentModal.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape' && isOpen) onClose();
                }
            }["CommitmentModal.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "CommitmentModal.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["CommitmentModal.useEffect"];
        }
    }["CommitmentModal.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    const activeLedger = ledgers.find((l)=>l.id === activeBookId);
    const currencyCode = activeLedger?.currency || 'USD';
    const currencySymbol = currencyCode === 'PEN' ? 'S/.' : currencyCode === 'EUR' ? '€' : '$';
    // Helper to get frequency label
    const getFrequencyLabel = (freq)=>{
        const map = {
            'WEEKLY': 'Semanas',
            'BIWEEKLY': 'Quincenas',
            'MONTHLY': 'Meses',
            'QUARTERLY': 'Trimestres',
            'SEMIANNUAL': 'Semestres',
            'ANNUAL': 'Años'
        };
        return map[freq] || 'Meses';
    };
    // Helper text for summary
    const frequencyText = frequency === 'MONTHLY' ? '1 mes' : frequency === 'WEEKLY' ? '1 semana' : frequency === 'ANNUAL' ? '1 año' : frequency === 'BIWEEKLY' ? '2 semanas' : frequency === 'QUARTERLY' ? '3 meses' : '1 periodo';
    const accountName = accounts.find((a)=>a.id === accountId)?.name || '...';
    const categoryName = categories.find((c)=>c.id === categoryId)?.name || '...';
    const startDateFormatted = nextDueDate ? new Date(nextDueDate).toLocaleDateString('es-ES') : '...';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 bottom-0 right-0 left-0 lg:left-[var(--sidebar-width)] z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in transition-[left] duration-300",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-[#1e2530] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-8 py-5 border-b border-gray-100 dark:border-white/5 flex justify-between items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-800 dark:text-white",
                                    children: commitmentToEdit ? 'Editar Compromiso' : 'Nuevo Compromiso'
                                }, void 0, false, {
                                    fileName: "[project]/components/CommitmentModal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 dark:text-gray-400 mt-1",
                                    children: "Configura los detalles de tus transacciones automáticas."
                                }, void 0, false, {
                                    fileName: "[project]/components/CommitmentModal.tsx",
                                    lineNumber: 177,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CommitmentModal.tsx",
                            lineNumber: 173,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-icons text-gray-500",
                                children: "close"
                            }, void 0, false, {
                                fileName: "[project]/components/CommitmentModal.tsx",
                                lineNumber: 180,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/CommitmentModal.tsx",
                            lineNumber: 179,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CommitmentModal.tsx",
                    lineNumber: 172,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "flex-1 overflow-y-auto p-8 pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-100 dark:bg-slate-800 p-1 rounded-2xl flex w-full max-w-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setTransactionType('INCOME'),
                                        className: `flex-1 py-1.5 rounded-xl text-sm font-bold transition-all ${transactionType === 'INCOME' ? 'bg-white dark:bg-[#1e2530] text-success shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`,
                                        children: "Ingreso"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CommitmentModal.tsx",
                                        lineNumber: 189,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setTransactionType('EXPENSE'),
                                        className: `flex-1 py-1.5 rounded-xl text-sm font-bold transition-all ${transactionType === 'EXPENSE' ? 'bg-white dark:bg-[#1e2530] text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'}`,
                                        children: "Gasto"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CommitmentModal.tsx",
                                        lineNumber: 196,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CommitmentModal.tsx",
                                lineNumber: 188,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/CommitmentModal.tsx",
                            lineNumber: 187,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2",
                                            children: "Nombre del Compromiso"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 210,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: name,
                                            onChange: (e)=>setName(e.target.value),
                                            className: "w-full bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white",
                                            placeholder: "Ej. Netflix Premium"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 211,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CommitmentModal.tsx",
                                    lineNumber: 209,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2",
                                            children: "Monto"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 222,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute left-4 top-1/2 -translate-y-1/2 font-bold ${transactionType === 'INCOME' ? 'text-success' : 'text-gray-500'}`,
                                                    children: currencySymbol
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: amount,
                                                    onChange: (e)=>setAmount(e.target.value),
                                                    className: `w-full bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white font-mono font-bold ${transactionType === 'INCOME' ? 'text-success' : ''}`,
                                                    placeholder: "0.00"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 223,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CommitmentModal.tsx",
                                    lineNumber: 221,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-lg font-bold text-gray-800 dark:text-white mb-4",
                                            children: "Frecuencia"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 237,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2",
                                                            children: "Repetir cada"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: "1",
                                                                    disabled: true,
                                                                    className: "w-16 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-3 text-center outline-none text-gray-500 cursor-not-allowed"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: frequency,
                                                                    onChange: (e)=>setFrequency(e.target.value),
                                                                    className: "flex-1 bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "WEEKLY",
                                                                            children: "Semana(s)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                                            lineNumber: 255,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "BIWEEKLY",
                                                                            children: "Quincena(s)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                                            lineNumber: 256,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "MONTHLY",
                                                                            children: "Mes(es)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                                            lineNumber: 257,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "QUARTERLY",
                                                                            children: "Trimestre(s)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                                            lineNumber: 258,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "SEMIANNUAL",
                                                                            children: "Semestre(s)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                                            lineNumber: 259,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "ANNUAL",
                                                                            children: "Año(s)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                                            lineNumber: 260,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2",
                                                            children: "Próxima ocurrencia"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    value: nextDueDate,
                                                                    onChange: (e)=>setNextDueDate(e.target.value),
                                                                    className: "w-full bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-[20px]",
                                                                        children: "calendar_today"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CommitmentModal.tsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 239,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setEndDate(endDate ? '' : new Date().toISOString().split('T')[0]),
                                                    className: `relative w-11 h-6 rounded-full transition-colors ${endDate ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${endDate ? 'translate-x-5' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CommitmentModal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                    children: "Terminar después de una fecha"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 283,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 animate-fade-in-down",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2",
                                                    children: "Fecha de Finalización"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: endDate,
                                                    onChange: (e)=>setEndDate(e.target.value),
                                                    className: "w-full md:w-1/2 bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 295,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CommitmentModal.tsx",
                                    lineNumber: 236,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-lg font-bold text-gray-800 dark:text-white mb-4",
                                            children: "Clasificación"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 309,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2",
                                                            children: "Cuenta"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]",
                                                                    children: "account_balance_wallet"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                                    lineNumber: 316,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: accountId,
                                                                    onChange: (e)=>setAccountId(e.target.value),
                                                                    className: "w-full bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white appearance-none cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Seleccionar Cuenta"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                                            lineNumber: 322,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        accounts.map((acc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: acc.id,
                                                                                children: acc.name
                                                                            }, acc.id, false, {
                                                                                fileName: "[project]/components/CommitmentModal.tsx",
                                                                                lineNumber: 324,
                                                                                columnNumber: 49
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 material-symbols-outlined",
                                                                    children: "expand_more"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                                    lineNumber: 327,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-gray-500 dark:text-gray-400 mb-2",
                                                            children: "Categoría"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]",
                                                                    children: "category"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                                    lineNumber: 335,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: categoryId,
                                                                    onChange: (e)=>setCategoryId(e.target.value),
                                                                    className: "w-full bg-white dark:bg-[#252b36] border border-gray-200 dark:border-gray-700 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white appearance-none cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Seleccionar Categoría"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                                            lineNumber: 341,
                                                                            columnNumber: 45
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: cat.id,
                                                                                children: cat.name
                                                                            }, cat.id, false, {
                                                                                fileName: "[project]/components/CommitmentModal.tsx",
                                                                                lineNumber: 343,
                                                                                columnNumber: 49
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                                    lineNumber: 336,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 material-symbols-outlined",
                                                                    children: "expand_more"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                                    lineNumber: 346,
                                                                    columnNumber: 41
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CommitmentModal.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CommitmentModal.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 311,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CommitmentModal.tsx",
                                    lineNumber: 308,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CommitmentModal.tsx",
                            lineNumber: 206,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mt-8 p-4 rounded-2xl flex gap-3 text-sm border ${transactionType === 'INCOME' ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-100 dark:border-green-800/50' : 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 border-blue-100 dark:border-blue-800/50'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined shrink-0",
                                    children: "info"
                                }, void 0, false, {
                                    fileName: "[project]/components/CommitmentModal.tsx",
                                    lineNumber: 366,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: "Resumen:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 368,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Se registrará un ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: transactionType === 'INCOME' ? 'Ingreso' : 'Gasto'
                                        }, void 0, false, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 368,
                                            columnNumber: 90
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " de ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: [
                                                currencySymbol,
                                                amount || '0.00'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 368,
                                            columnNumber: 181
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " para ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: name || '...'
                                        }, void 0, false, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 368,
                                            columnNumber: 256
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " cada ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: frequencyText
                                        }, void 0, false, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 368,
                                            columnNumber: 312
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        ", comenzando el ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: startDateFormatted
                                        }, void 0, false, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 368,
                                            columnNumber: 378
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " en la cuenta ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: accountName
                                        }, void 0, false, {
                                            fileName: "[project]/components/CommitmentModal.tsx",
                                            lineNumber: 368,
                                            columnNumber: 447
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CommitmentModal.tsx",
                                    lineNumber: 367,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CommitmentModal.tsx",
                            lineNumber: 365,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CommitmentModal.tsx",
                    lineNumber: 184,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 bg-white dark:bg-[#1e2530] border-t border-gray-100 dark:border-white/5 flex justify-end gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "px-6 py-2.5 rounded-xl font-bold text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors",
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/components/CommitmentModal.tsx",
                            lineNumber: 376,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            className: `px-8 py-2.5 rounded-xl font-bold text-white shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${transactionType === 'INCOME' ? 'bg-green-600 shadow-green-600/30 hover:bg-green-700' : 'bg-primary shadow-primary/30 hover:bg-primary/90'}`,
                            children: commitmentToEdit ? 'Guardar Cambios' : 'Crear Compromiso'
                        }, void 0, false, {
                            fileName: "[project]/components/CommitmentModal.tsx",
                            lineNumber: 383,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CommitmentModal.tsx",
                    lineNumber: 375,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/CommitmentModal.tsx",
            lineNumber: 167,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/CommitmentModal.tsx",
        lineNumber: 163,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CommitmentModal, "QkboOIH9A1dnX4oG+uTggOyXtOI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinance"]
    ];
});
_c = CommitmentModal;
var _c;
__turbopack_context__.k.register(_c, "CommitmentModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DateRangeModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DateRangeModal",
    ()=>DateRangeModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$DayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-day-picker/dist/esm/DayPicker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const quickRanges = [
    {
        label: 'Hoy',
        getRange: ()=>{
            const today = new Date();
            return {
                from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(today),
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(today)
            };
        }
    },
    {
        label: 'Ayer',
        getRange: ()=>{
            const yesterday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(new Date(), 1);
            return {
                from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(yesterday),
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(yesterday)
            };
        }
    },
    {
        label: 'Últimos 7 días',
        getRange: ()=>({
                from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(new Date(), 6)),
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(new Date())
            })
    },
    {
        label: 'Últimos 30 días',
        getRange: ()=>({
                from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(new Date(), 29)),
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(new Date())
            })
    },
    {
        label: 'Este mes',
        getRange: ()=>({
                from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(new Date()),
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(new Date())
            })
    },
    {
        label: 'Mes pasado',
        getRange: ()=>{
            const reference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(new Date(), 1);
            return {
                from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(reference),
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(reference)
            };
        }
    },
    {
        label: 'Últimos 3 meses',
        getRange: ()=>({
                from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(new Date(), 2)),
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(new Date())
            })
    }
];
const monthNames = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
];
const DateRangeModal = ({ isOpen, onClose, onApply, initialStartDate, initialEndDate })=>{
    _s();
    const [range, setRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        from: initialStartDate || undefined,
        to: initialEndDate || undefined
    });
    const [activePreset, setActivePreset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [leftMonth, setLeftMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DateRangeModal.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(initialStartDate || new Date())
    }["DateRangeModal.useState"]);
    const [rightMonth, setRightMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DateRangeModal.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(initialStartDate || new Date()), 1)
    }["DateRangeModal.useState"]);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const syncCalendarMonths = (fromDate, toDate)=>{
        const baseLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(fromDate || new Date());
        let baseRight = toDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(toDate) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(baseLeft, 1);
        if (baseRight <= baseLeft) {
            baseRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(baseLeft, 1);
        }
        setLeftMonth(baseLeft);
        setRightMonth(baseRight);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateRangeModal.useEffect": ()=>{
            if (isOpen) {
                setRange({
                    from: initialStartDate || undefined,
                    to: initialEndDate || undefined
                });
                setActivePreset(null);
                syncCalendarMonths(initialStartDate || undefined, initialEndDate || undefined);
            }
        }
    }["DateRangeModal.useEffect"], [
        isOpen,
        initialStartDate,
        initialEndDate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateRangeModal.useEffect": ()=>{
            if (!isOpen) return;
            const handleKeyDown = {
                "DateRangeModal.useEffect.handleKeyDown": (event)=>{
                    if (event.key === 'Escape') {
                        onClose();
                    }
                }
            }["DateRangeModal.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "DateRangeModal.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["DateRangeModal.useEffect"];
        }
    }["DateRangeModal.useEffect"], [
        isOpen,
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "DateRangeModal.useLayoutEffect": ()=>{
            if (isOpen) {
                setIsMounted(true);
                const raf = requestAnimationFrame({
                    "DateRangeModal.useLayoutEffect.raf": ()=>setIsVisible(true)
                }["DateRangeModal.useLayoutEffect.raf"]);
                return ({
                    "DateRangeModal.useLayoutEffect": ()=>cancelAnimationFrame(raf)
                })["DateRangeModal.useLayoutEffect"];
            }
            if (isMounted) {
                setIsVisible(false);
                const timeout = setTimeout({
                    "DateRangeModal.useLayoutEffect.timeout": ()=>setIsMounted(false)
                }["DateRangeModal.useLayoutEffect.timeout"], 300);
                return ({
                    "DateRangeModal.useLayoutEffect": ()=>clearTimeout(timeout)
                })["DateRangeModal.useLayoutEffect"];
            }
        }
    }["DateRangeModal.useLayoutEffect"], [
        isOpen,
        isMounted
    ]);
    const years = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DateRangeModal.useMemo[years]": ()=>{
            const current = new Date().getFullYear();
            return Array.from({
                length: 11
            }, {
                "DateRangeModal.useMemo[years]": (_, idx)=>current - 5 + idx
            }["DateRangeModal.useMemo[years]"]);
        }
    }["DateRangeModal.useMemo[years]"], []);
    const handleRangeSelect = (selected)=>{
        if (!selected?.from) {
            setRange(undefined);
            return;
        }
        if (!selected.to) {
            setRange({
                from: selected.from,
                to: undefined
            });
            syncCalendarMonths(selected.from, undefined);
            setActivePreset(null);
            return;
        }
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(selected.from);
        const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(selected.to);
        if (end < start) {
            setRange({
                from: end,
                to: undefined
            });
            syncCalendarMonths(end, undefined);
            setActivePreset(null);
            return;
        }
        setRange({
            from: start,
            to: end
        });
        syncCalendarMonths(start, end);
        setActivePreset(null);
    };
    const handlePresetClick = (preset)=>{
        const presetRange = preset.getRange();
        setRange(presetRange);
        setActivePreset(preset.label);
        syncCalendarMonths(presetRange.from, presetRange.to);
    };
    const handleApply = ()=>{
        if (range?.from && range?.to) {
            onApply(range.from, range.to);
            onClose();
        }
    };
    const formattedRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DateRangeModal.useMemo[formattedRange]": ()=>{
            if (!range?.from || !range?.to) return 'Selecciona un rango';
            return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(range.from, "d MMM, yyyy", {
                locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["es"]
            })} - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(range.to, "d MMM, yyyy", {
                locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["es"]
            })}`;
        }
    }["DateRangeModal.useMemo[formattedRange]"], [
        range
    ]);
    if (!isMounted) return null;
    const handleLeftMonthChange = (next)=>{
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(next);
        setLeftMonth(normalized);
        if (rightMonth <= normalized) {
            setRightMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(normalized, 1));
        }
    };
    const handleRightMonthChange = (next)=>{
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(next);
        if (normalized <= leftMonth) {
            setRightMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(leftMonth, 1));
            return;
        }
        setRightMonth(normalized);
    };
    const MonthControls = ({ month, onChange, disablePrev, disableNext })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: month.getMonth(),
                            onChange: (event)=>{
                                const updated = new Date(month);
                                updated.setMonth(Number(event.target.value));
                                updated.setDate(1);
                                onChange(updated);
                            },
                            className: "px-2 py-1 text-xs font-semibold rounded-lg border border-slate-200 bg-white focus:border-primary focus:outline-none dark:bg-transparent dark:border-white/20 dark:text-white",
                            children: monthNames.map((name, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: idx,
                                    children: name.charAt(0).toUpperCase() + name.slice(1)
                                }, name, false, {
                                    fileName: "[project]/components/DateRangeModal.tsx",
                                    lineNumber: 232,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/DateRangeModal.tsx",
                            lineNumber: 221,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: month.getFullYear(),
                            onChange: (event)=>{
                                const updated = new Date(month);
                                updated.setFullYear(Number(event.target.value));
                                updated.setDate(1);
                                onChange(updated);
                            },
                            className: "px-2 py-1 text-xs font-semibold rounded-lg border border-slate-200 bg-white focus:border-primary focus:outline-none dark:bg-transparent dark:border-white/20 dark:text-white",
                            children: years.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: year,
                                    children: year
                                }, year, false, {
                                    fileName: "[project]/components/DateRangeModal.tsx",
                                    lineNumber: 248,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/DateRangeModal.tsx",
                            lineNumber: 237,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DateRangeModal.tsx",
                    lineNumber: 220,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 text-primary",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(month, -1)),
                            disabled: disablePrev,
                            className: "size-7 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-40",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-sm",
                                children: "chevron_left"
                            }, void 0, false, {
                                fileName: "[project]/components/DateRangeModal.tsx",
                                lineNumber: 261,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/DateRangeModal.tsx",
                            lineNumber: 255,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(month, 1)),
                            disabled: disableNext,
                            className: "size-7 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-40",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-sm",
                                children: "chevron_right"
                            }, void 0, false, {
                                fileName: "[project]/components/DateRangeModal.tsx",
                                lineNumber: 269,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/DateRangeModal.tsx",
                            lineNumber: 263,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DateRangeModal.tsx",
                    lineNumber: 254,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/DateRangeModal.tsx",
            lineNumber: 219,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-[120] flex transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100' : 'opacity-0'}`,
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:block h-full",
                style: {
                    width: 'var(--sidebar-width, 280px)'
                }
            }, void 0, false, {
                fileName: "[project]/components/DateRangeModal.tsx",
                lineNumber: 280,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-1 w-full relative flex items-center justify-center bg-slate-900/35 p-3 sm:p-4 transition-[opacity,backdrop-filter] duration-300 ease-out ${isVisible ? 'opacity-100 backdrop-blur-md' : 'opacity-0 backdrop-blur-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `date-range-modal w-full max-w-5xl bg-white dark:bg-[#101828] rounded-[28px] shadow-2xl border border-slate-200/80 dark:border-white/10 p-4 sm:p-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-black text-slate-900 dark:text-white",
                                    children: "Seleccionar Rango"
                                }, void 0, false, {
                                    fileName: "[project]/components/DateRangeModal.tsx",
                                    lineNumber: 292,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "size-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:text-primary hover:bg-primary/10 transition-colors dark:bg-white/10 dark:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-lg",
                                        children: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DateRangeModal.tsx",
                                        lineNumber: 297,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/DateRangeModal.tsx",
                                    lineNumber: 293,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DateRangeModal.tsx",
                            lineNumber: 291,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "flex flex-col gap-2 w-full lg:w-56",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-semibold text-slate-500 uppercase tracking-wide",
                                            children: "Rangos rápidos"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DateRangeModal.tsx",
                                            lineNumber: 303,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 lg:grid-cols-1 gap-2",
                                            children: quickRanges.map((preset)=>{
                                                const isActive = activePreset === preset.label;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handlePresetClick(preset),
                                                    className: `text-left px-3 py-1.5 rounded-2xl border text-[11px] font-semibold transition-all ${isActive ? 'bg-primary/10 border-primary/40 text-primary' : 'border-slate-200 text-slate-600 hover:border-primary/30 hover:text-primary'}`,
                                                    children: preset.label
                                                }, preset.label, false, {
                                                    fileName: "[project]/components/DateRangeModal.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/DateRangeModal.tsx",
                                            lineNumber: 304,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DateRangeModal.tsx",
                                    lineNumber: 302,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-hidden px-2 md:px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                            children: `
                                .date-range-modal .rdp {
                                    --rdp-cell-size: 30px;
                                    --rdp-accent-color: #2563eb;
                                    --rdp-background-color: rgba(37, 99, 235, 0.12);
                                    --rdp-range_border-radius: 999px;
                                    margin: 0;
                                    color: #0f172a;
                                }
                                .dark .date-range-modal .rdp {
                                    color: #f8fafc;
                                }
                                .date-range-modal .rdp-head_cell {
                                    color: #94a3b8;
                                    font-weight: 600;
                                    font-size: 0.7rem;
                                    text-transform: uppercase;
                                }
                                .dark .date-range-modal .rdp-head_cell {
                                    color: rgba(255,255,255,0.7);
                                }
                                .date-range-modal .rdp-day {
                                    font-weight: 500;
                                    font-size: 0.85rem;
                                }
                                .date-range-modal .rdp-day_selected:not([disabled]) {
                                    background-color: #2563eb;
                                    color: #fff;
                                }
                                .date-range-modal .rdp-day_range_middle {
                                    background-color: rgba(37,99,235,0.12);
                                    color: inherit;
                                    border-radius: 999px !important;
                                }
                                .date-range-modal .rdp-root,
                                .date-range-modal .rdp-months,
                                .date-range-modal .rdp-month {
                                    width: 100%;
                                }
                                .date-range-modal .rdp-caption,
                                .date-range-modal .rdp-nav {
                                    display: none;
                                }
                            `
                                        }, void 0, false, {
                                            fileName: "[project]/components/DateRangeModal.tsx",
                                            lineNumber: 325,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex flex-col md:flex-row gap-3 md:gap-6 justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 border border-slate-100 rounded-2xl p-2 shadow-sm dark:border-white/10 backdrop-blur-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthControls, {
                                                            month: leftMonth,
                                                            onChange: handleLeftMonthChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/DateRangeModal.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$DayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayPicker"], {
                                                            mode: "range",
                                                            selected: range,
                                                            onSelect: handleRangeSelect,
                                                            month: leftMonth,
                                                            onMonthChange: handleLeftMonthChange,
                                                            numberOfMonths: 1,
                                                            locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["es"]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/DateRangeModal.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/DateRangeModal.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 border border-slate-100 rounded-2xl p-2 shadow-sm dark:border-white/10 backdrop-blur-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthControls, {
                                                            month: rightMonth,
                                                            onChange: handleRightMonthChange,
                                                            disablePrev: rightMonth <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(leftMonth, 1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/DateRangeModal.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$DayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayPicker"], {
                                                            mode: "range",
                                                            selected: range,
                                                            onSelect: handleRangeSelect,
                                                            month: rightMonth,
                                                            onMonthChange: handleRightMonthChange,
                                                            numberOfMonths: 1,
                                                            locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["es"]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/DateRangeModal.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/DateRangeModal.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/DateRangeModal.tsx",
                                            lineNumber: 369,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DateRangeModal.tsx",
                                    lineNumber: 324,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DateRangeModal.tsx",
                            lineNumber: 301,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 border-t border-slate-100 dark:border-white/10 pt-3 flex flex-col gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center gap-2 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 w-full sm:w-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        readOnly: true,
                                                        value: range?.from ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(range.from, 'dd/MM/yyyy') : '',
                                                        placeholder: "Inicio",
                                                        className: "flex-1 sm:w-32 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-700 focus:border-primary focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/DateRangeModal.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400 text-xs",
                                                        children: "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/DateRangeModal.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        readOnly: true,
                                                        value: range?.to ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(range.to, 'dd/MM/yyyy') : '',
                                                        placeholder: "Fin",
                                                        className: "flex-1 sm:w-32 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-700 focus:border-primary focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/DateRangeModal.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/DateRangeModal.tsx",
                                                lineNumber: 408,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400 dark:text-white/60",
                                                children: formattedRange
                                            }, void 0, false, {
                                                fileName: "[project]/components/DateRangeModal.tsx",
                                                lineNumber: 423,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DateRangeModal.tsx",
                                        lineNumber: 407,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-center gap-2 justify-end w-full sm:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: onClose,
                                                className: "px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-[11px] font-semibold hover:border-slate-300 dark:border-white/10 dark:text-white",
                                                children: "Cancelar"
                                            }, void 0, false, {
                                                fileName: "[project]/components/DateRangeModal.tsx",
                                                lineNumber: 426,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleApply,
                                                disabled: !range?.from || !range?.to,
                                                className: "px-6 py-2 rounded-xl bg-primary text-white text-[11px] font-bold shadow-lg shadow-primary/30 hover:bg-primary-hover transition disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
                                                children: "Aplicar"
                                            }, void 0, false, {
                                                fileName: "[project]/components/DateRangeModal.tsx",
                                                lineNumber: 429,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DateRangeModal.tsx",
                                        lineNumber: 425,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DateRangeModal.tsx",
                                lineNumber: 406,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/DateRangeModal.tsx",
                            lineNumber: 405,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DateRangeModal.tsx",
                    lineNumber: 287,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/DateRangeModal.tsx",
                lineNumber: 284,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/DateRangeModal.tsx",
        lineNumber: 276,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DateRangeModal, "MBdTiDfjSDGUzk0GBuh7Ea5zke8=");
_c = DateRangeModal;
var _c;
__turbopack_context__.k.register(_c, "DateRangeModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DeleteConfirmModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteConfirmModal",
    ()=>DeleteConfirmModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, title = "¿Eliminar elemento?", message = "Estás a punto de eliminar este elemento. Esta acción no se puede deshacer.", itemName })=>{
    _s();
    // Close on Escape key
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "DeleteConfirmModal.useEffect": ()=>{
            const handleKeyDown = {
                "DeleteConfirmModal.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape' && isOpen) {
                        onClose();
                    }
                }
            }["DeleteConfirmModal.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "DeleteConfirmModal.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["DeleteConfirmModal.useEffect"];
        }
    }["DeleteConfirmModal.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 bottom-0 right-0 left-0 lg:left-[var(--sidebar-width)] z-[110] flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-fade-in transition-[left] duration-300",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-card relative w-full max-w-md transform overflow-hidden rounded-[2.5rem] shadow-premium transition-all animate-slide-up flex flex-col items-center pt-10 pb-8 px-8 sm:px-10 border border-white/80 dark:border-slate-800",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex size-20 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "material-symbols-outlined text-[40px] text-red-500",
                        children: "priority_high"
                    }, void 0, false, {
                        fileName: "[project]/components/DeleteConfirmModal.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/DeleteConfirmModal.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-slate-900 dark:text-white text-xl font-bold tracking-tight text-center mb-2",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/DeleteConfirmModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8 px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed",
                        children: [
                            message,
                            " ",
                            itemName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-slate-900 dark:text-white",
                                children: [
                                    '"',
                                    itemName,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DeleteConfirmModal.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DeleteConfirmModal.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/DeleteConfirmModal.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex-1 cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold transition-all focus:outline-none",
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/components/DeleteConfirmModal.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onConfirm();
                                onClose();
                            },
                            className: "flex-1 cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-red-500 hover:bg-red-600 text-white text-sm font-bold shadow-lg shadow-red-500/30 transition-all transform active:scale-95 focus:outline-none",
                            children: "Eliminar"
                        }, void 0, false, {
                            fileName: "[project]/components/DeleteConfirmModal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DeleteConfirmModal.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/DeleteConfirmModal.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/DeleteConfirmModal.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DeleteConfirmModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = DeleteConfirmModal;
var _c;
__turbopack_context__.k.register(_c, "DeleteConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(dashboard)/commitments/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Commitments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/FinanceContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CommitmentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CommitmentModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DateRangeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DateRangeModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DeleteConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DeleteConfirmModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Commitments() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { commitments, toggleCommitmentStatus, deleteCommitment, ledgers, activeBookId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinance"])();
    const activeLedger = ledgers.find((l)=>l.id === activeBookId);
    const currencyCode = activeLedger?.currency || 'USD';
    const currencySymbol = currencyCode === 'PEN' ? 'S/.' : currencyCode === 'EUR' ? '€' : '$';
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDateModalOpen, setIsDateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0) // End of this month
    });
    const [editingCommitment, setEditingCommitment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [commitmentToDelete, setCommitmentToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleCreate = ()=>{
        setEditingCommitment(null);
        setIsModalOpen(true);
    };
    const handleEdit = (commitment)=>{
        setEditingCommitment(commitment);
        setIsModalOpen(true);
    };
    const handleDelete = (id)=>{
        setCommitmentToDelete(id);
        setIsDeleteModalOpen(true);
    };
    const confirmDelete = async ()=>{
        if (commitmentToDelete) {
            await deleteCommitment(commitmentToDelete);
            setIsDeleteModalOpen(false);
            setCommitmentToDelete(null);
        }
    };
    const handleDateApply = (start, end)=>{
        setDateRange({
            start,
            end
        });
    };
    const expenseCommitments = commitments.filter((c)=>c.transaction_type !== 'INCOME');
    const totalPlanificado = expenseCommitments.reduce((sum, c)=>sum + c.amount, 0);
    const yaPagado = expenseCommitments.filter((c)=>c.status === 'PAID').reduce((sum, c)=>sum + c.amount, 0);
    const porPagar = totalPlanificado - yaPagado;
    const progressPercent = totalPlanificado > 0 ? yaPagado / totalPlanificado * 100 : 0;
    const pendingCount = expenseCommitments.filter((c)=>c.status === 'PENDING').length;
    // Filter Logic
    const filteredCommitments = commitments.filter((c)=>{
        // Search Filter
        if (searchTerm && !c.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }
        // Date Filter
        if (dateRange.start && dateRange.end) {
            // Fix: Parse YYYY-MM-DD explicitly to Local Time to avoid UTC timezone shifts
            const parts = c.nextDueDate.split('-');
            if (parts.length === 3) {
                const year = parseInt(parts[0]);
                const month = parseInt(parts[1]) - 1; // Months are 0-indexed
                const day = parseInt(parts[2]);
                const d = new Date(year, month, day);
                // d is now 00:00:00 Local Time on that date.
                const start = new Date(dateRange.start.getFullYear(), dateRange.start.getMonth(), dateRange.start.getDate());
                const end = new Date(dateRange.end.getFullYear(), dateRange.end.getMonth(), dateRange.end.getDate());
                // Set End to end of day
                end.setHours(23, 59, 59, 999);
                // Check if valid date
                if (!isNaN(d.getTime())) {
                    if (d < start || d > end) return false;
                }
            }
        }
        if (filter === 'pending') return c.status === 'PENDING';
        if (filter === 'paid') return c.status === 'PAID';
        return true;
    });
    const nextPayment = commitments.filter((c)=>c.status === 'PENDING' && c.transaction_type !== 'INCOME').sort((a, b)=>new Date(a.nextDueDate).getTime() - new Date(b.nextDueDate).getTime())[0];
    const getDaysUntilDue = (dateStr)=>{
        const diff = new Date(dateStr).getTime() - new Date().setHours(0, 0, 0, 0);
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col h-full overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth scrollbar-hide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1200px] mx-auto pb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 animate-fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl font-black tracking-tight text-[#111418] dark:text-white",
                                                children: "Compromisos y Gastos Fijos"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#637288] dark:text-slate-400 text-base",
                                            children: "Planifica y controla tus pagos recurrentes sin estrés."
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsDateModalOpen(true),
                                            className: "flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-white dark:bg-slate-800 border border-[#dce0e5] dark:border-slate-700 text-[#111418] dark:text-white text-sm font-semibold shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[20px]",
                                                    children: "calendar_month"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "capitalize",
                                                    children: dateRange.start ? dateRange.start.toLocaleDateString('es-ES', {
                                                        month: 'long',
                                                        year: 'numeric'
                                                    }) : 'Ver Calendario'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[20px]",
                                                    children: "arrow_drop_down"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCreate,
                                            className: "flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[20px]",
                                                    children: "add"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Nuevo Gasto Fijo"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                            lineNumber: 114,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 animate-fade-in",
                            style: {
                                animationDelay: '0.1s'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden group border-orange-100 dark:border-orange-900/30 bg-white/60 dark:bg-slate-900/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-8xl text-orange-500",
                                                children: "calendar_clock"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "size-10 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-[20px]",
                                                        children: "event_upcoming"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#637288] dark:text-slate-400 text-xs font-bold uppercase tracking-widest",
                                                    children: "Próximo Pago"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 29
                                        }, this),
                                        nextPayment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#111418] dark:text-white text-3xl font-black tracking-tight",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg font-bold mr-1 align-middle text-gray-400 dark:text-gray-500",
                                                                    children: currencySymbol
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                    lineNumber: 151,
                                                                    columnNumber: 45
                                                                }, this),
                                                                nextPayment.amount.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 truncate max-w-[80px]",
                                                            children: nextPayment.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 37
                                                }, this),
                                                (()=>{
                                                    const days = getDaysUntilDue(nextPayment.nextDueDate);
                                                    let message = '';
                                                    let colorClass = '';
                                                    if (days < 0) {
                                                        message = `Venció hace ${Math.abs(days)} días`;
                                                        colorClass = 'text-red-500';
                                                    } else if (days === 0) {
                                                        message = 'Vence hoy';
                                                        colorClass = 'text-orange-500';
                                                    } else if (days === 1) {
                                                        message = 'Vence mañana';
                                                        colorClass = 'text-orange-500';
                                                    } else {
                                                        message = `Vence en ${days} días`;
                                                        colorClass = 'text-blue-500';
                                                    }
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-center gap-1.5 text-xs font-bold ${colorClass}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-[14px]",
                                                                children: "warning"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 49
                                                            }, this),
                                                            message
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 45
                                                    }, this);
                                                })()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#111418] dark:text-white text-lg font-bold",
                                                    children: "¡Todo al día!"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#637288] dark:text-slate-500 text-xs",
                                                    children: "No tienes pagos pendientes próximos."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-6xl text-primary",
                                                children: "account_balance"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "size-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-sm",
                                                        children: "savings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#637288] dark:text-slate-400 text-sm font-medium",
                                                    children: "Total Planificado"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#111418] dark:text-white text-3xl font-bold tracking-tight",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-bold mr-1 align-middle text-gray-400 dark:text-gray-500",
                                                            children: currencySymbol
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 37
                                                        }, this),
                                                        totalPlanificado.toLocaleString('en-US', {
                                                            minimumFractionDigits: 2
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#637288] dark:text-slate-500 text-xs mt-1",
                                                    children: "Estimación mensual"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-6xl text-success",
                                                children: "check_circle"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "size-8 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-success",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-sm",
                                                        children: "payments"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#637288] dark:text-slate-400 text-sm font-medium",
                                                    children: "Ya Pagado"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 208,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#111418] dark:text-white text-3xl font-bold tracking-tight",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-bold mr-1 align-middle text-gray-400 dark:text-gray-500",
                                                            children: currencySymbol
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 37
                                                        }, this),
                                                        yaPagado.toLocaleString('en-US', {
                                                            minimumFractionDigits: 2
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full bg-gray-100 dark:bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-success h-full rounded-full transition-all duration-1000",
                                                        style: {
                                                            width: `${progressPercent}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-success text-xs font-medium mt-1",
                                                    children: [
                                                        progressPercent.toFixed(0),
                                                        "% completado"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden group border-orange-100 dark:border-orange-900/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-6xl text-orange-500",
                                                children: "pending_actions"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "size-8 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-sm",
                                                        children: "hourglass_top"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#637288] dark:text-slate-400 text-sm font-medium",
                                                    children: "Por Pagar"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#111418] dark:text-white text-3xl font-bold tracking-tight",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-bold mr-1 align-middle text-gray-400 dark:text-gray-500",
                                                            children: currencySymbol
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 37
                                                        }, this),
                                                        porPagar.toLocaleString('en-US', {
                                                            minimumFractionDigits: 2
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#637288] dark:text-slate-500 text-xs mt-1",
                                                    children: [
                                                        pendingCount,
                                                        " compromisos pendientes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                            lineNumber: 134,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "glass-card rounded-2xl shadow-glass overflow-hidden flex flex-col animate-fade-in",
                            style: {
                                animationDelay: '0.2s'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-5 border-b border-[#f0f2f4] dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/40 dark:bg-slate-900/40",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[#111418] dark:text-white text-lg font-bold",
                                            children: "Listado de Compromisos"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col md:flex-row gap-4 w-full md:w-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-[20px]",
                                                            children: "search"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Buscar compromisos...",
                                                            value: searchTerm,
                                                            onChange: (e)=>setSearchTerm(e.target.value),
                                                            className: "pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex bg-[#f0f2f4] dark:bg-slate-800 p-1 rounded-xl self-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFilter('all'),
                                                            className: `px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${filter === 'all' ? 'bg-white dark:bg-slate-700 text-[#111418] dark:text-white shadow-sm' : 'text-[#637288] hover:text-[#111418] dark:hover:text-white'}`,
                                                            children: "Todos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFilter('pending'),
                                                            className: `px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${filter === 'pending' ? 'bg-white dark:bg-slate-700 text-[#111418] dark:text-white shadow-sm' : 'text-[#637288] hover:text-[#111418] dark:hover:text-white'}`,
                                                            children: "Pendientes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFilter('paid'),
                                                            className: `px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${filter === 'paid' ? 'bg-white dark:bg-slate-700 text-[#111418] dark:text-white shadow-sm' : 'text-[#637288] hover:text-[#111418] dark:hover:text-white'}`,
                                                            children: "Completados"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full min-w-[800px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-gray-50/50 dark:bg-slate-800/50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[30%]",
                                                            children: "Concepto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[20%]",
                                                            children: "Fecha Vencimiento"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[15%]",
                                                            children: "Monto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-left text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[15%]",
                                                            children: "Estado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-6 py-4 text-right text-xs font-semibold text-[#637288] dark:text-slate-500 uppercase tracking-wider w-[20%]",
                                                            children: "Acción"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-[#f0f2f4] dark:divide-slate-800",
                                                children: filteredCommitments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 5,
                                                        className: "px-6 py-10 text-center text-gray-400 dark:text-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-[48px] opacity-20",
                                                                    children: "event_busy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm",
                                                                    children: "No se encontraron compromisos en este periodo."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                    lineNumber: 301,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setFilter('all');
                                                                        setSearchTerm('');
                                                                    },
                                                                    className: "text-primary text-xs font-bold hover:underline",
                                                                    children: "Limpiar Filtros"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                    lineNumber: 302,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 41
                                                }, this) : filteredCommitments.map((item)=>{
                                                    // ... existing map
                                                    const isOverdue = new Date(item.nextDueDate) < new Date();
                                                    const isPaid = item.status === 'PAID';
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: `group hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors ${isPaid ? 'bg-gray-50/50 dark:bg-slate-900/50' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>handleEdit(item),
                                                                    className: `flex items-center gap-4 cursor-pointer ${isPaid ? 'opacity-60' : ''}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `size-10 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${isPaid ? 'bg-gray-200 dark:bg-slate-700 text-gray-500' : 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600'}`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "material-symbols-outlined text-[20px]",
                                                                                children: item.name.toLowerCase().includes('internet') ? 'wifi' : item.name.toLowerCase().includes('spotify') ? 'music_note' : item.name.toLowerCase().includes('alquiler') ? 'home' : 'event_repeat'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                                lineNumber: 321,
                                                                                columnNumber: 65
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                            lineNumber: 319,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: `text-[#111418] dark:text-white text-sm font-bold group-hover:text-primary transition-colors ${isPaid ? 'line-through decoration-slate-400' : ''}`,
                                                                                    children: item.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                                    lineNumber: 328,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[#637288] dark:text-slate-500 text-xs",
                                                                                    children: item.frequency
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                                    lineNumber: 329,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                            lineNumber: 327,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 57
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `flex items-center gap-2 w-fit px-2 py-1 rounded-md ${isPaid ? 'opacity-60 text-slate-500' : isOverdue ? 'text-orange-600 bg-orange-50 dark:bg-orange-900/20' : 'text-[#111418] dark:text-slate-300'}`,
                                                                    children: [
                                                                        isOverdue && !isPaid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "material-symbols-outlined text-[16px]",
                                                                            children: "warning"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                            lineNumber: 337,
                                                                            columnNumber: 86
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-medium",
                                                                            children: item.nextDueDate
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                            lineNumber: 338,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 57
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-base font-bold ${isPaid ? 'text-[#637288] opacity-60' : item.transaction_type === 'INCOME' ? 'text-green-600 dark:text-green-400' : 'text-[#111418] dark:text-white'}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-bold mr-0.5 opacity-70",
                                                                            children: currencySymbol
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                            lineNumber: 343,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        item.transaction_type === 'INCOME' ? '+' : '-',
                                                                        item.amount.toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 57
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${isPaid ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800' : isOverdue ? 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800' : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'}`,
                                                                    children: [
                                                                        !isPaid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `size-1.5 rounded-full ${isOverdue ? 'bg-orange-500 animate-pulse' : 'bg-slate-400'}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                            lineNumber: 354,
                                                                            columnNumber: 73
                                                                        }, this),
                                                                        isPaid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "material-symbols-outlined text-[14px]",
                                                                            children: "check"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                            lineNumber: 355,
                                                                            columnNumber: 71
                                                                        }, this) : '',
                                                                        isPaid ? 'Completado' : isOverdue ? 'Urgente' : 'Pendiente'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                    lineNumber: 348,
                                                                    columnNumber: 57
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-6 py-4 text-right",
                                                                children: isPaid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-[#637288] dark:text-slate-500 italic bg-white/50 dark:bg-slate-800/50 px-2 py-1 rounded border border-gray-100 dark:border-slate-700",
                                                                            children: "Transacción Generada"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                            lineNumber: 362,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDelete(item.id),
                                                                            className: "p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-400 hover:text-red-500",
                                                                            title: "Eliminar",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "material-symbols-outlined text-[18px]",
                                                                                children: "delete"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                                lineNumber: 364,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                            lineNumber: 363,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleEdit(item),
                                                                            className: "p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 text-[#637288]",
                                                                            title: "Ver Detalle",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "material-symbols-outlined text-[18px]",
                                                                                children: "visibility"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                                lineNumber: 367,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                            lineNumber: 366,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                    lineNumber: 361,
                                                                    columnNumber: 61
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-end gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDelete(item.id),
                                                                            className: "p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-400 hover:text-red-500 transition-colors",
                                                                            title: "Eliminar",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "material-symbols-outlined text-[20px]",
                                                                                children: "delete"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                                lineNumber: 377,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                            lineNumber: 372,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>toggleCommitmentStatus(item.id, item.status),
                                                                            className: `group/btn relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md active:scale-95 ${isOverdue ? 'bg-primary text-white hover:bg-blue-700 shadow-primary/20 hover:scale-105' : 'border border-[#dce0e5] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#111418] dark:text-white hover:text-green-600 hover:border-green-200'}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "material-symbols-outlined text-[16px]",
                                                                                    children: isOverdue ? 'payments' : 'done'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                                    lineNumber: 386,
                                                                                    columnNumber: 69
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: isOverdue ? 'Pagar Ahora' : 'Marcar Pagado'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                                    lineNumber: 387,
                                                                                    columnNumber: 69
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                            lineNumber: 379,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                    lineNumber: 371,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 49
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                    lineNumber: 284,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 border-t border-[#f0f2f4] dark:border-slate-800 flex items-center justify-center bg-gray-50/30 dark:bg-slate-900/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-[#637288] dark:text-slate-400 text-sm hover:text-primary transition-colors font-medium flex items-center gap-1 px-4 py-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg",
                                        children: [
                                            "Mostrar más compromisos",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-lg",
                                                children: "expand_more"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                                lineNumber: 402,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                                    lineNumber: 399,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                            lineNumber: 246,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                lineNumber: 112,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CommitmentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommitmentModal"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                commitmentToEdit: editingCommitment
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                lineNumber: 409,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DeleteConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteConfirmModal"], {
                isOpen: isDeleteModalOpen,
                onClose: ()=>setIsDeleteModalOpen(false),
                onConfirm: confirmDelete,
                title: "¿Eliminar Compromiso?",
                message: "Estás a punto de eliminar este compromiso permanentemente. Esta acción no se puede deshacer.",
                itemName: commitments.find((c)=>c.id === commitmentToDelete)?.name
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                lineNumber: 415,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DateRangeModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateRangeModal"], {
                isOpen: isDateModalOpen,
                onClose: ()=>setIsDateModalOpen(false),
                onApply: handleDateApply,
                initialStartDate: dateRange.start,
                initialEndDate: dateRange.end
            }, void 0, false, {
                fileName: "[project]/app/(dashboard)/commitments/page.tsx",
                lineNumber: 424,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(dashboard)/commitments/page.tsx",
        lineNumber: 111,
        columnNumber: 9
    }, this);
}
_s(Commitments, "s75Le9aKhfl5t7cjdT+4SVRbx04=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FinanceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinance"]
    ];
});
_c = Commitments;
var _c;
__turbopack_context__.k.register(_c, "Commitments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_cbcb77b8._.js.map