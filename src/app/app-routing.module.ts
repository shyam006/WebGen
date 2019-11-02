import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
   {path: '', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// to switch between admin and website
// https://stackoverflow.com/questions/44226608/how-to-separate-admin-and-the-front-web-in-angular-2-project
// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: 'app/+website/website.module#WebsiteModule'
//   },
//   {
//     path: 'admin',
//     loadChildren: 'app/+admin-area/admin-area.module#AdminAreaModule'
//   }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes)
//   ],
//   exports: [
//     RouterModule,
//     AppComponent
//   ],
//   declarations: [
//     AppComponent
//   ]
// })

// export class AppRouterModule {}
