import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicDirective } from './CustomDirective/basic.directive';
import { BetterHighlightDirective } from './CustomDirective/better-highlight.directive';
import { CustomStructuralDirectiveDirective } from './CustomDirective/custom-structural-directive.directive';
import { DropDownDirectiveDirective } from './CustomDirective/drop-down-directive.directive';
import { RecipeService } from './recipes/recipes.service';
import { ShoppingService } from './shopping-list/shopping.service';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from './app.routes';
import { NoRecipeComponent } from './no-recipe/no-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicDirective,
    BetterHighlightDirective,
    CustomStructuralDirectiveDirective,
    DropDownDirectiveDirective,
    NoRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes
  ],
  providers: [RecipeService , ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
