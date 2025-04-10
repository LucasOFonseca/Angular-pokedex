import { PokemonType } from './pokemon-type.model';

export interface Ability {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  abilities: PokemonAbility[];
  base_experience: number;
  height: number;
  weight: number;
  cries: { latest: string };
  species: { url: string };
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
      showdown: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: PokemonType;
    };
  }[];
}
