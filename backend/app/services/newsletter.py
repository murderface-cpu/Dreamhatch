"""Newsletter subscription business logic."""

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.newsletter import NewsletterSubscriber
from app.schemas.newsletter import NewsletterSubscribe


async def upsert_subscriber(
    db: AsyncSession, payload: NewsletterSubscribe
) -> NewsletterSubscriber:
    """Create or reactivate a subscriber — idempotent on email."""
    result = await db.execute(
        select(NewsletterSubscriber).where(
            NewsletterSubscriber.email == str(payload.email)
        )
    )
    existing = result.scalar_one_or_none()
    if existing is not None:
        existing.is_active = True
        if payload.full_name:
            existing.full_name = payload.full_name
        await db.commit()
        await db.refresh(existing)
        return existing

    subscriber = NewsletterSubscriber(
        email=str(payload.email),
        full_name=payload.full_name,
        is_active=True,
    )
    db.add(subscriber)
    await db.commit()
    await db.refresh(subscriber)
    return subscriber


__all__ = ["upsert_subscriber"]
