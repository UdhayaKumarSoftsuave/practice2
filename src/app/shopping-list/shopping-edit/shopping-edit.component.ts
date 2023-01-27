import { Component ,ViewChild , ElementRef , Output , EventEmitter } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.component';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('amount') Sinleingredient !: ElementRef;

  @Output() addIngredients = new EventEmitter<ingredient>();

  AddIngredient(name : HTMLInputElement){
    this.addIngredients.emit(new ingredient(name.value , this.Sinleingredient.nativeElement.value))
  }
}
