import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojBinarioComponent } from './reloj-binario.component';

describe('RelojBinarioComponent', () => {
  let component: RelojBinarioComponent;
  let fixture: ComponentFixture<RelojBinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelojBinarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojBinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
