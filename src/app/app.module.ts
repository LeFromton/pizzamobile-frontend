import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './cockpits/cashier-view/pizza/pizza.component';
import { CartComponent } from './cockpits/cashier-view/cart/cart.component';
import { CashierViewComponent } from './cockpits/cashier-view/cashier-view.component';
import { ChefViewComponent } from './cockpits/chef-view/chef-view.component';
import { DeliveryViewComponent } from './cockpits/delivery-view/delivery-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    CartComponent,
    CashierViewComponent,
    ChefViewComponent,
    DeliveryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
