import {Injectable, EventEmitter} from '@angular/core'
import { ingredient } from '../shared/ingredient.component';

@Injectable()
export class ShoppingService {

    emitIngredients = new EventEmitter<ingredient[]>();

ingredients : ingredient[]= [
    new ingredient('Apple' , 10),
    new ingredient('Mango' , 5)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredients(ingredient : ingredient){
        this.ingredients.push(ingredient);
        this.emitIngredients.emit(this.ingredients);  
    }

    addIngredientByArray(ingredients : ingredient[]){
        // ingredients.forEach((element : ingredient)=> {
        //     this.addIngredients(element);
        // });
        this.ingredients.push(...ingredients);
        this.emitIngredients.emit(this.ingredients); 
    }

}