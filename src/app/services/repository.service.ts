import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Owner } from 'src/app/models/owner.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  constructor(private http: HttpClient) { }
  public getData = (route: string) => {
    let owner1 = new Owner();
    owner1.name = "avia";
    owner1.dateOfBirth = new Date();
    owner1.address = "Hagra";
    let owner2 = new Owner();
    owner2.name = "ddia";
    owner2.dateOfBirth = new Date();
    owner2.address = "nnnnnagra";
    let owner3 = new Owner();
    owner3.name = "3333ddia";
    owner3.dateOfBirth = new Date();
    owner3.address = "33333nnnnnagra";
    return [owner1,owner2,owner3]
    //return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }
 
  public create = (route: string, body) => {
    //return this.http.post(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
  }
 
  public update = (route: string, body) => {
    //return this.http.put(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
  }
 
  public delete = (route: string) => {
    //return this.http.delete(this.createCompleteRoute(route, environment.urlAddress));
  }
 
  private createCompleteRoute = (route: string, envAddress: string) => {
    //return `${envAddress}/${route}`;
  }
 
  private generateHeaders = () => {
    // return {
    //   headers: new HttpHeaders({'Content-Type': 'application/json'})
    // }
  }
}
