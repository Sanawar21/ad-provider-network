from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from enum import Enum

class CampaignStatus(str, Enum):
  ACTIVE = "active"
  PAUSED = "paused"
  COMPLETED = "completed"

class CampaignCategory(str, Enum):
  FOOD = "food"
  COSMETICS = "cosmetics"
  OTHER = "other"

class AdCampaign(BaseModel):
  id: Optional[str] = None
  name: str = Field(..., min_length=1, max_length=255)
  sponsor_id: str = Field(..., description="ID of the ad sponsor")
  description: Optional[str] = Field(None, max_length=1000)
  budget: float = Field(..., gt=0, description="Campaign budget")
  spent: float = Field(0.0, ge=0, description="Amount spent from the budget")
  status: CampaignStatus = CampaignStatus.ACTIVE
  created_at: Optional[str] = Field(default_factory=lambda: str(datetime.utcnow()))
  image: Optional[str] = None  # Image data stored as base64 string
  category: CampaignCategory
  redirect_website_url: str = "http://redirectedwebsite.com"

  def __str__(self) -> str:
    return f"AdCampaign(id={self.id}, name={self.name}, status={self.status})"