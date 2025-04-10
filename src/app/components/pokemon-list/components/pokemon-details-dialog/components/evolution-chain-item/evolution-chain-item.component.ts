import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, finalize, map } from 'rxjs';
import { LoadingSpinnerComponent } from '../../../../../../shared/components/loading-spinner/loading-spinner.component';
import { PokemonDetails } from '../../../../../../shared/models/pokemon-details.model';
import { PokemonDetailsService } from '../../../../../../shared/services/pokemon-details.service';
import { PokemonDetailsDialogComponent } from '../../pokemon-details-dialog.component';

@Component({
  selector: 'app-evolution-chain-item',
  imports: [TitleCasePipe, LoadingSpinnerComponent, NgClass],
  templateUrl: './evolution-chain-item.component.html',
})
export class EvolutionChainItemComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const pokemon$ = activatedRoute.queryParamMap.pipe(
      map((params) => params.get('pokemon')),
      distinctUntilChanged()
    );

    pokemon$.subscribe((pokemonParam) => {
      if (pokemonParam) {
        this.pokemonQueryParam = parseInt(pokemonParam);
      }
    });
  }

  readonly dialogRef = inject(MatDialogRef<PokemonDetailsDialogComponent>);

  readonly pokemonDetailsService = inject(PokemonDetailsService);

  @Input() name!: string;

  pokemonQueryParam: number | undefined;
  isLoadingDetails = false;
  details: PokemonDetails | undefined;

  ngOnInit() {
    this.details = this.pokemonDetailsService.getDetailsByName(this.name);

    if (!this.details) {
      this.isLoadingDetails = true;

      this.pokemonDetailsService
        .fetchPokemonDetailsByName(this.name)
        .pipe(finalize(() => (this.isLoadingDetails = false)))
        .subscribe((data) => (this.details = data));
    }
  }

  goToDetails() {
    if (this.pokemonQueryParam === this.details?.id) return;

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { pokemon: this.details?.id },
      queryParamsHandling: 'merge',
    });
  }
}
