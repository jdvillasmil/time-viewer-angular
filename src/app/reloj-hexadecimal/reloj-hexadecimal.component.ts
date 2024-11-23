import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reloj-hexadecimal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reloj-hexadecimal.component.html',
  styleUrls: ['./reloj-hexadecimal.component.css'],
})
export class RelojHexadecimalComponent implements OnInit {
  hours: string = '';
  minutes: string = '';
  seconds: string = '';
  time: Date = new Date();

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => {
      this.time.setSeconds(this.time.getSeconds() + 1);
      this.updateTime();
    }, 1000);
  }

  private updateTime(): void {
    const now = this.time;
    this.hours = now.getHours().toString(16).padStart(2, '0').toUpperCase();
    this.minutes = now.getMinutes().toString(16).padStart(2, '0').toUpperCase();
    this.seconds = now.getSeconds().toString(16).padStart(2, '0').toUpperCase();
  }

  adjustTime(event: Event): void {
    const input = event.target as HTMLInputElement;
    const [hours, minutes] = input.value.split(':').map(Number);
    this.time.setHours(hours);
    this.time.setMinutes(minutes);
    this.time.setSeconds(0);
    this.updateTime();
  }
}
