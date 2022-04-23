// import { Component } from "@angular/core";
// import { NavigationStart } from "@angular/router";
// import { NavigationCancel } from "@angular/router";
// import { NavigationError } from "@angular/router";
// import { NavigationEnd } from "@angular/router";
// import { Router } from "@angular/router";
// import { IsLoadingService } from "@service-work/is-loading";
// import { Observable } from "rxjs";
// import { filter } from "rxjs/operators";


// @Component({
//     selector: 'app-root',
//     template: `
//       <mat-progress-bar
//         *ngIf="isLoading | async"
//         mode="indeterminate"
//         color="warn"
//         style="position: absolute; top: 0; z-index: 5000;"
//       >
//       </mat-progress-bar>
  
//       <router-outlet></router-outlet>
//     `,
// })

// export class AppComponent {
//     isLoading: Observable<boolean>;
  
//     constructor(
//       private isLoadingService: IsLoadingService,
//       private router: Router,
//     ) {}
  
//     ngOnInit() {
//       this.isLoading = this.isLoadingService.isLoading$();
  
//       this.router.events
//         .pipe(
//           filter(
//             event =>
//               event instanceof NavigationStart ||
//               event instanceof NavigationEnd ||
//               event instanceof NavigationCancel ||
//               event instanceof NavigationError,
//           ),
//         )
//         .subscribe(event => {
//           // If it's the start of navigation, `add()` a loading indicator
//           if (event instanceof NavigationStart) {
//             this.isLoadingService.add();
//             return;
//           }
  
//           // Else navigation has ended, so `remove()` a loading indicator
//           this.isLoadingService.remove();
//         });
//     }
// }