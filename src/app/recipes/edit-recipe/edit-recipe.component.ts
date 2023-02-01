import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute , Params, Router} from '@angular/router';
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


  constructor(private active : ActivatedRoute , private recipeservice : RecipeService , private route : Router){}
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
        'recipeName' : new FormControl(null , Validators.required),
        'imageUrl' : new FormControl(null , Validators.required),
        'description' : new FormControl(null , Validators.required),
        'ingredients' : new FormArray([
          new FormGroup({
            'name' : new FormControl(null , Validators.required),
            'amount' : new FormControl(null , [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)]),
          })
        ])
      })  
    } else {
      this.SelectedRecipe = this.recipeservice.getByIndex(this.id);
      let Singleingredient : any = new  FormArray([])
      for (const ingredient of this.SelectedRecipe.ingredients) {
        Singleingredient.push( 
          new FormGroup({
            'name' : new FormControl(ingredient.name , Validators.required),
            'amount' : new FormControl(ingredient.amount , [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)]),
          })
        )
      }
      this.recipeForm = new FormGroup({
        'recipeName' : new FormControl(this.SelectedRecipe.name , Validators.required),
        'imageUrl' : new FormControl(this.SelectedRecipe.imagepath, Validators.required),
        'description' : new FormControl(this.SelectedRecipe.description , Validators.required),
        'ingredients' : Singleingredient
      })
    }
    
  }

  addIngredients(){
    (this.recipeForm.get('ingredients') as FormArray).push(new FormGroup({
      'name' : new FormControl(null , Validators.required),
      'amount' : new FormControl(null , [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)]),
    }));
  }

  getIngredients(){
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onSubmit(){
    console.log(this.recipeForm);
    const recipe = new Recipe(
      this.recipeForm.value['recipeName'] , 
      this.recipeForm.value['description'],
      this.recipeForm.value['imageUrl'],
      this.recipeForm.value['ingredients']
    )
    if (!this.enableEdit) {
      this.recipeservice.addRecipes(recipe);
    } else {
      this.recipeservice.patchRecipe(+this.id , recipe);
      this.route.navigate(['../'] , {relativeTo  : this.active});
    }

    this.initRecepie();
  }

  onCancel(){
    this.route.navigate(['../'] , {relativeTo  : this.active});
  }

  ondeleteIngredient(i : any){
    (this.recipeForm.get('ingredients')as FormArray).removeAt(+i);
  }
}
