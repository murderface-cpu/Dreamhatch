import pytest

from app.core.database import AsyncSessionLocal
from app.core.security import hash_password
from app.models.user import User, UserRole


@pytest.fixture
async def admin_token(client):
    async with AsyncSessionLocal() as session:
        user = User(
            email="admin-list@example.com",
            full_name="List Admin",
            hashed_password=hash_password("Sup3rSecret!"),
            role=UserRole.ADMIN,
            is_active=True,
        )
        session.add(user)
        await session.commit()
    login = await client.post(
        "/api/v1/auth/login",
        data={"username": "admin-list@example.com", "password": "Sup3rSecret!"},
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    yield login.json()["access_token"]
    async with AsyncSessionLocal() as session:
        await session.execute(
            User.__table__.delete().where(User.email == "admin-list@example.com")
        )
        await session.commit()


async def test_admin_donations_requires_auth(client):
    response = await client.get("/api/v1/admin/donations")
    assert response.status_code == 401


async def test_admin_donations_with_token(client, admin_token):
    response = await client.get(
        "/api/v1/admin/donations",
        headers={"Authorization": f"Bearer {admin_token}"},
    )
    assert response.status_code == 200
    assert isinstance(response.json(), list)


async def test_admin_contact_with_token(client, admin_token):
    response = await client.get(
        "/api/v1/admin/contact",
        headers={"Authorization": f"Bearer {admin_token}"},
    )
    assert response.status_code == 200
    assert isinstance(response.json(), list)
