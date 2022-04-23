// import { HttpClient, HttpRequest } from "@angular/common/http";
// import { map } from "rxjs/operators";
// import { Injectable } from "@angular/core";
// import { RecipeService } from "../recipes/recipe.service";
// import { Recipe } from "../recipes/recipes.model";
// //import { AuthService } from "../auth/auth.service";


// @Injectable()
// export class DataStorageService{
//     constructor(private http: HttpClient,
//         private recipeService: RecipeService){}
//         //private authService: AuthService){}

//     storeRecipes(){
//         // const token = this.authService.getToken();
//         // return this.http.put('https://recipe-book-69eae-default-rtdb.firebaseio.com/recipes.json',this.recipeService.getRecipes(),{
//         //     observe: 'body',
//         //     params: new HttpParams().set('auth',token)
//         // });
//         const req= new HttpRequest('PUT','https://recipe-book-69eae-default-rtdb.firebaseio.com/recipes.json',this.recipeService.getRecipes(),{reportProgress:true});
//         return this.http.request(req);
//     }

//     getRecipes(){
//         //let tk='';
//         //const token=this.authService.getToken();

//         this.http.get<Recipe[]>('https://recipe-book-69eae-default-rtdb.firebaseio.com/recipes.json?',{
//             observe: 'body',
//             responseType: 'json'
//             // params: new HttpParams().set('auth',token)
//         })
//             .pipe(map(
//                 // (response: any)=>{
//                 //     const recipes: Recipe[]=response;
//                 (recipes)=>{
//                     for(let recipe of recipes){
//                         if(!recipe['ingredients']){
//                             recipe['ingredients']=[];
//                         }
//                     }
//                     return recipes;
//                 }
//                 )
//             )
//             .subscribe( 
//                 (recipes:Recipe[])=>{
//                     this.recipeService.setRecipes(recipes);
//                 }
//             );
//     }

// }