import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilePagesComponent } from './user-profile-pages.component';

describe('UserProfilePagesComponent', () => {
  let component: UserProfilePagesComponent;
  let fixture: ComponentFixture<UserProfilePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
