import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFlight'
})
export class CanFlightPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'si' : 'no';
  }

}
