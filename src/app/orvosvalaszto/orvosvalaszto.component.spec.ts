import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvosvalasztoComponent } from './orvosvalaszto.component';

describe('OrvosvalasztoComponent', () => {
  let component: OrvosvalasztoComponent;
  let fixture: ComponentFixture<OrvosvalasztoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrvosvalasztoComponent]
    });
    fixture = TestBed.createComponent(OrvosvalasztoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
