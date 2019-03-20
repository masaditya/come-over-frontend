import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEventPagesComponent } from './detail-event-pages.component';

describe('DetailEventPagesComponent', () => {
  let component: DetailEventPagesComponent;
  let fixture: ComponentFixture<DetailEventPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEventPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEventPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
