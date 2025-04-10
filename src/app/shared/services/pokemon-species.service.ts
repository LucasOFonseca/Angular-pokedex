import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs';
import { PokemonSpecies } from '../models/pokemon-species.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonSpeciesService {
  private readonly httpClient = inject(HttpClient);

  pokemonSpeciesList = signal<PokemonSpecies[]>([]);

  fetchPokemonSpecies(speciesUrl: string) {
    return this.httpClient.get<PokemonSpecies>(speciesUrl).pipe(
      map((pokemonSpecies) => ({
        ...pokemonSpecies,
        flavor_text_entries: pokemonSpecies.flavor_text_entries.flatMap(
          (entry) =>
            entry.language.name === 'en'
              ? [
                  {
                    ...entry,
                    flavor_text: entry.flavor_text.replace('\f', ' '),
                  },
                ]
              : []
        ),
      })),
      tap((pokemonSpecies) =>
        this.pokemonSpeciesList.update((rest) => [...rest, pokemonSpecies])
      )
    );
  }

  getPokemonSpeciesById(id: number) {
    return this.pokemonSpeciesList().find((pokemon) => pokemon.id === id);
  }
}
