"""Dream Hatch Kenya — FastAPI application entrypoint."""

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1 import donations as donations_router
from app.api.v1 import projects as projects_router
from app.core.config import get_settings

settings = get_settings()


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

app.include_router(donations_router.router, prefix="/api/v1")
app.include_router(projects_router.router, prefix="/api/v1")


@app.get("/api/health", tags=["meta"])
async def health() -> dict[str, str]:
    return {"status": "ok", "environment": settings.app_env}
