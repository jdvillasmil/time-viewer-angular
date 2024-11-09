import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockAnalogComponent } from './clock-analog.component';

describe('ClockAnalogComponent', () => {
  let component: ClockAnalogComponent;
  let fixture: ComponentFixture<ClockAnalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockAnalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockAnalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
