import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './pages/basic/basic.component';
import { NoComunComponent } from './pages/no-comun/no-comun.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: '', component: BasicComponent, pathMatch: 'full' },
  { path: 'number', component: NumbersComponent },
  { path: 'no-comun', component: NoComunComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
