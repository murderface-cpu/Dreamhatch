"""Seed the database with project content and the configured admin user.

Usage: python -m app.scripts.seed_data
"""

import asyncio

from sqlalchemy import select

from app.core.config import get_settings
from app.core.database import AsyncSessionLocal
from app.core.security import hash_password
from app.models.user import User, UserRole


async def seed_admin() -> None:
    settings = get_settings()
    async with AsyncSessionLocal() as session:
        result = await session.execute(
            select(User).where(User.email == settings.admin_email)
        )
        existing = result.scalar_one_or_none()
        if existing is not None:
            print(f"Admin {settings.admin_email} already exists - skipping.")
            return
        admin = User(
            email=settings.admin_email,
            full_name="Dream Hatch Admin",
            hashed_password=hash_password(settings.admin_password),
            role=UserRole.ADMIN,
            is_active=True,
        )
        session.add(admin)
        await session.commit()
        print(f"Created admin user: {settings.admin_email}")


def main() -> None:
    asyncio.run(seed_admin())


if __name__ == "__main__":
    main()
