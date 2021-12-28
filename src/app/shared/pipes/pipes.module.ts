import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayusculasPipe } from './mayusculas.pipe';
import { CanFlightPipe } from './can-flight.pipe';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [
    MayusculasPipe,
    CanFlightPipe,
    SortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MayusculasPipe,
    CanFlightPipe,
    SortPipe
  ]
})
export class PipesModule { }
