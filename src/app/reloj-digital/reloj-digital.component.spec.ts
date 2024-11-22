import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojDigitalComponent } from './reloj-digital.component';

describe('RelojDigitalComponent', () => {
  let component: RelojDigitalComponent;
  let fixture: ComponentFixture<RelojDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojDigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
