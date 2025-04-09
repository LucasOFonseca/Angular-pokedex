import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { PokemonDetails } from '../models/pokemon-details.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailsService {
  private readonly baseUrl = environment.apiUrl;
  private readonly httpClient = inject(HttpClient);

  pokemonDetailsList = signal<PokemonDetails[]>([]);

  fetchPokemonDetails(detailsUrl: string) {
    return this.httpClient
      .get<PokemonDetails>(detailsUrl)
      .pipe(
        tap((pokemonDetails) =>
          this.pokemonDetailsList.update((rest) => [...rest, pokemonDetails])
        )
      );
  }

  fetchPokemonDetailsById(id: number) {
    return this.httpClient
      .get<PokemonDetails>(`${this.baseUrl}pokemon/${id}`)
      .pipe(
        tap((pokemonDetails) =>
          this.pokemonDetailsList.update((rest) => [...rest, pokemonDetails])
        )
      );
  }

  getDetailsByName(name: string) {
    return this.pokemonDetailsList().find((pokemon) => pokemon.name === name);
  }

  getDetailsById(id: number) {
    return this.pokemonDetailsList().find((pokemon) => pokemon.id === id);
  }
}
