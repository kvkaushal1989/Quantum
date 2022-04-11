import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secureEmail'
})
export class SecureEmailPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return this.changeMail(value); 
  }

  changeMail(str) {
    let result = '';
    if (!str) {
      return result;
    }
    const split = str.split('@');
    const letter1 = split[0].substring(0, 1);
    const letter2 = split[0].substring(split[0].length - 1, split[0].length);
    let newFirst = letter1;
    for (let i = 0; i < split[0].length - 2; i++) {
        newFirst += '*';
    }
    newFirst += letter2;

    const letter3 = split[1].substring(0, 1);
    let extension = letter3;
    for (let i = 0; i < split[1].split('.')[0].length - 1; i++) {
        extension += '*';
    }
    extension += '.' + split[1].split('.')[1];
    result = newFirst + '@' + extension;
    return result;
  }
}
