import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class URLpollerService {
  URL = 'https://random-data-api.com/api/name/random_name'
  api$ = ajax<any>(this.URL);

  constructor() { }

  getRandomName() {
    return this.api$.pipe(delay(3000));
  }
  

}
