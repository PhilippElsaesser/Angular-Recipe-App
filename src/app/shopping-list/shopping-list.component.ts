import { Ingredient } from './../shared/ingredient.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5, ''),
    new Ingredient('Tomatoes', 5, ''),
    new Ingredient('Rice', 1, 'kg'),
  ];

  addItemToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }


}
