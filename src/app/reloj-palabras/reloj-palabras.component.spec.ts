import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojPalabrasComponent } from './reloj-palabras.component';

describe('RelojPalabrasComponent', () => {
  let component: RelojPalabrasComponent;
  let fixture: ComponentFixture<RelojPalabrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojPalabrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojPalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
