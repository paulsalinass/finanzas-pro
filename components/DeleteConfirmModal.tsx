
import React from 'react';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  itemName?: string;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirmar Eliminación",
  message = "¿Estás seguro de que deseas eliminar este elemento?",
  itemName
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div className="glass-card relative w-full max-w-md transform overflow-hidden rounded-[2.5rem] shadow-premium transition-all animate-slide-up flex flex-col items-center pt-10 pb-8 px-8 sm:px-10 border border-white/80 dark:border-slate-800">
        {/* Icon Container */}
        <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-danger/10 shadow-inner">
          <span className="material-symbols-outlined text-[48px] text-danger">delete_forever</span>
        </div>

        {/* Headline */}
        <h3 className="text-slate-900 dark:text-white text-2xl font-black tracking-tight text-center mb-3 uppercase">
          {title}
        </h3>

        {/* Body Text */}
        <div className="text-center mb-8">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
            {message} {itemName && (
              <span className="font-black text-slate-900 dark:text-white">"{itemName}"</span>
            )}
            ? Esta acción no se puede deshacer y afectará tus reportes actuales.
          </p>
        </div>

        {/* Button Group */}
        <div className="flex flex-col-reverse sm:flex-row w-full gap-3 sm:gap-4">
          <button 
            onClick={onClose}
            className="flex-1 cursor-pointer items-center justify-center rounded-2xl h-14 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 text-xs font-black uppercase tracking-widest transition-all focus:outline-none"
          >
            Cancelar
          </button>
          <button 
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="flex-1 cursor-pointer items-center justify-center rounded-2xl h-14 px-6 bg-danger hover:bg-red-600 text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-danger/30 transition-all transform active:scale-95 focus:outline-none"
          >
            Confirmar Eliminación
          </button>
        </div>
      </div>
    </div>
  );
};
