import pytest

from app.core.database import AsyncSessionLocal
from app.models.newsletter import NewsletterSubscriber


@pytest.fixture(autouse=True)
async def _clean_subscribers():
    async with AsyncSessionLocal() as session:
        await session.execute(NewsletterSubscriber.__table__.delete())
        await session.commit()
    yield


async def test_subscribe_creates_subscriber(client):
    response = await client.post(
        "/api/v1/newsletter/subscribe",
        json={"email": "new@example.com", "full_name": "New Fan"},
    )
    assert response.status_code == 201
    assert response.json()["email"] == "new@example.com"


async def test_subscribe_is_idempotent(client):
    await client.post(
        "/api/v1/newsletter/subscribe",
        json={"email": "repeat@example.com"},
    )
    response = await client.post(
        "/api/v1/newsletter/subscribe",
        json={"email": "repeat@example.com"},
    )
    assert response.status_code == 201
    assert response.json()["email"] == "repeat@example.com"
