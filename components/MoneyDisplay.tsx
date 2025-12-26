import React from 'react';

interface MoneyDisplayProps {
    amount: number;
    currency?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
    weight?: 'font-medium' | 'font-semibold' | 'font-bold' | 'font-black';
    color?: string;
    autoColor?: boolean;
    symbolClassName?: string;
    amountClassName?: string;
}

export const MoneyDisplay: React.FC<MoneyDisplayProps> = ({
    amount,
    currency = 'S/',
    size = '2xl',
    weight = 'font-bold',
    color = 'text-gray-900 dark:text-white',
    autoColor = true,
    symbolClassName = '',
    amountClassName = ''
}) => {
    // Format the number to always have 2 decimal places
    const formattedAmount = new Intl.NumberFormat('es-PE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(Math.abs(amount));

    // Determine sizes based on the main size prop
    // Symbol is usually 2 steps smaller or significantly smaller
    const getSymbolSize = (s: string) => {
        switch (s) {
            case 'sm': return 'text-[10px]';
            case 'md': return 'text-xs';
            case 'lg': return 'text-sm';
            case 'xl': return 'text-base';
            case '2xl': return 'text-lg';
            case '3xl': return 'text-xl';
            case '4xl': return 'text-2xl';
            case '5xl': return 'text-3xl';
            case '6xl': return 'text-4xl';
            default: return 'text-sm';
        }
    };

    const symbolSize = getSymbolSize(size);

    return (
        <span className={`inline-flex items-baseline gap-1 ${color} ${autoColor && amount < 0 ? 'text-danger' : ''}`}>
            {amount < 0 && <span className={`${symbolSize} ${weight} mr-[1px]`}>-</span>}
            <span className={`${symbolSize} ${weight} ${symbolClassName}`}>{currency}</span>
            <span className={`text-${size} ${weight} tracking-tight ${amountClassName}`}>{formattedAmount}</span>
        </span>
    );
};
