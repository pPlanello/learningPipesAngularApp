import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { NumbersComponent } from './numbers.component';



@NgModule({
  declarations: [
    NumbersComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class NumbersModule { }
