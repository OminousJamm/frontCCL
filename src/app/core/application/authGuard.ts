import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthManager } from './authManager';

export const AuthGuard: CanActivateFn = () => {
    const authService = inject(AuthManager);
    const router = inject(Router);

    if (authService.isAuthenticated()) {
        return true;
    } else {
        console.log('no entra');
        router.navigate(['/login']);
        return false;
    }
};