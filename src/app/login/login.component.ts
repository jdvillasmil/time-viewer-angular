import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  success = '';

  constructor(private authService: AuthService, private router: Router) {}

  handleSubmit() {
    const loggedIn = this.authService.login(this.username, this.password);

    if (loggedIn) {
      this.success = 'Inicio de sesión exitoso.';
      this.error = '';

      // Redirigir al menú de relojes después de 2 segundos
      setTimeout(() => {
        this.router.navigate(['/menu-relojes']);
      }, 2000);
    } else {
      this.error = 'Usuario o contraseña incorrectos.';
      this.success = '';
    }
  }
}
