import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //want to get this recipe from outside
  //need to add Input decorator
  @Input() recipe : Recipe;

  constructor() { }

  ngOnInit() {
  }

}
