import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { AuthService } from 'src/app/auth/auth.service';

import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(//public authService: AuthService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }

}
