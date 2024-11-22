import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reloj-digital',
  standalone: true,
  imports: [CommonModule], // Importamos CommonModule para usar pipes como "number"
  templateUrl: './reloj-digital.component.html',
  styleUrls: ['./reloj-digital.component.css'],
})
export class RelojDigitalComponent {
  hours: number = new Date().getHours();
  minutes: number = new Date().getMinutes();
  seconds: number = new Date().getSeconds();

  ngOnInit() {
    setInterval(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
      }
      if (this.hours === 24) {
        this.hours = 0;
      }
    }, 1000);
  }

  adjustTime(event: Event) {
    const input = event.target as HTMLInputElement;
    const [hours, minutes] = input.value.split(':').map(Number);

    if (!isNaN(hours) && !isNaN(minutes)) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = 0; // Reinicia los segundos al ajustar la hora
    }
  }
}
