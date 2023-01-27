import { Component } from '@angular/core';
import { Recipe } from './recepie.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  selectedRecipe !: Recipe;

  selectedItem(value : Recipe){
    this.selectedRecipe = value;
  }

}
