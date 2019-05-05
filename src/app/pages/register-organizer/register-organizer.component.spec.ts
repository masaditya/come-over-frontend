import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOrganizerComponent } from './register-organizer.component';

describe('RegisterOrganizerComponent', () => {
  let component: RegisterOrganizerComponent;
  let fixture: ComponentFixture<RegisterOrganizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterOrganizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
