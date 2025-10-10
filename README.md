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

## 🚀 Funciones disponibles

FenixNovaCss está dividido en módulos independientes que puedes importar según tus necesidades:

| Módulo                    | Función principal                                      |
|--------------------------|--------------------------------------------------------|
| `fenixnova.css`          | Reset base, tipografía, variables globales             |
| `fenixnova-theme.css`    | Temas: claro, oscuro, corporativo                      |
| `fenixnova-grid.css`     | Sistema de grillas: smart, fixed, dashboard            |
| `fenixnova-columns.css`  | Sistema de columnas y layouts responsivos              |
| `fenixnova-form.css`     | Componentes de formulario: input, select, textarea     |
| `fenixnova-components.css`| UI: card, modal, navbar, tabs, panel, dropdown        |
| `fenixnova-elements.css` | Elementos: botón, tag, tabla, imagen, título           |
| `fenixnova-buttons.css`  | Sistema completo de botones con variantes y estados    |
| `fenixnova-helpers.css`  | Utilidades: color, espaciado, visibilidad, flexbox     |
| `fenixnova-extend.css`   | Extensiones personalizadas                            |
| `fenixnova-mixins.scss`  | Mixins Sass para temas, breakpoints, animaciones       |
| `_fenixnova-tokens.scss` | Tokens Sass para colores, fuentes, radios, sombras     |

---

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

FenixNovaCss incluye clases utilitarias para acelerar el desarrollo:

### 🎨 Color

- `.has-text-primary`, `.has-background-success`, `.has-text-muted`, etc.

### 📏 Espaciado

- `.m-0`, `.mt-1`, `.p-0`, `.pb-1`, `.pl-1`, etc.

### ✍️ Tipografía

- `.is-uppercase`, `.is-bold`, `.has-text-centered`, `.is-small`, `.is-large`

### 👁️ Visibilidad

- `.is-hidden`, `.is-invisible`, `.is-block`, `.is-inline-flex`

### 📦 Flexbox

- `.is-flex`, `.is-justify-center`, `.is-align-start`, `.is-flex-wrap`

### 🧩 Funcionales

- `.is-clearfix` – limpia hijos flotantes
- `.is-pulled-left`, `.is-pulled-right` – flota elementos
- `.is-overlay` – cubre el contenedor padre
- `.is-clipped` – oculta overflow
- `.is-radiusless`, `.is-shadowless` – elimina estilos visuales
- `.is-unselectable` – evita selección de texto
- `.is-clickable` – aplica cursor pointer
- `.is-relative` – aplica posición relativa

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
