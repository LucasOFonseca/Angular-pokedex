import { Component } from '@angular/core';
import { ToggleThemeButtonComponent } from '../../shared/components/toggle-theme-button/toggle-theme-button.component';

@Component({
  selector: 'app-header',
  imports: [ToggleThemeButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
