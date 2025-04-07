import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PokemonService } from '../../shared/services/pokemon.service';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [AsyncPipe, PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
  readonly pokemonService = inject(PokemonService);

  pokemonList$ = this.pokemonService.fetchPokemonList();

  isLoadingList = this.pokemonService.isLoadingList;
  pokemonList = this.pokemonService.pokemonList;
}
