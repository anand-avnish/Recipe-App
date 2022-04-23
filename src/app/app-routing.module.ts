import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//import { AuthGuard } from "./auth/auth-guard.service";
import { HomeComponent } from "./core/home/home.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
//import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes=[
    { path: '', component: HomeComponent},
    { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
    //{ path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)}
    {path: 'shopping-list',component:ShoppingListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabled'
})
        //, {preloadingStrategy: PreloadAllModules}
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}