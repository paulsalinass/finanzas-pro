"use client";

import React from 'react';
import * as Icons from "lucide-react";

export function CategoryIcon({ icon, className }: { icon: string, className?: string }) {
    const LucideIcon = (Icons as any)[icon];
    if (LucideIcon) {
        return <LucideIcon className={className} />;
    }
    return <span className={`material-symbols-outlined ${className} !text-[inherit]`}>{icon}</span>
}
