import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuRelojesComponent } from './menu-relojes/menu-relojes.component';
import { RelojDigitalComponent } from './reloj-digital/reloj-digital.component';
import { RelojAnalogicoComponent } from './reloj-analogico/reloj-analogico.component'; // Importa el Reloj Analógico
import { RelojBinarioComponent } from './reloj-binario/reloj-binario.component'; // Importa el Reloj Binario

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu-relojes', component: MenuRelojesComponent },
  { path: 'reloj-digital', component: RelojDigitalComponent },
  { path: 'reloj-analogico', component: RelojAnalogicoComponent }, // Añade la ruta para el Reloj Analógico
  { path: 'reloj-binario', component: RelojBinarioComponent }, // Añade la ruta para el Reloj Binario
  { path: '**', redirectTo: 'login' }, // Ruta para manejar errores
];
