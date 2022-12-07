import { Component, OnInit } from '@angular/core';
import { GlobalCounterService } from '../../../services/global-counter.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  public counterTop = 1;
  constructor(public globalCounterService: GlobalCounterService) { }

  ngOnInit(): void {
  }

}
