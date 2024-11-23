import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojHexadecimalComponent } from './reloj-hexadecimal.component';

describe('RelojHexadecimalComponent', () => {
  let component: RelojHexadecimalComponent;
  let fixture: ComponentFixture<RelojHexadecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojHexadecimalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojHexadecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
