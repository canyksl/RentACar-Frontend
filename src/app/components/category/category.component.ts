import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  currentCategory: Category;
  constructor(private categoryService: ColorService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getColors().subscribe(response => {
      this.categories = response.data
    })
  }
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  getAllCategoryClass() {
    if (!this.currentCategory) {
      return "list-group-item active"
    }
    else {
      return "list-group-item"
    }
  }
}
