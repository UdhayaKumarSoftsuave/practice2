import {Injectable, EventEmitter} from '@angular/core'
import {Subject} from 'rxjs'
import { ingredient } from '../shared/ingredient.component';

@Injectable()
export class ShoppingService {

    emitIngredients = new Subject<ingredient[]>();
    selectedIngredient = new Subject<number>();

    subjects = new Subject<boolean>();

ingredients : ingredient[]= [
    new ingredient('Apple' , 10),
    new ingredient('Mango' , 5)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredientsByIndex(index : number){
        return this.ingredients[index];
    }
    addIngredients(ingredient : ingredient){
        this.ingredients.push(ingredient);
        this.emitIngredients.next(this.ingredients);  
    }

    addIngredientByArray(ingredients : ingredient[]){
        // ingredients.forEach((element : ingredient)=> {
        //     this.addIngredients(element);
        // });
        this.ingredients.push(...ingredients);
        this.emitIngredients.next(this.ingredients); 
    }

    patchIngredients(index : number , ingredient : ingredient){
        this.ingredients[index] = ingredient;
        this.emitIngredients.next(this.ingredients); 
    }
    deleteIngredients(index : number){
        this.ingredients.splice(index , 1);
        this.emitIngredients.next(this.ingredients); 
    }

}