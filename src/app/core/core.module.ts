import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
//import { AuthService } from "../auth/auth.service";
//import { RecipeService } from "../recipes/recipe.service";
import { AuthInterceptor } from "../shared/auth.interceptor";
//import { DataStorageService } from "../shared/data-storage.service";
import { LoggingInterceptor } from "../shared/logging.interceptor";
import { SharedModule } from "../shared/shared.module";
//import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent
    ],
    imports:[
        SharedModule,
        AppRoutingModule,
        CommonModule
    ],
    exports:[
        AppRoutingModule,
        HeaderComponent
    ],
    providers:[
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
      {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
        //ShoppingListService,
        // RecipeService,
        // DataStorageService,
        //AuthService,
    ]
})
export class CoreModule{}
