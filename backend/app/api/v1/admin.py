"""Admin endpoints — all routes require authentication."""

from typing import Annotated

from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.deps import get_current_user, require_role
from app.core.database import get_db
from app.models.contact import ContactSubmission
from app.models.donation import Donation
from app.models.newsletter import NewsletterSubscriber
from app.models.user import User, UserRole
from app.schemas.contact import ContactRead
from app.schemas.donation import DonationRead
from app.schemas.newsletter import NewsletterSubscriberRead

router = APIRouter(
    prefix="/admin",
    tags=["admin"],
    dependencies=[Depends(require_role(UserRole.ADMIN, UserRole.EDITOR))],
)


@router.get("/donations", response_model=list[DonationRead])
async def list_donations(
    db: Annotated[AsyncSession, Depends(get_db)],
    _: Annotated[User, Depends(get_current_user)],
) -> list[DonationRead]:
    result = await db.execute(select(Donation).order_by(Donation.created_at.desc()))
    return [DonationRead.model_validate(d) for d in result.scalars().all()]


@router.get("/contact", response_model=list[ContactRead])
async def list_contact(
    db: Annotated[AsyncSession, Depends(get_db)],
    _: Annotated[User, Depends(get_current_user)],
) -> list[ContactRead]:
    result = await db.execute(
        select(ContactSubmission).order_by(ContactSubmission.created_at.desc())
    )
    return [ContactRead.model_validate(c) for c in result.scalars().all()]


@router.get("/newsletter", response_model=list[NewsletterSubscriberRead])
async def list_newsletter(
    db: Annotated[AsyncSession, Depends(get_db)],
    _: Annotated[User, Depends(get_current_user)],
) -> list[NewsletterSubscriberRead]:
    result = await db.execute(
        select(NewsletterSubscriber).order_by(NewsletterSubscriber.created_at.desc())
    )
    return [NewsletterSubscriberRead.model_validate(s) for s in result.scalars().all()]
