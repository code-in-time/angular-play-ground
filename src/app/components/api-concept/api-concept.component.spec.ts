import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConceptComponent } from './api-concept.component';

describe('ApiConceptComponent', () => {
  let component: ApiConceptComponent;
  let fixture: ComponentFixture<ApiConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiConceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
