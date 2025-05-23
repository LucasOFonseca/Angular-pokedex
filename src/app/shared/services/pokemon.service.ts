import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Pokemon, PokemonList } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  isLoadingList = signal<boolean>(false);
  pokemonList = signal<PokemonList | null>(null);

  fetchPokemonList() {
    return this.httpClient
      .get<PokemonList>(`${this.baseUrl}pokemon`)
      .pipe(tap((pokemonList) => this.pokemonList.set(pokemonList)));
  }

  fetchPokemonListByType(typeUrl: string) {
    return this.httpClient
      .get<{ pokemon: { pokemon: Pokemon }[] }>(typeUrl)
      .pipe(
        tap(({ pokemon }) =>
          this.pokemonList.set({
            count: pokemon.length,
            next: '',
            previous: '',
            results: pokemon.map(({ pokemon }) => pokemon),
          })
        )
      );
  }

  fetchNextPokemonList() {
    return this.httpClient
      .get<PokemonList>(this.pokemonList()?.next ?? `${this.baseUrl}pokemon`)
      .pipe(
        tap((pokemonList) =>
          this.pokemonList.update((current) =>
            current
              ? {
                  ...current,
                  results: [...current.results, ...pokemonList.results],
                  next: pokemonList.next,
                }
              : pokemonList
          )
        )
      );
  }
}
