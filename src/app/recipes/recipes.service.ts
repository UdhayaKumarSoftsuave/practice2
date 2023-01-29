import { Injectable , EventEmitter } from "@angular/core";
import { ingredient } from "../shared/ingredient.component";
import { Recipe } from "./recepie.model";

@Injectable()
export class RecipeService {

recipes : Recipe[] = [
    new Recipe(
        "A test A" 
        , "test A" 
        , "https://picturetherecipe.com/wp-content/uploads/2020/01/Mutton-Rogan-Josh-by-PictureTheRecipe-1.jpg",
        [
            new ingredient('orange' , 50),
            new ingredient('tomato' , 12)
        ]),
    new Recipe("A test B" , "test B" , "https://media.istockphoto.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.jpg?b=1&s=170667a&w=0&k=20&c=EXreVl3ug6ng9updrHKAFagrNctbOCIPDpaziJ6rVXg=",
    [
        new ingredient('Beans' , 9),
        new ingredient('onion' , 33)
    ])
    ];

    seletedRecepie = new EventEmitter<Recipe>();
    getRecepies() : Recipe[]{
        return this.recipes.slice();
    }

    getByIndex(id : number) : Recipe{
        return this.recipes[id];
    }

}