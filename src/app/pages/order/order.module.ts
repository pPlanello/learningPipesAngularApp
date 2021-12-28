import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    PipesModule
  ]
})
export class OrderModule { }
