
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
  title = "¿Eliminar elemento?",
  message = "Estás a punto de eliminar este elemento. Esta acción no se puede deshacer.",
  itemName
}) => {
  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 bottom-0 right-0 left-0 lg:left-[var(--sidebar-width)] z-[110] flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-fade-in transition-[left] duration-300"
      onClick={onClose}
    >
      <div
        className="glass-card relative w-full max-w-md transform overflow-hidden rounded-[2.5rem] shadow-premium transition-all animate-slide-up flex flex-col items-center pt-10 pb-8 px-8 sm:px-10 border border-white/80 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon Container */}
        <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20">
          <span className="material-symbols-outlined text-[40px] text-red-500">priority_high</span>
        </div>

        {/* Headline */}
        <h3 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight text-center mb-2">
          {title}
        </h3>

        {/* Body Text */}
        <div className="text-center mb-8 px-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
            {message} {itemName && (
              <span className="font-bold text-slate-900 dark:text-white">"{itemName}"</span>
            )}
          </p>
        </div>

        {/* Button Group */}
        <div className="flex w-full gap-3">
          <button
            onClick={onClose}
            className="flex-1 cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold transition-all focus:outline-none"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="flex-1 cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-red-500 hover:bg-red-600 text-white text-sm font-bold shadow-lg shadow-red-500/30 transition-all transform active:scale-95 focus:outline-none"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
