import { Recipe } from './recipe-list/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pizza recipe','Simple pizza desc','https://divascancook.com' +
            '/wp-content/uploads/2016/01/best-homemade-pizza-recipe.jpg'),
        new Recipe('Burger recipe','Simple burger desc','https://media-cdn.tripadvisor.com' +
        '/media/photo-s/12/7f/ff/f4/andreea-s-bruger-with.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();
        //slice returns a copy of the array in this service, otherwise it is passed by reference
    }
}