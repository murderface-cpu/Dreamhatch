import pytest

from app.core.database import AsyncSessionLocal
from app.models.contact import ContactSubmission


@pytest.fixture(autouse=True)
async def _clean_contacts():
    async with AsyncSessionLocal() as session:
        await session.execute(ContactSubmission.__table__.delete())
        await session.commit()
    yield


async def test_submit_contact_returns_201(client):
    response = await client.post(
        "/api/v1/contact",
        json={
            "full_name": "Mary Achieng",
            "email": "mary@example.com",
            "phone": "+254****0000",
            "topic": "volunteering",
            "message": "I would love to volunteer with Dream Hatch Kenya.",
        },
    )
    assert response.status_code == 201
    body = response.json()
    assert body["topic"] == "volunteering"
    assert body["is_resolved"] is False


async def test_submit_contact_rejects_short_message(client):
    response = await client.post(
        "/api/v1/contact",
        json={
            "full_name": "Short Msg",
            "email": "short@example.com",
            "topic": "other",
            "message": "hi",
        },
    )
    assert response.status_code == 422
