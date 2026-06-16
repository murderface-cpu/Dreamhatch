"""Contact form endpoint."""

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.schemas.common import MessageResponse
from app.schemas.contact import ContactCreate, ContactRead
from app.services.contacts import create_contact_submission
from app.services.email import EmailMessage, send_email

router = APIRouter(prefix="/contact", tags=["contact"])


@router.post(
    "",
    response_model=ContactRead,
    status_code=status.HTTP_201_CREATED,
    summary="Submit the website contact form",
)
async def submit_contact(
    payload: ContactCreate,
    db: AsyncSession = Depends(get_db),
) -> ContactRead:
    submission = await create_contact_submission(db, payload)
    send_email(
        EmailMessage(
            to="dreamhatchke2020@gmail.com",
            subject=f"[{submission.topic.value}] {submission.full_name}",
            html=(
                f"<p><strong>Topic:</strong> {submission.topic.value}</p>"
                f"<p><strong>From:</strong> {submission.full_name}"
                f" &lt;{submission.email}&gt;"
                f"{f'<br>Phone: {submission.phone}' if submission.phone else ''}</p>"
                f"<hr><p>{submission.message}</p>"
            ),
            reply_to=submission.email,
        )
    )
    return ContactRead.model_validate(submission)


@router.get("/ping", response_model=MessageResponse)
async def ping() -> MessageResponse:
    return MessageResponse(message="contact router is alive")
