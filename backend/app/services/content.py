"""Read-only project content loaded from a JSON seed file."""

import json
from functools import lru_cache
from pathlib import Path
from typing import Any

_DATA_FILE = Path(__file__).resolve().parent.parent / "data" / "projects.json"


@lru_cache(maxsize=1)
def _load_projects() -> dict[str, Any]:
    with _DATA_FILE.open(encoding="utf-8") as fh:
        return json.load(fh)


def list_projects() -> list[dict[str, Any]]:
    """Return all projects in display order."""
    return _load_projects()["projects"]


def get_project(slug: str) -> dict[str, Any] | None:
    """Return a single project by slug, or None if not found."""
    for project in list_projects():
        if project["slug"] == slug:
            return project
    return None
