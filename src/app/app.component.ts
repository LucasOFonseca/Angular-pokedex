import { afterNextRender, Component, inject } from '@angular/core';
import { FilterByTypeComponent } from './components/filter-by-type/filter-by-type.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [PokemonListComponent, FilterByTypeComponent, HeaderComponent],
})
export class AppComponent {
  readonly themeService = inject(ThemeService);

  constructor() {
    afterNextRender(() => {
      this.themeService.getUserPreferredColorTheme();
    });
  }
}
