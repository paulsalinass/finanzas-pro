import React, { useRef, useState, useEffect } from 'react';
import { X, Upload, Check } from 'lucide-react';

interface AvatarSelectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (url: string) => void;
    onUpload: (file: File) => Promise<void>;
    currentAvatarUrl?: string;
}

const MALE_AVATARS = [
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg"
];

const FEMALE_AVATARS = [
    "https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg",
    "https://img.freepik.com/free-psd/3d-view-avatar-girl-with-blue-hair_23-2150942004.jpg",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436187.jpg",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-headscarf_23-2149436190.jpg"
];

export default function AvatarSelectionModal({ isOpen, onClose, onSelect, onUpload, currentAvatarUrl }: AvatarSelectionModalProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploading, setIsUploading] = useState(false);

    // Animation states
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsClosing(false);
        } else {
            setIsClosing(true);
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

    // Close on Escape by checking the event key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    // Backdrop click handler
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            setIsUploading(true);
            await onUpload(file);
            handleClose();
        } catch (error) {
            console.error("Upload failed", error);
        } finally {
            setIsUploading(false);
        }
    };

    if (!isOpen && !isVisible) return null;

    return (
        <>
            {/* Backdrop: Covers full screen, but z-40 puts it behind z-50 Sidebar */}
            <div
                className={`fixed inset-0 z-40 bg-black/10 backdrop-blur-sm transition-opacity duration-300 ${isVisible && !isClosing ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleClose}
            />

            {/* Modal Container: Positioned to respect sidebar width on desktop, full width on mobile */}
            <div
                className={`fixed top-0 right-0 bottom-0 left-0 lg:left-[var(--sidebar-width)] z-[60] flex items-center justify-center p-4 pointer-events-none transition-all duration-300 ${isVisible && !isClosing ? 'opacity-100' : 'opacity-0'}`}
                style={{ '--sidebar-width': '280px' } as React.CSSProperties} // Fallback if var not present, though layout sets it
            >
                <div
                    className={`bg-white dark:bg-[#1e293b] rounded-[1.5rem] w-full max-w-lg shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col max-h-[90vh] pointer-events-auto transition-all duration-300 transform ${isVisible && !isClosing ? 'scale-100' : 'scale-95'}`}
                    onClick={(e) => e.stopPropagation()}
                >

                    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                        <h2 className="text-lg font-black text-slate-900 dark:text-white">Elige tu Avatar</h2>
                        <button onClick={handleClose} className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors cursor-pointer">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-5 overflow-y-auto scrollbar-hide">
                        <div className="mb-6">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                Masculinos
                            </h3>
                            <div className="grid grid-cols-4 gap-3">
                                {MALE_AVATARS.map((url, index) => (
                                    <button
                                        key={`male-${index}`}
                                        onClick={() => { onSelect(url); handleClose(); }}
                                        className={`relative group aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${currentAvatarUrl === url ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-transparent hover:border-slate-200 dark:hover:border-slate-700'}`}
                                    >
                                        <img src={url} alt={`Avatar Masculino ${index + 1}`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                        {currentAvatarUrl === url && <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center"><div className="bg-blue-500 text-white p-1 rounded-full shadow-lg"><Check size={14} strokeWidth={3} /></div></div>}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                                Femeninos
                            </h3>
                            <div className="grid grid-cols-4 gap-3">
                                {FEMALE_AVATARS.map((url, index) => (
                                    <button
                                        key={`female-${index}`}
                                        onClick={() => { onSelect(url); handleClose(); }}
                                        className={`relative group aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${currentAvatarUrl === url ? 'border-pink-500 ring-2 ring-pink-500/20' : 'border-transparent hover:border-slate-200 dark:hover:border-slate-700'}`}
                                    >
                                        <img src={url} alt={`Avatar Femenino ${index + 1}`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                        {currentAvatarUrl === url && <div className="absolute inset-0 bg-pink-500/20 flex items-center justify-center"><div className="bg-pink-500 text-white p-1 rounded-full shadow-lg"><Check size={14} strokeWidth={3} /></div></div>}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                disabled={isUploading}
                                className="w-full border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-4 flex items-center justify-center gap-3 group hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors bg-slate-50/50 dark:bg-slate-800/50 cursor-pointer"
                            >
                                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {isUploading ? <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div> : <Upload size={16} />}
                                </div>
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                    {isUploading ? 'Subiendo...' : 'Subir foto personalizada'}
                                </span>
                            </button>
                            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
