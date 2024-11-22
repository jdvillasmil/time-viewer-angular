import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojDigitalComponent } from '../reloj-digital/reloj-digital.component';
import { RelojAnalogicoComponent } from '../reloj-analogico/reloj-analogico.component';

@Component({
  selector: 'app-menu-relojes',
  standalone: true,
  templateUrl: './menu-relojes.component.html',
  styleUrls: ['./menu-relojes.component.css'],
  imports: [CommonModule, RelojDigitalComponent, RelojAnalogicoComponent],
})
export class MenuRelojesComponent {
  selectedClock: string = '';

  selectClock(clock: string) {
    this.selectedClock = clock;
  }
}
