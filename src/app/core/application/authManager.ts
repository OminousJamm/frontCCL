import { inject, Injectable } from "@angular/core";
import { AuthService } from "../infraestructure/auth.service";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { User, userCredentials } from "../domain/user";

@Injectable({
    providedIn: 'root'
})
export class AuthManager{
    private authService = inject(AuthService);
    private authState = new BehaviorSubject<Boolean>(this.isAuthenticated());
    private token = '';

    login(userCredentials: userCredentials): Observable<User> {
        return this.authService.login(userCredentials).pipe(
            tap(userCredentials => { 
                localStorage.setItem('token', userCredentials.token)
                this.authState.next(true)
            })
        );
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }

    logOut():void{
        localStorage.removeItem('token');
        this.authState.next(false);
    }

    getToken(): string | null {
        console.log(localStorage.getItem('token'));
        return localStorage.getItem('token');
    }

    getStatus(): Observable<Boolean>{
        return this.authState.asObservable();
    }
}