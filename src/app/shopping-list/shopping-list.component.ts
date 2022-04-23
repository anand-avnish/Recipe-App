import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
//import { ShoppingListService } from './shopping-list.service';
//import * as fromShoppingList from './store/shopping-list.reducers';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducers'
 
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients :Ingredient[]}>;
  //private subscription: Subscription;

  constructor(
    //private slService: ShoppingListService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    //this.ingredients = this.slService.getIngredients();
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription =this.slService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }

  onEditItem(index:number){
    //this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // }
}
