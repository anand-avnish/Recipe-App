import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//import { AuthGuard } from "../auth/auth-guard.service";
import { ShoppingListComponent } from "./shopping-list.component";

const shoppinglistRoutes: Routes = [
    { path: '', component: ShoppingListComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(shoppinglistRoutes)
    ],
    exports: [RouterModule]
    // providers:[
    //     AuthGuard
    // ]
})

export class ShoppingListRoutingModule{}