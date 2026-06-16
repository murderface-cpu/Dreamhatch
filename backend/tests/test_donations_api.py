import pytest

from app.core.database import AsyncSessionLocal
from app.models.donation import Donation


@pytest.fixture(autouse=True)
async def _clean_donations():
    """Wipe donation rows between tests for isolation."""
    async with AsyncSessionLocal() as session:
        await session.execute(Donation.__table__.delete())
        await session.commit()
    yield


async def test_submit_donation_returns_201_with_reference(client):
    response = await client.post(
        "/api/v1/donations",
        json={
            "donor_name": "Wanjiku Mwangi",
            "donor_email": "wanjiku@example.com",
            "donor_phone": "+254700000000",
            "amount_kes": "5000.00",
            "is_monthly": True,
        },
    )
    assert response.status_code == 201
    body = response.json()
    assert body["reference_code"].startswith("DHK-")
    assert body["status"] == "pending"
    assert body["amount_kes"] == "5000.00"
    assert body["is_monthly"] is True


async def test_submit_donation_rejects_invalid_email(client):
    response = await client.post(
        "/api/v1/donations",
        json={
            "donor_name": "Bad Email",
            "donor_email": "not-an-email",
            "amount_kes": "1000",
        },
    )
    assert response.status_code == 422


async def test_submit_donation_rejects_zero_amount(client):
    response = await client.post(
        "/api/v1/donations",
        json={
            "donor_name": "Zero Hero",
            "donor_email": "zero@example.com",
            "amount_kes": "0",
        },
    )
    assert response.status_code == 422
