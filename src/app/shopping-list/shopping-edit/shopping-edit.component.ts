import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
//import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducers';
import * as fromApp from '../../store/app.reducers'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription : Subscription;
  editMode = false;
  //editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList')
      .subscribe(
        data => {
          if(data.editedIngredientIndex > -1){
            this.editedItem = data.editedIngredient;
            this.editMode = true;
            this.slForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
            })
          }
          else{
            this.editMode = false;
          }
        }
      )
    // this.subscription =this.slService.startedEditing
    //   .subscribe(
    //     (index: number)=>{
    //       this.editedItemIndex=index;
    //       this.editMode=true;
    //       this.editedItem=this.slService.getIngredient(index);
    //       this.slForm.setValue({
    //         name: this.editedItem.name,
    //         amount: this.editedItem.amount
    //       })
    //     }
    //   );
  }

  onSubmit(form: NgForm){
    const value= form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      //this.slService.updateIngredient(this.editedItemIndex,newIngredient);
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient:newIngredient}))
    }else{
      //this.slService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient))
    }
    this.editMode= false;
    form.reset();
  }

  onClear(){
    this.editMode= false;
    this.slForm.reset();
  }

  onDelete(){
    //this.slService.deleteIngredients(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }

  ngOnDestroy(){
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }

}
