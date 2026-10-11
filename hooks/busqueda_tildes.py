import json
from pathlib import Path

QUITAR = str.maketrans("áéíóúüÁÉÍÓÚÜ", "aeiouuAEIOUU")


def on_post_build(config, **kwargs):
    ruta = Path(config["site_dir"]) / "search" / "search_index.json"
    if not ruta.exists():
        return

    datos = json.loads(ruta.read_text(encoding="utf-8"))

    for doc in datos.get("docs", []):
        original = (doc.get("title", "") + " " + doc.get("text", "")).strip()
        sin_tildes = original.translate(QUITAR)
        if sin_tildes != original:
            doc["text"] = doc.get("text", "") + " " + sin_tildes

    ruta.write_text(json.dumps(datos, ensure_ascii=False), encoding="utf-8")