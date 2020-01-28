import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/service/github.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  constructor(private router: Router, private service: GithubService) { }

  username;
  repoDetails;
  ngOnInit() {
    this.username = window.location.pathname.split('/')[2].split('/')[0];
    this.service.getRepoDetails(this.username)
    .subscribe(data=>{
      this.repoDetails =data;
      console.log(data)
    })
  }

}
