import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BasicModule } from './pages/basic/basic.module';
import { NoComunModule } from './pages/no-comun/no-comun.module';
import { NumbersModule } from './pages/numbers/numbers.module';
import { OrderModule } from './pages/order/order.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    BasicModule,
    NoComunModule,
    NumbersModule,
    OrderModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
