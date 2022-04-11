import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secureFormat'
})
export class SecureFormatPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value ?  value.replace(value.substring(4, 11), '*******') : null;
    // return value.replace(/(\+\d{3})\d{7}/, '$1*******'); 
  }

}
