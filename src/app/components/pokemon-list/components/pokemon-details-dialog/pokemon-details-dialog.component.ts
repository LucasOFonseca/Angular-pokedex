import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TypeChipComponent } from '../../../../shared/components/type-chip/type-chip.component';
import { DecimeterToCentimeterPipe } from '../../../../shared/pipes/decimeter-to-centimeter.pipe';
import { HectogramToKilogramPipe } from '../../../../shared/pipes/hectogram-to-kilogram.pipe';
import { PokemonDetailsService } from '../../../../shared/services/pokemon-details.service';
import { typeColors } from '../../../../shared/utils/type-colors';

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
  ],
  templateUrl: './pokemon-details-dialog.component.html',
})
export class PokemonDetailsDialogComponent {
  readonly pokemonDetailsService = inject(PokemonDetailsService);

  readonly dialogRef = inject(MatDialogRef<PokemonDetailsDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly pokemonId = this.data.pokemonId;

  details = this.pokemonDetailsService.getDetailsById(this.pokemonId);
  cry: HTMLAudioElement | undefined;
  typeColors = typeColors;

  ngOnInit() {
    if (!this.details) {
      this.pokemonDetailsService
        .fetchPokemonDetailsById(this.pokemonId)
        .subscribe((data) => (this.details = data));
    }
  }

  playCry() {
    if (!this.details?.cries.latest) return;

    if (!this.cry) {
      this.cry = new Audio(this.details.cries.latest);
      this.cry.volume = 0.4;
      this.cry.load();
    }

    if (this.cry.paused) this.cry.play();
  }
}
