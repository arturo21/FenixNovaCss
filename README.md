# 🔥 FenixNovaCss

> **Framework CSS modular, semántico, extensible y temático para interfaces web modernas.**  
> *Diseñado para ofrecer velocidad, claridad estilística y personalización total en proyectos educativos, culturales y creativos.*

---

[![Version](https://img.shields.io/badge/version-1.0.0-orange.svg)](https://github.com/arturo21/FenixNovaCss)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CSS](https://img.shields.io/badge/CSS3-79.3%25-blue.svg)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JS](https://img.shields.io/badge/general.JS-Compatible-green.svg)](https://github.com/arturo21/FenixNovaCss)

---

## 📌 Tabla de Contenidos
- [Filosofía y Propósito](#-filosofía-y-propósito)
- [Comparativa con otros Frameworks](#-comparativa-con-otros-frameworks)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Uso Rápido](#-instalación-y-uso-rápido)
- [Módulos del Framework (15 Módulos)](#-módulos-del-framework)
- [Sistema de Tokens y Temas](#-sistema-de-tokens-y-temas)
- [Jerarquía Tipográfica](#-jerarquía-tipográfica)
- [Clases Utilitarias y Helpers](#-clases-utilitarias-y-helpers)
- [Componentes UI e Interacciones](#-componentes-ui-e-interacciones)
  - [Accordion](#-accordion)
  - [Tabs (Pestañas)](#-tabs-pestañas)
  - [Tooltip](#-tooltip)
  - [Toast](#-toast)
  - [ProgressBar](#-progressbar)
  - [Slide Toggle](#-slide-toggle)
  - [SnackBar](#-snackbar)
  - [DatePicker](#-datepicker)
  - [Stepper](#-stepper)
  - [ScrollSpy](#-scrollspy)
- [Extensibilidad](#-extensibilidad)
- [Licencia](#-licencia)

---

## 🧠 Filosofía y Propósito

**FenixNovaCss v1.0.0** nace con la misión de proporcionar un marco de trabajo visual equilibrado entre la **flexibilidad utilitaria** y la **claridad semántica**. A diferencia de los enfoques puramente utilitarios o rígidos, FenixNovaCss está diseñado con un fuerte enfoque pedagógico, permitiendo a educadores, creadores y desarrolladores construir aplicaciones complejas sin perder el significado estructurado del código HTML.

### Key Highlights
- **100% Modular**: Importa únicamente los archivos que necesitas para optimizar el rendimiento.
- **Sistema de Tokens CSS**: Centraliza variables nativas (`:root`) para colores, espaciados, fuentes y sombras.
- **Soporte Nativo para Temas**: Alternancia sencilla entre modo claro y oscuro.
- **Estructuras Complejas Integradas**: Componentes preparados para albergar formularios, CTAs y layouts interactivos.
- **Ecosistema Integrado**: Diseñado para funcionar en sintonía con la librería de comportamiento **general.JS**.

---

## 📊 Comparativa con otros Frameworks

| Característica | 🟣 FenixNovaCss | 🔵 Tailwind CSS | 🟢 Bulma.io |
| :--- | :--- | :--- | :--- |
| **Filosofía de diseño** | Modular + Semántica + Utilitaria | Utilitario puro | Semántico + Componentes predefinidos |
| **Personalización visual** | Tokens CSS (`--color`, `--spacing`) | Config JS (`tailwind.config.js`) | Variables Sass (`$primary`, `$spacing`) |
| **Modularidad** | 15 archivos por función | Clases utilitarias + plugins | Componentes agrupados |
| **Accesibilidad integrada** | Roles ARIA + estructura semántica | Clases auxiliares (`sr-only`) | Soporte básico |
| **Soporte de temas** | Claro / Oscuro nativo (`data-theme`) | `darkMode: 'class'` o media | Requiere compilación Sass |
| **Enfoque principal** | Pedagógico, cultural y creativo | Desarrollo de producción rápido | Prototipado visual rápido |
| **Integración JS** | Compatible con `general.JS` | Alpine.js / React / Vue | Opcional |

---

## 📁 Estructura del Proyecto

```text
FenixNovaCss/
├── dist/                     # Archivos CSS finales compilados para producción
│   ├── fenixnova.entry.css   # Bundle global consolidado
│   └── ...
├── docs/                     # Documentación visual y ejemplos de implementación
├── experimental/             # Bundle experimental (animaciones, temas adicionales, A11y)
│   └── fenixnova-experimental.css
├── src/                      # Código fuente en módulos individuales
│   ├── _fenixnova-tokens.css # Variables CSS de diseño nativo
│   ├── fenixnova-reset.css   # Normalización base
│   ├── fenixnova-theme.css   # Definición de temas (Claro/Oscuro/Fénix)
│   ├── fenixnova-grid.css    # Grilla proporcional responsiva
│   ├── fenixnova-layout.css  # Contenedores y estructura
│   ├── fenixnova-helpers.css # Clases utilitarias atómicas
│   ├── fenixnova-extend.css  # Helper utilities avanzadas
│   ├── fenixnova-forms.css   # Estilos de formularios y validaciones
│   ├── fenixnova-buttons.css # Variantes de botones y estados
│   ├── fenixnova-components.css # Componentes UI (cards, modales, chips)
│   ├── fenixnova-navigation.css # Navbar, breadcrumbs, dropdowns
│   ├── fenixnova-tables.css  # Tablas accesibles y responsivas
│   ├── fenixnova-mixins.css  # Patrones Sass reutilizables
│   └── fenixnova.entry.css   # Punto de entrada principal
├── index.html                # Página de prueba e inspección de componentes
├── webpack.config.js         # Configuración de compilación
├── LICENSE                   # Licencia MIT
└── README.md                 # Documentación principal
```

---

## 🚀 Instalación y Uso Rápido

### 1. Incluir el paquete global
Puedes vinvular directamente el archivo compilado principal en el `<head>` de tu documento HTML:

```html
<link rel="stylesheet" href="dist/fenixnova.entry.css">
```

### 2. Uso modular (Carga selectiva)
Si deseas optimizar la carga, puedes importar únicamente los módulos específicos requeridos por tu proyecto:

```html
<!-- Reset base y Tokens de diseño obligatorios -->
<link rel="stylesheet" href="src/fenixnova-reset.css">
<link rel="stylesheet" href="src/_fenixnova-tokens.css">

<!-- Módulos de estructura y componentes requeridos -->
<link rel="stylesheet" href="src/fenixnova-layout.css">
<link rel="stylesheet" href="src/fenixnova-buttons.css">
<link rel="stylesheet" href="src/fenixnova-components.css">
```

---

## 🧱 Módulos del Framework

FenixNovaCss está dividido en **15 módulos independientes**:

| # | Módulo | Descripción / Función Principal |
| :-: | :--- | :--- |
| **1** | `fenixnova-reset.css` | Reset base universal y normalización de elementos HTML. |
| **2** | `_fenixnova-tokens.css` | Tokens visuales: variables de colores, tipografía, espaciado, sombras y radios. |
| **3** | `fenixnova-theme.css` | Sistema de temas: claro, oscuro y variantes adaptativas por variable. |
| **4** | `fenixnova-grid.css` | Grilla responsiva proporcional (`.col-1` a `.col-12`). |
| **5** | `fenixnova-layout.css` | Estructura de página: filas, columnas, contenedores y alineación. |
| **6** | `fenixnova-helpers.css` | Utilidades atómicas para espaciado (`m-*`, `p-*`), colores y visibilidad. |
| **7** | `fenixnova-extend.css` | Extensiones visuales: centrado, proporciones (ratios), truncado y alturas mínimas. |
| **8** | `fenixnova-forms.css` | Formularios estilizados: inputs, selects, textareas y estados de validación. |
| **9** | `fenixnova-buttons.css` | Sistema completo de botones (`.button-outline`, `.button-ghost`, etc.). |
| **10** | `fenixnova-components.css` | Componentes UI semánticos: tarjetas, modales, chips, alertas y badges. |
| **11** | `fenixnova-navigation.css` | Elementos de navegación: navbars, pestañas, breadcrumbs y menús desplegables. |
| **12** | `fenixnova-tables.css` | Tablas accesibles y responsivas compatibles con filas alternas y modo oscuro. |
| **13** | `fenixnova-mixins.css` | Mixins Sass reutilizables para composición y patrones visuales. |
| **14** | `fenixnova.entry.css` | Archivo manifiesto de entrada para compilar todos los módulos. |
| **15** | `fenixnova-experimental.css` | Bundle extendido: animaciones avanzadas, utilidades de accesibilidad y Paleta Fénix. |

---

## 🎭 Sistema de Tokens y Temas

### Tokens Visuales (`_fenixnova-tokens.css`)
Los tokens centralizan las decisiones de diseño mediante Custom Properties CSS nativas:

```css
:root {
  /* Paleta Fénix y Colores Base */
  --fenixnova-primary: #c0392b;
  --fenixnova-secondary: #e67e22;
  --fenixnova-dark: #111111;
  --fenixnova-light: #f9f9f9;

  /* Tipografía y Espaciado */
  --fenixnova-font-family: 'Inter', system-ui, sans-serif;
  --fenixnova-space-sm: 0.5rem;
  --fenixnova-space-md: 1rem;
  --fenixnova-space-lg: 1.5rem;

  /* Sombras y Radios */
  --fenixnova-radius-md: 8px;
  --fenixnova-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### Activación de Modo Oscuro (`fenixnova-theme.css`)
El modo oscuro puede activarse explícitamente mediante atributo `data-theme` o mediante la preferencia del sistema operativo:

```html
<!-- Modo Oscuro explícito -->
<html data-theme="dark">
  ...
</html>
```

---

## 🔠 Jerarquía Tipográfica

FenixNovaCss proporciona clases semánticas para controlar la escala tipográfica:

### Encabezados (`.text-heading-*`)
| Clase | Tamaño | Peso | Uso Sugerido |
| :--- | :---: | :---: | :--- |
| `.text-heading-xxl` | `3.00rem` | 700 | Título principal / Banners editoriales |
| `.text-heading-xl` | `2.50rem` | 700 | Encabezado principal de sección |
| `.text-heading-lg` | `1.75rem` | 600 | Subsección destacada |
| `.text-heading-md` | `1.25rem` | 600 | Título de componentes o bloques |
| `.text-heading-sm` | `1.00rem` | 600 | Encabezado de tarjetas o modales |
| `.text-heading-xs` | `0.875rem` | 600 | Etiquetas, metadatos y subtítulos menores |

### Cuerpo de Texto y Subtítulos
| Clase | Tamaño | Peso | Uso Sugerido |
| :--- | :---: | :---: | :--- |
| `.text-subtitle` | `1.50rem` | 500 | Descripción de introducción |
| `.text-body-lg` | `1.25rem` | 400 | Texto destacado |
| `.text-body` | `1.00rem` | 400 | Cuerpo de texto estándar |
| `.text-small` | `0.875rem` | 400 | Notas de pie, leyendas y metadatos |

---

## 🛠 Clases Utilitarias y Helpers

### 1. Colores y Fondos
- `.text-primary`, `.text-accent`, `.text-muted`, `.text-light`, `.text-dark`
- `.bg-success`, `.bg-warning`, `.bg-danger`, `.bg-primary`

### 2. Espaciado Proporcional
- **Márgenes**: `.m-0`, `.mt-sm`, `.mb-md`, `.mx-auto`
- **Paddings**: `.p-0`, `.pt-sm`, `.pb-md`, `.px-lg`

### 3. Visualización y Posicionamiento
- `.d-block`, `.d-inline-flex`, `.d-none`, `.is-hidden`, `.is-visible`
- `.is-relative`, `.is-absolute`, `.is-fixed`, `.is-overlay`

### 4. Flexbox y Alineación
- `.d-flex`, `.flex-row`, `.flex-column`, `.flex-wrap`
- `.justify-start`, `.justify-center`, `.justify-end`
- `.align-start`, `.align-center`, `.align-end`

### 5. Estados Condicionales
- `.is-active`, `.is-disabled`, `.is-loading`, `.is-focused`, `.is-selected`

---

## 🎛 Componentes UI e Interacciones

FenixNovaCss incluye componentes estilizados que pueden combinarse con scripts sencillos o con la librería **general.JS**.

### 🔽 Accordion
```html
<div class="nova-accordion">
  <div class="nova-accordion-header" onclick="this.parentNode.classList.toggle('active')">
    ¿Qué es Fénix Nova CSS?
  </div>
  <div class="nova-accordion-content">
    <p>Es un framework CSS modular, semántico y accesible para interfaces modernas.</p>
  </div>
</div>
```

---

### 📑 Tabs (Pestañas)
```html
<div class="nova-tabs">
  <div class="nova-tab active" onclick="activateTab(0)">Ficha</div>
  <div class="nova-tab" onclick="activateTab(1)">Narrador</div>
  <div class="nova-tab" onclick="activateTab(2)">Evaluador</div>
</div>

<div class="nova-tab-content active"><p>Contenido de la Ficha.</p></div>
<div class="nova-tab-content"><p>Contenido del Narrador.</p></div>
<div class="nova-tab-content"><p>Contenido del Evaluador.</p></div>

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

---

### 💬 Tooltip
```html
<div class="nova-tooltip">
  <button class="button">¿Qué es esto?</button>
  <div class="nova-tip">Es un mensaje explicativo flotante.</div>
</div>
```

---

### 🔔 Toast
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

  // Ejemplo de ejecución
  showToast("Ficha guardada correctamente.");
</script>
```

---

### 📊 ProgressBar
```html
<div class="nova-progress" id="progressContainer">
  <div class="nova-progress-bar" id="progressBar" style="width: 65%;"></div>
  <div class="nova-progress-label" id="progressLabel">65%</div>
</div>
```

---

### 🎚 Slide Toggle
```html
<label class="nova-slide-toggle">
  <input type="checkbox" id="toggleDemo" />
  <div class="nova-slide-track">
    <div class="nova-slide-thumb"></div>
  </div>
</label>
```

---

### 🥖 SnackBar
```html
<div class="nova-snackbar-container" id="snackbarZone"></div>

<script>
  function showSnackbar(message) {
    const snackbar = document.createElement('div');
    snackbar.className = 'nova-snackbar';
    snackbar.textContent = message;
    document.getElementById('snackbarZone').appendChild(snackbar);
    setTimeout(() => snackbar.remove(), 4000);
  }
</script>
```

---

### 📅 DatePicker
```html
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
```

---

### 🪜 Stepper
```html
<div class="nova-stepper" id="novaStepper">
  <div class="nova-stepper-header">
    <div class="nova-step active">Paso 1</div>
    <div class="nova-step">Paso 2</div>
    <div class="nova-step">Paso 3</div>
  </div>
  <div class="nova-stepper-content">
    <div class="nova-step-panel active"><p>Contenido del Paso 1.</p></div>
    <div class="nova-step-panel"><p>Contenido del Paso 2.</p></div>
    <div class="nova-step-panel"><p>Contenido del Paso 3.</p></div>
  </div>
</div>
```

---

### 🧭 ScrollSpy
```html
<div class="nova-scrollspy-container">
  <nav class="nova-scrollspy-nav">
    <a href="#section1" class="nova-scrollspy-link active">Sección 1</a>
    <a href="#section2" class="nova-scrollspy-link">Sección 2</a>
  </nav>

  <div class="nova-scrollspy-content">
    <section id="section1" class="nova-scrollspy-section">...</section>
    <section id="section2" class="nova-scrollspy-section">...</section>
  </div>
</div>
```

---

## 🧬 Extensibilidad

El framework soporta personalización mediante la redefinición de variables CSS locales o globales:

```css
/* Redefinición global de tokens */
:root {
  --fenixnova-primary: #8e44ad;
  --fenixnova-radius-md: 12px;
}

/* Redefinición scoped para un elemento específico */
.card-custom {
  --fenixnova-space-md: 2rem;
  background-color: var(--fenixnova-light);
}
```

---

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

## ScrollSpy 

### Estructura Base
```html
<div class="nova-scrollspy-container">
  <nav class="nova-scrollspy-nav">
    <a href="#section1" class="nova-scrollspy-link active">Introducción</a>
    <a href="#section2" class="nova-scrollspy-link">Contenido</a>
    <a href="#section3" class="nova-scrollspy-link">Ejemplos</a>
    <a href="#section4" class="nova-scrollspy-link">Conclusión</a>
  </nav>

  <div class="nova-scrollspy-content">
    <section id="section1" class="nova-scrollspy-section">...</section>
    <section id="section2" class="nova-scrollspy-section">...</section>
    <section id="section3" class="nova-scrollspy-section">...</section>
    <section id="section4" class="nova-scrollspy-section">...</section>
  </div>
</div>
```

### Implementaciòn Js 
```js 
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".nova-scrollspy-section");
  const links = document.querySelectorAll(".nova-scrollspy-link");

  function activateLink(id) {
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  }

  function onScroll() {
    let current = "";
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        current = section.id;
      }
    });
    if (current) activateLink(current);
  }

  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // inicial
});
```
