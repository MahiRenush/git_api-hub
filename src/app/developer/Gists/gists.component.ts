import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/service/github.service';

@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html'
})
export class GistsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private service: GithubService) { }
  username;
  gistDetails;
  ngOnInit() {
    this.username = window.location.pathname.split('/')[2].split('/')[0];
    this.service.getGistDetails(this.username)
    .subscribe(data => {
      this.gistDetails=data;
      console.log(this.gistDetails)
    })
  }

}