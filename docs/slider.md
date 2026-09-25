# 🎞️ FenixNovaCss — Slider

Este módulo define un slider accesible, responsivo y temáticamente adaptable. Incluye soporte para imágenes, captions, flechas de navegación, dots indicadores y estructura semántica con `figure`.

---

## 🚀 Ejemplo de uso

```html
<!-- Slider principal -->
<div class="slider" data-fnx="slider">
  <div class="slider-track">
    <div class="slider-slide">
      <figure class="slider-figure">
        <img src="img/slide1.jpg" alt="Primera imagen" class="slider-image">
        <figcaption class="slider-caption">Primera imagen del carrusel</figcaption>
      </figure>
    </div>
    <div class="slider-slide">
      <figure class="slider-figure">
        <img src="img/slide2.jpg" alt="Segunda imagen" class="slider-image">
        <figcaption class="slider-caption">Segunda imagen del carrusel</figcaption>
      </figure>
    </div>
    <div class="slider-slide">
      <figure class="slider-figure">
        <img src="img/slide3.jpg" alt="Tercera imagen" class="slider-image">
        <figcaption class="slider-caption">Tercera imagen del carrusel</figcaption>
      </figure>
    </div>
  </div>

  <!-- Flechas de navegación -->
  <button class="slider-arrow slider-prev" aria-label="Anterior">←</button>
  <button class="slider-arrow slider-next" aria-label="Siguiente">→</button>

  <!-- Dots indicadores -->
  <div class="slider-dots">
    <span class="slider-dot is-active" aria-label="Slide 1"></span>
    <span class="slider-dot" aria-label="Slide 2"></span>
    <span class="slider-dot" aria-label="Slide 3"></span>
  </div>
</div>
```

## Ejemplo de uso: Slider con estructura HTML compleja

```html
<!-- Slider con contenido interactivo -->
<div class="slider" data-fnx="slider" data-autoplay="true" data-interval="7000" data-loop="true" data-pause="true">
  <div class="slider-track">

    <!-- Slide 1: Presentación -->
    <div class="slider-slide">
      <div class="slider-content">
        <h2 class="text-heading">Bienvenido a nuestra plataforma</h2>
        <p class="text-body">Descubre cómo transformar tu presencia digital con herramientas modulares, accesibles y escalables.</p>
        <a href="#descubre" class="btn btn-primary">Descúbrelo ahora</a>
      </div>
    </div>

    <!-- Slide 2: Formulario de contacto -->
    <div class="slider-slide">
      <div class="slider-content">
        <h2 class="text-heading">Solicita una demo personalizada</h2>
        <form class="form" action="/submit" method="POST">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required>
          </div>
          <div class="form-group">
            <label for="correo">Correo electrónico</label>
            <input type="email" id="correo" name="correo" required>
          </div>
          <div class="form-group">
            <label for="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="4"></textarea>
          </div>
          <button type="submit" class="btn btn-success">Enviar solicitud</button>
        </form>
      </div>
    </div>

    <!-- Slide 3: Testimonio o llamado a la acción -->
    <div class="slider-slide">
      <div class="slider-content">
        <blockquote class="testimonial">
          “Gracias a FenixNovaCss, logramos lanzar nuestra plataforma educativa en tiempo récord, con un diseño que inspira confianza y creatividad.”
        </blockquote>
        <p class="text-muted">— Fundación Educativa Raíces</p>
        <a href="/casos" class="btn btn-outline">Ver caso completo</a>
      </div>
    </div>

  </div>

  <!-- Flechas de navegación -->
  <button class="slider-arrow slider-prev" aria-label="Anterior">←</button>
  <button class="slider-arrow slider-next" aria-label="Siguiente">→</button>

  <!-- Dots indicadores -->
  <div class="slider-dots">
    <span class="slider-dot is-active" aria-label="Slide 1"></span>
    <span class="slider-dot" aria-label="Slide 2"></span>
    <span class="slider-dot" aria-label="Slide 3"></span>
  </div>
</div>
```

## 🎨 Clases disponibles

| Clase               | Función                                                                 |
|---------------------|-------------------------------------------------------------------------|
| `.slider`           | Contenedor principal del slider                                         |
| `.slider-track`     | Pista que contiene los slides                                           |
| `.slider-slide`     | Slide individual                                                        |
| `.slider-image`     | Imagen dentro del slide                                                 |
| `.slider-figure`    | Contenedor semántico para imagen + caption                             |
| `.slider-caption`   | Texto superpuesto en la imagen                                          |
| `.slider-arrow`     | Flechas de navegación (usar junto con `.slider-prev` y `.slider-next`) |
| `.slider-prev`      | Flecha izquierda (anterior)                                             |
| `.slider-next`      | Flecha derecha (siguiente)                                              |
| `.slider-dots`      | Contenedor de los dots indicadores                                      |
| `.slider-dot`       | Dot individual (usar `.is-active` para el actual)                       |
| `.slider-autoplay`  | Indicador opcional de reproducción automática                           |

---

## 🌙 Soporte para temas

El slider adapta sus colores automáticamente cuando se activa el modo oscuro:

```html
<body data-theme="dark">
```

También puedes aplicar variantes temáticas directamente:

    .slider-caption con fondo claro u oscuro

    .slider-dot y .slider-dot.is-active con colores adaptables

    .slider-arrow con estilos oscuros al hacer hover

