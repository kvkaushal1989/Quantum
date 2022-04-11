import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positiveNumber'
})
export class PositiveNumberPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return (value < 0) ? value * -1 : value;
  }

}
