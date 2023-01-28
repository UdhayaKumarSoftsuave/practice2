import { Injectable , EventEmitter } from "@angular/core";
import { Recipe } from "./recepie.model";

@Injectable()
export class RecipeService {

recipes : Recipe[] = [
    new Recipe("A test A" , "test A" , "https://picturetherecipe.com/wp-content/uploads/2020/01/Mutton-Rogan-Josh-by-PictureTheRecipe-1.jpg"),
    new Recipe("A test B" , "test B" , "https://media.istockphoto.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.jpg?b=1&s=170667a&w=0&k=20&c=EXreVl3ug6ng9updrHKAFagrNctbOCIPDpaziJ6rVXg=")
    ];

    seletedRecepie = new EventEmitter<Recipe>();
    getRecepies() : Recipe[]{
        return this.recipes.slice();
    }

}