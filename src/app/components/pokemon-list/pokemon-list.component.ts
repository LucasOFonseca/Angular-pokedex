import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { distinctUntilChanged, map } from 'rxjs';
import { PokemonService } from '../../shared/services/pokemon.service';
import { TypeServiceService } from '../../shared/services/type-service.service';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailsDialogComponent } from './components/pokemon-details-dialog/pokemon-details-dialog.component';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent, InfiniteScrollDirective, NgIf],
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const type$ = activatedRoute.queryParamMap.pipe(
      map((params) => params.get('type')),
      distinctUntilChanged()
    );

    type$.subscribe((selectedType) => {
      const typeUrl =
        this.pokemonTypes()?.results.find((type) => type.name === selectedType)
          ?.url ?? null;

      if (typeUrl) {
        this.pokemonService.fetchPokemonListByType(typeUrl).subscribe();
      } else {
        this.pokemonService.fetchPokemonList().subscribe();
      }
    });

    const pokemon$ = activatedRoute.queryParamMap.pipe(
      map((params) => params.get('pokemon')),
      distinctUntilChanged()
    );

    pokemon$.subscribe((pokemonParam) => {
      if (pokemonParam) {
        this.openPokemonDetails(parseInt(pokemonParam));
      }
    });
  }

  readonly dialog = inject(MatDialog);

  readonly typeService = inject(TypeServiceService);
  readonly pokemonService = inject(PokemonService);

  isLoadingList = this.pokemonService.isLoadingList;
  pokemonList = this.pokemonService.pokemonList;
  pokemonTypes = this.typeService.pokemonTypes;

  openPokemonDetails(pokemonId: number) {
    const dialogRef = this.dialog.open(PokemonDetailsDialogComponent, {
      width: '100%',
      maxWidth: '1290px',
      height: '100%',
      maxHeight: '685px',
      data: { pokemonId },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: { pokemon: null },
        queryParamsHandling: 'merge',
      });
    });
  }

  onScroll() {
    if (!this.pokemonList()?.next) return;

    this.pokemonService.fetchNextPokemonList().subscribe();
  }
}
