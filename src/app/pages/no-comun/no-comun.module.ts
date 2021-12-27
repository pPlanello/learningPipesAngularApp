import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoComunComponent } from './no-comun.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    NoComunComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class NoComunModule { }
