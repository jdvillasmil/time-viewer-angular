import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Registrar un nuevo usuario
  register(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Verificar si el usuario ya existe
    if (users.some((user: any) => user.username === username)) {
      return false; // Usuario ya existe
    }

    // Guardar nuevo usuario
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  // Iniciar sesión
  login(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.some(
      (user: any) => user.username === username && user.password === password
    );
  }

  // Validar contraseña
  validatePassword(password: string): boolean {
    const minLength = 8; // Mínimo 8 caracteres
    const hasUpperCase = /[A-Z]/.test(password); // Al menos una mayúscula
    const hasLowerCase = /[a-z]/.test(password); // Al menos una minúscula
    const hasNumbers = /\d/.test(password); // Al menos un número
    const hasSpecial = /[@$!%*?&.,#]/.test(password); // Al menos un carácter especial

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecial
    );
  }
}
