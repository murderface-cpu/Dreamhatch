"""Contact form request/response schemas."""

from datetime import datetime

from pydantic import BaseModel, EmailStr, Field

from app.models.contact import ContactTopic


class ContactCreate(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    phone: str | None = Field(default=None, max_length=32)
    topic: ContactTopic
    message: str = Field(min_length=10, max_length=4000)


class ContactRead(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    phone: str | None
    topic: ContactTopic
    message: str
    is_resolved: bool
    created_at: datetime

    model_config = {"from_attributes": True}
