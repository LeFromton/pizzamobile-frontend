import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors } from "@angular/forms";

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cashier-view',
  templateUrl: './cashier-view.component.html',
  styleUrls: ['./cashier-view.component.scss']
})
export class CashierViewComponent implements OnInit {

  title = 'pizzamobile-frontend';
  public pizzaForm: FormGroup;
  phone: string = "";
  status: string = "";
  margherita: string = "";
  diavola: string = "";
  napolina: string = "";
  peperoni: string = "";
  pizzas: object = [];
  orderData: object = [];
  dataFromBackend: object = [];


  constructor(private http: HttpClient) {

    // TODO : if only one pizza is selected allow to submit as well. Right now we can submit the order onyl when every pizza is selected at least once...
    this.pizzaForm = new FormGroup({
      phone: new FormControl('', [Validators.required]),
      margherita: new FormControl(0, [Validators.min(1), Validators.max(10)]),
      diavola: new FormControl(0, [Validators.min(1), Validators.max(10)]),
      napolina: new FormControl(0, [Validators.min(1), Validators.max(10)]),
      peperoni: new FormControl(0, [Validators.min(1), Validators.max(10)])
    })
  }

  ngOnInit(): void {
    this.http.get<any>('http://172.16.230.97:3000/api/orders').subscribe(
      data => this.dataFromBackend = data
    )
    console.log('backend response', this.dataFromBackend);
  }


  createCommand(): void {
    this.phone = this.pizzaForm.get('phone')?.value;
    this.margherita = this.pizzaForm.get('margherita')?.value;
    this.diavola = this.pizzaForm.get('diavola')?.value;
    this.napolina = this.pizzaForm.get('napolina')?.value;
    this.peperoni = this.pizzaForm.get('peperoni')?.value;

    const data = { phone: this.phone, margherita: this.margherita, diavola: this.diavola, napolina: this.napolina, peperoni: this.peperoni };

    var orderData = JSON.stringify(data);


    const order = new Array();
    order.push(orderData);
    console.log('order array', order);
  }

  testBackend() {
    console.log('result backend', this.dataFromBackend);
  }

}
