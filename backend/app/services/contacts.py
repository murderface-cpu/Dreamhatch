"""Contact submission persistence."""

from sqlalchemy.ext.asyncio import AsyncSession

from app.models.contact import ContactSubmission
from app.schemas.contact import ContactCreate


async def create_contact_submission(
    db: AsyncSession, payload: ContactCreate
) -> ContactSubmission:
    submission = ContactSubmission(
        full_name=payload.full_name,
        email=str(payload.email),
        phone=payload.phone,
        topic=payload.topic,
        message=payload.message,
    )
    db.add(submission)
    await db.commit()
    await db.refresh(submission)
    return submission


__all__ = ["create_contact_submission"]
