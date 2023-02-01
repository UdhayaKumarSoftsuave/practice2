import { Component , Input, OnInit } from '@angular/core';
import {ActivatedRoute , Params, Router } from '@angular/router';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Recipe } from '../recepie.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private shoppinservice : ShoppingService , 
    private route :ActivatedRoute,
    private router : Router,
    private recipeService : RecipeService){}

  @Input() selectedItem !: Recipe;
  id !: number;

  ngOnInit(): void {
  this.id= +this.route.snapshot.params['id'];
   this.selectedItem = this.recipeService.getByIndex(+this.route.snapshot.params['id']);
   this.route.params.subscribe((param : Params) => {
    this.id = +param['id'];
    this.selectedItem = this.recipeService.getByIndex(+param['id']);
   });
  }

  onAddIngredients(){
    this.shoppinservice.addIngredientByArray(this.selectedItem.ingredients);
  }

  onDelete(){
    this.recipeService.deleteRecipe(+this.id);
    this.router.navigate(['../'] , {relativeTo : this.route});
  }

}
