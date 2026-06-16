"""Newsletter subscription endpoint."""

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.schemas.newsletter import NewsletterSubscribe, NewsletterSubscriberRead
from app.services.newsletter import upsert_subscriber

router = APIRouter(prefix="/newsletter", tags=["newsletter"])


@router.post(
    "/subscribe",
    response_model=NewsletterSubscriberRead,
    status_code=status.HTTP_201_CREATED,
    summary="Subscribe an email to the newsletter",
)
async def subscribe(
    payload: NewsletterSubscribe,
    db: AsyncSession = Depends(get_db),
) -> NewsletterSubscriberRead:
    subscriber = await upsert_subscriber(db, payload)
    return NewsletterSubscriberRead.model_validate(subscriber)
