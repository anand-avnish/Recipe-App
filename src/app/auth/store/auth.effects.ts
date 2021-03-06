import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap } from "rxjs/operators";
import { from } from 'rxjs';
import firebase from 'firebase';

import * as AuthActions from './auth.actions';
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects{
    @Effect()
    authSignup = this.actions$
        .pipe(ofType(AuthActions.TRY_SIGNUP),
        map((action: AuthActions.TrySignup)=>{
            return action.payload;
        }),
        switchMap((authData: {username: string, password: string})=>{
            return from(firebase.auth().createUserWithEmailAndPassword(authData.username,authData.password));
        }),
        switchMap(()=> {
            return from(firebase.auth().currentUser.getIdToken());
        }),
        mergeMap((token:string) => {
            this.router.navigate(['/']);
            return[
                {
                    type: AuthActions.SIGNUP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ];
        })); 

    @Effect()
    authSignin = this.actions$
        .pipe(ofType(AuthActions.TRY_SIGNIN),
            map((action: AuthActions.TrySignin)=>{
                return action.payload;
            }),
            switchMap((authData: {username: string, password: string})=>{
                return from(firebase.auth().signInWithEmailAndPassword(authData.username,authData.password));
            }),
            switchMap(()=> {
                return from(firebase.auth().currentUser.getIdToken());
            }),
            mergeMap((token:string) => {
                this.router.navigate(['/']);
                return[
                    {
                        type: AuthActions.SIGNIN
                    },
                    {
                        type: AuthActions.SET_TOKEN,
                        payload: token
                    }
                ];
            }));

    constructor(private actions$: Actions, private router:Router){
    }
}