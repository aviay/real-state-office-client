import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }

  async checkAuthenticated() {
    
  }

  async login(username: string, password: string): Promise<void> {
    
  }

  async logout(redirect: string): Promise<void> {
    
  }
}
