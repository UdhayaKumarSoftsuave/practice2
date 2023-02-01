import { Component ,ViewChild , ElementRef , Output , EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ingredient } from 'src/app/shared/ingredient.component';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy{

  @ViewChild('amount') Sinleingredient !: ElementRef;
  @ViewChild('form') ingredientObject !: NgForm;
  sub !: Subscription;
  enableEdit : boolean = false;
  indexValue !: number;
  editIngredient !: ingredient;


  constructor(private shoppingService : ShoppingService){}

  onsubmit(){
    if (this.enableEdit) {
      this.shoppingService.patchIngredients(this.indexValue , new ingredient(this.ingredientObject.value.name , +this.ingredientObject.value.amount))
    } else {
      this.shoppingService.addIngredients(this.ingredientObject.value);
    }
    this.ingredientObject.reset();
    this.enableEdit= false;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.shoppingService.selectedIngredient.subscribe((value: number) => {
      this.enableEdit = true;
      this.indexValue = value;
      this.editIngredient = this.shoppingService.getIngredientsByIndex(value);
      this.ingredientObject.form.patchValue(this.shoppingService.getIngredientsByIndex(value));
    });
  }

  onClear(){
    this.ingredientObject.reset();
    this.ingredientObject.reset();
  }

  onDelete(){
    this.shoppingService.deleteIngredients(this.indexValue);
    this.ingredientObject.reset();
  }
}
