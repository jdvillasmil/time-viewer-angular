import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj-analogico',
  standalone: true,
  templateUrl: './reloj-analogico.component.html',
  styleUrls: ['./reloj-analogico.component.css'],
})
export class RelojAnalogicoComponent implements OnInit {
  currentTime: Date = new Date();
  Math = Math; // Exponer Math para que esté disponible en la plantilla

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  get hour(): number {
    return ((this.currentTime.getHours() % 12) + this.currentTime.getMinutes() / 60) * 30; // Grados
  }

  get minute(): number {
    return this.currentTime.getMinutes() * 6; // Grados
  }

  get second(): number {
    return this.currentTime.getSeconds() * 6; // Grados
  }
}
