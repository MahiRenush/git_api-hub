import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/service/github.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html'
})
export class FollowersComponent implements OnInit {

  constructor(private router: ActivatedRoute, private service: GithubService) { }
  username;
  followersDetails;
  ngOnInit() {
    this.username = window.location.pathname.split('/')[2].split('/')[0];
    this.service.getFollowersDetails(this.username)
    .subscribe(data => {
      this.followersDetails=data;
      console.log(this.followersDetails)
    })
  }

}