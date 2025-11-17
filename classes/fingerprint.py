from pydantic import BaseModel, Field

class Fingerprint(BaseModel):
  id: str
  campaigns_clicked: list[str] = Field(default_factory=list)
  campaigns_shown: list[str] = Field(default_factory=list)
  interests: list[str] = Field(default_factory=list)
  loaded_ad_spaces: dict[str, str] = Field(default_factory=dict)  # slot_id -> campaign_id

  def __str__(self) -> str:
    return f"Fingerprint(id={self.id})"