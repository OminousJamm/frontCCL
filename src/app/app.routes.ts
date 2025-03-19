import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/login/login.component';
import { InventoryComponent } from './presentation/inventory/inventory.component';
import { AuthGuard } from './core/application/authGuard';

export const routes: Routes = [
    {path: 'login', component: LoginComponent}, {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard]},
];
