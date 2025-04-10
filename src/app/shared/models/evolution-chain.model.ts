export interface PokemonEvolution {
  evolves_to: PokemonEvolution[];
  species: { name: string };
}

export interface Chain {
  evolves_to: PokemonEvolution[];
  species: { name: string };
}

export interface PokemonEvolutionChain {
  chain: Chain;
}
