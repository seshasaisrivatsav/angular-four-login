import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myToUpperCase' })
export class ToUpperCasePipe implements PipeTransform {
  constructor() {}
  transform(text) {
    return text.toUpperCase();
  }
}
