import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chef-view',
  templateUrl: './chef-view.component.html',
  styleUrls: ['./chef-view.component.scss']
})
export class ChefViewComponent implements OnInit {

  dataFromBackend: any[] | undefined;
  errorMessage: string = "";
  orderData: object = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://pizzamobile.neuronsless.ch:3000/api/orders/filters/cooking').subscribe(
      data => this.dataFromBackend = data
    )
  }

  sendPizzaToDelivery(id : string) : void {
    this.http.put<any>('http://pizzamobile.neuronsless.ch:3000/api/orders/'+ id, { status: 'cooked' }).subscribe({
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
    window.location.reload();
  }

}
