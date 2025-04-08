import { ListResponse } from './list-response.model';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonList extends ListResponse<Pokemon> {}
