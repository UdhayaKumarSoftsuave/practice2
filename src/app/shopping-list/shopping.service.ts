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
        console.log();
        
    }

}