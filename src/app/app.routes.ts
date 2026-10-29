import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { authGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    canActivate: [authGuardGuard],
  },
];
