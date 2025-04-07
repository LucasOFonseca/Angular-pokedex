import { TitleCasePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { TypeChipComponent } from '../../../../shared/components/type-chip/type-chip.component';
import { PokemonDetails } from '../../../../shared/models/pokemon-details.model';
import { Pokemon } from '../../../../shared/models/pokemon.model';
import { PokemonDetailsService } from '../../../../shared/services/pokemon-details.service';
import { typeColors } from '../../../../shared/utils/type-colors';

@Component({
  selector: 'app-pokemon-card',
  imports: [TitleCasePipe, TypeChipComponent],
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon | undefined;

  readonly pokemonDetailsService = inject(PokemonDetailsService);

  details$: Observable<PokemonDetails> | undefined;

  isLoading = false;
  details: PokemonDetails | undefined;
  typeColors = typeColors;

  ngOnInit() {
    this.details$ = this.pokemonDetailsService.fetchPokemonDetails(
      this.pokemon?.url ?? ''
    );

    this.details = this.pokemonDetailsService.getDetailsByName(
      this.pokemon?.url ?? ''
    );

    if (this.details) return;

    this.isLoading = true;

    this.details$
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => (this.details = data));
  }
}
