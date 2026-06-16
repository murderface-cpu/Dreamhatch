"""ORM models. Import every model here so Alembic autogeneration sees them."""

from app.models.contact import ContactSubmission, ContactTopic  # noqa: F401
from app.models.donation import Donation, DonationStatus  # noqa: F401
from app.models.newsletter import NewsletterSubscriber  # noqa: F401
from app.models.user import User, UserRole  # noqa: F401
