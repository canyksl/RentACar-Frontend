import { SingleResponseModel } from './../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44374/api/";

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  getBrandsById(): Observable<SingleResponseModel<Brand>> {
    let newPath = this.apiUrl + "brands/getbyid?id=";
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }
}
