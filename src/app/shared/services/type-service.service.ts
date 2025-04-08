import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { PokemonTypeList } from '../models/pokemon-type.model';

@Injectable({
  providedIn: 'root',
})
export class TypeServiceService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  pokemonTypes = signal<PokemonTypeList | null>(null);

  fetchPokemonTypes() {
    return this.httpClient
      .get<PokemonTypeList>(`${this.baseUrl}type?limit=21`)
      .pipe(tap((pokemonTypes) => this.pokemonTypes.set(pokemonTypes)));
  }
}
