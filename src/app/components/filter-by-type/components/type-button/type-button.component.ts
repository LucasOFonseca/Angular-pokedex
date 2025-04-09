import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonType } from '../../../../shared/models/pokemon-type.model';
import { typeColors } from '../../../../shared/utils/type-colors';

@Component({
  selector: 'app-type-button',
  imports: [TitleCasePipe, NgClass],
  templateUrl: './type-button.component.html',
})
export class TypeButtonComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParamMap.subscribe((params) => {
      this.selectedType = params.get('type') as PokemonType;
    });
  }

  @Input() type!: PokemonType;

  typeColors = typeColors;
  selectedType: PokemonType | null = null;

  handleSetTypeFilter() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { type: this.type === this.selectedType ? null : this.type },
      queryParamsHandling: 'merge',
    });
  }
}
