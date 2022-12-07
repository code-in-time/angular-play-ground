import { Component } from '@angular/core';
import { GlobalCounterService } from '../services/global-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  counterFromRight = 0;
  public appCounterFromLeft = 0;
  public globalCounterValue = 0;

  constructor(public globalCounterService: GlobalCounterService) {
    // HOW TO MAKE THIS VALUE
    // update when the service global counter changes????
    this.globalCounterValue = this.globalCounterService.getGlobalCounter();
  }

  public getValueFromRight(value: number) {
    console.log('APP - getValueFromRight', value);
    this.counterFromRight = value;

  }
}
