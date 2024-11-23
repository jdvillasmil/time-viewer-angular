import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuRelojesComponent } from './menu-relojes/menu-relojes.component';
import { RelojDigitalComponent } from './reloj-digital/reloj-digital.component';
import { RelojAnalogicoComponent } from './reloj-analogico/reloj-analogico.component';
import { RelojBinarioComponent } from './reloj-binario/reloj-binario.component';
import { RelojHexadecimalComponent } from './reloj-hexadecimal/reloj-hexadecimal.component';
import { RelojPalabrasComponent } from './reloj-palabras/reloj-palabras.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu-relojes', component: MenuRelojesComponent },
  { path: 'reloj-digital', component: RelojDigitalComponent },
  { path: 'reloj-analogico', component: RelojAnalogicoComponent },
  { path: 'reloj-binario', component: RelojBinarioComponent },
  { path: 'reloj-hexadecimal', component: RelojHexadecimalComponent }, 
  { path: 'reloj-palabras', component: RelojPalabrasComponent},
  { path: '**', redirectTo: 'login' }, // Ruta para manejar errores
];
