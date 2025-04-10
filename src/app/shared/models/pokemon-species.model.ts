export interface FlavorTextEntry {
  flavor_text: string;
  language: { name: string };
  version: { name: string };
}

export interface PokemonSpecies {
  id: number;
  evolution_chain: { url: string };
  flavor_text_entries: FlavorTextEntry[];
}
