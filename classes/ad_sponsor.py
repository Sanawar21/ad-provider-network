from .user import User, UserType
from pydantic import Field

class AdSponsor(User):
  user_type: UserType = UserType.AD_SPONSOR
  total_spent: float = 0.0
  campaigns: list[str] = Field(default_factory=list)