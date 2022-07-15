import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatlessonsComponent } from './repeatlessons.component';

describe('RepeatlessonsComponent', () => {
  let component: RepeatlessonsComponent;
  let fixture: ComponentFixture<RepeatlessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatlessonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatlessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
