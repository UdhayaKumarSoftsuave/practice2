import { Component ,ViewChild , ElementRef , Output , EventEmitter } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.component';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('amount') Sinleingredient !: ElementRef;

  constructor(private shoppingService : ShoppingService){}

  AddIngredient(name : HTMLInputElement){
    this.shoppingService.addIngredients(new ingredient(name.value , this.Sinleingredient.nativeElement.value));
  }
}
