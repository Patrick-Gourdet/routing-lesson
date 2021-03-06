import {NgModule} from '@angular/core';
import {ServersComponent} from './servers/servers.component';
import {HomeComponent} from './home/home.component';
import {ServerComponent} from './servers/server/server.component';
import {UsersComponent} from './users/users.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserComponent} from './users/user/user.component';
import {Routes , RouterModule} from '@angular/router';
import {AuthGaurd} from './auth-gaurd.service';
import {CanDeactivateGaurd} from './servers/edit-server/can-deactivate-gaurds';
import {ErrorPageComponentComponent} from './error-page-component/error-page-component.component';
const appRoutes:  Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
  {path: 'servers', canActivateChild: [AuthGaurd], component: ServersComponent, children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGaurd]}
    ]},
  // {path: 'not-found', component: PageNotFoundComponent},
  {path: 'not-found', component: ErrorPageComponentComponent , data: {error: 'THIS IS WRONG'}},
  {path: '**' , redirectTo: 'not-found'}


];
@NgModule({
imports: [
  RouterModule.forRoot(appRoutes)
],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
