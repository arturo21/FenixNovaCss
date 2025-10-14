<h1 align="center">🔥 FenixNovaCss</h1>
<p align="center">
  <strong>Framework CSS modular, extensible y temático para interfaces modernas</strong><br>
  Diseñado para velocidad, claridad y personalización total.
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/FenixNovaCss-v1.0.0-brightgreen?style=for-the-badge" alt="Versión estable">
</p>

<p align="center">
  <strong>FenixNovaCss v1.0.0</strong> es la primera versión estable del framework.<br>
  Incluye todos los módulos esenciales, helpers, componentes y sistema de extensibilidad.<br>
  ¡Listo para producción y personalización avanzada!
</p>

---

## 🚀 Características principales

- 🎨 Sistema de diseño tokenizado  
  Variables visuales centralizadas para colores, tipografía, espaciado, sombras y radios  
  Archivo: `_fenixnova-tokens.css`

- 📦 Componentes visuales accesibles y responsivos  
  Botones, tarjetas, chips, modales, alertas, dropdowns, tabs, badges y más  
  Archivo: `fenixnova-components.css`

- 🧩 Helpers atómicos para layout, tipografía, color y visibilidad  
  Clases utilitarias para espaciado, alineación, display, truncado, visibilidad, etc.  
  Archivo: `fenixnova-helpers.css`

- 🧱 Sistema de grillas flexible y proporcional  
  Columnas responsivas (`.col-1` a `.col-12`), filas, contenedores y alineación  
  Archivo: `fenixnova-grid.css`

- 🧠 Mixins Sass reutilizables para estilos dinámicos  
  Patrones visuales encapsulados para botones, centrado, animaciones, etc.  
  Archivo: `fenixnova-mixins.css`

- 📝 Formularios estilizados con validación visual  
  Inputs, selects, textareas, etiquetas, retroalimentación y estados visuales  
  Archivo: `fenixnova-forms.css`

- 🎯 Extensiones visuales y utilitarias  
  Helpers para centrado, ratio, espaciado automático, truncado, altura mínima, etc.  
  Archivo: `fenixnova-extend.css`

- 🎭 Soporte para temas (modo claro/oscuro)  
  Tokens adaptativos, activación por atributo o clase, integración con componentes  
  Archivo: `fenixnova-theme.css`

- ⚙️ Estados visuales condicionales  
  Clases como `.is-active`, `.is-loading`, `.is-disabled`, `.is-focused`, `.is-selected`  
  Archivo: `fenixnova-helpers.css`


---

## 🆕 Mejoras recientes

✅ **Sistema de chips** (inspirado en Angular Material)  
- Chips básicos, seleccionables, removibles y con íconos  
- Variantes de color y layout responsivo  
- Implementado en `fenixnova-components.css`

🎭 **Soporte para temas**  
- Modo claro y oscuro con tokens adaptables  
- Activación por `[data-theme="dark"]` o `.theme-dark`  
- Implementado en `fenixnova-theme.css`

⚙️ **Sistema de estados visuales**  
- Clases como `.is-active`, `.is-disabled`, `.is-loading`, `.is-expanded`, `.is-collapsed`, `.is-focused`, `.is-selected`  
- Indicadores visuales y animaciones integradas  
- Implementado en `fenixnova-helpers.css`

📊 **Tablas accesibles y responsivas**  
- Soporte para `thead`, `tbody`, `th`, `td`, filas alternas y hover  
- Compatibilidad con Bulma (`.is-bordered`, `.is-striped`, `.is-hoverable`)  
- Tema oscuro automático con `prefers-color-scheme`  
- Implementado en `fenixnova-tables.css`

🧼 **Depuración y optimización**  
- Eliminación de clases duplicadas y redundantes  
- Consolidación de animaciones y estados visuales  
- Mejora de consistencia entre módulos

🧭 **Navbar mejorado**  
- Alineación izquierda por defecto con Flexbox  
- Separación clara entre `.navbar-brand` y `.navbar-links`  
- Estilos refinados para enlaces activos y hover  
- Implementado en `fenixnova-navigation.css`

🎨 **Paleta Fénix**  
- Nueva paleta de colores cálidos inspirada en el ave fénix  
- Tonos escarlata, volcánicos y dorados para transmitir energía y elegancia  
- Integración con tokens visuales y temas  
- Aplicable vía `:root` o tema personalizado

🧪 **Bundle experimental**  
- Módulos adicionales compilados en `fenixnova-experimental.css`  
- Incluye accesibilidad, utilidades extendidas, animaciones Sass convertidas y tema oscuro alternativo  
- Ideal para proyectos avanzados o variantes personalizadas



---

## 🚀 Módulos disponibles

FenixNovaCss está dividido en módulos independientes que puedes importar según tus necesidades:

