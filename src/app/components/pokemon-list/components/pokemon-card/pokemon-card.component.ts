import { TitleCasePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { LoadingSpinnerComponent } from '../../../../shared/components/loading-spinner/loading-spinner.component';
import { TypeChipComponent } from '../../../../shared/components/type-chip/type-chip.component';
import { PokemonDetails } from '../../../../shared/models/pokemon-details.model';
import { Pokemon } from '../../../../shared/models/pokemon.model';
import { PokemonDetailsService } from '../../../../shared/services/pokemon-details.service';
import { typeColors } from '../../../../shared/utils/type-colors';

@Component({
  selector: 'app-pokemon-card',
  imports: [TitleCasePipe, TypeChipComponent, LoadingSpinnerComponent],
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  @Input() pokemon!: Pokemon | undefined;

  readonly pokemonDetailsService = inject(PokemonDetailsService);

  isLoading = false;
  details: PokemonDetails | undefined;
  typeColors = typeColors;

  ngOnInit() {
    this.details = this.pokemonDetailsService.getDetailsByName(
      this.pokemon?.name ?? ''
    );

    if (this.details) return;

    this.isLoading = true;

    this.pokemonDetailsService
      .fetchPokemonDetails(this.pokemon?.url ?? '')
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => (this.details = data));
  }

  handleSelectPokemon() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { pokemon: this.details?.id },
      queryParamsHandling: 'merge',
    });
  }
}
