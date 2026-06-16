"""Shared Pydantic schemas."""

from pydantic import BaseModel, ConfigDict


class MessageResponse(BaseModel):
    """Generic one-message response envelope."""

    message: str


class ORMBase(BaseModel):
    """Base schema that allows reading data from ORM models."""

    model_config = ConfigDict(from_attributes=True)
