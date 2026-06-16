"""Contact form submission model."""

from datetime import datetime
from enum import StrEnum

from sqlalchemy import DateTime, Enum, String, Text, func
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class ContactTopic(StrEnum):
    VOLUNTEERING = "volunteering"
    DONATING = "donating"
    PARTNERSHIP = "partnership"
    PRESS = "press"
    OTHER = "other"


class ContactSubmission(Base):
    __tablename__ = "contact_submissions"

    id: Mapped[int] = mapped_column(primary_key=True)
    full_name: Mapped[str] = mapped_column(String(120), nullable=False)
    email: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    phone: Mapped[str | None] = mapped_column(String(32), nullable=True)
    topic: Mapped[ContactTopic] = mapped_column(
        Enum(ContactTopic, name="contact_topic"), nullable=False, index=True
    )
    message: Mapped[str] = mapped_column(Text, nullable=False)
    is_resolved: Mapped[bool] = mapped_column(default=False, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )

    def __repr__(self) -> str:
        return f"<ContactSubmission {self.id} from {self.email}>"
