import {Injectable, EventEmitter} from '@angular/core'
import {Subject} from 'rxjs'
import { ingredient } from '../shared/ingredient.component';

@Injectable()
export class ShoppingService {

    emitIngredients = new Subject<ingredient[]>();

    subjects = new Subject<boolean>();

ingredients : ingredient[]= [
    new ingredient('Apple' , 10),
    new ingredient('Mango' , 5)
    ];

    getIngredients(){
        return this.ingredients.slice();
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

}