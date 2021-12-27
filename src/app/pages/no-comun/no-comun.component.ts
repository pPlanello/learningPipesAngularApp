import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comun',
  templateUrl: './no-comun.component.html',
  styleUrls: ['./no-comun.component.css']
})
export class NoComunComponent implements OnInit {

  // i18nSelect
  name: string = 'Pablo';
  gender: string = 'masculino';
  wordToMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clients: string[] = ['Maria', 'Rodrigo', 'Jorge', 'Renato', 'Nacho'];
  clientsToMap = {
    '=0': 'no tenemos ni un cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  // keyValue
  person = {
    name: 'Pablo',
    year: 20,
    city: 'Madrid'
  }

  // Json Pipe
  heroes = [
    { name: 'Superman', flight: true },
    { name: 'Robin', flight: false },
    { name: 'Aquaman', flight: false },
    { name: 'Thor', flight: true },
  ]

  // Async Pipe
  myObservable = interval(1000);
  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de la promesa');
    }, 3500);
  });

  constructor() { }

  ngOnInit(): void {
  }

  changePerson(name: string) {
    if (name.toLowerCase() === 'pablo') {
      this.name = 'Nuria';
      this.gender = 'femenino';
    }

    if (name.toLowerCase() === 'nuria') {
      this.name = 'Pablo';
      this.gender = 'masculino';
    }
  }

  changeClients(operation: string) {
    if (operation === '+') {
      this.clients.push('cliente');
    }

    if (operation === '-') {
      this.clients.pop()
    }
  }
}
