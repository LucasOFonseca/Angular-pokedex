import { afterNextRender, Component, inject } from '@angular/core';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { ToggleThemeButtonComponent } from './shared/components/toggle-theme-button/toggle-theme-button.component';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ToggleThemeButtonComponent, PokemonListComponent],
})
export class AppComponent {
  readonly themeService = inject(ThemeService);

  constructor() {
    afterNextRender(() => {
      this.themeService.getUserPreferredColorTheme();
    });
  }
}
