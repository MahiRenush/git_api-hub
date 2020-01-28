import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/service/github.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html'
})
export class FollowingComponent implements OnInit {

  constructor(private router: ActivatedRoute, private service: GithubService) { }
  username;
  followingDetails;
  ngOnInit() {
    this.username = window.location.pathname.split('/')[2].split('/')[0];
    this.service.getFollowingDetails(this.username)
    .subscribe(data => {
      this.followingDetails=data;
      console.log(this.followingDetails)
    })
  }

}