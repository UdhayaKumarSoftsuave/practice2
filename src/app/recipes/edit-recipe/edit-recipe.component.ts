import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute , Params} from '@angular/router';
import { ingredient } from 'src/app/shared/ingredient.component';
import { Recipe } from '../recepie.model';
import { RecipeService } from '../recipes.service';
@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent  implements OnInit{

  id !: number;
  enableEdit : boolean =false;
  recipeForm !: FormGroup;
  SelectedRecipe !: Recipe;


  constructor(private active : ActivatedRoute , private recipeservice : RecipeService){}
  ngOnInit(): void {
    this.active.params.subscribe((param : Params) => {
      this.id = param['id'];
      this.enableEdit = this.id != null;
    })
    this.initRecepie()
  }

  initRecepie(){
    if (!this.enableEdit) {
      this.recipeForm = new FormGroup({
        'recipeName' : new FormControl(null),
        'imageUrl' : new FormControl(null),
        'description' : new FormControl(null),
        'ingredients' : new FormArray([
          new FormGroup({
            'ingredientName' : new FormControl(null),
            'ingredientAmount' : new FormControl(0),
          })
        ])
      })  
    } else {
      this.SelectedRecipe = this.recipeservice.getByIndex(this.id);
      let Singleingredient : any = new  FormArray([])
      for (const ingredient of this.SelectedRecipe.ingredients) {
        Singleingredient.push( 
          new FormGroup({
            'ingredientName' : new FormControl(ingredient.name),
            'ingredientAmount' : new FormControl(ingredient.amount),
          })
        )
      }
      this.recipeForm = new FormGroup({
        'recipeName' : new FormControl(this.SelectedRecipe.name),
        'imageUrl' : new FormControl(this.SelectedRecipe.imagepath),
        'description' : new FormControl(this.SelectedRecipe.description),
        'ingredients' : Singleingredient
      })
    }
    
  }

  addIngredients(){
    (this.recipeForm.get('ingredients') as FormArray).push(new FormGroup({
      'ingredientName' : new FormControl(null),
      'ingredientAmount' : new FormControl(null),
    }));
  }

  getIngredients(){
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onSubmit(){
    console.log(this.recipeForm);
    this.initRecepie();
  }

}
