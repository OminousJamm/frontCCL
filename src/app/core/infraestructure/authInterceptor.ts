import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthManager } from '../application/authManager';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authManager = inject(AuthManager);
    const authToken = authManager.getToken();

    const authReq = req.clone({
        headers: req.headers.set('Authorization', authToken ? `Bearer ${ authToken }` : '')
    });

    return next(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.status === 401 || error.status === 400) {
                authManager.logOut();
            }
            return throwError(() => error);
        })
    );
};