from abc import ABC, abstractmethod
from enum import Enum
from datetime import datetime
from typing import Optional, Dict, Any, List
from pydantic import BaseModel, Field

class UserType(str, Enum):
  AD_SPONSOR = "ad_sponsor"
  CONTENT_PARTNER = "content_partner"

class User(BaseModel, ABC):
  user_id: str
  name: str
  email: str
  password_hash: str = ""
  user_type: UserType
  created_at: str = Field(default_factory=lambda: str(datetime.utcnow()))
  balance: float = 0.0

  class Config:
    use_enum_values = True

  def update_balance(self, amount: float) -> None:
    """Update user balance (positive for earnings, negative for spending)"""
    self.balance += amount

  def __str__(self) -> str:
    return f"{self.name} ({self.user_type.value})"
