import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child03Component } from './child03.component';

describe('Child03Component', () => {
  let component: Child03Component;
  let fixture: ComponentFixture<Child03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
