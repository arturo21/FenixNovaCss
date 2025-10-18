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
# 📊 Comparativa:
# FenixNovaCss vs Tailwind CSS vs Bulma.io

Este cuadro destaca las características que hacen de **FenixNovaCss** una opción viable frente a **Tailwind CSS** y **Bulma.io**, especialmente en contextos educativos, culturales y creativos.

| Característica                        | 🟣 FenixNovaCss                          | 🔵 Tailwind CSS                          | 🟢 Bulma.io                              |
|--------------------------------------|-----------------------------------------|------------------------------------------|------------------------------------------|
| 🧱 Filosofía de diseño                | Modular + semántica + utilitario         | Utilitario puro                          | Semántico + componentes predefinidos     |
| 🎨 Personalización visual            | Tokens CSS (`--color`, `--spacing`)     | Config JS (`tailwind.config.js`)         | Variables Sass (`$primary`, `$spacing`)  |
| 🧩 Modularidad                       | Archivos por función (`slider.css`, etc.) | Clases utilitarias + plugins             | Componentes agrupados (`navbar`, `card`) |
| 🧠 Accesibilidad integrada           | Roles ARIA + estructura semántica       | Clases como `sr-only`, `focus:outline`   | Buen soporte básico                      |
| 📐 Responsividad                     | Clases semánticas + variantes (`.responsive-md`) | Breakpoints (`md:`, `lg:`)               | Clases como `is-mobile`, `is-desktop`    |
| 🧬 Soporte para contenido complejo   | Slides con formularios, CTAs, layouts   | Requiere composición manual              | Limitado a componentes visuales          |
| 🧠 Enfoque pedagógico                | Pensado para educadores y creadores     | Enfocado en desarrolladores              | Enfocado en diseño rápido                |
| 🧩 Integración con JS modular        | `general.js` con módulos encadenables   | Alpine.js, React, Vue                    | JS opcional para algunos componentes     |
| 🌙 Soporte de temas                  | Claro/oscuro con `data-theme` + tokens  | `darkMode: 'class'` o `media`            | Requiere personalización Sass            |
| 📚 Documentación con propósito           | README.md con simbolismo y contexto     | Técnica y extensa                        | Clara pero más técnica                   |
| 🇻🇪 Enfoque cultural                 | Adaptado a contextos latinos y educativos | Global y técnico                         | Global y visual                          |

---

## ✅ ¿Por qué elegir FenixNovaCss?

- Diseñado para **educadores, creadores y desarrolladores** que valoran la semántica, la accesibilidad y la estética del código.
- Permite **estructuras HTML complejas** dentro de sliders, formularios y layouts sin romper el diseño.
- Ofrece una experiencia **modular, documentada y adaptable** para proyectos con propósito cultural, pedagógico o comunitario.

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

## 🔠 Jerarquía tipográfica en FenixNovaCss

### 🧱 Títulos (`.text-heading-*`)

| Clase               | Tamaño base | Peso | Uso recomendado                                 |
|---------------------|-------------|------|--------------------------------------------------|
| `.text-heading-xxl` | `3rem`      | 700  | Título de portada o banner editorial             |
| `.text-heading-xl`  | `2.5rem`    | 700  | Encabezado principal de sección                  |
| `.text-heading-lg`  | `1.75rem`   | 600  | Subsección destacada                             |
| `.text-heading-md`  | `1.25rem`   | 600  | Título de componente o bloque interno            |
| `.text-heading-sm`  | `1rem`      | 600  | Encabezado de tarjeta o columna                  |
| `.text-heading-xs`  | `0.875rem`  | 600  | Etiquetas, metadatos o encabezados menores       |

---

### ✍️ Subtítulos (`.text-subtitle`)

| Clase            | Tamaño base | Peso | Uso recomendado                          |
|------------------|-------------|------|-------------------------------------------|
| `.text-subtitle` | `1.5rem`    | 500  | Descripción introductoria o subtítulo     |

---

### 📄 Cuerpo de texto (`.text-body-*`)

| Clase             | Tamaño base | Peso | Uso recomendado                          |
|-------------------|-------------|------|-------------------------------------------|
| `.text-body-lg`   | `1.25rem`   | 400  | Texto destacado o párrafo amplio          |
| `.text-body`      | `1rem`      | 400  | Texto estándar para contenido editorial   |
| `.text-small`     | `0.875rem`  | 400  | Texto auxiliar, notas, pie de página      |

