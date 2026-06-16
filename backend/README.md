# Dream Hatch Kenya — Backend (FastAPI)

## Quick start

```bash
cd backend
python -m venv .venv
source .venv/Scripts/activate   # Git Bash on Windows
pip install -e ".[dev]"
cp .env.example .env
alembic upgrade head
python -m app.scripts.seed_data
uvicorn app.main:app --reload
```

- API: http://localhost:8000
- OpenAPI docs: http://localhost:8000/api/docs
- Redoc: http://localhost:8000/api/redoc

## Testing

```bash
pytest -v
```

## Production

Set `APP_ENV=production` and `DATABASE_URL=postgresql+asyncpg://...` in `.env`,
then `alembic upgrade head` and serve with `uvicorn` behind a reverse proxy.