Estas clases utilizan los tokens visuales definidos en fenixnova-theme.css y se integran con prefers-color-scheme si se desea activación automática.

## 🧩 Compatibilidad cruzada

Este módulo se integra perfectamente con otros componentes del framework FenixNovaCss:

| Módulo relacionado         | Compatibilidad                                                   |
|----------------------------|-------------------------------------------------------------------|
| `fenixnova-theme.css`      | Soporte para temas claro/oscuro y tokens visuales                |
| `fenixnova-helpers.css`    | Espaciado, visibilidad, flexbox, alineación                      |
| `fenixnova-layout.css`     | Contenedores, secciones, estructura de página                    |
| `fenixnova-components.css` | Agrupación opcional como componente UI                           |
| `general.js`               | Navegación, autoplay, sincronización de flechas y dots (JS)      |

## 🚀 Ejemplo 1: Inicialización automática con autoplay y teclado

```html
<!-- HTML -->
<div class="slider" data-fnx="slider" data-autoplay="true" data-interval="4000" data-loop="true">
  <!-- contenido del slider -->
</div>
```

```js
// JS
document.addEventListener('DOMContentLoaded', () => {
  FenixNovaSlider.init().autoplay().enableKeyboard();
});
```

## Clase JS (propuesta) para el manejo del Slider

```js
/**
 * 🎞️ FenixNovaSlider — Módulo revelado extendido
 * Soporta contenido HTML complejo dentro de slides, accesibilidad, swipe, autoplay y encadenamiento
 */
const FenixNovaSlider = (function () {
  const sliders = [];

  function init(selector = '[data-fnx="slider"]') {
    document.querySelectorAll(selector).forEach((el, index) => {
      const config = {
        autoplay: el.dataset.autoplay === 'true',
        interval: parseInt(el.dataset.interval) || 5000,
        loop: el.dataset.loop !== 'false',
        pauseOnHover: el.dataset.pause !== 'false',
      };
      sliders.push(createInstance(el, config, index));
    });
    return this;
  }

  function autoplay() {
    sliders.forEach(slider => {
      if (slider.config.autoplay) slider.autoplay(slider.config.interval);
    });
    return this;
  }

  function enableKeyboard() {
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') sliders.forEach(s => s.prev());
      if (e.key === 'ArrowRight') sliders.forEach(s => s.next());
    });
    return this;
  }

  function createInstance(root, config, id) {
    const track = root.querySelector('.slider-track');
    const slides = Array.from(track.children);
    const dots = Array.from(root.querySelectorAll('.slider-dot'));
    const prevBtn = root.querySelector('.slider-prev');
    const nextBtn = root.querySelector('.slider-next');
    let current = 0;
    let timer = null;
    let startX = 0;

    root.setAttribute('role', 'region');
    root.setAttribute('aria-label', `Slider ${id + 1}`);
    slides.forEach((slide, i) => {
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', 'slide');
      slide.setAttribute('aria-label', `Slide ${i + 1} of ${slides.length}`);
    });

    function goTo(index) {
      if (!config.loop && (index < 0 || index >= slides.length)) return;
      current = (index + slides.length) % slides.length;
      const offset = -current * 100;
      track.style.transform = `translateX(${offset}%)`;
      updateDots();
      root.dispatchEvent(new CustomEvent('slider:change', { detail: { current } }));
    }

    function updateDots() {
      dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === current);
        dot.setAttribute('aria-current', i === current ? 'true' : 'false');
      });
    }

    function bindEvents() {
      if (prevBtn) prevBtn.addEventListener('click', () => prev());
      if (nextBtn) nextBtn.addEventListener('click', () => next());
      dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

      if (config.pauseOnHover) {
        root.addEventListener('mouseenter', pause);
        root.addEventListener('mouseleave', resume);
        root.addEventListener('focusin', pause);
        root.addEventListener('focusout', resume);
      }

      root.addEventListener('touchstart', e => (startX = e.touches[0].clientX));
      root.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].clientX;
        if (endX < startX - 30) next();
        if (endX > startX + 30) prev();
      });
    }

    function prev() {
      goTo(current - 1);
    }

    function next() {
      goTo(current + 1);
    }

    function autoplay(interval) {
      clearInterval(timer);
      timer = setInterval(() => next(), interval);
      root.dispatchEvent(new CustomEvent('slider:autoplay', { detail: { interval } }));
    }

    function pause() {
      clearInterval(timer);
      root.dispatchEvent(new CustomEvent('slider:pause'));
    }

    function resume() {
      if (config.autoplay) autoplay(config.interval);
    }

    bindEvents();
    goTo(0);

    return {
      goTo,
      prev,
      next,
      autoplay,
      config,
    };
  }

  return {
    init,
    autoplay,
    enableKeyboard,
  };
})();

// 🧠 Inicialización automática
document.addEventListener('DOMContentLoaded', () => {
  FenixNovaSlider.init().autoplay().enableKeyboard();
});
```

## Recomendaciones

  Puedes usar .slider-content como contenedor flexible para cualquier estructura: formularios, listas, íconos, columnas, etc.

  Asegúrate de que los elementos interactivos como <form>, <input>, <button> estén bien espaciados y accesibles en móviles.

  Si usas data-pause="true", el autoplay se detiene al enfocar el formulario, evitando que el usuario pierda el contexto.