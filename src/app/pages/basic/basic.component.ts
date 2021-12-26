import { Component, OnInit } from '@angular/core';

import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);
registerLocaleData(localFr);

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {


  nameLower: string = "pablo";
  nameUpper: string = "PABLO";
  nameComplete: string = "PaBLo pLanELLó SAn sEgUnDo";

  actualDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
