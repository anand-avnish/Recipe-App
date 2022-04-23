import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
//import { Ingredient } from 'src/app/shared/ingredient.model';
//import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
//import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers';
import * as fromApp from '../../store/app.reducers';
import * as fromRecipe from "../store/recipe.reducers";
import * as RecipeActions from "../store/recipe.actions";
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;
  id: number;

  constructor(//private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromRecipe.FeatureState>) {
 }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params)=>{
          this.id = +params['id'];
          this.recipeState=this.store.select('recipes');
        }
      )
  }

  onAddToShoppingList(){
    //this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.store.select('recipes')
      .pipe(take(1))
      .subscribe((recipeState : fromRecipe.State)=>{
        this.store.dispatch(new ShoppingListActions.AddIngredients(
          recipeState.recipes[this.id].ingredients)
          );
      });
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route});
  }

  onDeleteRecipe(){
    //this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new RecipeActions.DeleteRecipes(this.id));
    this.router.navigate(['/recipes']);
  }

}
