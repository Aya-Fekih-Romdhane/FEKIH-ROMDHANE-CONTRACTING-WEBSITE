import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.HomeComponent),
    title: 'Fekih Romdhane Contracting'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then(m => m.AboutComponent),
    title: 'About Us — Fekih Romdhane Contracting'
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services-page').then(m => m.ServicesPageComponent),
    title: 'Services — Fekih Romdhane Contracting'
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects').then(m => m.ProjectsComponent),
    title: 'Projects — Fekih Romdhane Contracting'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then(m => m.ContactComponent),
    title: 'Contact — Fekih Romdhane Contracting'
  },
  { path: '**', redirectTo: '' }
];
