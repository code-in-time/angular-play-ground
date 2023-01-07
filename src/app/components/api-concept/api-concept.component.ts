import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { delay } from 'rxjs/operators';

interface Data {
  login?: string;
  id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
}

@Component({
  selector: 'app-api-concept',
  templateUrl: './api-concept.component.html',
  styleUrls: ['./api-concept.component.scss']
})
export class ApiConceptComponent implements OnInit {

  public data?: Data[]
  public loaded = false;

  constructor() { }

  ngOnInit(): void {
    const obs$ = ajax(`${environment.env_URL}/users?per_page=5`)
      // A delay is added to prove that the spinner works
      .pipe(delay(3000));

    obs$.subscribe({
      next: value => {
        this.data = value.response as Data[];
        console.log('this.data', this.data)
        this.loaded = true;

      },
      error: err => console.log(err)
    });
  }

  buildURL(url?: string): string {
    // provr that I can return an html string 
    const user = url?.split('/').reverse();
    if (user) {
      return `<a href="${url}" target="_blank">${user[0]}</a>`
    }
    return '';
  }

}
