import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-cashier-view',
  templateUrl: './cashier-view.component.html',
  styleUrls: ['./cashier-view.component.scss']
})
export class CashierViewComponent implements OnInit {

  title = 'pizzamobile-frontend';
  public pizzaForm: FormGroup;

  constructor() {

    this.pizzaForm = new FormGroup({
      phone: new FormControl('', [Validators.required]),
      margherita: new FormControl(0),
      diavola: new FormControl(0),
      napolina: new FormControl(0),
      peperoni: new FormControl(0)
    })
  }

  ngOnInit(): void {

  }


  createCommand(): void {

  }

}
