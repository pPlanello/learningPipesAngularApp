import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { BasicComponent } from './basic.component';



@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class BasicModule { }
