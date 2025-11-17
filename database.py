from tinydb import TinyDB, Query
from classes import Fingerprint, AdSponsor, ContentPartner, User, UserType, AdCampaign, CampaignStatus
from typing import Optional

class Database:
  def __init__(self, path):
    self.db = TinyDB(path)
    self.users_table = self.db.table("users")
    self.campaigns_table = self.db.table("ad_campaigns")
    self.fingerprints_table = self.db.table("fingerprints")

  def _parse_user(self, data: dict) -> User:
    user_type = UserType(data['user_type'])
    if user_type == UserType.AD_SPONSOR:
      return AdSponsor.model_validate(data)
    elif user_type == UserType.CONTENT_PARTNER:
      return ContentPartner.model_validate(data)
    else:
      raise ValueError("Unknown user type")

  def create_user(self, user: User) -> None:
    self.users_table.insert(user.model_dump())

  def create_fingerprint(self, fingerprint: Fingerprint) -> None:
    self.fingerprints_table.insert(fingerprint.model_dump())

  def create_ad_campaign(self, campaign: AdCampaign) -> None:
    self.campaigns_table.insert(campaign.model_dump())

  def get_user_by_email(self, email: str) -> Optional[User]:
    UserQuery = Query()
    result = self.users_table.get(UserQuery.email == email)
    if result:
      return self._parse_user(result)
    return None
  
  def get_user_by_id(self, user_id: str) -> Optional[User]:
    UserQuery = Query()
    result = self.users_table.get(UserQuery.user_id == user_id)
    if result:
      return self._parse_user(result)
    return None
  
  def get_fingerprint_by_id(self, fingerprint_id: str) -> Optional[Fingerprint]:
    FingerprintQuery = Query()
    result = self.fingerprints_table.get(FingerprintQuery.id == fingerprint_id)
    if result:
      return Fingerprint.model_validate(result)
    return None
  
  def get_content_partner_by_website(self, website_url: str) -> Optional[ContentPartner]:
    UserQuery = Query()
    result = self.users_table.get((UserQuery.user_type == UserType.CONTENT_PARTNER) & (UserQuery.website_url == website_url))
    if result:
      return self._parse_user(result)
    return None

  def get_ad_campaign(self, campaign_id: str) -> Optional[AdCampaign]:
    CampaignQuery = Query()
    result = self.campaigns_table.get(CampaignQuery.id == campaign_id)
    if result:
      return AdCampaign.model_validate(result)
    return None
  
  def get_campaign_by_id(self, campaign_id: str) -> Optional[AdCampaign]:
    """Alias for get_ad_campaign for consistency"""
    return self.get_ad_campaign(campaign_id)

  def get_active_campaigns(self) -> list[AdCampaign]:
    campaigns = []
    CampaignQuery = Query()
    results = self.campaigns_table.search(CampaignQuery.status == CampaignStatus.ACTIVE)
    for result in results:
      campaigns.append(AdCampaign.model_validate(result))
    return campaigns

  def get_ad_sponsor_by_campaign(self, campaign_id: str) -> Optional[AdSponsor]:
    UserQuery = Query()
    result = self.users_table.get((UserQuery.user_type == UserType.AD_SPONSOR) & (UserQuery.campaigns.any(campaign_id)))
    if result:
      return self._parse_user(result)
    return None

  def update_user(self, user: User) -> None:
    UserQuery = Query()
    self.users_table.update(user.model_dump(), UserQuery.user_id == user.user_id)

  def update_fingerprint(self, fingerprint: Fingerprint) -> None:
    FingerprintQuery = Query()
    self.fingerprints_table.update(fingerprint.model_dump(), FingerprintQuery.id == fingerprint.id)

  def update_campaign(self, campaign: AdCampaign) -> None:
    CampaignQuery = Query()
    self.campaigns_table.update(campaign.model_dump(), CampaignQuery.id == campaign.id)

