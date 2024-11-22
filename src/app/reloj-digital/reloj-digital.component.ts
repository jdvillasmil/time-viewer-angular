import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reloj-digital',
  standalone: true,
  templateUrl: './reloj-digital.component.html',
  styleUrls: ['./reloj-digital.component.css'],
  imports: [CommonModule], // Importa CommonModule para usar el pipe `date`
})
export class RelojDigitalComponent {
  currentTime: Date = new Date(); // Inicializa con la hora actual

  constructor() {
    this.updateClock();
  }

  // Método para actualizar el reloj cada segundo
  updateClock() {
    setInterval(() => {
      this.currentTime = new Date(this.currentTime.getTime() + 1000);
    }, 1000);
  }

  // Método para ajustar la hora
  adjustTime(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value) {
      const [hours, minutes] = input.value.split(':').map(Number);
      const updatedTime = new Date(this.currentTime);
      updatedTime.setHours(hours, minutes, 0); // Ajustar horas y minutos
      this.currentTime = updatedTime;
    }
  }
}
