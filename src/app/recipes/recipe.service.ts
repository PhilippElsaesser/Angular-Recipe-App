import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Veggie Burger',
      'A vegetarian Burger with grilled Eggplant',
      'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      [
        new Ingredient('Burger Bread', 8, ''),
        new Ingredient('Eggplant', 2, ''),
        new Ingredient('Salad', 1, ''),
        new Ingredient('Tomatoes', 2, ''),
        new Ingredient('Mustard', 50, 'g'),
      ]),
      new Recipe(
        'Tasty Lasagna',
        'Lasagna with fresh Tomatoes and Herbes',
        'https://visualhunt.com/photos/4/lasagna-noodles-cheese-tomatoes-baking-dish.jpg?s=l',
        [
          new Ingredient('Lasagna Pasta', 1, 'Pack'),
          new Ingredient('Tomatoe Sauce', 1, 'Conserve'),
          new Ingredient('Minced Meat', 500, 'g'),
          new Ingredient('Ognions', 2, ''),
          new Ingredient('Garlic', 2, ''),
        ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
