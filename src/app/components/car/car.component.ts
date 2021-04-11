
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: CarDetailDto[] = [];
  car: CarDetailDto;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }
  getCars() {
    this.carService.getCarDetails().subscribe(response => {
      console.log(response.data)
      this.cars = response.data;
    })
  }
  rentCar(carId: number) {
    window.open(window.location.origin + "/cars/cardetail/" + carId)
  }
}

