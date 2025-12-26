"use client";

import React from 'react';
import * as Icons from "lucide-react";

export function CategoryIcon({ icon, className }: { icon: string, className?: string }) {
    const LucideIcon = (Icons as any)[icon];
    if (LucideIcon) {
        return <LucideIcon className={className} />;
    }

    // Simple check: if it contains non-alphanumeric/underscore characters, assume it's an emoji
    // Material icons are usually snake_case words. Emojis are unicode.
    const isEmoji = !/^[a-z0-9_]+$/.test(icon);

    if (isEmoji) {
        return <span className={`${className} inline-flex items-center justify-center leading-none grayscale-0 pb-[2px]`}>{icon}</span>
    }

    return <span className={`material-symbols-outlined ${className} !text-[inherit] inline-flex items-center justify-center leading-none pb-[2px]`}>{icon}</span>
}
