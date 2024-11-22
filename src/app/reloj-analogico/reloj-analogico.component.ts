import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj-analogico',
  standalone: true,
  templateUrl: './reloj-analogico.component.html',
  styleUrls: ['./reloj-analogico.component.css'],
})
export class RelojAnalogicoComponent implements OnInit {
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  hourAngle: number = 0;
  minuteAngle: number = 0;
  secondAngle: number = 0;

  ngOnInit(): void {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock(): void {
    const now = new Date();
    this.hour = now.getHours();
    this.minute = now.getMinutes();
    this.second = now.getSeconds();
    this.calculateAngles();
  }

  adjustTime(event: Event): void {
    const input = event.target as HTMLInputElement;
    const [hours, minutes] = input.value.split(':').map(Number);

    if (!isNaN(hours) && !isNaN(minutes)) {
      this.hour = hours % 12; // Ajustamos a formato de 12 horas
      this.minute = minutes;
      this.second = 0; // Reiniciamos los segundos al ajustar manualmente
      this.calculateAngles();
    }
  }

  calculateAngles(): void {
    this.hourAngle = (this.hour % 12) * 30 + this.minute * 0.5; // Cada hora son 30° + ajuste por minutos
    this.minuteAngle = this.minute * 6 + this.second * 0.1; // Cada minuto son 6° + ajuste por segundos
    this.secondAngle = this.second * 6; // Cada segundo son 6°
  }
}
