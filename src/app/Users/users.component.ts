import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/service/github.service';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls:['./users.component.scss']
})
export class Userscomponent implements OnInit{
    constructor(private service: GithubService, private route: Router){ }
    gitUsers;
    ngOnInit(){
        this.service.getUsers().subscribe(data => {
            this.gitUsers=data;
        })
    }
    cardClick(uname){
        console.log(uname)
        this.route.navigate(['/users',uname]);
    }
}