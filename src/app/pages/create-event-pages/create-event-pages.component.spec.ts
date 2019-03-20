import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventPagesComponent } from './create-event-pages.component';

describe('CreateEventPagesComponent', () => {
  let component: CreateEventPagesComponent;
  let fixture: ComponentFixture<CreateEventPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
