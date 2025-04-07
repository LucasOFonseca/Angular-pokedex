import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT);

  currentTheme = signal<Theme>('light');

  private getStoredColorTheme() {
    const theme = localStorage.getItem('theme') as Theme | null;

    return theme;
  }

  private setPreferredColorTheme(theme: Theme) {
    localStorage.setItem('theme', theme);
    this.currentTheme.set(theme);

    if (this.currentTheme() === 'dark') {
      this.document.documentElement.classList.add('dark');
    } else {
      this.document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme() {
    this.setPreferredColorTheme(
      this.currentTheme() === 'dark' ? 'light' : 'dark'
    );
  }

  getUserPreferredColorTheme() {
    const theme = this.getStoredColorTheme();

    if (theme) {
      this.setPreferredColorTheme(theme);

      return;
    }

    const isDarkOS = window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.setPreferredColorTheme(isDarkOS ? 'dark' : 'light');
  }
}
