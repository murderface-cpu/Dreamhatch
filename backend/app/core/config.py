"""Application settings loaded from environment variables."""

from functools import lru_cache
from typing import Literal

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    # Application
    app_env: Literal["development", "staging", "production"] = "development"
    app_name: str = "Dream Hatch Kenya"
    app_url: str = "http://localhost:5173"
    api_url: str = "http://localhost:8000"

    # Security
    secret_key: str = "insecure-dev-key-change-me"
    access_token_expire_minutes: int = 60
    cors_origins: list[str] = Field(default_factory=lambda: ["http://localhost:5173"])

    # Database
    database_url: str = "sqlite+aiosqlite:///./dreamhatch.db"

    # Email
    resend_api_key: str | None = None
    donation_notify_email: str = "dreamhatchke2020@gmail.com"
    contact_notify_email: str = "dreamhatchke2020@gmail.com"

    # Admin seed
    admin_email: str = "admin@dreamhatch.local"
    admin_password: str = "ChangeMe123!"

    @field_validator("cors_origins", mode="before")
    @classmethod
    def _split_cors(cls, value: str | list[str]) -> list[str]:
        if isinstance(value, str):
            return [origin.strip() for origin in value.split(",") if origin.strip()]
        return value

    @property
    def is_production(self) -> bool:
        return self.app_env == "production"


@lru_cache
def get_settings() -> Settings:
    return Settings()
