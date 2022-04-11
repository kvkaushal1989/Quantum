import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minusSignToParens'
})
export class MinusToParensPipePipe implements PipeTransform {

  // transform(val: number): number {
  //   return Math.abs(val);
  // }
  transform(value: any, args?: any): any {
    return value.charAt(0) === '-' ?
           '(' + value.substring(1, value.length) + ')' :
           value;
    }

}
