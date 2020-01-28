import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(public http: HttpClient) { }
  gitUrl='http://api.github.com';

  getUsers(){
    return this.http.get(`${this.gitUrl}/users`)
  }
  getRepoDetails(uname){
    return this.http.get(`${this.gitUrl}/users/`+uname+`/repos`)
  }
  getUserDetails(uname){
    return this.http.get(`${this.gitUrl}/users/`+uname)
  }
  getGistDetails(uname){
    return this.http.get(`${this.gitUrl}/users/${uname}/starred`)
  }
  getFollowersDetails(uname){
    return this.http.get(`${this.gitUrl}/users/${uname}/followers`)
  }
  getFollowingDetails(uname){
    return this.http.get(`${this.gitUrl}/users/${uname}/following`)
  }
}

