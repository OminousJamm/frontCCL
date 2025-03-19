import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthManager } from '../../core/application/authManager';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private auth = inject(AuthManager)
  private router = inject(Router)
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    if (this.loginForm.invalid) return;
    const { userName, password } = this.loginForm.value as { userName: string; password: string };
    this.auth.login({ userName, password }).subscribe({
      next: () => { this.router.navigate(['/inventory']) }, 
      error:() => { alert('Credenciales incorrectas'); } 
    });
  }
}

