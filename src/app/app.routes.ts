import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./core/auth/auth.component').then(c => c.AuthComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./core/auth/auth.component').then(c => c.AuthComponent)

    }
];
