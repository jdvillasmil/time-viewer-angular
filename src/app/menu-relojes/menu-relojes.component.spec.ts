import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRelojesComponent } from './menu-relojes.component';

describe('MenuRelojesComponent', () => {
  let component: MenuRelojesComponent;
  let fixture: ComponentFixture<MenuRelojesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuRelojesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRelojesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
