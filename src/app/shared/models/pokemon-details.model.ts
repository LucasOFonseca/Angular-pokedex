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
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}
