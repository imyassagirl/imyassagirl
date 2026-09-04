<a class="back-arrow" href="../">←</a>

# Teoría

Esta página explica qué herramientas uso para construir la web y por qué las elegí. No hace falta saber programación avanzada para entender esto: es solo el "por qué" detrás de cada pieza.

## Markdown

Markdown es un lenguaje muy sencillo para escribir texto con formato (títulos, negritas, listas, enlaces...) sin usar código complicado. Cada artículo de la web es, literalmente, un archivo `.md` con texto escrito de esta forma.

Lo uso porque es rápido de escribir, fácil de leer incluso sin formato, y es el lenguaje que espera MkDocs para generar las páginas.

## MkDocs

MkDocs es un programa que coge todos mis archivos `.md` y los convierte automáticamente en una web completa: con menú de navegación, buscador, estilos, etc.

Lo elegí porque:

- Escribo en Markdown, no en HTML puro, así que añadir contenido nuevo es simple.
- Genera la web entera con un solo comando.
- Tiene una extensión llamada **Material for MkDocs**, que le da un diseño moderno de base sobre el que después he podido personalizar colores, tipografías y componentes.
- No necesito bases de datos ni un servidor complicado: todo son archivos.

## Git

Git es un sistema que guarda un historial de todos los cambios que hago en el proyecto. Cada vez que hago un `commit`, queda guardada una "foto" del proyecto en ese momento, con la posibilidad de volver atrás si algo se rompe.

Lo uso porque es la herramienta estándar para controlar versiones de un proyecto, y porque es necesario para poder subir el proyecto a GitHub.

## GitHub

GitHub es una plataforma online donde se guarda una copia de mi proyecto (con todo su historial de Git). Es como el "almacén" en la nube de todo mi código.

Lo elegí porque:

- Es gratuito para proyectos públicos.
- Si mi ordenador se rompe o pierdo los archivos, el proyecto sigue existiendo ahí.
- Es el sitio desde donde GitHub Pages coge los archivos para publicar la web.

Mi repositorio se llama `imyassagirl` y es público.

## GitHub Pages

GitHub Pages es un servicio de GitHub que coge los archivos ya generados de mi web (los que crea MkDocs) y los publica en internet, en una dirección con esta forma:

```text
https://TU-USUARIO.github.io/imyassagirl/
```

Lo elegí porque:

- Es gratuito.
- Está directamente conectado a mi repositorio de GitHub: no necesito contratar un hosting aparte.
- MkDocs tiene un comando (`mkdocs gh-deploy`) que hace todo el proceso de publicación automáticamente.

## Resumen del flujo completo

1. Escribo contenido en Markdown dentro de `docs/`.
2. MkDocs convierte esos archivos en una web completa.
3. Git guarda el historial de cambios de mi proyecto.
4. GitHub guarda una copia online del proyecto.
5. GitHub Pages publica la web para que cualquiera pueda verla.

Los pasos concretos de cómo hacer esto en la práctica están en [Crear un artículo](crear_articulo.md) y [Publicar](publicar.md).