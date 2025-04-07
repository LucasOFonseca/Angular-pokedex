import { TitleCasePipe } from '@angular/common';
import { afterNextRender, Component, inject, Input } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { PokemonDetails } from '../../../../shared/models/pokemon-details.model';
import { Pokemon } from '../../../../shared/models/pokemon.model';
import { PokemonDetailsService } from '../../../../shared/services/pokemon-details.service';

@Component({
  selector: 'app-pokemon-card',
  imports: [TitleCasePipe],
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon | undefined;

  readonly pokemonDetailsService = inject(PokemonDetailsService);

  details$: Observable<PokemonDetails> | undefined;

  isLoading = false;
  details: PokemonDetails | undefined;

  constructor() {
    afterNextRender(() => {
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
    });
  }
}
