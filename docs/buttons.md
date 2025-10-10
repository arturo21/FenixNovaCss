# 🔘 Botón

Los botones son componentes fundamentales para disparar acciones en la interfaz. FenixNovaCss ofrece una base flexible para construir botones accesibles, visualmente consistentes y fácilmente personalizables.

---

## Estructura base

```html
<button class="button bg-primary text-white rounded transition-fast">
  Guardar cambios
</button>
```

## Tamaños

```html
<button class="button button-sm">Pequeño</button>
<button class="button button-md">Mediano</button>
<button class="button button-lg">Grande</button>
```

## Clase Base

```css
.button {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: var(--radius-base);
  cursor: pointer;
  transition: background-color 0.2s ease;
}
```

## Colores
```html
<button class="button bg-primary text-white">Primario</button>
<button class="button bg-secondary text-white">Secundario</button>
<button class="button bg-success text-white">Éxito</button>
<button class="button bg-danger text-white">Peligro</button>
<button class="button bg-warning text-dark">Advertencia</button>
<button class="button bg-light text-dark">Claro</button>
<button class="button bg-dark text-white">Oscuro</button>
```

## Estados Visuales
```html
<button class="button is-active">Activo</button>
<button class="button is-disabled">Deshabilitado</button>
<button class="button is-loading">Cargando</button>
```

## Botón con Iconos
```html
<button class="button bg-success text-white d-flex align-center gap-sm">
  <span class="icon">✔</span>
  Confirmar
</button>
```

## Adaptabilidad
```html
<button type="submit" aria-label="Guardar" class="button bg-primary">
  💾
</button>
```