import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-reloj-palabras',
  standalone: true,
  templateUrl: './reloj-palabras.component.html',
  styleUrls: ['./reloj-palabras.component.css'],
  imports: [CommonModule]
})
export class RelojPalabrasComponent implements OnInit {
  timeInWords: string = '';
  currentDate: Date = new Date();

  ngOnInit(): void {
    this.updateTimeInWords();
    setInterval(() => {
      this.currentDate = new Date(this.currentDate.getTime() + 60000); // Increment by 1 minute
      this.updateTimeInWords();
    }, 60000); // Update every minute
  }

  adjustTime(event: Event): void {
    const input = event.target as HTMLInputElement;
    const [hours, minutes] = input.value.split(':').map(Number);
    const now = new Date();
    now.setHours(hours);
    now.setMinutes(minutes);
    now.setSeconds(0);
    this.currentDate = now;
    this.updateTimeInWords();
  }

  private updateTimeInWords(): void {
    const hours = this.currentDate.getHours();
    const minutes = this.currentDate.getMinutes();
    this.timeInWords = this.convertTimeToWords(hours, minutes);
  }

  private convertTimeToWords(hours: number, minutes: number): string {
    const hourNames = [
      'doce', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis',
      'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'una'
    ];
    const minutePhrases = [
      'en punto', 'y cinco', 'y diez', 'y cuarto', 'y veinte',
      'y veinticinco', 'y media', 'menos veinticinco', 'menos veinte',
      'menos cuarto', 'menos diez', 'menos cinco'
    ];

    const displayHour = minutes > 30 ? (hours + 1) % 12 : hours % 12;
    const displayMinutePhrase = minutes === 0 ? 'en punto' :
      minutes <= 30 ? `y ${this.getMinuteWords(minutes)}` :
      `menos ${this.getMinuteWords(60 - minutes)}`;

    return `Son las ${hourNames[displayHour]} ${displayMinutePhrase}`;
  }

  private getMinuteWords(minutes: number): string {
    if (minutes === 15) return 'cuarto';
    if (minutes === 30) return 'media';
    return this.numberToWords(minutes);
  }

  private numberToWords(num: number): string {
    const numWords = [
      '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis',
      'siete', 'ocho', 'nueve', 'diez', 'once', 'doce',
      'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete',
      'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós',
      'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis',
      'veintisiete', 'veintiocho', 'veintinueve', 'treinta'
    ];
    return numWords[num];
  }
}
