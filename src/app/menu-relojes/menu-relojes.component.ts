import { ChangeDetectorRef, Component } from '@angular/core';
import { RelojDigitalComponent } from '../reloj-digital/reloj-digital.component';
import { RelojAnalogicoComponent } from '../reloj-analogico/reloj-analogico.component';
import { RelojBinarioComponent } from '../reloj-binario/reloj-binario.component'; // Importa el Reloj Binario
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-menu-relojes',
  standalone: true,
  templateUrl: './menu-relojes.component.html',
  styleUrls: ['./menu-relojes.component.css'],
  imports: [CommonModule, RelojDigitalComponent, RelojAnalogicoComponent, RelojBinarioComponent], // Añade el Reloj Binario a los imports
})
export class MenuRelojesComponent {
  selectedClock: string = 'reloj-digital';

  constructor(private cdr: ChangeDetectorRef) {}

  selectClock(clock: string) {
    this.selectedClock = clock;
    this.cdr.detectChanges(); // Fuerza la detección de cambios
  }
}
