import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockSiteComponent } from './unlock-site.component';

describe('UnlockSiteComponent', () => {
  let component: UnlockSiteComponent;
  let fixture: ComponentFixture<UnlockSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlockSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
