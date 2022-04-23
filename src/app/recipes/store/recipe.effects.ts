import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, withLatestFrom } from "rxjs/operators";
import { HttpClient, HttpRequest } from "@angular/common/http";

import * as RecipeActions from "./recipe.actions";
import * as fromRecipe from './recipe.reducers';
import { Recipe } from "../recipes.model";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";

@Injectable()
export class RecipeEffects{
    @Effect()
    recipeFetch = this.action$
        .pipe(ofType(RecipeActions.FETCH_RECIPES),
            switchMap((action: RecipeActions.FetchRecipes) => {
                return this.http.get<Recipe[]>('https://recipe-book-69eae-default-rtdb.firebaseio.com/recipes.json?',{
                    observe: 'body',
                    responseType: 'json'
                    // params: new HttpParams().set('auth',token)
                })
            }),
            map(
                    // (response: any)=>{
                    //     const recipes: Recipe[]=response;
                (recipes)=>{
                    console.log(recipes);
                    for(let recipe of recipes){
                        if(!recipe['ingredients']){
                                recipe['ingredients']=[];
                        }
                    }
                    return {
                        type: RecipeActions.SET_RECIPES,
                        payload: recipes
                    };
                }
            )
        );
        // .subscribe( 
        //     (recipes:Recipe[])=>{
        //         this.recipeService.setRecipes(recipes);
        //     }
        // ); 

    @Effect({dispatch: false})
    recipeStore = this.action$
        .pipe(ofType(RecipeActions.STORE_RECIPES),
            withLatestFrom(this.store.select('recipes')),
            switchMap(([action, state]) => {
                const req= new HttpRequest('PUT','https://recipe-book-69eae-default-rtdb.firebaseio.com/recipes.json',state.recipes,{reportProgress:true});
                return this.http.request(req);
            })
        )
        

    constructor(private action$: Actions,
        private http: HttpClient,
        private store: Store<fromRecipe.FeatureState>){

    }
}