import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipesComponent } from '../recipes.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Veggie Burger',
      'A vegetarian Burger with grilled Eggplant',
      'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      ),
  ];
  constructor() {}

  ngOnInit() {
  }

}
