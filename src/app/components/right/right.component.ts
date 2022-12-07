import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { GlobalCounterService } from '../../../services/global-counter.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  public counterRight = 0;

  @Output() eventRight = new Subject<number>();

  constructor(public globalCounterService: GlobalCounterService) { }

  ngOnInit(): void {
  }

  public btnRightBtn() {
    console.log('btnRightBtn click');
    this.counterRight++;
    // this will output the counterRight value to the parent
    this.eventRight.next(this.counterRight);
  }

}
