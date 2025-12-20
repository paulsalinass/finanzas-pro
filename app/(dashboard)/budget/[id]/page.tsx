"use client";

import React from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function BudgetDetail() {
    const router = useRouter();
    const params = useParams();
    const { id } = params;

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-10">
            <h1 className="text-2xl font-bold mb-4">Detalle de Presupuesto {id}</h1>
            <p className="text-gray-500 mb-8">Esta página está en construcción o no se pudo cargar el contenido original.</p>
            <button
                onClick={() => router.back()}
                className="px-6 py-2 bg-primary text-white rounded-xl hover:bg-primary-hover transition-colors"
            >
                Volver
            </button>
        </div>
    );
}
