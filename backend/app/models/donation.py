"""Donation model — one row per submitted donation intent."""

from datetime import datetime
from decimal import Decimal
from enum import StrEnum

from sqlalchemy import DateTime, Enum, Numeric, String, func
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class DonationStatus(StrEnum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"
    REFUNDED = "refunded"


class Donation(Base):
    __tablename__ = "donations"

    id: Mapped[int] = mapped_column(primary_key=True)
    donor_name: Mapped[str] = mapped_column(String(120), nullable=False)
    donor_email: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    donor_phone: Mapped[str | None] = mapped_column(String(32), nullable=True)
    amount_kes: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False)
    is_monthly: Mapped[bool] = mapped_column(default=False, nullable=False)
    status: Mapped[DonationStatus] = mapped_column(
        Enum(DonationStatus, name="donation_status"),
        default=DonationStatus.PENDING,
        nullable=False,
        index=True,
    )
    reference_code: Mapped[str] = mapped_column(
        String(40), unique=True, nullable=False, index=True
    )
    notes: Mapped[str | None] = mapped_column(String(500), nullable=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    def __repr__(self) -> str:
        return f"<Donation {self.reference_code} {self.amount_kes} KES>"
