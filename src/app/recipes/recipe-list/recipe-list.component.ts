import { Component } from '@angular/core';
import { Recipe } from '../recepie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes : Recipe[] = [
    new Recipe("A test" , " This is used to test" , "https://picturetherecipe.com/wp-content/uploads/2020/01/Mutton-Rogan-Josh-by-PictureTheRecipe-1.jpg"),
    new Recipe("A test" , " This is used to test" , "https://picturetherecipe.com/wp-content/uploads/2020/01/Mutton-Rogan-Josh-by-PictureTheRecipe-1.jpg")
  ];

}
