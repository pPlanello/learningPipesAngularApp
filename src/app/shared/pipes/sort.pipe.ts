import { Pipe, PipeTransform } from '@angular/core';
import { Color, Heroe } from '../models/heroe.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  heroes: Heroe[] = [
    {name: 'Superman', canFlight: true, color: Color.blue},
    {name: 'Spiderman', canFlight: false, color: Color.red},
    {name: 'Catwoman', canFlight: false, color: Color.black},
    {name: 'Green Lantern', canFlight: true, color: Color.green},
    {name: 'Iron Man', canFlight: true, color: Color.red}
  ];

  transform(heroes: Heroe[], sortBy: string): Heroe[] {
    if (sortBy === 'name') {
      heroes = heroes.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
    if (sortBy === 'color') {
      heroes = heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);
    }
    if (sortBy === 'flight') {
      heroes = heroes.sort((a, b) => (a.canFlight < b.canFlight) ? 1 : -1);
    }
    if (sortBy === '') {
      heroes = this.heroes;
    }
    return heroes;
  }

}
