import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj-analogico',
  standalone: true,
  templateUrl: './reloj-analogico.component.html',
  styleUrls: ['./reloj-analogico.component.css'],
})
export class RelojAnalogicoComponent implements OnInit {
  hourHand: { x2: number; y2: number } = { x2: 50, y2: 30 };
  minuteHand: { x2: number; y2: number } = { x2: 50, y2: 20 };
  secondHand: { x2: number; y2: number } = { x2: 50, y2: 10 };

  ngOnInit(): void {
    this.updateClockHands();
    setInterval(() => this.updateClockHands(), 1000);
  }

  updateClockHands(): void {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    this.hourHand = this.calculateHandPosition(hours * 30, 20); // Hour hand
    this.minuteHand = this.calculateHandPosition(minutes * 6, 30); // Minute hand
    this.secondHand = this.calculateHandPosition(seconds * 6, 40); // Second hand
  }

  calculateHandPosition(angle: number, length: number): { x2: number; y2: number } {
    const radians = (angle * Math.PI) / 180;
    return {
      x2: 50 + length * Math.sin(radians),
      y2: 50 - length * Math.cos(radians),
    };
  }
}