---

### 🎨 Variantes de color

| Clase           | Color aplicado     | Uso recomendado                          |
|------------------|--------------------|-------------------------------------------|
| `.text-muted`    | `#777`             | Texto secundario o desactivado            |
| `.text-accent`   | `#c0392b`          | Énfasis visual o emocional                |
| `.text-light`    | `#f9f9f9`          | Sobre fondos oscuros                      |
| `.text-dark`     | `#111`             | Sobre fondos claros                       |

---

### 📐 Alineación

| Clase           | Propiedad CSS     | Uso recomendado                          |
|------------------|--------------------|-------------------------------------------|
| `.text-center`   | `text-align: center` | Centrado horizontal                      |
| `.text-left`     | `text-align: left`   | Alineado a la izquierda                  |
| `.text-right`    | `text-align: right`  | Alineado a la derecha                    |



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
```

# 🎛️ Ejemplos de uso – Componentes estructurales Fénix Nova CSS

---

## 🔽 Accordion

```html
<div class="nova-accordion">
  <div class="nova-accordion-header" onclick="this.parentNode.classList.toggle('active')">
    ¿Qué es Fénix Nova?
  </div>
  <div class="nova-accordion-content">
    <p>Fénix Nova es un sistema de estilos modular, pedagógico y visualmente claro.</p>
  </div>
</div>
```
## 🔽 Tabs

```html
<div class="nova-tabs">
  <div class="nova-tab active" onclick="activateTab(0)">Ficha</div>
  <div class="nova-tab" onclick="activateTab(1)">Narrador</div>
  <div class="nova-tab" onclick="activateTab(2)">Evaluador</div>
</div>

<div class="nova-tab-content active">
  <p>Contenido de la ficha pedagógica.</p>
</div>
<div class="nova-tab-content">
  <p>Contenido del narrador visual.</p>
</div>
<div class="nova-tab-content">
  <p>Contenido del evaluador interactivo.</p>
</div>

<script>
  function activateTab(index) {
    document.querySelectorAll('.nova-tab').forEach((tab, i) =>
      tab.classList.toggle('active', i === index)
    );
    document.querySelectorAll('.nova-tab-content').forEach((content, i) =>
      content.classList.toggle('active', i === index)
    );
  }
</script>
```

## 💬 Tooltip
```html
<div class="nova-tooltip">
  <button class="nova-btn">¿Qué es esto?</button>
  <div class="nova-tip">Es un botón interactivo con estilo Nova.</div>
</div>
```

## 🔔 Toast
```html
<div class="nova-toast-container" id="toastZone"></div>

<script>
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'nova-toast';
    toast.textContent = message;
    document.getElementById('toastZone').appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }

  // Ejemplo de activación
  showToast("Ficha guardada correctamente.");
</script>
```

## ProgressBar
```html
<div class="nova-progress" id="progressContainer">
  <div class="nova-progress-bar" id="progressBar"></div>
  <div class="nova-progress-label" id="progressLabel">0%</div>
</div>

<script>
  function updateProgress(percent) {
    const bar = document.getElementById('progressBar');
    const label = document.getElementById('progressLabel');
    bar.style.width = percent + '%';
    label.textContent = percent + '%';
  }

  // Ejemplo de actualización
  updateProgress(65); // actualiza a 65%
</script>
```

## Slide Toggle

```html
  <label class="nova-slide-toggle">
    <input type="checkbox" id="toggleDemo" />
    <div class="nova-slide-track">
      <div class="nova-slide-thumb"></div>
    </div>
  </label>
```

## SnackBar

```html
  <!-- Contenedor global -->
  <div class="nova-snackbar-container" id="snackbarZone"></div>

  <script>
    function showSnackbar(message) {
      const snackbar = document.createElement('div');
      snackbar.className = 'nova-snackbar';
      snackbar.textContent = message;
      document.getElementById('snackbarZone').appendChild(snackbar);
      setTimeout(() => snackbar.remove(), 4000);
    }

    // Ejemplo de activación
    showSnackbar("Ficha guardada correctamente.");
  </script>
