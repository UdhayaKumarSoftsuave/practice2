import { Component ,ViewChild , ElementRef , Output , EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ingredient } from 'src/app/shared/ingredient.component';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('amount') Sinleingredient !: ElementRef;
  @ViewChild('form') ingredientObject !: NgForm;

  constructor(private shoppingService : ShoppingService){}

  onsubmit(){
    this.shoppingService.addIngredients(this.ingredientObject.value);
  }
}
