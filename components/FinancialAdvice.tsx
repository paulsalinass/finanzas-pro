
import React, { useState, useEffect } from 'react';
import { getFinancialAdvice } from '../app/actions/getFinancialAdvice';
import { MOCK_TRANSACTIONS } from '../constants';

interface Advice {
  title: string;
  advice: string;
  impact: string;
}

export const FinancialAdvice: React.FC = () => {
  const [advices, setAdvices] = useState<Advice[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    const transactionsStr = MOCK_TRANSACTIONS.map(t => `${t.description}: ${t.amount} (${t.type})`).join('\n');
    const result = await getFinancialAdvice(transactionsStr);
    setAdvices(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 border-l-4 border-l-primary">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">auto_awesome</span>
          <h3 className="font-bold text-text-main dark:text-white">Asistente IA</h3>
        </div>
        <button
          onClick={fetchAdvice}
          disabled={loading}
          className="text-xs font-bold text-primary hover:text-primary-hover disabled:opacity-50"
        >
          {loading ? 'ANALIZANDO...' : 'REFRESCAR'}
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {advices.map((a, i) => (
            <div key={i} className="bg-white/40 dark:bg-slate-800/40 p-3 rounded-xl border border-white/50 dark:border-slate-700/50">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-bold text-primary truncate pr-2">{a.title}</p>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${a.impact === 'Alto' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
                  }`}>
                  {a.impact}
                </span>
              </div>
              <p className="text-xs text-text-muted dark:text-slate-400 line-clamp-2 leading-relaxed">{a.advice}</p>
            </div>
          ))}
          {advices.length === 0 && <p className="text-sm text-text-muted col-span-3 text-center py-2">No hay consejos disponibles en este momento.</p>}
        </div>
      )}
    </div>
  );
};
