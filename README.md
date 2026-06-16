# Dream Hatch Kenya

A nonprofit website for **Dream Hatch Kenya** — *Art that heals. Communities that rise.*

Built with **FastAPI** (backend) and **Vue 3 + Vite + Tailwind** (frontend), preserving the warm African earth-tone brand while upgrading the stack to enterprise-grade.

> Powered By **Nerdware Systems**.

## Stack

| Layer | Technology |
|---|---|
| Backend framework | FastAPI 0.115 + Uvicorn |
| ORM | SQLAlchemy 2.0 (async) + Alembic |
| Validation | Pydantic v2 + pydantic-settings |
| Auth | JWT (`python-jose`) + bcrypt (`passlib`) — OAuth2 password flow |
| Database | SQLite (dev) / PostgreSQL (prod, via `asyncpg`) |
| Email | Resend SDK (dev mode logs and returns False) |
| API docs | FastAPI built-in: `/api/docs`, `/api/redoc`, `/api/openapi.json` |
| Tests | pytest + httpx AsyncClient (22 tests) |
| Frontend | Vue 3.5 + Vite 5 + Vue Router 4 + Pinia + Tailwind 3 + lucide-vue-next |
| HTTP | axios |
| Design | Fraunces (display) + Inter (body); terracotta / forest / sun / cream / ink palette |

## Repository layout

```
dreamhatch/
├── backend/                # FastAPI app
│   ├── app/
│   │   ├── api/v1/         # Route modules (admin, auth, contact, donations, newsletter, projects)
│   │   ├── core/           # Settings, database, security, base
│   │   ├── data/           # Project content seed (projects.json)
│   │   ├── models/         # SQLAlchemy ORM models
│   │   ├── schemas/        # Pydantic request/response models
│   │   ├── scripts/        # Management scripts (seed_data)
│   │   ├── services/       # Business logic (content, donations, contacts, newsletter, users, email)
│   │   ├── static/         # Built frontend assets (Vite output, gitignored)
│   │   └── main.py         # FastAPI entrypoint (with static + SPA fallback)
│   ├── alembic/            # Database migrations
│   ├── tests/              # pytest suite (22 tests)
│   ├── pyproject.toml
│   └── .env.example
├── src/                    # Vue frontend
│   ├── components/site/    # AppHeader, AppFooter, Hero, Mission, Focus, Projects, Impact, Donate, GetInvolved, FAQ, Contact, ProjectLayout
│   ├── pages/              # Route components (Home, Project, Contact, NotFound)
│   ├── lib/                # API client + types
│   ├── stores/             # Pinia stores (donations, contact, newsletter)
│   ├── router/             # Vue Router config
│   ├── styles.css          # Tailwind + design tokens
│   └── main.ts
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts          # dev server proxies /api → http://127.0.0.1:8001
└── package.json
```

## API endpoints (12 total)

| Method | Path | Auth | Purpose |
|---|---|---|---|
| GET | `/api/health` | — | Liveness probe |
| GET | `/api/v1/projects` | — | List all 4 projects (homepage grid) |
| GET | `/api/v1/projects/{slug}` | — | Full project page (hero, sections, gallery) |
| POST | `/api/v1/donations` | — | Submit a donation pledge — returns `DHK-XXXX` reference |
| GET | `/api/v1/donations/count` | — | Public pledge count |
| POST | `/api/v1/contact` | — | Submit the website contact form |
| POST | `/api/v1/newsletter/subscribe` | — | Subscribe (idempotent on email) |
| POST | `/api/v1/auth/login` | — | OAuth2 form login → JWT |
| GET | `/api/v1/auth/me` | Bearer | Current authenticated user |
| GET | `/api/v1/admin/donations` | Admin/Editor | List all donations |
| GET | `/api/v1/admin/contact` | Admin/Editor | List all contact submissions |
| GET | `/api/v1/admin/newsletter` | Admin/Editor | List all subscribers |

Full interactive docs: **http://localhost:8001/api/docs**

## Development

### Backend

```bash
cd backend
python -m venv .venv
source .venv/Scripts/activate    # Git Bash on Windows
pip install -e ".[dev]"
cp .env.example .env             # adjust if needed
alembic upgrade head             # create the SQLite DB
python -m app.scripts.seed_data  # create the admin user
uvicorn app.main:app --reload --port 8001
```

- API: http://localhost:8001
- OpenAPI: http://localhost:8001/api/docs
- Redoc: http://localhost:8001/api/redoc

### Frontend (dev mode)

```bash
npm install
npm run dev
```

- App: http://localhost:5173
- The Vite dev server proxies `/api/*` to `http://127.0.0.1:8001` (see `vite.config.ts`)

### Tests

```bash
cd backend
pytest -v
```

Expected: **22 passed**.

## Production build

```bash
# 1. Build the Vue app (outputs to backend/app/static/)
npm run build

# 2. Serve everything from FastAPI on a single port
cd backend
uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4
```

- SPA: `http://localhost:8000/`
- API: `http://localhost:8000/api/v1/...`
- Swagger: `http://localhost:8000/api/docs`
- All non-`/api/*` paths fall back to the SPA's `index.html` so Vue Router can handle them.

### Production environment

Set these in `backend/.env` before deploying:

```env
APP_ENV=production
SECRET_KEY=<generate with: python -c "import secrets; print(secrets.token_hex(32))">
DATABASE_URL=postgresql+asyncpg://USER:PASS@HOST:5432/dreamhatch
RESEND_API_KEY=<your Resend key>
CORS_ORIGINS=https://dreamhatchkenya.org,https://www.dreamhatchkenya.org
ADMIN_EMAIL=admin@dreamhatchkenya.org
ADMIN_PASSWORD=<a strong initial password>
```

Then:

```bash
alembic upgrade head
python -m app.scripts.seed_data
npm run build
uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4
```

Put behind nginx/Caddy for TLS and HSTS.

## Design system

- **Primary:** terracotta — `rgb(192 86 51)` / oklch `0.55 0.18 35`
- **Secondary (focus / contact):** forest — `rgb(64 110 92)` / oklch `0.42 0.09 155`
- **Accent:** sun gold — `rgb(219 168 64)` / oklch `0.78 0.16 65`
- **Background:** cream — `rgb(248 240 226)` / oklch `0.97 0.02 75`
- **Text:** ink — `rgb(45 33 25)` / oklch `0.18 0.03 50`
- **Type:** Fraunces (display, headings) + Inter (body)
- **Radius:** 0.75rem default, 2rem for hero cards
- **Shadow:** `shadow-elegant` (large, soft) + `shadow-warm` (terracotta-tinted)

Component classes live in `src/styles.css` under `@layer components`: `btn-primary`, `btn-secondary`, `input-field`, `input-field-dark`, `section-eyebrow`, `section-eyebrow-on-dark`, `section-title`, `gold-rule`, `container-page`.

## License

© Dream Hatch Kenya. All rights reserved.

Powered By [Nerdware Systems](https://nerdware.systems).
