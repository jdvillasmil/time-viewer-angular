import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojDigitalComponent } from '../reloj-digital/reloj-digital.component';
import { RelojAnalogicoComponent } from '../reloj-analogico/reloj-analogico.component';
import { RelojBinarioComponent } from '../reloj-binario/reloj-binario.component';
import { RelojHexadecimalComponent } from '../reloj-hexadecimal/reloj-hexadecimal.component';
import { RelojPalabrasComponent } from '../reloj-palabras/reloj-palabras.component';

@Component({
  selector: 'app-menu-relojes',
  standalone: true,
  imports: [CommonModule, RelojDigitalComponent, RelojAnalogicoComponent, RelojBinarioComponent, RelojHexadecimalComponent, RelojPalabrasComponent],
  templateUrl: './menu-relojes.component.html',
  styleUrls: ['./menu-relojes.component.css']
})
export class MenuRelojesComponent {
  selectedClock: string = 'reloj-digital';

  relojes = [
    { key: 'reloj-digital', name: 'Reloj Digital' },
    { key: 'reloj-analogico', name: 'Reloj Analógico' },
    { key: 'reloj-binario', name: 'Reloj Binario' },
    { key: 'reloj-hexadecimal', name: 'Reloj Hexadecimal' },
    {key: 'reloj-palabras', name: 'Reloj Palabras' },
  ];

  selectClock(clock: string) {
    this.selectedClock = clock;
  }
}
