# 📐 FenixNovaCss Grid System

El sistema de grillas de FenixNovaCss está diseñado para ser **modular, responsivo y compatible con Bulma.io**, permitiendo construir layouts flexibles con clases atómicas y semánticas.

---

## 🚀 Instalación

Incluye el archivo `fenixnova-grid.css` en tu proyecto:

```html
<link rel="stylesheet" href="fenixnova-grid.css">

```
---

## Estructura base

```html
  <div class="grid grid-gap-md">
    <div class="col col-6">Columna 1</div>
    <div class="col col-6">Columna 2</div>
  </div>
```

```css
  .grid: /*contenedor principal con display: grid*/

  .col: /*elemento hijo que ocupa una columna*/

  .col-6: /*ocupa 6 de las 12 columnas disponibles*/
```

## 📏 Columnas proporcionales

```html
  <div class="col col-1">1/12</div>
  <div class="col col-3">3/12</div>
  <div class="col col-6">6/12</div>
  <div class="col col-12">12/12</div>
```

Basado en un sistema de 12 columnas

Compatible con .col-auto, .col-grow, .col-shrink

## Columnas Responsivas

```html
  <div class="col col-12 col-md-6 col-lg-4">Contenido</div>
```

```css
  .col-md-*: /*se aplica desde 768px*/

  .col-lg-*: /*se aplica desde 1024px*/
```

## 🔄 Orden y autoajuste
```html
  <div class="col col-6 col-order-2">Segundo</div>
  <div class="col col-6 col-order-1">Primero</div>
```
```css
  .col-order-*: controla el orden visual

  .col-auto: tamaño automático según contenido
```

## 🎯 Alineación
```html
  <div class="grid grid-align-center grid-justify-between">
    <div class="col col-4">Izquierda</div>
    <div class="col col-4">Derecha</div>
  </div>
```

```css
  .grid-align-*: /*alinea verticalmente (start, center, end)*/

  .grid-justify-*: /*alinea horizontalmente (start, center, end, between)*/
```

## 📐 Plantillas de columnas
```html
  <div class="grid grid-cols-3"> <!-- 3 columnas iguales -->
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
```
```css
  .grid-cols-*: /*define número de columnas (1 a 12)*/

  .grid-md-cols-*, /*.grid-lg-cols-*: variantes responsivas*/
```

## 📏 Espaciado entre columnas y filas

```html
  <div class="grid grid-gap-sm">Contenido</div>
```

```css
  .grid-gap-xs, .grid-gap-sm, .grid-gap-md, .grid-gap-lg, .grid-gap-xl
```

## 📐 Columnas y filas automáticas

```html
  <div class="grid grid-auto-cols-fr grid-auto-rows-min">
    <div>Auto columna</div>
    <div>Auto fila</div>
  </div>
```

```css
    .grid-auto-cols-*: /*min-content, max-content, 1fr*/

    .grid-auto-rows-*: /*min-content, max-content, 1fr*/
```


## 📱 Breakpoints responsivos

```css
  @media (min-width: 768px) {
    .grid-md-cols-3 { grid-template-columns: repeat(3, 1fr); }
  }
  @media (min-width: 1024px) {
    .grid-lg-cols-6 { grid-template-columns: repeat(6, 1fr); }
  }
```

## Ejemplo completo
```html
  <div class="grid grid-gap-md grid-align-start grid-justify-center">
    <div class="col col-12 col-md-6 col-lg-4">Columna A</div>
    <div class="col col-12 col-md-6 col-lg-8">Columna B</div>
  </div>
```

## Compatibilidad con Bulma.io

FenixNovaCss ofrece clases equivalentes a las de Bulma, pero con mayor granularidad y control. Aquí tienes una tabla comparativa:

| Bulma.io         | FenixNovaCss        | Descripción                              |
|------------------|---------------------|------------------------------------------|
| `.columns`       | `.grid`             | Contenedor de columnas con `display: grid` |
| `.column`        | `.col`              | Elemento de columna básico               |
| `.is-6`          | `.col-6`            | Ocupa 6 de 12 columnas                   |
| `.is-full`       | `.col-12`           | Ocupa el ancho completo                  |
| `.is-variable`   | `.grid-gap-md`      | Espaciado entre columnas y filas        |
| `.is-centered`   | `.grid-justify-center` | Centrado horizontal de columnas      |
| `.is-vcentered`  | `.grid-align-center`  | Centrado vertical de columnas         |
| `.is-multiline`  | `.grid-auto-rows-fr`  | Soporte para múltiples filas automáticas |
