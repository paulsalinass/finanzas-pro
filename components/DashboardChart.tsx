"use client";

import React from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

interface DashboardChartProps {
    data: { label: string; amount: number }[];
    currencySymbol: string;
}

const DashboardChart: React.FC<DashboardChartProps> = ({ data, currencySymbol }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                    <linearGradient id="dailyExpenseGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="label" tick={{ fontSize: 10, fill: '#94a3b8' }} interval={Math.ceil(data.length / 6)} />
                <YAxis hide />
                <Tooltip
                    formatter={(value: any) => [`${currencySymbol}${Number(value).toFixed(2)}`, 'Gasto']}
                    labelFormatter={(label) => label}
                    contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
                />
                <Area type="monotone" dataKey="amount" stroke="#10B981" strokeWidth={3} fill="url(#dailyExpenseGradient)" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default DashboardChart;
