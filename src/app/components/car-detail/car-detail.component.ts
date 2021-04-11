import { ToastrService } from 'ngx-toastr';
import { RentalService } from './../../services/rental.service';
import { Rental } from './../../models/rental';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {


  car: CarDetailDto;



  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.carService.getCarDetail(params['carid=']).subscribe(response => {
        this.car = response.data
        console.log(response)
      })
    })
  }
  getCarDetail(carId: number) {
    this.carService.getCarDetail(carId).subscribe(response => {
      this.car = response.data;

    })
  }
  rentACar(id: number) {
    window.open(window.location.origin + "/cars/payment/" + id)
  }


}
