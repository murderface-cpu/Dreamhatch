"""Donation business logic — persistence and reference code generation."""

import secrets

from sqlalchemy.ext.asyncio import AsyncSession

from app.models.donation import Donation, DonationStatus
from app.schemas.donation import DonationCreate


def _generate_reference_code() -> str:
    """Return a short, human-friendly donation reference code."""
    return f"DHK-{secrets.token_hex(4).upper()}"


async def create_donation(
    db: AsyncSession,
    payload: DonationCreate,
) -> Donation:
    """Persist a new donation and return the saved record."""
    donation = Donation(
        donor_name=payload.donor_name,
        donor_email=str(payload.donor_email),
        donor_phone=payload.donor_phone,
        amount_kes=payload.amount_kes,
        is_monthly=payload.is_monthly,
        notes=payload.notes,
        status=DonationStatus.PENDING,
        reference_code=_generate_reference_code(),
    )
    db.add(donation)
    await db.commit()
    await db.refresh(donation)
    return donation


__all__ = ["create_donation"]
