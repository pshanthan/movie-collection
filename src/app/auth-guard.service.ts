import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor() {}
  log = false;
  loggedIn() {
    return this.log;
  }
  logIn() {
    this.log = true;
  }
  logOut() {
    this.log = false;
  }
}
