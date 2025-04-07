import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { PokemonService } from '../../shared/services/pokemon.service';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [AsyncPipe, PokemonCardComponent, InfiniteScrollDirective, NgIf],
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
  readonly pokemonService = inject(PokemonService);

  pokemonList$ = this.pokemonService.fetchPokemonList();

  isLoadingList = this.pokemonService.isLoadingList;
  pokemonList = this.pokemonService.pokemonList;

  onScroll() {
    this.pokemonService.fetchNextPokemonList().subscribe();
  }
}
