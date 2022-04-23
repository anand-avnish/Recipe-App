// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Store } from '@ngrx/store';
// import firebase from 'firebase';
// //require ('../node_modules/firebase/auth');

// import * as fromApp from '../store/app.reducers';
// import * as AuthActions from './store/auth.actions';

// @Injectable()

// export class AuthService{
//     //token: string;

//     constructor(private router:Router,
//         private store: Store<fromApp.AppState>){}
    
//     signupUser(email:string,password:string){
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//             .then(
//                 user => {
//                     this.store.dispatch(new AuthActions.Signup());
//                     firebase.auth().currentUser.getIdToken()
//                     .then(
//                         (token:string)=>{
//                             this.store.dispatch(new AuthActions.SetToken(token));
//                         }
//                     )
//                 },
//                 response=>{
//                     this.router.navigate(['/signin']);
//                 }
//             )
//             // .then(
                
//             // )
//             .catch(
//                 error => console.log(error)
//             )
//     }

//     signinUser(email:string,password:string){
//         firebase.auth().signInWithEmailAndPassword(email,password)
//         .then(
//             response =>{
//                 this.store.dispatch(new AuthActions.Signin());
//                 this.router.navigate(['/']);
//                 firebase.auth().currentUser.getIdToken()
//                     .then(
//                         (token:string)=>{
//                             this.store.dispatch(new AuthActions.SetToken(token));
//                         }
//                     )
//             }
//         )
//         .catch(
//             error => console.log(error)
//         )
//     }

//     logout(){
//         firebase.auth().signOut();
//         //this.token=null;
        
//     }

//     // getToken(){
//     //     firebase.auth().currentUser.getIdToken()
//     //         .then(
//     //             (token:string)=>this.token=token
//     //         );
//     //     return this.token;
//     // }

//     // isAuthenticated(){
//     //     return this.token!=null;
//     // }
// }