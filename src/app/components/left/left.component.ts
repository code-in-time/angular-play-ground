import { Component, OnInit } from '@angular/core';
import { GlobalCounterService } from '../../../services/global-counter.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  constructor(public globalCounterService: GlobalCounterService) { }

  ngOnInit(): void {
  }

  btnLeft() {
    console.log('btnLeft');
    this.globalCounterService.countGlobalCounter();
  }

}
