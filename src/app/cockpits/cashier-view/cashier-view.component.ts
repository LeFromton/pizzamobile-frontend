import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cashier-view',
  templateUrl: './cashier-view.component.html',
  styleUrls: ['./cashier-view.component.scss']
})
export class CashierViewComponent implements OnInit {

  title = 'pizzamobile-frontend';
  public pizzaForm: FormGroup;
  name: string = "";
  phone: string = "";
  status: string = "";
  margherita: string = "";
  diavola: string = "";
  napolina: string = "";
  peperoni: string = "";
  pizzas: object = [];
  orderData: object = [];
  dataFromBackend: object = [];
  errorMessage: string = "";
  successMessage: boolean = false;


  constructor(private http: HttpClient) {

    // TODO : if only one pizza is selected allow to submit as well. Right now we can submit the order onyl when every pizza is selected at least once...
    this.pizzaForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      margherita: new FormControl(0, [Validators.min(0), Validators.max(10)]),
      diavola: new FormControl(0, [Validators.min(0), Validators.max(10)]),
      napolina: new FormControl(0, [Validators.min(0), Validators.max(10)]),
      peperoni: new FormControl(0, [Validators.min(0), Validators.max(10)])
    })
  }

  ngOnInit(): void {
    this.http.get<any>('http://pizzamobile.neuronsless.ch:3000/api/orders').subscribe(
      data => this.dataFromBackend = data
    )
    console.log('backend response', this.dataFromBackend);
  }


  createCommand(): void {
    this.name = this.pizzaForm.get('name')?.value;
    this.phone = this.pizzaForm.get('phone')?.value;
    this.margherita = this.pizzaForm.get('margherita')?.value;
    this.diavola = this.pizzaForm.get('diavola')?.value;
    this.napolina = this.pizzaForm.get('napolina')?.value;
    this.peperoni = this.pizzaForm.get('peperoni')?.value;

    const orderData = {
      name: this.name,
      phone: this.phone,
      status: 'cooking',
      pizzas: [
        {
          pizzaName: 'margherita',
          amount: this.margherita
        },
        {
          pizzaName: 'diavola',
          amount: this.diavola
        },
        {
          pizzaName: 'napolina',
          amount: this.napolina
        },
        {
          pizzaName: 'peperoni',
          amount: this.peperoni
        },
      ]
    };

    // send orderData to backend
    this.http.post<any>('http://pizzamobile.neuronsless.ch:3000/api/orders', orderData, { responseType: 'json' }).subscribe({
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error.status);

        if (error.status === '200' || error.status === '201') {
          this.successMessage = true;
        }
      }
    });


    console.log('order array', orderData);
    console.log('error', this.errorMessage);
  }

  testBackend() {
    console.log('result backend', this.dataFromBackend);
  }
}
