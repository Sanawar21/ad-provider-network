from .user import User, UserType

class ContentPartner(User):
  user_type: UserType = UserType.CONTENT_PARTNER
  website_url: str
  total_earned: float = 0.0
