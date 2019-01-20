import { Ingredient } from 'src/app/shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5, ''),
    new Ingredient('Tomatoes', 5, ''),
    new Ingredient('Rice', 1, 'kg'),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredientToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
