<a class="back-arrow" href="../">←</a>

# Diseño

Esta página explica cómo está organizado el diseño visual de la web: colores, tipografías y componentes que uso.

## Colores

Todos los colores están definidos como variables al principio del CSS:

```css
:root {
  --iyg-primary: #5B2A4D;
  --iyg-accent: #C25B84;
  --iyg-sage: #A8C686;
  --iyg-bg: #FBF6F2;
  --iyg-surface: #F1E4EC;
  --iyg-text: #2E2233;
}
```

### Ciruela (`--iyg-primary`)

```css
--iyg-primary: #5B2A4D;
```

Es nuestro color principal. Lo utilizamos especialmente para:

- títulos
- navegación
- elementos principales

### Rosa / acento (`--iyg-accent`)

```css
--iyg-accent: #C25B84;
```

Es nuestro color de acento. Lo utilizamos especialmente para:

- iconos
- enlaces
- flechas
- pequeños detalles

### Verde salvia (`--iyg-sage`)

```css
--iyg-sage: #A8C686;
```

Actualmente lo tenemos definido como parte de nuestra paleta, pero no es necesario utilizarlo en todos los elementos. Si en el futuro encontramos un uso que nos guste, podemos incorporarlo.

### Fondo (`--iyg-bg`)

```css
--iyg-bg: #FBF6F2;
```

Es el fondo crema general de la web.

### Superficie (`--iyg-surface`)

```css
--iyg-surface: #F1E4EC;
```

Lo utilizamos principalmente en tarjetas y superficies diferenciadas.

### Texto (`--iyg-text`)

```css
--iyg-text: #2E2233;
```

Es nuestro color principal para el texto normal.

## Tipografías

Utilizamos tres tipografías:

**Fraunces** — se utiliza principalmente para los títulos. Es la tipografía que da a la web su aspecto más editorial.

**Inter** — es nuestra tipografía principal para el texto normal. La utilizamos para:

- párrafos
- listas
- botones
- textos pequeños
- contenido general

**JetBrains Mono** — está configurada como tipografía de código. La utilizamos para que los bloques de código tengan una apariencia diferenciada.

## CSS

Todos nuestros estilos personalizados están en:

```text
docs/stylesheets/extra.css
```

Intentamos mantenerlos organizados por bloques. Por ejemplo:

```css
/* Página de Belleza y cosmética */

/* Subpáginas de Belleza */

/* Recetas */

/* Listas de recetas */
```

Cuando añada un estilo nuevo, debería buscar primero si ya existe una regla parecida antes de crear otra.

## Tarjetas

Las tarjetas son uno de los elementos principales de la web. Tenemos diferentes clases para diferentes partes de la web.

Por ejemplo:

```html
<a class="iyg-card" href="salud/">
```

es una tarjeta de la página principal. Y:

```html
<a class="beauty-section-card" href="maquillaje/">
```

es una tarjeta utilizada dentro de Belleza y cosmética.

No todas las páginas tienen que utilizar tarjetas. Por ejemplo, las recetas utilizan listas porque esperamos tener muchas.

## Iconos

Utilizamos Tabler Icons. Un icono tiene esta estructura:

```html
<i class="ti ti-nombre-del-icono"></i>
```

Por ejemplo:

```html
<i class="ti ti-heartbeat"></i>
```

Los iconos de las tarjetas principales utilizan actualmente nuestro color de acento:

```css
.iyg-card i {
  color: var(--iyg-accent);
}
```

Si quiero cambiar un icono, puedo buscar otro en el catálogo de Tabler Icons y sustituir solamente el nombre.

## Flecha de navegación

Las páginas que están dentro de una sección tienen una flecha `←` para volver exactamente un nivel hacia arriba. Utilizamos:

```html
<a class="back-arrow" href="../">←</a>
```

No escribimos «Volver a...» porque queremos mantener la navegación visualmente sencilla.

## Texto justificado

El texto de los artículos se justifica globalmente mediante CSS:

```css
.md-typeset p,
.md-typeset li {
  text-align: justify;
}
```

De esta manera no tenemos que añadir `text-align: justify` manualmente a cada artículo.