```

## DatePicker

```html
  <!-- Contenedor global -->
  <div class="nova-datepicker" id="datepicker">
    <input type="text" readonly placeholder="Selecciona una fecha" />
    <div class="nova-calendar">
      <div class="nova-calendar-header">
        <span class="nova-calendar-nav" id="prevMonth">&lt;</span>
        <span id="monthLabel">Octubre 2025</span>
        <span class="nova-calendar-nav" id="nextMonth">&gt;</span>
      </div>
      <div class="nova-calendar-grid" id="calendarDays"></div>
    </div>
  </div>
  <script>
      /***************CALENDAR**************/
      const datepicker = document.getElementById("datepicker");
      const input = datepicker.querySelector("input");
      const calendar = datepicker.querySelector(".nova-calendar");
      const calendarDays = datepicker.querySelector("#calendarDays");
      const monthLabel = datepicker.querySelector("#monthLabel");

      let currentDate = new Date();

      function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        calendarDays.innerHTML = "";
        for (let i = 0; i < firstDay; i++) {
          calendarDays.innerHTML += `<div></div>`;
        }

        for (let d = 1; d <= daysInMonth; d++) {
          const dayEl = document.createElement("div");
          dayEl.className = "nova-calendar-day";
          dayEl.textContent = d;
          dayEl.onclick = () => {
            input.value = `${d}/${month + 1}/${year}`;
            calendar.style.display = "none";
            calendarDays.querySelectorAll(".selected").forEach(el => el.classList.remove("selected"));
            dayEl.classList.add("selected");
          };
          calendarDays.appendChild(dayEl);
        }

        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        monthLabel.textContent = `${monthNames[month]} ${year}`;
      }

      datepicker.querySelector("#prevMonth").onclick = () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
      };
      datepicker.querySelector("#nextMonth").onclick = () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
      };

      input.onclick = () => {
        calendar.style.display = "block";
      };

      document.addEventListener("click", e => {
        if (!datepicker.contains(e.target)) {
          calendar.style.display = "none";
        }
      });

      renderCalendar(currentDate);
      /*********************************************************/
  </script>
```

## Tabs

```html
  <div class="nova-tabs">
    <div class="nova-tab active" onclick="activateTab(0)">Ficha</div>
    <div class="nova-tab" onclick="activateTab(1)">Narrador</div>
    <div class="nova-tab" onclick="activateTab(2)">Evaluador</div>
  </div>

  <div class="nova-tab-content active">
    <p>Contenido de la ficha pedagógica.</p>
  </div>
  <div class="nova-tab-content">
    <p>Contenido del narrador visual.</p>
  </div>
  <div class="nova-tab-content">
    <p>Contenido del evaluador interactivo.</p>
  </div>
  <script>
    /*TABS*/
    function activateTab(index) {
      document.querySelectorAll('.nova-tab').forEach((tab, i) =>
        tab.classList.toggle('active', i === index)
      );
      document.querySelectorAll('.nova-tab-content').forEach((content, i) =>
        content.classList.toggle('active', i === index)
      );
    }
  </script>
```

# Stepper
```html
<div class="nova-stepper" id="novaStepper">
  <div class="nova-stepper-header">
    <div class="nova-step active">Paso 1</div>
    <div class="nova-step">Paso 2</div>
    <div class="nova-step">Paso 3</div>
  </div>

  <div class="nova-stepper-content">
    <div class="nova-step-panel active">
      <p>Contenido del paso 1.</p>
      <button onclick="nextStep()">Siguiente</button>
    </div>
    <div class="nova-step-panel">
      <p>Contenido del paso 2.</p>
      <button onclick="prevStep()">Anterior</button>
      <button onclick="nextStep()">Siguiente</button>
    </div>
    <div class="nova-step-panel">
      <p>Contenido del paso 3.</p>
      <button onclick="prevStep()">Anterior</button>
      <button onclick="finishStepper()">Finalizar</button>
    </div>
  </div>
</div>
<script>
  let currentStep = 0;

function updateStepper() {
  const steps = document.querySelectorAll('.nova-step');
  const panels = document.querySelectorAll('.nova-step-panel');

  steps.forEach((step, i) => {
    step.classList.toggle('active', i === currentStep);
  });

  panels.forEach((panel, i) => {
    panel.classList.toggle('active', i === currentStep);
  });
}

function nextStep() {
  const totalSteps = document.querySelectorAll('.nova-step').length;
  if (currentStep < totalSteps - 1) {
    currentStep++;
    updateStepper();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    updateStepper();
  }
}

function finishStepper() {
  alert("Proceso completado.");
  currentStep = 0;
  updateStepper();
}

updateStepper();

</script>
```