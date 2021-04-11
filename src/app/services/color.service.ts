import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44374/api/";

  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ListResponseModel<Category>> {
    let newPath = this.apiUrl + "colors/getall";
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
  getColorsById(): Observable<SingleResponseModel<Category>> {
    let newPath = this.apiUrl + "colors/getbyid?id=";
    return this.httpClient.get<SingleResponseModel<Category>>(newPath);
  }
}