## 📦 Módulos disponibles en FenixNovaCss

| Módulo                       | Función principal                                                  |
|-----------------------------|--------------------------------------------------------------------|
| `fenixnova-reset.css`       | Reset base universal, normalización de elementos HTML              |
| `_fenixnova-tokens.css`     | Tokens visuales: colores, tipografía, espaciado, sombras, radios   |
| `fenixnova-theme.css`       | Soporte para temas: claro, oscuro, variantes adaptativas           |
| `fenixnova-grid.css`        | Sistema de grillas proporcionales y responsivas                    |
| `fenixnova-layout.css`      | Layout estructural: columnas, filas, contenedores, alineación      |
| `fenixnova-helpers.css`     | Utilidades atómicas: espaciado, color, visibilidad, flexbox        |
| `fenixnova-extend.css`      | Extensiones visuales: centrado, ratio, truncado, altura mínima     |
| `fenixnova-forms.css`       | Formularios estilizados: inputs, selects, textareas, validación    |
| `fenixnova-buttons.css`     | Sistema completo de botones con variantes, estados y accesibilidad |
| `fenixnova-components.css`  | Componentes UI: card, modal, navbar, tabs, dropdown, chip, alertas |
| `fenixnova-navigation.css`  | Navegación: navbar, tabs, breadcrumbs, dropdowns                   |
| `fenixnova-tables.css`      | Tablas accesibles, responsivas, con soporte para temas y compatibilidad Bulma |
| `fenixnova-mixins.css`      | Mixins Sass reutilizables para patrones visuales                   |
| `fenixnova.entry.css`       | Punto de entrada para compilar todos los módulos                   |
| `fenixnova-experimental.css`| Bundle extendido: accesibilidad, animaciones, tema fénix, utilidades |

## 🎨 Clases disponibles

FenixNovaCss incluye clases semánticas y utilitarias para construir interfaces limpias y escalables:

### Componentes

- `.card`, `.modal`, `.navbar`, `.tabs`, `.panel`, `.dropdown`, `.message`
- `.form`, `.input`, `.select`, `.textarea`, `.checkbox`, `.radio`, `.file-input`
- `.button`, `.button-outline`, `.button-ghost`, `.button-link`, `.button-success`, etc.

### Elementos

- `.tag`, `.table`, `.title`, `.subtitle`, `.image`, `.icon`, `.progress`, `.content`, `.delete`

---

## 🧩 Helpers disponibles

FenixNovaCss incluye clases utilitarias para acelerar el desarrollo y mantener el código limpio y modular:

### 🎨 Color

- `.text-primary`, `.bg-success`, `.text-muted`, `.bg-warning`, `.text-danger`, etc.
- `.has-text-primary`, `.has-background-success` (compatibilidad extendida)

### 📏 Espaciado

- `.m-0`, `.mt-sm`, `.mb-md`, `.p-0`, `.pl-lg`, `.px-auto`, etc.
- Soporte para espaciado proporcional (`sm`, `md`, `lg`, `xl`) y automático (`auto`)

### ✍️ Tipografía

- `.is-uppercase`, `.is-bold`, `.text-center`, `.text-start`, `.text-end`
- `.text-small`, `.text-large`, `.text-responsive`

### 👁️ Visibilidad

- `.is-hidden`, `.is-invisible`, `.d-block`, `.d-inline-flex`, `.d-none`
- `.is-visible`, `.is-clipped`, `.is-overlay`

### 📦 Flexbox

- `.d-flex`, `.flex-wrap`, `.flex-nowrap`, `.flex-column`, `.flex-row`
- `.justify-start`, `.justify-center`, `.justify-end`
- `.align-start`, `.align-center`, `.align-end`

### 🧩 Funcionales

- `.is-clearfix` – limpia hijos flotantes
- `.is-pulled-left`, `.is-pulled-right` – flota elementos
- `.is-overlay` – cubre el contenedor padre
- `.is-clipped` – oculta overflow
- `.is-radiusless`, `.is-shadowless` – elimina estilos visuales
- `.is-unselectable` – evita selección de texto
- `.is-clickable` – aplica cursor pointer
- `.is-relative`, `.is-absolute`, `.is-fixed` – posicionamiento

---

## 🧬 Extensibilidad

FenixNovaCss está diseñado para ser extendido fácilmente:

- 🔧 Usa `fenixnova-extend.css` para tus propios estilos
- 🎛️ Redefine tokens en `:root` o `_fenixnova-tokens.scss`
- 🧪 Usa mixins Sass para crear componentes reutilizables
- 🎨 Aplica scope con variables CSS por componente

```css
:root {
  --fenixnova-size-medium: 1.25rem;
}

.button {
  --fenixnova-size-medium: 1.5rem;
  font-size: var(--fenixnova-size-medium);
}
