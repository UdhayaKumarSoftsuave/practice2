import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription , Subject} from 'rxjs';
import { ingredient } from '../shared/ingredient.component';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{

  constructor(private shoppingservive : ShoppingService){}
  ingredients !: ingredient[];

  subscriptoin !: Subscription;
  ngOnInit(): void {
    this.ingredients = this.shoppingservive.getIngredients();
    this.shoppingservive.emitIngredients.subscribe((value: any) => {
      this.ingredients = value;
    })

    this.shoppingservive.subjects.next(true);
    this.shoppingservive.subjects.subscribe((value : boolean) => console.log(value));
  
    // this.subscriptoin =  interval(1000).subscribe(value => console.log(value));
    let count = 0;
    const Custumobservable = Observable.create((observer : any) => {
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("The count is greater the 3 !"))
        }
        count++;
      }, 1000);
    })
    this.subscriptoin = Custumobservable
    .pipe(filter((value : any) => {
      return value > 2;
    }) , 
    map((value : any) => {
      return "Round :" + value
    }))
    .subscribe((value : any) => {
      console.log(value);
    } , (error: any) => {
      console.log(error);
    } , () => {
      console.log("completed !");
    })
  }

  ngOnDestroy(): void {
    this.subscriptoin.unsubscribe();
  }


  onShoppingListClick(index : number){
    this.shoppingservive.selectedIngredient.next(index);
  }
}
