import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, FormsModule],
})
export class RegisterComponent {
  username = '';
  password = '';
  error = '';
  success = '';
  showPassword = false; // Controla la visibilidad de la contraseña

  constructor(private authService: AuthService, private router: Router) {}

  // Lógica para manejar el registro
  handleRegister() {
    if (!this.authService.validatePassword(this.password)) {
      this.error =
        'La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y un carácter especial.';
      this.success = '';
      return;
    }

    const registered = this.authService.register(this.username, this.password);

    if (registered) {
      this.success = 'Registro exitoso. Ahora puedes iniciar sesión.';
      this.error = '';

      // Redirige al login después de 2 segundos
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    } else {
      this.error = 'El nombre de usuario ya existe.';
      this.success = '';
    }
  }

  // Alternar visibilidad de la contraseña
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
