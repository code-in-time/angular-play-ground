import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCounterComponent } from './the-counter.component';

describe('TheCounterComponent', () => {
  let component: TheCounterComponent;
  let fixture: ComponentFixture<TheCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
