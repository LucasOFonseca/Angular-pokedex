import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { PokemonEvolutionChain } from '../models/evolution-chain.model';

@Injectable({
  providedIn: 'root',
})
export class EvolutionChainService {
  private readonly httpClient = inject(HttpClient);

  pokemonEvolutionChainList = signal<PokemonEvolutionChain[]>([]);

  fetchEvolutionChain(url: string) {
    return this.httpClient
      .get<PokemonEvolutionChain>(url)
      .pipe(
        tap((data) =>
          this.pokemonEvolutionChainList.update((rest) => [...rest, data])
        )
      );
  }

  getEvolutionChainByName(name: string) {
    return this.pokemonEvolutionChainList().find(({ chain }) =>
      JSON.stringify(chain).includes(name)
    );
  }
}
