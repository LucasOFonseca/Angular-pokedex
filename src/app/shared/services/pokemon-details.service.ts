import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { PokemonDetails } from '../models/pokemon-details.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailsService {
  private readonly httpClient = inject(HttpClient);

  pokemonDetailsList = signal<PokemonDetails[]>([]);

  fetchPokemonDetails(detailsUrl: string) {
    return this.httpClient
      .get<PokemonDetails>(detailsUrl)
      .pipe(
        tap((pokemonDetails) =>
          this.pokemonDetailsList.update((p) => [...p, pokemonDetails])
        )
      );
  }

  getDetailsByName(name: string) {
    return this.pokemonDetailsList().find((pokemon) => pokemon.name === name);
  }
}
