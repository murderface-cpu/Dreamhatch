import pytest

from app.core.database import AsyncSessionLocal
from app.core.security import hash_password
from app.models.user import User, UserRole


@pytest.fixture
async def admin_user():
    async with AsyncSessionLocal() as session:
        user = User(
            email="admin@example.com",
            full_name="Test Admin",
            hashed_password=hash_password("Sup3rSecret!"),
            role=UserRole.ADMIN,
            is_active=True,
        )
        session.add(user)
        await session.commit()
        await session.refresh(user)
        yield user
        await session.delete(user)
        await session.commit()


async def test_login_returns_jwt(client, admin_user):
    response = await client.post(
        "/api/v1/auth/login",
        data={"username": "admin@example.com", "password": "Sup3rSecret!"},
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    assert response.status_code == 200
    body = response.json()
    assert body["token_type"] == "bearer"
    assert body["access_token"]
    assert body["expires_in"] > 0


async def test_login_with_wrong_password_returns_401(client, admin_user):
    response = await client.post(
        "/api/v1/auth/login",
        data={"username": "admin@example.com", "password": "wrong"},
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    assert response.status_code == 401


async def test_me_requires_token(client):
    response = await client.get("/api/v1/auth/me")
    assert response.status_code == 401


async def test_me_with_valid_token_returns_user(client, admin_user):
    login = await client.post(
        "/api/v1/auth/login",
        data={"username": "admin@example.com", "password": "Sup3rSecret!"},
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    token = login.json()["access_token"]
    response = await client.get(
        "/api/v1/auth/me", headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == 200
    assert response.json()["email"] == "admin@example.com"
