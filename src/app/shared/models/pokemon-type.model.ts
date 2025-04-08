import { ListResponse } from './list-response.model';

export type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'stellar'
  | 'unknown'
  | 'shadow';

export interface PokemonTypeResponse {
  name: PokemonType;
  url: string;
}

export interface PokemonTypeList extends ListResponse<PokemonTypeResponse> {}
