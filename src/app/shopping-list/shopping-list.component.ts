import { Component } from '@angular/core';
import { ingredient } from '../shared/ingredient.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients : ingredient[]= [
    new ingredient('Apple' , 10),
    new ingredient('Mango' , 5)
  ];

  getEmittedIngredient(value : ingredient){
    this.ingredients.push(value);
  }

}
