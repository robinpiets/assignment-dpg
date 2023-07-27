import { HouseDetail } from '../../../lib/types';

/** Map raw data to House Detail model
 *
 * Defaults to null
 */
export const toHouseDetail = (raw: any): HouseDetail | null => {
  if (!raw) {
    return null;
  }

  const houseDetail: HouseDetail = {
    coatOfArms: raw?.coatOfArms || null,
    currentLord: raw?.currentLord || null,
    diedOut: raw?.diedOut || null,
    founded: raw?.founded || null,
    founder: raw?.founder || null,
    heir: raw?.heir || null,
    memberUrls: raw?.swornMembers || null,
    name: raw?.name || '',
    overlord: raw?.overlord || '',
    region: raw?.region || '',
    words: raw?.words || '',
  };
  return houseDetail;
};
