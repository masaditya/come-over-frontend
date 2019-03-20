import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseAllPagesComponent } from './browse-all-pages.component';

describe('BrowseAllPagesComponent', () => {
  let component: BrowseAllPagesComponent;
  let fixture: ComponentFixture<BrowseAllPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseAllPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseAllPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
