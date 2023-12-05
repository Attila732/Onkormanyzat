import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvosiugyekComponent } from './orvosiugyek.component';

describe('OrvosEgyebUgyekComponent', () => {
  let component: OrvosiugyekComponent;
  let fixture: ComponentFixture<OrvosiugyekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrvosiugyekComponent]
    });
    fixture = TestBed.createComponent(OrvosiugyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
