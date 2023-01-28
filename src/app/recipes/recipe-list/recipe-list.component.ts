import { Component, EventEmitter, Output ,OnInit} from '@angular/core';
import { Recipe } from '../recepie.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  recipes !: Recipe[] ;
  constructor(private recepies : RecipeService){}
  ngOnInit(){
    this.recipes = this.recepies.getRecepies();
  }


}
