# Finanzas Pro 💰

> **Versión**: 1.0.0
> **Estado**: En Desarrollo Activo
> **Tech Stack**: Next.js 14, TypeScript, Supabase, Tailwind CSS

Una aplicación integral de gestión financiera personal diseñada para ofrecer control total sobre transacciones, presupuestos, patrimonio y compromisos recurrentes, con una experiencia de usuario premium y moderna.

---

## 🏗️ Estructura del Proyecto

El proyecto sigue la arquitectura de **Next.js App Router**:

```
finanzas-pro/
├── app/                    # Rutas y Páginas (App Router)
│   ├── (dashboard)/        # Layout principal autenticado
│   │   ├── accounts/       # Gestión de Cuentas y Patrimonio
│   │   ├── budgets/        # Presupuestos Mensuales
│   │   ├── commitments/    # Compromisos y Pagos Recurrentes
│   │   └── page.tsx        # Dashboard Principal (Visión General)
│   ├── actions/            # Server Actions (Lógica Backend)
│   └── layout.tsx          # Root Layout
├── components/             # Componentes UI Reutilizables
│   ├── books/              # Componentes de Libros Contables
│   ├── categories/         # Gestión de Categorías
│   └── [Modals].tsx        # Modales de Transacciones, Presupuestos, etc.
├── context/                # Estado Global (FinanceContext)
├── types/                  # Definiciones TypeScript
└── utils/                  # Helpers (Formato, Fechas)
```

## 🗄️ Esquema de Base de Datos (Supabase)

Principales tablas y relaciones:

*   **`profiles`**: Usuarios registrados.
*   **`ledgers`**: Libros contables (multi-moneda, separación de finanzas).
*   **`accounts`**: Cuentas reales (Bancos, Efectivo, Tarjetas).
*   **`categories`**: Categorización de gastos/ingresos (con iconos y colores).
*   **`transactions`**: Registro histórico de movimientos.
*   **`budgets`**: Límites de gasto por categoría y periodo.
*   **`commitments`**: Obligaciones financieras futuras (Deudas/Facturas).

## � Configuración de Desarrollo

### 1. Variables de Entorno
Crea un archivo `.env.local` en la raíz con las siguientes claves:

```env
NEXT_PUBLIC_SUPABASE_URL="https://tu-proyecto.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="tu-clave-anonima"
```

### 2. Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

---

## 🤝 Workflow de Desarrollo

Para mantener el orden y facilitar el trabajo colaborativo (o futuro del mismo desarrollador), se ha establecido el siguiente flujo de trabajo estricto:

### 📜 Regla de Oro: Registro de Cambios

**CADA VEZ que se complete una tarea, funcionalidad o corrección significativa, se DEBE actualizar el archivo `PROJECT_STATUS.md`.**

#### ¿Qué registrar?
1.  **Cambios de Lógica**: Si cambiaste cómo se calcula un saldo o una fecha.
2.  **Nuevas Funcionalidades**: Si agregaste una página o un modal nuevo.
3.  **Correcciones de Bugs**: Si arreglaste un error crítico.

#### ¿Cómo registrarlo?
Ve al archivo [PROJECT_STATUS.md](./PROJECT_STATUS.md) y agrega una nueva entrada en la sección "Historial de Cambios (Changelog)" siguiendo este formato:

```markdown
### [YYYY-MM-DD] Título del Cambio
*   **Qué se hizo**: Breve descripción.
*   **Por qué**: Razón del cambio (ej. "El usuario pidió ignorar deudas en Patrimonio").
*   **Archivos afectados**: Lista rápida de archivos clave.
```

---

## 🎨 Decisiones de Diseño y Lógica Clave

### 1. Manejo de Fechas
Se utiliza un parseo manual `new Date(year, month-1, day)` para fechas tipo `YYYY-MM-DD` que vienen de la base de datos o inputs, evitando el desfase de zona horaria (UTC vs Local) que ocurre con `new Date(string)`.

### 2. Lógica de "Saldo Total" (Dashboard)
El "Saldo Total" en el Dashboard se calcula como **Presupuesto Total Planeado (Suma de Límites) - Gastos Reales**.
*   *Nota*: No escala por días transcurridos. Muestra el disponible total del mes.

### 3. Patrimonio Neto (Cuentas)
El cálculo es `Activos Líquidos (Efectivo + Bancos)`.
*   *Excepción*: Se ignora explícitamente la deuda de Tarjetas de Crédito a petición del usuario para mostrar "liquidez real".

### 4. Moneda
Estandarizado visualmente a **"S/"** (Nuevo Sol Peruano) en toda la UI.
