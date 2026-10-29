import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuardService).logInStatus();
};
