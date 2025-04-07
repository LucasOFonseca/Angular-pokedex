import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-toggle-theme-button',
  imports: [],
  templateUrl: './toggle-theme-button.component.html',
})
export class ToggleThemeButtonComponent {
  readonly themeService = inject(ThemeService);
}
