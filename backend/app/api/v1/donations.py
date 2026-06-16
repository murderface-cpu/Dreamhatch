"""Donation endpoints — public submission + admin listing."""

from fastapi import APIRouter, Depends, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.models.donation import Donation
from app.schemas.common import MessageResponse
from app.schemas.donation import DonationCreate, DonationRead
from app.services.donations import create_donation
from app.services.email import EmailMessage, send_email

router = APIRouter(prefix="/donations", tags=["donations"])


@router.post(
    "",
    response_model=DonationRead,
    status_code=status.HTTP_201_CREATED,
    summary="Submit a donation intent",
)
async def submit_donation(
    payload: DonationCreate,
    db: AsyncSession = Depends(get_db),
) -> DonationRead:
    donation = await create_donation(db, payload)
    send_email(
        EmailMessage(
            to="dreamhatchke2020@gmail.com",
            subject=f"New donation pledge: KES {donation.amount_kes}",
            html=(
                f"<p><strong>{donation.donor_name}</strong> pledged "
                f"KES {donation.amount_kes}"
                f"{' / month' if donation.is_monthly else ''}.</p>"
                f"<p>Reference: <code>{donation.reference_code}</code><br>"
                f"Email: {donation.donor_email}"
                f"{f'<br>Phone: {donation.donor_phone}' if donation.donor_phone else ''}</p>"
            ),
            reply_to=donation.donor_email,
        )
    )
    return DonationRead.model_validate(donation)


@router.get(
    "/count",
    response_model=MessageResponse,
    summary="Public, count-only stat",
)
async def donations_count(db: AsyncSession = Depends(get_db)) -> MessageResponse:
    result = await db.execute(select(Donation))
    total = len(result.scalars().all())
    return MessageResponse(message=f"{total} donation pledges recorded")
