export interface Hero {
    id: number;
    name: string;
    appearance: {
      'eye-color': string;
      gender: string;
      'hair-color': string;
      height: string[];
      race: string;
      weight: string[];
    };
    biography: {
      aliases: string[];
      alignment: string;
      'alter-egos': string;
      'first-appearance': string;
      'full-name': string;
      'place-of-birth': string;
      publisher: string;
    };
    connections: {
      'group-affiliation': string;
      relatives: string;
    };
    image: {
      url: string;
    };
    powerstats: {
      combat: string;
      durability: string;
      intelligence: string;
      power: string;
      speed: string;
      strength: string;
    };
    work: {
      base: string;
      occupation: string;
    };
}
