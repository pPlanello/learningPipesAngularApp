import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from 'src/app/shared/models/heroe.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  isUpper: boolean = false;
  sortBy: string = '';
  heroes: Heroe[] = [
    {name: 'Superman', canFlight: true, color: Color.blue},
    {name: 'Spiderman', canFlight: false, color: Color.red},
    {name: 'Catwoman', canFlight: false, color: Color.black},
    {name: 'Green Lantern', canFlight: true, color: Color.green},
    {name: 'Iron Man', canFlight: true, color: Color.red}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeUpperCase() {
    this.isUpper = !this.isUpper;
  }

  sortByField(value: string) {
   this.sortBy === value ? this.sortBy = '' : this.sortBy = value;
  }
}
