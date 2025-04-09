import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hectogramToKilogram',
})
export class HectogramToKilogramPipe implements PipeTransform {
  transform(value: number) {
    return value / 10;
  }
}
