import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private httpClient :HttpClient) {
  }

  async checkAuthenticated() {
    
  }

  async login(username: string, password: string): Promise<void> {
    //this.httpClient.post("",)
  }

  async logout(redirect: string): Promise<void> {
    
  }
}
