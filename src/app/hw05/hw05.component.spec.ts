import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HW05Component } from './hw05.component';

describe('HW05Component', () => {
  let component: HW05Component;
  let fixture: ComponentFixture<HW05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HW05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HW05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
