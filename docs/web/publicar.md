<a class="back-arrow" href="../">←</a>

# Publicar

Esta página explica cómo guardar mis cambios en GitHub y publicarlos para que se vean reflejados en la web real.

Son dos procesos distintos y separados:

1. Guardar el historial de cambios en GitHub (Git)
2. Publicar la versión actual en GitHub Pages (MkDocs)

## Antes de nada: activar el entorno

Si abro una terminal nueva, primero activo el entorno virtual:

```powershell
venv\Scripts\Activate.ps1
```

## 1. Guardar los cambios en GitHub

Estos comandos guardan mis cambios en el historial de Git y los suben a GitHub.

```powershell
git add .
git commit -m "Descripción breve de lo que he cambiado"
git push
```

Qué hace cada uno:

- `git add .` → prepara todos los archivos que he modificado para guardarlos.
- `git commit -m "..."` → guarda una "foto" del proyecto en este momento, con un mensaje describiendo qué cambié. Cuanto más claro el mensaje, más fácil será entender el historial más adelante.
- `git push` → sube esos cambios guardados a GitHub.

Ejemplos de mensajes de commit claros:

```text
git commit -m "Añadido artículo sobre declaración de la renta"
git commit -m "Cambiado color de acento en tarjetas"
git commit -m "Corregido enlace roto en belleza y cosmética"
```

## 2. Publicar la web en GitHub Pages

Este paso coge la versión actual del proyecto y la publica en la URL pública.

```powershell
mkdocs gh-deploy
```

Este comando:

1. Genera la versión final de la web (HTML, CSS, todo listo).
2. La sube automáticamente a una rama especial de GitHub llamada `gh-pages`.
3. GitHub Pages sirve esa rama en la URL pública.

No hace falta hacer nada más: en un par de minutos los cambios ya se ven en:

```text
https://TU-USUARIO.github.io/imyassagirl/
```

## Orden recomendado

Cada vez que termino de trabajar y quiero publicar:

```powershell
git add .
git commit -m "Mensaje describiendo los cambios"
git push
mkdocs gh-deploy
```

## Notas importantes

- `git push` guarda mi historial y hace copia de seguridad del código fuente (los `.md`, el CSS, etc.), pero **no** actualiza la web pública por sí solo.
- `mkdocs gh-deploy` actualiza la web pública, pero es buena práctica hacer siempre primero `git push`, para no perder nunca el código fuente aunque algo falle en el despliegue.
- Si veo un error al ejecutar cualquiera de estos comandos, copio el mensaje de error completo para revisarlo con calma antes de repetir el comando.