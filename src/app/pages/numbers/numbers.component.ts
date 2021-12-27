import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  number: number = 49385.8459;
  percentage: number = 0.4856;

  constructor() { }

  ngOnInit(): void {
  }

}
