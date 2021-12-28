import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: string, isUpper: boolean = true): string {
    return isUpper ? value.toUpperCase() : value.toLowerCase();
  }

}
