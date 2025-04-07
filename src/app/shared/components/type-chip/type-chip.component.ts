import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PokemonType } from '../../models/pokemon-details.model';
import { typeColors } from '../../utils/type-colors';

@Component({
  selector: 'app-type-chip',
  imports: [TitleCasePipe],
  templateUrl: './type-chip.component.html',
})
export class TypeChipComponent {
  @Input() type: PokemonType | undefined;

  readonly typeColors = typeColors;
}
