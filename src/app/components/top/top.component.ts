import { Component, OnInit } from '@angular/core';
import { GlobalCounterService } from '../../../services/global-counter.service';
import { URLpollerService } from '../../../services/urlpoller.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  public counterTop = 1;
  constructor(public globalCounterService: GlobalCounterService, private uRLpollerService: URLpollerService) { }
  public randomName = '';

  ngOnInit(): void {
    this.uRLpollerService.getRandomName().subscribe({
      next: (data) => this.randomName = data.response.name,
      error: (e) => console.log('error', e),
      complete: () => console.log('complete'),
    });
  }

}
