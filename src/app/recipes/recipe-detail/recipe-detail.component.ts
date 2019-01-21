import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private shoppligListService: ShoppingListService) {}

  onAddToShoppingList() {
    this.recipe.ingredients.map(
      (ingredient: Ingredient) => {
        this.shoppligListService.addIngredientToList(ingredient);
      }
    );
  }
}
