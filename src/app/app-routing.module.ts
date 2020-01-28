import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryComponent } from './Repository/repository.component';
import { Userscomponent } from './Users/users.component';
import { DeveloperComponent } from './developer/developer.component';
import { GistsComponent } from './developer/Gists/gists.component';
import { FollowersComponent } from './developer/Followers/followers.component';
import { FollowingComponent } from './developer/Following/followingcomponent';


const routes: Routes = [
  {path:'', component: Userscomponent},
  {
    path:'users/:uname', component: DeveloperComponent,
    children:[
      {path:'repos', pathMatch:'full',component: RepositoryComponent},
      {path:'starred', pathMatch:'full',component: GistsComponent},
      {path:'followers', pathMatch:'full',component: FollowersComponent},
      {path:'following', pathMatch:'full',component: FollowingComponent},
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
