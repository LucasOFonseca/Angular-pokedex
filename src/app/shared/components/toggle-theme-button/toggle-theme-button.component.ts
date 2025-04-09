import { Component, inject } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-toggle-theme-button',
  imports: [MatIcon, MatButtonModule, MatIconButton],
  templateUrl: './toggle-theme-button.component.html',
})
export class ToggleThemeButtonComponent {
  readonly themeService = inject(ThemeService);
}
