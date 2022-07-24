import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWork05Component } from './home-work05.component';

describe('HomeWork05Component', () => {
  let component: HomeWork05Component;
  let fixture: ComponentFixture<HomeWork05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWork05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWork05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
