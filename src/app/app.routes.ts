import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuRelojesComponent } from './menu-relojes/menu-relojes.component';
import { RelojDigitalComponent } from './reloj-digital/reloj-digital.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu-relojes', component: MenuRelojesComponent },
  { path: 'reloj-digital', component: RelojDigitalComponent },
  { path: '**', redirectTo: 'login' }, // Ruta para manejar errores
];
