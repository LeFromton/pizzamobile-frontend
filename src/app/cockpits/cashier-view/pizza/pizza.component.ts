import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  @Input() pizza: any;

  constructor() { }

  ngOnInit(): void {
    console.log('data => ', this.pizza);
  }

}
