# 🧱 FenixNovaCss — Layout estructural

Este módulo define la arquitectura base para construir interfaces limpias, responsivas y semánticas. Está inspirado en Bulma.io y adaptado al enfoque modular de FenixNovaCss, con compatibilidad directa para contenedores, secciones, niveles, objetos media y más.

---

## 🚀 Instalación

Incluye el archivo en tu HTML:

```html
<link rel="stylesheet" href="fenixnova-layout.css">
```

# Ejemplo de uso
```html
<div class="container">
	<header class="header header-dark">
	  <div class="header-inner">
	    <h1 class="site-title">FenixNova</h1>
	    <nav class="site-nav">
	      <a href="#">Inicio</a>
	      <a href="#">Guía</a>
	      <a href="#">Contacto</a>
	    </nav>
	  </div>
	</header>
  <section class="hero">
    <div class="hero-body">
      <h1 class="hero-title">Bienvenido a FenixNovaCss</h1>
    </div>
  </section>

  <section class="section">
    <div class="level">
      <div class="level-left">📚 Recursos</div>
      <div class="level-right">🔗 Enlaces</div>
    </div>

    <div class="media">
      <div class="media-left">
        <img src="avatar.png" alt="Avatar" class="avatar">
      </div>
      <div class="media-content">
        <p>Contenido principal del objeto media.</p>
      </div>
      <div class="media-right">
        <button class="btn">Acción</button>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-links">© 2025 FenixNova</div>
    <div class="footer-note">Hecho con amor y vocación</div>
  </footer>
</div>
```

## Compatibilidad con componentes estructurales

| Componente       | Clases en FenixNovaCss                                                  | Descripción                                                                 |
|------------------|--------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Header**       | `.header`, `.header-inner`, `.header-dark`, `.header-light`, `.header-fixed`, `.header-sticky`, `.header-transparent` | Encabezado principal con variantes temáticas, responsivas y estructurales |
| **Container**    | `.container`, `.container-fluid`                                         | Contenedor central con ancho máximo o ancho completo                       |
| **Hero**         | `.hero`, `.hero-body`, `.hero-title`, `.hero-dark`                       | Sección destacada con fondo, texto central y variantes temáticas           |
| **Section**      | `.section`, `.section-title`, `.section-sm`, `.section-lg`               | Bloque estructural con espaciado vertical ajustable                        |
| **Level**        | `.level`, `.level-left`, `.level-right`, `.level-gap-md`                 | Distribución horizontal con alineación en extremos y espaciado             |
| **Media Object** | `.media`, `.media-left`, `.media-content`, `.media-right`, `.media-bordered` | Layout clásico para avatar + contenido + acciones                      |
| **Footer**       | `.footer`, `.footer-links`, `.footer-note`, `.footer-fixed`              | Pie de página semántico, responsivo y opcionalmente anclado                |

