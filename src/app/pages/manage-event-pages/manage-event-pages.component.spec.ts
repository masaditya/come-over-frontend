import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEventPagesComponent } from './manage-event-pages.component';

describe('ManageEventPagesComponent', () => {
  let component: ManageEventPagesComponent;
  let fixture: ComponentFixture<ManageEventPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEventPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEventPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
