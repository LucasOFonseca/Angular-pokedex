import { NgIf, TitleCasePipe } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, finalize, map } from 'rxjs';
import { LoadingSpinnerComponent } from '../../../../shared/components/loading-spinner/loading-spinner.component';
import { TypeChipComponent } from '../../../../shared/components/type-chip/type-chip.component';
import { Chain } from '../../../../shared/models/evolution-chain.model';
import { DecimeterToCentimeterPipe } from '../../../../shared/pipes/decimeter-to-centimeter.pipe';
import { HectogramToKilogramPipe } from '../../../../shared/pipes/hectogram-to-kilogram.pipe';
import { EvolutionChainService } from '../../../../shared/services/evolution-chain.service';
import { PokemonDetailsService } from '../../../../shared/services/pokemon-details.service';
import { PokemonSpeciesService } from '../../../../shared/services/pokemon-species.service';
import { typeColors } from '../../../../shared/utils/type-colors';
import { EvolutionChainItemComponent } from './components/evolution-chain-item/evolution-chain-item.component';

interface DialogData {
  pokemonId: number;
}

@Component({
  selector: 'app-pokemon-details-dialog',
  imports: [
    TitleCasePipe,
    TypeChipComponent,
    HectogramToKilogramPipe,
    DecimeterToCentimeterPipe,
    LoadingSpinnerComponent,
    EvolutionChainItemComponent,
    MatButtonModule,
    MatIcon,
    NgIf,
  ],
  templateUrl: './pokemon-details-dialog.component.html',
})
export class PokemonDetailsDialogComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    const pokemon$ = activatedRoute.queryParamMap.pipe(
      map((params) => params.get('pokemon')),
      distinctUntilChanged()
    );

    pokemon$.subscribe((pokemonParam) => {
      const pokemonId = pokemonParam ? parseInt(pokemonParam) : null;

      if (pokemonId && pokemonId !== this.pokemonId()) {
        this.pokemonId.set(pokemonId);

        if (this.cry && this.details?.cries)
          this.cry.src = this.details.cries.latest;
      }
    });
  }

  readonly pokemonDetailsService = inject(PokemonDetailsService);
  readonly pokemonSpeciesService = inject(PokemonSpeciesService);
  readonly evolutionChainService = inject(EvolutionChainService);

  readonly dialogRef = inject(MatDialogRef<PokemonDetailsDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  pokemonId = model(this.data.pokemonId);

  cry: HTMLAudioElement | undefined;
  typeColors = typeColors;
  details = this.pokemonDetailsService.getDetailsById(this.pokemonId());

  species = this.pokemonSpeciesService.getPokemonSpeciesById(this.pokemonId());
  isLoadingSpecies = false;

  evolutionChain =
    this.details &&
    this.evolutionChainService.getEvolutionChainByName(this.details.name);
  evolutionPaths: { name: string }[][] = [];

  fetchAll(id: number) {
    if (!this.details) {
      this.pokemonDetailsService
        .fetchPokemonDetailsById(id)
        .subscribe((data) => {
          this.details = data;

          this.isLoadingSpecies = true;

          this.pokemonSpeciesService
            .fetchPokemonSpecies(data.species.url)
            .pipe(finalize(() => (this.isLoadingSpecies = false)))
            .subscribe((res) => {
              this.species = res;

              if (!this.evolutionChain) {
                this.evolutionChainService
                  .fetchEvolutionChain(res.evolution_chain.url)
                  .subscribe((chain) => {
                    this.evolutionChain = chain;

                    this.evolutionPaths = this.getAllEvolutionPaths(
                      chain.chain
                    );
                  });
              }
            });
        });
    } else if (!this.species) {
      this.isLoadingSpecies = true;

      this.pokemonSpeciesService
        .fetchPokemonSpecies(this.details.species.url)
        .pipe(finalize(() => (this.isLoadingSpecies = false)))
        .subscribe((res) => {
          this.species = res;

          if (!this.evolutionChain) {
            this.evolutionChainService
              .fetchEvolutionChain(res.evolution_chain.url)
              .subscribe((chain) => {
                this.evolutionChain = chain;

                this.evolutionPaths = this.getAllEvolutionPaths(chain.chain);
              });
          } else {
            this.evolutionPaths = this.getAllEvolutionPaths(
              this.evolutionChain.chain
            );
          }
        });
    } else if (!this.evolutionChain) {
      this.evolutionChainService
        .fetchEvolutionChain(this.species.evolution_chain.url)
        .subscribe((chain) => {
          this.evolutionChain = chain;

          this.evolutionPaths = this.getAllEvolutionPaths(chain.chain);
        });
    } else {
      this.evolutionPaths = this.getAllEvolutionPaths(
        this.evolutionChain.chain
      );
    }
  }

  pokemonId$ = this.pokemonId.subscribe((newValue) => {
    this.details = this.pokemonDetailsService.getDetailsById(newValue);
    this.species = this.pokemonSpeciesService.getPokemonSpeciesById(newValue);
    this.evolutionChain =
      this.details &&
      this.evolutionChainService.getEvolutionChainByName(this.details.name);

    this.fetchAll(newValue);
  });

  ngOnInit() {
    this.fetchAll(this.pokemonId());
  }

  getAllEvolutionPaths(
    chain: Chain,
    path: { name: string }[] = []
  ): { name: string }[][] {
    const currentPath = [...path, chain.species];

    if (!chain.evolves_to || chain.evolves_to.length === 0) {
      return [currentPath];
    }

    let paths: { name: string }[][] = [];
    chain.evolves_to.forEach((evolution) => {
      const evolutionPaths = this.getAllEvolutionPaths(evolution, currentPath);
      paths = paths.concat(evolutionPaths);
    });

    return paths;
  }

  playCry() {
    if (!this.details?.cries.latest) return;

    if (!this.cry) {
      this.cry = new Audio(this.details.cries.latest);
      this.cry.volume = 0.3;
      this.cry.load();
    }

    if (this.cry.paused) this.cry.play();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
