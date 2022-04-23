import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
//import { AuthService } from '../auth.service';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  signLoading: Observable<boolean>;
  signin = false;

  constructor( private store : Store<fromApp.AppState>){ 
  }

  ngOnInit(): void {

    // this.signLoading = this.isLoadingService.isLoading$();
  
    //   this.router.events
    //     .pipe(
    //       filter(
    //         event =>
    //           event instanceof NavigationStart ||
    //           event instanceof NavigationEnd ||
    //           event instanceof NavigationCancel ||
    //           event instanceof NavigationError,
    //       ),
    //     )
    //     .subscribe(event => {

    //       console.log(event);
    //       // If it's the start of navigation, `add()` a loading indicator
    //       if (this.signin) {
    //         this.isLoadingService.add();
    //         return;
    //       }
  
    //       // Else navigation has ended, so `remove()` a loading indicator
    //       if(event instanceof NavigationStart){
    //         this.isLoadingService.remove();
    //       } 
    //     });
  }

  onSignin(form: NgForm){
    this.signin = true;
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignin({username: email,password: password}));
  }

}
