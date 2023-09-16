import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeratorDetailComponent } from './refrigerator-detail.component';

describe('RefrigeratorDetailComponent', () => {
  let component: RefrigeratorDetailComponent;
  let fixture: ComponentFixture<RefrigeratorDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefrigeratorDetailComponent]
    });
    fixture = TestBed.createComponent(RefrigeratorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
