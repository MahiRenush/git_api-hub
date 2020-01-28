import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { Userscomponent } from './Users/users.component';
import { RepositoryComponent } from './Repository/repository.component';
import { DeveloperComponent } from './developer/developer.component';
import { GistsComponent } from './developer/Gists/gists.component';
import { FollowersComponent } from './developer/Followers/followers.component';
import { FollowingComponent } from './developer/Following/followingcomponent';

@NgModule({
  declarations: [
    AppComponent, Userscomponent, RepositoryComponent, DeveloperComponent, GistsComponent, FollowersComponent, FollowingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
