import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  imports: [],
  template: `
    <img
      class="animate-spin"
      src="/Pokeball_Spinner.svg"
      alt="spinner"
      [width]="size"
      [height]="size"
    />
  `,
})
export class LoadingSpinnerComponent {
  @Input() size = 24;
}
