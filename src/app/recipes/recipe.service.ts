// // import { Injectable } from '@angular/core';
// // import { Store } from '@ngrx/store';
// import { Subject } from 'rxjs';
// import { Ingredient } from '../shared/ingredient.model';
// //import { ShoppingListService } from '../shopping-list/shopping-list.service';
// import { Recipe } from './recipes.model';
// //import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

// //@Injectable()

// export class RecipeService{
//     recipesChanged = new Subject<Recipe[]>();

//     private recipes: Recipe[]= [
//         new Recipe(
//             'SALAD SANDWICH',
//             'These salad sandwich with herb mayo is the perfect quick and easy lunch recipe. Use any fresh vegetables you have to make a delicious, filling meal.',
//             'https://simply-delicious-food.com/wp-content/uploads/2020/07/Easy-salad-sandwiches-with-herb-mayo-1.jpg',
//             [
//                 new Ingredient('Bread',2),
//                 new Ingredient('Tomato',1)
//             ]),
//         new Recipe(
//             'CHEESEBURGER',
//             'Classic cheeseburger with lettuce, tomato and a good slather of mayo makes this the perfect addition to your cook out.',
//             'https://simply-delicious-food.com/wp-content/uploads/2015/07/Bacon-and-cheese-burgers-2.jpg',
//             [
//                 new Ingredient('Buns',2),
//                 new Ingredient('Cheese Slices',2)
//             ])
//     ];

//     constructor( //private store: Store<{shoppingList: {ingredients:Ingredient[]}}>
//     ){

//     }

//     setRecipes(recipes: Recipe[]){
//         this.recipes=recipes;
//         this.recipesChanged.next(this.recipes.slice());
//     }
    
//     getRecipes(){
//         return this.recipes.slice();
//     }

//     // getRecipe(index: number){
//     //     return this.recipes[index];
//     // }

//     // // addIngredientsToShoppingList(ingredients: Ingredient[]){
//     // //     //this.slService.addIngredients(ingredients);
//     // //     this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
//     // // }

//     // addRecipe(recipe:Recipe){
//     //     this.recipes.push(recipe);
//     //     this.recipesChanged.next(this.recipes.slice());
//     // }

//     // updateRecipe(index: number, newRecipe:Recipe){
//     //     this.recipes[index] = newRecipe;
//     //     this.recipesChanged.next(this.recipes.slice());
//     // }

//     // deleteRecipe(index:number){
//     //     this.recipes.splice(index,1);
//     //     this.recipesChanged.next(this.recipes.slice());
//     // }
// }