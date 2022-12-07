import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalCounterService {
  public globalCounter = 800;

  constructor() { }

  public getGlobalCounter() {
    return this.globalCounter;
  }

  public countGlobalCounter() {
    return this.globalCounter ++;
  }
}
