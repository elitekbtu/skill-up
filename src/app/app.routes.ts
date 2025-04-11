import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { ProfessionsComponent } from './pages/professions/professions.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'professions', component: ProfessionsComponent },
  { path: 'contact', component: ContactComponent },
];