import { Component, OnInit } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { PizzaComponent } from './pizza/pizza.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizzamobile-frontend';

  pizzas = [
    { "name": "Margherita", "ingredients": "Tomate, mozzarella, origan" },
    { "name": "Napoli", "ingredients": "Tomate, mozzarella, câpre, anchois, olive, origan" },
    { "name": "Peperoni", "ingredients": "Tomate, mozzarella, poivrons, olives noires, origan" },
    { "name": "Diavola", "ingredients": "Tomate, mozzarella, chorizo, poivrons, ail, origan" },
  ];

  ngOnInit() {
    this.pizzas;
  }
}
