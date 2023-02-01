import { Component, EventEmitter, Output ,OnInit, OnDestroy} from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recepie.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit , OnDestroy{

  recipes !: Recipe[] ;
  subscribtion !: Subscription;
  constructor(private recepies : RecipeService , 
    private route : Router , private active : ActivatedRoute){}

  ngOnInit(){
    this.recipes = this.recepies.getRecepies();
    this.subscribtion= this.recepies.emitRecipe.subscribe((value:Recipe[]) => {
      this.recipes = value;
    })
  }

  onClick(){
    this.route.navigate(['new'] , {relativeTo : this.active});
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
