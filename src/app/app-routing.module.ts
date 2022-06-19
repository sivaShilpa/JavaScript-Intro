import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ngSwitch/ngSwitch.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'ngswitch', component: NgSwitchComponent },
  { path:'ngif', component: NgIfComponent },
  { path:'signup', component: SignupComponent },
  { path:'helloworld', component: HelloWorldComponent},
  { path:'ngfor', component: MovieTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
