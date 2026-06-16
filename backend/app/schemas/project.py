"""Project content schemas — read-only."""

from pydantic import BaseModel, HttpUrl


class ProjectSection(BaseModel):
    title: str
    body: str
    img: HttpUrl | None = None
    imgAlt: str | None = None
    items: list[str] | None = None


class Project(BaseModel):
    slug: str
    title: str
    cat: str
    heroImg: HttpUrl
    tagline: str
    overview: str
    sections: list[ProjectSection]
    gallery: list[HttpUrl]
    relatedSlug: str | None = None
    relatedTitle: str | None = None


class ProjectSummary(BaseModel):
    """Lightweight listing entry for the homepage grid."""

    slug: str
    title: str
    cat: str
    img: HttpUrl
    body: str
