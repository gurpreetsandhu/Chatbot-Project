import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  getAccount(accountNumber){
    console.log(accountNumber)
    return this.httpClient.get(`http://localhost:3000/accounts?account_number=${accountNumber}`);
  }
}
