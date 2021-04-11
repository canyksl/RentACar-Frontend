import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/responseModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiURL = "https://localhost:44374/api/";

  constructor(private httpClient: HttpClient) { }

  payment(payment: Payment): Observable<ResponseModel> {
    let newUrl = this.apiURL + 'rentals/payment';
    return this.httpClient.post<ResponseModel>(newUrl, payment);
  }
}
