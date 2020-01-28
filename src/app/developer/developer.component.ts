import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/service/github.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  constructor(private router: ActivatedRoute, private service: GithubService) { }
  username;
  user;
  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.username= params.get('uname');
    });
    this.service.getUserDetails(this.username)
    .subscribe(data => {
      this.user=data;
      console.log(this.user)
    })
  }

}