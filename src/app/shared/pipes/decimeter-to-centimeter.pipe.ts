import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimeterToCentimeter',
})
export class DecimeterToCentimeterPipe implements PipeTransform {
  transform(value: number) {
    return value * 10;
  }
}
