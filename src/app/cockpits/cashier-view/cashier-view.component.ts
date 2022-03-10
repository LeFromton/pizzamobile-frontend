import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashier-view',
  templateUrl: './cashier-view.component.html',
  styleUrls: ['./cashier-view.component.scss']
})
export class CashierViewComponent implements OnInit {

  title = 'pizzamobile-frontend';

  pizzas = [
    { "name": "Margherita", "ingredients": "Tomate, mozzarella, origan" },
    { "name": "Napoli", "ingredients": "Tomate, mozzarella, câpre, anchois, olive, origan" },
    { "name": "Peperoni", "ingredients": "Tomate, mozzarella, poivrons, olives noires, origan" },
    { "name": "Diavola", "ingredients": "Tomate, mozzarella, chorizo, poivrons, ail, origan" },
  ];

  constructor() { }

  ngOnInit(): void {

    this.pizzas;

  }

}
