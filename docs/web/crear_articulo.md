<a class="back-arrow" href="../">←</a>

# Crear un artículo

Esta página explica, paso a paso, qué tengo que hacer cada vez que quiero escribir un artículo nuevo.

## 1. Decidir en qué categoría va

Las categorías actuales son:

- `salud/`
- `belleza-cosmetica/`
- `ropa-zapatos/`
- `leyes-finanzas/`
- `hogar-lifestyle/`

Si el artículo encaja en una subcategoría que ya existe (por ejemplo `belleza-cosmetica/skincare/`), lo guardo ahí. Si no encaja en ninguna subcategoría existente, lo guardo directamente en la carpeta de la categoría principal.

## 2. Crear el archivo

Dentro de la carpeta que corresponda, creo un archivo nuevo con extensión `.md`.

Reglas para el nombre del archivo:

- Todo en minúsculas
- Sin espacios (uso guiones `-`)
- Sin tildes ni eñes

Ejemplo: para un artículo sobre cómo hacer la declaración de la renta, dentro de `leyes-finanzas/`, el archivo se llamaría:

```text
declaracion-renta.md
```

## 3. Escribir el contenido

Estructura básica que uso en cada artículo:

```markdown
<a class="back-arrow" href="../">←</a>

# Título del artículo

Breve introducción de una o dos frases explicando qué se va a aprender.

## Primer subtema

Contenido...

## Segundo subtema

Contenido...
```

Cosas a tener en cuenta:

- La flecha `<a class="back-arrow" href="../">←</a>` va siempre arriba del todo, y `../` sube un nivel (a la página índice de esa categoría). Si el artículo está más anidado (por ejemplo dentro de una subcategoría), puede que necesite `../../` — tantos `../` como niveles tenga que subir.
- No hace falta añadir `text-align: justify` en ningún sitio: el texto se justifica solo, porque está definido de forma global en el CSS.
- Si quiero añadir una imagen, la guardo en `docs/assets/` y la enlazo así (ajustando la ruta según cuántos niveles tenga que bajar/subir):

```markdown
![Descripción de la imagen](../assets/nombre-imagen.png)
```

## 4. Enlazar el artículo desde la página índice de su categoría

Un artículo nuevo no aparece automáticamente en ningún sitio: tengo que añadir manualmente un enlace o una tarjeta hacia él desde el `index.md` de esa categoría (o subcategoría), igual que están enlazadas las demás.

## 5. Añadirlo a la navegación (si hace falta)

Si el artículo va dentro de una categoría que ya está en el menú de `mkdocs.yml`, normalmente no hace falta tocar nada más: MkDocs detecta los archivos dentro de las carpetas ya listadas.

Si es una sección completamente nueva, tengo que añadir la ruta dentro del bloque `nav:` de `mkdocs.yml`.

## 6. Previsualizar en local

Antes de publicar nada, compruebo cómo queda:

```powershell
venv\Scripts\Activate.ps1
mkdocs serve
```

Y reviso en `http://127.0.0.1:8000/` que:

- El artículo se ve bien.
- La flecha de vuelta funciona.
- El enlace desde la categoría lleva al artículo correctamente.

Si todo está bien, el siguiente paso es publicarlo — ver [Publicar](publicar.md).