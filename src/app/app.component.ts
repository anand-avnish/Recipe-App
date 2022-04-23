import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationError, NavigationStart } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';
//import {MatProgressBarModule} from '@angular/material/progress-bar';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
//require ('firebase/initializeApp')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  loadedFeature = 'recipe';
  isLoading: Observable<boolean>;
  //showSpinner = false;

  constructor(
    private isLoadingService: IsLoadingService,
    private router: Router,
  ){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBxkBk3l9cUGl8_R8RNKvi8q_fCubFnshQ",
      authDomain: "recipe-book-69eae.firebaseapp.com"
    });

    this.isLoading = this.isLoadingService.isLoading$();
  
      this.router.events
        .pipe(
          filter(
            event =>
              event instanceof NavigationStart ||
              event instanceof NavigationEnd ||
              event instanceof NavigationCancel ||
              event instanceof NavigationError,
          ),
        )
        .subscribe(event => {

          console.log(event);
          // If it's the start of navigation, `add()` a loading indicator
          if (event instanceof NavigationStart) {
            this.isLoadingService.add();
            return;
          }
  
          // Else navigation has ended, so `remove()` a loading indicator
          this.isLoadingService.remove();
        });

  }
  
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }


  // loadData() {
  //   this.showSpinner = true;
  //   setTimeout(() => {
  //     this.showSpinner = false;
  //   }, 5000);
  // }
}
