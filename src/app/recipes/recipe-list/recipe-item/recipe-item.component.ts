
import { Recipe } from '../../recepie.model';
import { Component, EventEmitter, Input , Output } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input('recipe') recipe !: Recipe;
  @Output('selected') selectedRecipeItem = new EventEmitter<Recipe>();
  onSelectRecipeItem(){
    this.selectedRecipeItem.emit(this.recipe);
  }
}


