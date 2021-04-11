import { SingleResponseModel } from './../models/singleResponseModel';
import { CarDetailDto } from './../models/carDetailDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/carModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44374/api/";

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarById(id: number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }
  getCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/cardetail";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetail(id: number): Observable<SingleResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcardetail?id=" + id;
    return this.httpClient.get<SingleResponseModel<CarDetailDto>>(newPath);
  }
}
