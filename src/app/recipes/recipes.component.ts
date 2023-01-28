import { Component ,OnInit } from '@angular/core';
import { Recipe } from './recepie.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{

  constructor(private Service: RecipeService){}
  ngOnInit(): void {
    this.Service.seletedRecepie.subscribe((value : Recipe) => this.selectedRecipe = value);
  }

  selectedRecipe !: Recipe;

  selectedItem(value : Recipe){
    this.selectedRecipe = value;
  }

}
