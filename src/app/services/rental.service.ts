import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiURL = "https://localhost:44374/api/";

  constructor(private httpClient: HttpClient) { }

  getRental(): Observable<ListResponseModel<RentalDetail>> {
    let newPath = this.apiURL + 'rentals/getrentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);

  }

  add(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiURL + 'rentals/add', rental);
  }
}
