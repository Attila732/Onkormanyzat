import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvoslistaComponent } from './orvoslista.component';

describe('OrvoslistaComponent', () => {
  let component: OrvoslistaComponent;
  let fixture: ComponentFixture<OrvoslistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrvoslistaComponent]
    });
    fixture = TestBed.createComponent(OrvoslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
