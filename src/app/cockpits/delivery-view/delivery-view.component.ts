import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-delivery-view',
  templateUrl: './delivery-view.component.html',
  styleUrls: ['./delivery-view.component.scss']
})
export class DeliveryViewComponent implements OnInit {

  dataFromBackend: any[] | undefined;
  errorMessage: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://pizzamobile.neuronsless.ch:3000/api/orders/filters/cooked').subscribe(
      data => this.dataFromBackend = data
    )
  }

  sendPizzaAsDelivered(id : string) : void {
    this.http.put<any>('http://pizzamobile.neuronsless.ch:3000/api/orders/'+ id, { status: 'delivered' }).subscribe({
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
    }

}
