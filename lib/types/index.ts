export type House = {
  coatOfArms: string;
  id: string;
  name: string;
  region: string;
  words: string;
};

export type Member = {
  culture: string;
  born: string;
  died: string;
  gender: string;
  name: string;
};

export type HouseDetail = {
  coatOfArms: string;
  currentLord: string | null;
  diedOut: string | null;
  founded: string | null;
  founder: string | null;
  heir: string | null;
  memberUrls: string[];
  name: string;
  overlord: string;
  region: string;
  words: string;
};
