import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerProfilePagesComponent } from './organizer-profile-pages.component';

describe('OrganizerProfilePagesComponent', () => {
  let component: OrganizerProfilePagesComponent;
  let fixture: ComponentFixture<OrganizerProfilePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizerProfilePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizerProfilePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
