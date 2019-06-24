import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
      new Recipe('Pizza recipe','Simple pizza desc','https://divascancook.com' +
          '/wp-content/uploads/2016/01/best-homemade-pizza-recipe.jpg'),
      new Recipe('Burger recipe','Simple burger desc','https://media-cdn.tripadvisor.com' +
      '/media/photo-s/12/7f/ff/f4/andreea-s-bruger-with.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
