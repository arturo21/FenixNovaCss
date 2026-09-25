# 📊 FenixNovaCss — Tablas

Este módulo define estilos para tablas accesibles, responsivas y visualmente limpias, compatibles con Bulma.io y adaptables a temas claros y oscuros. Ideal para proyectos educativos, administrativos y técnicos.

---

## 🚀 Instalación

Incluye el archivo en tu HTML:

```html
<link rel="stylesheet" href="fenixnova-tables.css">
```

## Estructura base

```html
<table class="table">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arturo</td>
      <td>35</td>
    </tr>
    <tr>
      <td>Lucía</td>
      <td>29</td>
    </tr>
  </tbody>
</table>
```
---

## 🎨 Estilos disponibles

| Clase               | Descripción                                                  |
|---------------------|--------------------------------------------------------------|
| `.table`            | Tabla base con estilo limpio                                 |
| `.table-bordered`   | Agrega bordes entre celdas (`th` y `td`)                     |
| `.table-striped`    | Alterna el color de fondo entre filas para mejor legibilidad |
| `.table-hover`      | Resalta la fila al pasar el cursor                           |
| `.table-sm`         | Reduce el tamaño de fuente y padding para tablas compactas   |
| `.table-responsive` | Permite scroll horizontal en pantallas pequeñas              |
| `.table-scroll`     | Limita la altura y permite scroll vertical interno           |


## 📱 Ejemplo responsivo
```html
<div class="table-responsive">
  <table class="table table-striped table-hover table-bordered">
    <caption>Listado de usuarios</caption>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>País</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Arturo</td><td>35</td><td>Venezuela</td></tr>
      <tr><td>Lucía</td><td>29</td><td>Argentina</td></tr>
      <tr><td>Mateo</td><td>42</td><td>Chile</td></tr>
      <tr><td>Camila</td><td>31</td><td>Colombia</td></tr>
    </tbody>
  </table>
</div>
```

## 🛠 Variables recomendadas

```css
:root {
  --bg-surface: #ffffff;
  --bg-muted: #f5f5f5;
  --bg-alt: #fafafa;
  --bg-hover: #f0f0f0;
  --border-color: #dddddd;
  --text-main: #333333;
  --text-heading: #111111;
  --text-muted: #777777;

  --bg-surface-dark: #1e1e1e;
  --bg-muted-dark: #2a2a2a;
  --bg-alt-dark: #2e2e2e;
  --bg-hover-dark: #3a3a3a;
  --border-color-dark: #444444;
  --text-main-dark: #eeeeee;
  --text-heading-dark: #ffffff;
}
```