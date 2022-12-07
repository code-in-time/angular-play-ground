import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-counter',
  templateUrl: './the-counter.component.html',
  styleUrls: ['./the-counter.component.scss']
})
export class TheCounterComponent implements OnInit {
  @Input() counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
