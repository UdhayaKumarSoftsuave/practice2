
import { Recipe } from '../../recepie.model';
import { Component, EventEmitter, Input , Output } from '@angular/core';
import { outputAst } from '@angular/compiler';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input('recipe') recipe !: Recipe;
  @Input() index ! : number;

  constructor(private service : RecipeService){}
  onSelectRecipeItem(){
    this.service.seletedRecepie.next(this.recipe);
  }
}


