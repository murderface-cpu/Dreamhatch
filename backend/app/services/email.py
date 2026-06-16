"""Transactional email helpers. Uses Resend when configured, logs otherwise."""

import logging
from dataclasses import dataclass

import resend

from app.core.config import get_settings

settings = get_settings()
logger = logging.getLogger(__name__)


@dataclass(frozen=True)
class EmailMessage:
    to: str
    subject: str
    html: str
    reply_to: str | None = None


def send_email(message: EmailMessage) -> bool:
    """Send a transactional email.

    Returns True if the provider accepted the message, False otherwise.
    In development or when no API key is configured, the message is logged
    instead of sent.
    """
    if not settings.resend_api_key:
        logger.info(
            "[email-stub] to=%s subject=%s reply_to=%s",
            message.to,
            message.subject,
            message.reply_to,
        )
        return False

    resend.api_key = settings.resend_api_key
    params: resend.Emails.SendParams = {
        "from": f"{settings.app_name} <noreply@dreamhatchkenya.org>",
        "to": [message.to],
        "subject": message.subject,
        "html": message.html,
    }
    if message.reply_to:
        params["reply_to"] = message.reply_to
    try:
        resend.Emails.send(params)
        return True
    except Exception:  # noqa: BLE001  -- provider errors are non-fatal
        logger.exception("Failed to send email to %s", message.to)
        return False


__all__ = ["EmailMessage", "send_email"]
