import { Ingredient } from "src/app/shared/ingredient.model";
import { Recipe } from "../recipes.model";

import * as RecipeActions from "./recipe.actions";
import * as fromApp from "../../store/app.reducers";

export interface FeatureState extends fromApp.AppState{
    recipes: State
}

export interface State{
    recipes: Recipe[];
}

const initialState: State={
    recipes: [
        // new Recipe(
        //     'SALAD SANDWICH',
        //     'These salad sandwich with herb mayo is the perfect quick and easy lunch recipe. Use any fresh vegetables you have to make a delicious, filling meal.',
        //     'https://simply-delicious-food.com/wp-content/uploads/2020/07/Easy-salad-sandwiches-with-herb-mayo-1.jpg',
        //     [
        //         new Ingredient('Bread',2),
        //         new Ingredient('Tomato',1)
        //     ]),
        // new Recipe(
        //     'CHEESEBURGER',
        //     'Classic cheeseburger with lettuce, tomato and a good slather of mayo makes this the perfect addition to your cook out.',
        //     'https://simply-delicious-food.com/wp-content/uploads/2015/07/Bacon-and-cheese-burgers-2.jpg',
        //     [
        //         new Ingredient('Buns',2),
        //         new Ingredient('Cheese Slices',2)
        //     ])
    ]
};

export function recipeReducer(state = initialState , action: RecipeActions.RecipeActions){
    switch (action.type){
        case( RecipeActions.SET_RECIPES):
            return {
                ...state,
                recipes: [...action.payload]
            };
        case( RecipeActions.ADD_RECIPES):
            return {
                ...state,
                recipes: [...state.recipes,action.payload]
            };
        case( RecipeActions.UPDATE_RECIPES):
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.updateRecipe
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe; 
            return {
                ...state,
                recipes: recipes
            };
        case( RecipeActions.DELETE_RECIPES):
            const oldRecipes = [...state.recipes];
            oldRecipes.splice(action.payload,1);
            return {
                ...state,
                recipes: oldRecipes
            };
        default:
            return state;   
    }
}