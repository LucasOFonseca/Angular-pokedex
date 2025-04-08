import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TypeServiceService } from '../../shared/services/type-service.service';
import { TypeButtonComponent } from './components/type-button/type-button.component';

@Component({
  selector: 'app-filter-by-type',
  imports: [AsyncPipe, TypeButtonComponent],
  templateUrl: './filter-by-type.component.html',
})
export class FilterByTypeComponent {
  readonly typeService = inject(TypeServiceService);

  types$ = this.typeService.fetchPokemonTypes();

  types = this.typeService.pokemonTypes;
}
