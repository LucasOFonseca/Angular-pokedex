import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { PokemonType } from '../../shared/models/pokemon-type.model';
import { PokemonService } from '../../shared/services/pokemon.service';
import { TypeServiceService } from '../../shared/services/type-service.service';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent, InfiniteScrollDirective, NgIf],
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParamMap.subscribe((params) => {
      const selectedType = params.get('type') as PokemonType;
      const typeUrl =
        this.pokemonTypes()?.results.find((type) => type.name === selectedType)
          ?.url ?? null;

      if (typeUrl) {
        this.pokemonService.fetchPokemonListByType(typeUrl).subscribe();
      } else {
        this.pokemonService.fetchPokemonList().subscribe();
      }
    });
  }

  readonly typeService = inject(TypeServiceService);
  readonly pokemonService = inject(PokemonService);

  isLoadingList = this.pokemonService.isLoadingList;
  pokemonList = this.pokemonService.pokemonList;
  pokemonTypes = this.typeService.pokemonTypes;

  onScroll() {
    if (!this.pokemonList()?.next) return;

    this.pokemonService.fetchNextPokemonList().subscribe();
  }
}
