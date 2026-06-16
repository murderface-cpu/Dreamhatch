"""Project content endpoints."""

from fastapi import APIRouter, HTTPException, status

from app.schemas.project import Project, ProjectSummary
from app.services import content

router = APIRouter(prefix="/projects", tags=["projects"])


@router.get("", response_model=list[ProjectSummary])
async def list_projects() -> list[ProjectSummary]:
    """List all projects for the homepage grid."""
    summaries: list[ProjectSummary] = []
    for p in content.list_projects():
        summaries.append(
            ProjectSummary(
                slug=p["slug"],
                title=p["title"],
                cat=p["cat"],
                img=p["heroImg"],
                body=p["overview"],
            )
        )
    return summaries


@router.get("/{slug}", response_model=Project)
async def get_project(slug: str) -> Project:
    """Return a single project page by slug."""
    project = content.get_project(slug)
    if project is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Project '{slug}' not found",
        )
    return Project(**project)
