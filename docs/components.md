# 🧩 FenixNovaCss – Documentación de Componentes

Esta guía cubre los principales componentes visuales del framework FenixNovaCss. Cada sección incluye estructura HTML, clases recomendadas y variantes disponibles.

---

## 🔘 Botón

```html
<button class="button bg-primary text-white rounded transition-fast">
  Guardar cambios
</button>

```

## Tarjeta
```html
<div class="card shadow rounded p-md">
  <h3 class="font-md mb-sm">Título</h3>
  <p class="text-muted">Contenido descriptivo.</p>
</div>
```

## 🏷️ Chip
```html
<div class="chip chip-primary">
  Etiqueta
  <button class="chip-remove" aria-label="Eliminar">✖</button>
</div>
```

## Modal
```html
<div class="modal position-fixed top-0 left-0 w-full h-full d-flex justify-center align-center bg-dark opacity-50">
  <div class="modal-content bg-light rounded shadow p-lg">
    <h2 class="font-lg mb-md">Confirmar acción</h2>
    <button class="button bg-primary">Aceptar</button>
  </div>
</div>
```

## Alertas
```html
<div class="alert bg-warning text-dark rounded p-md">
  ⚠️ Atención: Este es un mensaje de advertencia.
</div>
```

## 📂 Dropdown
```html
<div class="dropdown position-relative">
  <button class="button bg-secondary">Opciones ▼</button>
  <ul class="dropdown-menu bg-light shadow rounded is-hidden">
    <li><a href="#">Opción 1</a></li>
    <li><a href="#">Opción 2</a></li>
  </ul>
</div>
```

##  Navbar
```html
<nav class="navbar d-flex justify-between align-center p-md bg-dark text-white">
  <div class="navbar-brand font-bold">FenixNova</div>
  <ul class="navbar-links d-flex gap-md">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>
```

## 📌 Tabs
```html
<div class="tabs">
  <button class="tab is-active">General</button>
  <button class="tab">Avanzado</button>
</div>
<div class="tab-content p-md">
  <p>Contenido de la pestaña activa.</p>
</div>
```

## Forms
```html
<form class="form-group">
  <label class="label">Correo</label>
  <input type="email" class="input is-valid" placeholder="usuario@dominio.com">
  <div class="form-feedback success">¡Formato válido!</div>
</form>
```

## Badge
```html
<span class="badge bg-danger text-white rounded-pill">3</span>
```

## Loader
```html
<div class="loader is-loading"></div>
```

## Accesibilidad
<ul>
  <li>Usa aria-label, aria-hidden, role="dialog" donde aplique</li>
  <li>Estados visuales: .is-active, .is-disabled, .is-loading, .is-expanded, .is-collapsed</li>
</ul>