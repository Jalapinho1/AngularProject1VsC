import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();
    ingredientsAddedToSL = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Pineapples',5),
        new Ingredient('Tomatoes',10)
      ];

    getIngredients (){
        return this.ingredients.slice();
    }

    addIngredient(newIngredient : Ingredient){
        this.ingredients.push(newIngredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

}