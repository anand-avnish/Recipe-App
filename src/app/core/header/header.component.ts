import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { AuthService } from '../../auth/auth.service';
//import { DataStorageService } from '../../shared/data-storage.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(//private dataStorageService: DataStorageService,
              //public authService: AuthService,
              private router:Router,
              private store: Store<fromApp.AppState>){}

  ngOnInit():void{
    this.authState = this.store.select('auth');
  }

  onSaveData(){
    if(this.store.select('auth').pipe(map((authState: fromAuth.State) => {
      return authState.authenticated;
    }))){
      // this.dataStorageService.storeRecipes()
      //     .subscribe(
      //       (response) =>{
      //         console.log(response);
      //       }
      //     );
      this.store.dispatch(new RecipeActions.StoreRecipes());
      //this.dataStorageService.getRecipes();
      this.store.dispatch(new RecipeActions.FetchRecipes());
    }
  }

  // onFetchData(){
  //   this.dataStorageService.getRecipes();
  // }

  onLogout(){
    this.store.dispatch(new AuthActions.Logout());
    this.router.navigate(['']);
  }
}
