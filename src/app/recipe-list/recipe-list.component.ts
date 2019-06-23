import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Pizza recipe','Simple desc','https://divascancook.com' +
          '/wp-content/uploads/2016/01/best-homemade-pizza-recipe.jpg'),
      new Recipe('Burger recipe','Simple desc','https://www.bbcgoodfood.com' +
          '/sites/default/files/recipe-collections/collection-image/2013/05/mexican-chicken-burger_1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
