import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }


  public doRegistration(user){
    return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
  }

 
}