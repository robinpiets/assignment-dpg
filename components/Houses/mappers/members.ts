import { Member } from '../../../lib/types';

/** Map raw data to  Member model
 *
 * Defaults to null
 */
export const toMember = (raw: any): Member | null => {
  if (!raw) {
    return null;
  }

  const member: Member = {
    culture: raw.culture || '',
    born: raw.born || '',
    died: raw.died || '',
    gender: raw.gender || '',
    name: raw.name || '',
  };
  return member;
};
