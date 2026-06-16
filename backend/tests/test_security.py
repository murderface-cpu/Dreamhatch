import pytest
from jose import JWTError

from app.core.security import (
    create_access_token,
    decode_access_token,
    hash_password,
    verify_password,
)


def test_hash_and_verify_password_round_trip():
    hashed = hash_password("Sup3rSecret!")
    assert hashed != "Sup3rSecret!"
    assert verify_password("Sup3rSecret!", hashed) is True
    assert verify_password("wrong", hashed) is False


def test_jwt_round_trip():
    token = create_access_token(subject="user-42", extra_claims={"role": "admin"})
    payload = decode_access_token(token)
    assert payload["sub"] == "user-42"
    assert payload["role"] == "admin"
    assert "exp" in payload


def test_jwt_invalid_token_raises():
    with pytest.raises(JWTError):
        decode_access_token("not-a-real-jwt")
