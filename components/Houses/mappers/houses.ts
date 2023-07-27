import { House } from '../../../lib/types';

/** Map raw data to Houses model
 *
 * Defaults to an empty array if raw is not an array
 */
export const toHouses = (raw: unknown) => {
  if (!Array.isArray(raw)) {
    return [];
  }

  const houses = raw.map((rawItem) => {
    const house: House = {
      coatOfArms: rawItem?.coatOfArms ?? '',
      id: rawItem?.url ? rawItem.url.split('/').at(-1) : '',
      name: rawItem?.name ?? '',
      region: rawItem?.region ?? '',
      words: rawItem?.words ?? '',
    };
    return house;
  });

  // Return only houses that have a `name` and an `id`
  return houses.filter((h) => h.name && h.id);
};
