import { ShoppingListService } from './../shopping-list.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('unitInput') unitInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}


  createListitem() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const unit = this.unitInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount, unit);
    this.shoppingListService.addIngredientToList(newIngredient);
  }
}
