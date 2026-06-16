from fastapi import FastAPI

app = FastAPI(
    title="Dream Hatch Kenya API",
    version="0.1.0",
    description="Backend for the Dream Hatch Kenya nonprofit website.",
)


@app.get("/api/health", tags=["meta"])
async def health() -> dict[str, str]:
    return {"status": "ok"}
