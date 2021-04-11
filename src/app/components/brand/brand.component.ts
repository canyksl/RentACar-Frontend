import { CarService } from './../../services/car.service';
import { Brand } from './../../models/brand';
import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  currentBrand: Brand;

  constructor(private brandService: BrandService,
    private carService: CarService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      console.log(response)
      this.brands = response.data
    })
  }
  setCurrentCategory(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentCategoryClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  getAllCategoryClass() {
    if (!this.currentBrand) {
      return "list-group-item active"
    }
    else {
      return "list-group-item"
    }
  }
}
