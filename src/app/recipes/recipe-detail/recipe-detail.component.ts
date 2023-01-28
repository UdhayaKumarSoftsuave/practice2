import { Component , Input } from '@angular/core';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Recipe } from '../recepie.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  constructor(private shoppinservice : ShoppingService){}

  @Input() selectedItem !: Recipe;

  onAddIngredients(){
    this.shoppinservice.addIngredientByArray(this.selectedItem.ingredients);
  }

}
