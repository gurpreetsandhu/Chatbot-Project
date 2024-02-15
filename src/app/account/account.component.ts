import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Account } from './account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account:Account;

  constructor(private accountService:AccountService) { 
    
  }

  ngOnInit() {
    this.accountService.getAccount("000111222333").subscribe(
      data =>{
        console.log(data[0])
        this.account = data[0]
      },
      error =>{
        console.log("Error");
      }
      
    );
  }

  

}
