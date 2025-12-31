"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useFinance } from '@/context/FinanceContext';
import AvatarSelectionModal from '@/components/AvatarSelectionModal';
import {
    User,
    Mail,
    Shield,
    MapPin,
    Globe,
    Bell,
    Camera,
    CheckCircle2,
    Award,
    Lock,
    Smartphone,
    Eye,
    EyeOff,
    Save,
    X
} from 'lucide-react';
import { COUNTRIES, LOCATIONS, CITY_COORDINATES } from '@/constants/locations';

export default function ProfilePage() {
    // State for form fields
    const { userProfile, updateUserProfile, uploadAvatar } = useFinance();
    const [formData, setFormData] = useState({
        fullName: userProfile?.full_name || '',
        username: userProfile?.username || '',
        email: userProfile?.email || '',
        phone: userProfile?.phone || '',
        bio: userProfile?.bio || '',
        avatarUrl: userProfile?.avatar_url || '',
        currentPassword: '',
        newPassword: '',
        language: userProfile?.language || 'es',
        currency: userProfile?.currency || 'PEN',
        timezone: 'America/Lima', // Not yet in DB
        country: userProfile?.country || 'Peru',
        city: userProfile?.city || 'Lima',
        notifications: userProfile?.notifications_enabled ?? true,
        twoFactor: userProfile?.two_factor_enabled ?? false,
        location_lat: userProfile?.location_lat ?? null,
        location_lng: userProfile?.location_lng ?? null,
        is_location_enabled: userProfile?.is_location_enabled ?? false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
    const [isLocationLoading, setIsLocationLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (userProfile) {
            setFormData(prev => ({
                ...prev,
                fullName: userProfile.full_name || prev.fullName,
                username: userProfile.username || prev.username,
                email: userProfile.email || prev.email,
                phone: userProfile.phone || prev.phone,
                bio: userProfile.bio || prev.bio,
                avatarUrl: userProfile.avatar_url || prev.avatarUrl,
                language: userProfile.language || prev.language,
                currency: userProfile.currency || prev.currency,
                country: userProfile.country || prev.country,
                city: userProfile.city || prev.city,
                notifications: userProfile.notifications_enabled ?? prev.notifications,
                twoFactor: userProfile.two_factor_enabled ?? prev.twoFactor,
                location_lat: userProfile.location_lat ?? prev.location_lat,
                location_lng: userProfile.location_lng ?? prev.location_lng,
                is_location_enabled: userProfile.is_location_enabled ?? prev.is_location_enabled
            }));
        }
    }, [userProfile]);

    // Handle changes
    const handleChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setIsDirty(true);
    };

    const handleAvatarSelect = (url: string) => {
        handleChange('avatarUrl', url);
    };

    const handleAvatarUpload = async (file: File) => {
        try {
            const url = await uploadAvatar(file);
            if (url) {
                handleChange('avatarUrl', url);
            }
        } catch (error) {
            console.error("Failed to upload avatar", error);
            alert("Error subiendo imagen");
        }
    };

    const handleCountryChange = (countryCode: string) => {
        // Reset city when country changes, default to first available city or empty
        const availableCities = LOCATIONS[countryCode] || [];
        // Keep current city if it exists in new country (unlikely but possible), otherwise pick first
        const newCity = availableCities.length > 0 ? availableCities[0] : '';

        setFormData(prev => ({
            ...prev,
            country: countryCode,
            city: newCity
        }));
    };

    const handleGetLocation = () => {
        if (!navigator.geolocation) {
            alert("Tu navegador no soporta geolocalización");
            return;
        }

        setIsLocationLoading(true);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setFormData(prev => ({
                    ...prev,
                    location_lat: latitude,
                    location_lng: longitude,
                    is_location_enabled: true
                }));
                setIsLocationLoading(false);
                setIsDirty(true);
            },
            (error) => {
                console.error("Error getting location", error);
                let errorMessage = "No se pudo obtener la ubicación.";

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = "Permiso denegado. Por favor habilita el acceso a la ubicación en tu navegador.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = "La información de ubicación no está disponible (GPS no detectado).";
                        break;
                    case error.TIMEOUT:
                        errorMessage = "Se agotó el tiempo de espera para obtener la ubicación.";
                        break;
                    default:
                        errorMessage = "Ocurrió un error desconocido al obtener la ubicación.";
                }

                // Fallback attempt
                if (formData.city && CITY_COORDINATES[formData.city]) {
                    const fallback = CITY_COORDINATES[formData.city];
                    setFormData(prev => ({
                        ...prev,
                        location_lat: fallback.lat,
                        location_lng: fallback.lng,
                        is_location_enabled: true
                    }));
                    setIsDirty(true);
                    errorMessage += `\n\n📌 Solución: Se ha usado la ubicación aproximada de ${formData.city}.`;
                } else {
                    errorMessage += "\n\nIntenta seleccionar manualmente o asegúrate de que tu navegador tenga permisos de ubicación.";
                }

                alert(errorMessage);
                setIsLocationLoading(false);
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    };

    const handleSave = async () => {
        await updateUserProfile({
            full_name: formData.fullName,
            username: formData.username,
            email: formData.email,
            phone: formData.phone,
            bio: formData.bio,
            avatar_url: formData.avatarUrl,
            language: formData.language,
            currency: formData.currency,
            country: formData.country,
            city: formData.city,
            notifications_enabled: formData.notifications,
            two_factor_enabled: formData.twoFactor,
            location_lat: formData.location_lat,
            location_lng: formData.location_lng,
            is_location_enabled: formData.is_location_enabled
        });
        setIsDirty(false);
    };

    return (
        <div className="flex-1 w-full h-full overflow-y-auto scrollbar-hide pb-28 lg:pb-8">
            <div className="max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col gap-8">

                {/* Header */}
                <header className="flex flex-wrap items-end justify-between gap-4 pt-4 md:pt-0 animate-fade-in">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Perfil de Usuario</h1>
                        <p className="text-slate-500 dark:text-slate-400/80 text-base font-normal max-w-lg">Gestiona tu información personal y preferencias de seguridad.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsDirty(false)} // Reset (mock)
                            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                        >
                            <X size={18} strokeWidth={2.5} />
                            <span>Cancelar</span>
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={!isDirty}
                            className={`px-6 py-2.5 rounded-xl font-bold text-white shadow-lg shadow-primary/25 transition-all flex items-center gap-2 ${isDirty ? 'bg-gradient-primary hover:shadow-primary/40 hover:-translate-y-0.5' : 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed shadow-none'}`}
                        >
                            <Save size={18} strokeWidth={2.5} />
                            <span>Guardar Cambios</span>
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN: Avatar & Account Status */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Main Card */}
                        <div className="bg-white dark:bg-[#1e293b] rounded-[2rem] p-8 shadow-premium border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center relative overflow-hidden">

                            {/* Background Pattern */}
                            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5"></div>

                            <div className="relative group mb-6 mt-4">
                                <div className="w-40 h-40 rounded-full p-2 bg-white dark:bg-[#1e293b] ring-4 ring-indigo-50 dark:ring-slate-700 shadow-xl">
                                    <img
                                        src={formData.avatarUrl || "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg"}
                                        alt="Profile"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <button
                                    onClick={() => setIsAvatarModalOpen(true)}
                                    className="absolute bottom-2 right-2 p-3 rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:scale-110 transition-transform cursor-pointer"
                                >
                                    <Camera size={20} strokeWidth={2.5} />
                                </button>
                            </div>

                            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{formData.fullName}</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">{formData.email}</p>

                            <button
                                onClick={() => setIsAvatarModalOpen(true)}
                                className="w-full py-3 rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold hover:bg-indigo-100 dark:hover:bg-slate-700 transition-colors"
                            >
                                Cambiar Avatar
                            </button>
                        </div>

                        {/* Account Status */}
                        <div className="bg-white dark:bg-[#1e293b] rounded-[2rem] p-8 shadow-premium border border-slate-100 dark:border-slate-800 space-y-5">
                            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                Estado de la cuenta
                            </h3>

                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                                <div className="p-2.5 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-300">
                                    <CheckCircle2 size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-emerald-900 dark:text-emerald-100 text-sm">Verificada</h4>
                                    <p className="text-xs text-emerald-700 dark:text-emerald-400">Identidad confirmada</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 relative overflow-hidden">
                                <div className="p-2.5 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 relative z-10">
                                    <Award size={24} strokeWidth={2.5} />
                                </div>
                                <div className="relative z-10 flex-1">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-bold text-blue-900 dark:text-blue-100 text-sm">Plan Pro</h4>
                                        <a href="#" className="text-xs font-bold text-blue-600 hover:underline">Gestionar</a>
                                    </div>
                                    <p className="text-xs text-blue-700 dark:text-blue-400">Renueva el 12 Oct</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Forms */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* Personal Information */}
                        <div className="bg-white dark:bg-[#1e293b] rounded-[2rem] p-8 shadow-premium border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    Información Personal
                                </h3>
                                <User size={20} className="text-slate-400" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Nombre completo</label>
                                    <input
                                        type="text"
                                        value={formData.fullName}
                                        onChange={(e) => handleChange('fullName', e.target.value)}
                                        className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Nombre de usuario</label>
                                    <input
                                        type="text"
                                        value={formData.username}
                                        onChange={(e) => handleChange('username', e.target.value)}
                                        className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 mb-6">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Correo electrónico</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                    />
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                </div>
                            </div>

                            <div className="space-y-2 mb-6">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Número de teléfono</label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        placeholder="+51 999 999 999"
                                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                    />
                                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Biografía corta</label>
                                <textarea
                                    value={formData.bio}
                                    onChange={(e) => handleChange('bio', e.target.value)}
                                    className="w-full h-28 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 resize-none"
                                />
                            </div>
                        </div>

                        {/* Security */}
                        <div className="bg-white dark:bg-[#1e293b] rounded-[2rem] p-8 shadow-premium border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    Seguridad & Contraseña
                                </h3>
                                <Lock size={20} className="text-slate-400" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Contraseña actual</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={formData.currentPassword}
                                            onChange={(e) => handleChange('currentPassword', e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full h-12 pl-4 pr-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                        />
                                        <button
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Nueva contraseña</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={formData.newPassword}
                                            onChange={(e) => handleChange('newPassword', e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full h-12 pl-4 pr-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                                <div className="p-3 bg-orange-100 dark:bg-orange-800/50 rounded-full text-orange-600 dark:text-orange-400">
                                    <Shield size={24} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Autenticación de dos factores (2FA)</h4>
                                    <p className="text-sm text-orange-800/80 dark:text-orange-200/60 leading-relaxed max-w-lg">
                                        Añade una capa extra de seguridad a tu cuenta mediante verificación por SMS o App.
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleChange('twoFactor', !formData.twoFactor)}
                                    className="text-orange-600 dark:text-orange-400 font-bold text-sm hover:underline whitespace-nowrap"
                                >
                                    {formData.twoFactor ? 'Configurada' : 'Configurar 2FA'}
                                </button>
                            </div>
                        </div>

                        {/* Preferences */}
                        <div className="bg-white dark:bg-[#1e293b] rounded-[2rem] p-8 shadow-premium border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    Preferencias
                                </h3>
                                <Globe size={20} className="text-slate-400" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Idioma</label>
                                    <div className="relative">
                                        <select
                                            value={formData.language}
                                            onChange={(e) => handleChange('language', e.target.value)}
                                            className="w-full h-12 pl-4 pr-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="es">Español</option>
                                            <option value="en">English</option>
                                            <option value="pt">Português</option>
                                        </select>
                                        <Globe className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Divisa Predeterminada</label>
                                    <div className="relative">
                                        <select
                                            value={formData.currency}
                                            onChange={(e) => handleChange('currency', e.target.value)}
                                            className="w-full h-12 pl-4 pr-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="PEN">Sol Peruano (PEN)</option>
                                            <option value="USD">Dólar (USD)</option>
                                            <option value="EUR">Euro (EUR)</option>
                                            <option value="MXN">Peso Mexicano (MXN)</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs font-black">
                                            {formData.currency}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                            <Bell size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Notificaciones por Correo</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Recibe resúmenes semanales y alertas de seguridad.</p>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => handleChange('notifications', !formData.notifications)}
                                        className={`w-12 h-7 rounded-full p-1 cursor-pointer transition-colors ${formData.notifications ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'}`}
                                    >
                                        <div className={`size-5 bg-white rounded-full shadow-sm transition-transform ${formData.notifications ? 'translate-x-5' : ''}`} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin size={20} className="text-slate-400" />
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Ubicación y Zona Horaria</h4>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">País</label>
                                        <select
                                            value={formData.country}
                                            onChange={(e) => handleCountryChange(e.target.value)}
                                            className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            {COUNTRIES.map((country) => (
                                                <option key={country.code} value={country.code}>
                                                    {country.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Provincia / Ciudad</label>
                                        <select
                                            value={formData.city}
                                            onChange={(e) => handleChange('city', e.target.value)}
                                            className="w-full h-12 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                                            disabled={!formData.country || !LOCATIONS[formData.country]}
                                        >
                                            {!formData.country ? (
                                                <option value="">Selecciona un país primero</option>
                                            ) : (
                                                LOCATIONS[formData.country]?.map((city) => (
                                                    <option key={city} value={city}>
                                                        {city}
                                                    </option>
                                                )) || <option value="">Sin opciones disponibles</option>
                                            )}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">Seleccionar en Mapa</label>
                                        <div className="flex items-center gap-2">
                                            <label className="text-xs text-slate-500 dark:text-slate-400 font-medium">Rastrear automáticamente</label>
                                            <div
                                                className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${formData.is_location_enabled ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}
                                                onClick={() => setFormData(p => ({ ...p, is_location_enabled: !p.is_location_enabled }))}
                                            >
                                                <div className={`size-4 bg-white rounded-full shadow-sm transition-transform ${formData.is_location_enabled ? 'translate-x-4' : 'translate-x-0'}`}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={handleGetLocation}
                                        className="w-full h-48 rounded-2xl overflow-hidden relative group cursor-pointer border border-slate-200 dark:border-slate-700"
                                    >
                                        {/* Map Placeholder Image */}
                                        <img
                                            src={formData.location_lat
                                                ? `https://api.mapbox.com/styles/v1/mapbox/light-v10/static/${formData.location_lng},${formData.location_lat},15,0/800x400?access_token=placeholder`
                                                : "https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-77.0428,38.9008,12,0/800x400?access_token=placeholder"
                                            }
                                            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                            alt="Ubicación en mapa"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.style.backgroundColor = '#e2e8f0';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>

                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 group-hover:scale-110 transition-transform">
                                            <MapPin size={18} className={formData.location_lat ? "text-primary fill-primary/20" : "text-red-500 fill-red-500/20"} />
                                            <span className="text-xs font-bold text-slate-900 dark:text-white">
                                                {isLocationLoading ? "Obteniendo..." : (formData.location_lat ? "Ubicación Establecida" : "Establecer Ubicación Actual")}
                                            </span>
                                        </div>

                                        {formData.location_lat && (
                                            <div className="absolute bottom-2 left-2 bg-white/80 dark:bg-slate-900/80 px-2 py-1 rounded text-[10px] text-slate-600 dark:text-slate-400">
                                                {formData.location_lat.toFixed(4)}, {formData.location_lng?.toFixed(4)}
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-xs text-slate-500 text-center mt-1">Haga clic en el mapa para ajustar su ubicación precisa.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Modal */}
            <AvatarSelectionModal
                isOpen={isAvatarModalOpen}
                onClose={() => setIsAvatarModalOpen(false)}
                onSelect={handleAvatarSelect}
                onUpload={handleAvatarUpload}
                currentAvatarUrl={formData.avatarUrl}
            />
        </div>
    );
}
