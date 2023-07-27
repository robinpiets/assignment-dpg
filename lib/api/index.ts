const GAME_OF_THRONES_API_URL = 'https://www.anapioficeandfire.com/api';

export const GAME_OF_THRONES_API = {
  books: `${GAME_OF_THRONES_API_URL}/books`,
  characters: `${GAME_OF_THRONES_API_URL}/characters`,
  houses: `${GAME_OF_THRONES_API_URL}/houses`,
};

/**
 * Basic security
 *
 * Note: There is an inconsistency in the `GAME_OF_THRONES_API_URL` with using `www`
 */
export const isValidApiUrl = (url?: string) =>
  url?.startsWith(GAME_OF_THRONES_API_URL) ||
  url?.startsWith(GAME_OF_THRONES_API_URL.replace('www.', ''));
