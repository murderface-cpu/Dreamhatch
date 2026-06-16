"""Donation request/response schemas."""

from datetime import datetime
from decimal import Decimal

from pydantic import BaseModel, EmailStr, Field

from app.models.donation import DonationStatus


class DonationCreate(BaseModel):
    donor_name: str = Field(min_length=2, max_length=120)
    donor_email: EmailStr
    donor_phone: str | None = Field(default=None, max_length=32)
    amount_kes: Decimal = Field(gt=0, le=Decimal("10000000"))
    is_monthly: bool = False
    notes: str | None = Field(default=None, max_length=500)


class DonationRead(BaseModel):
    id: int
    donor_name: str
    donor_email: EmailStr
    donor_phone: str | None
    amount_kes: Decimal
    is_monthly: bool
    status: DonationStatus
    reference_code: str
    created_at: datetime

    model_config = {"from_attributes": True}
