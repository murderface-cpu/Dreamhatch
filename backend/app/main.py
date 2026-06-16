"""Dream Hatch Kenya — FastAPI application entrypoint."""

import pathlib
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse

from app.api.v1 import admin as admin_router
from app.api.v1 import auth as auth_router
from app.api.v1 import contact as contact_router
from app.api.v1 import donations as donations_router
from app.api.v1 import newsletter as newsletter_router
from app.api.v1 import projects as projects_router
from app.core.config import get_settings

settings = get_settings()

STATIC_DIR = pathlib.Path(__file__).parent / "static"


@asynccontextmanager
async def lifespan(app: FastAPI):
    yield


app = FastAPI(
    title=f"{settings.app_name} API",
    version="0.1.0",
    description="Backend for the Dream Hatch Kenya nonprofit website.",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

app.include_router(admin_router.router, prefix="/api/v1")
app.include_router(auth_router.router, prefix="/api/v1")
app.include_router(contact_router.router, prefix="/api/v1")
app.include_router(donations_router.router, prefix="/api/v1")
app.include_router(newsletter_router.router, prefix="/api/v1")
app.include_router(projects_router.router, prefix="/api/v1")


@app.get("/api/health", tags=["meta"])
async def health() -> dict[str, str]:
    return {"status": "ok", "environment": settings.app_env}


# Static + SPA fallback (only when a built frontend exists)
if STATIC_DIR.exists():
    app.mount(
        "/assets",
        StaticFiles(directory=STATIC_DIR / "assets"),
        name="assets",
    )

    @app.get("/", include_in_schema=False)
    async def spa_root() -> FileResponse:
        return FileResponse(STATIC_DIR / "index.html")

    @app.get("/{full_path:path}", include_in_schema=False)
    async def spa_fallback(full_path: str):
        if full_path.startswith("api/"):
            raise HTTPException(status_code=404, detail="Not found")
        candidate = STATIC_DIR / full_path
        if candidate.is_file():
            return FileResponse(candidate)
        return FileResponse(STATIC_DIR / "index.html")
