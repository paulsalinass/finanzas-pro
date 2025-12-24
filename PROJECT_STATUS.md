# Estado del Proyecto: Finanzas Pro 📊

Este documento sirve como bitácora viva del proyecto. Úsalo para entender el estado actual y registrar nuevos cambios.

## 📋 Resumen de Estado
*   **Fase**: Desarrollo / Refinamiento
*   **Última Versión Estable**: Dashboard, Cuentas y Presupuestos funcionales con lógica ajustada.

## 📝 Próximos Pasos (To-Do List)

*   [ ] **Refinamiento de UX**: Verificar consistencia de animaciones y transiciones en modales.
*   [ ] **Testing**: Validar reglas recurrentes y proyecciones a futuro.
*   [ ] **Reportes**: Implementar la página de reportes avanzados (actualmente básica).

---

## 📜 Historial de Cambios (Changelog)

Registro cronológico de cambios significativos. **Agrega tu nueva entrada al final de esta lista.**

### [2025-12-24] Ajuste de Lógica en Dashboard y Cuentas
*   **Dashboard / Saldo Total**: Corrección de cálculo.
    *   *Qué*. Se eliminó el escalado diario. Ahora es `Suma Límites Presupuestos - Gastos`.
    *   *Por qué*: El usuario reportó inconsistencia con la página de Presupuestos.
*   **Moneda**: Cambio global de "PEN" a "S/".
*   **Accounts / Patrimonio Neto**:
    *   *Qué*: Se configuró para ignorar Tarjetas de Crédito.
    *   *Por qué*: Petición de usuario para ver solo activos líquidos.
*   **Fechas**: Fix de timezone en modales de Compromisos.
*   **Archivos**: `app/(dashboard)/page.tsx`, `app/(dashboard)/accounts/page.tsx`, `components/CommitmentDetailsModal.tsx`.

### [2025-12-22] Mejoras en Modales
*   **UX**: Implementación de cierre con tecla `Escape` y click en backdrop (fuera del modal).
*   **Posicionamiento**: Centrado correcto de modales ignorando el sidebar.

---

## ⚠️ Deuda Técnica y Notas Importantes

1.  **Date Filtering implementation**:
    *   El filtro de fecha en Dashboard es global.
    *   El filtro en Compromisos solo afecta las tarjetas de resumen, no la lista (intencional).

2.  **Typescript**:
    *   Revisar definiciones de `Transaction` vs `Commitment` para unificar manejo de fechas (`date` vs `next_payment_date`).
