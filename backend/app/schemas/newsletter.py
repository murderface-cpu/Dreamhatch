"""Newsletter request/response schemas."""

from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class NewsletterSubscribe(BaseModel):
    email: EmailStr
    full_name: str | None = Field(default=None, max_length=120)


class NewsletterSubscriberRead(BaseModel):
    id: int
    email: EmailStr
    full_name: str | None
    is_active: bool
    created_at: datetime

    model_config = {"from_attributes": True}
