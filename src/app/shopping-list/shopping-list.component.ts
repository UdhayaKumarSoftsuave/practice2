import { Component , OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.component';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent  implements OnInit{

  constructor(private shoppingservive : ShoppingService){}
  ingredients !: ingredient[];
  ngOnInit(): void {
    this.ingredients = this.shoppingservive.getIngredients();
    this.shoppingservive.emitIngredients.subscribe(
      (ingredients : ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }



}
