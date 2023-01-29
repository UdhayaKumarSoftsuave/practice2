import { NgModule } from "@angular/core";
import { RouterModule , Routes} from "@angular/router";
import { NoRecipeComponent } from "./no-recipe/no-recipe.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const routes : Routes = [
    {path : "" , redirectTo : '/recipe' , pathMatch : 'full'},
    {path : "recipe" , component : RecipesComponent , children : [
        {path : "" , component : NoRecipeComponent},
        {path : ":id" , component : RecipeDetailComponent}
    ]},
    {path : "shopping" , component : ShoppingListComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutes {

}