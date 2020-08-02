import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage ='Invalid Credintals'
  invalidLogin = false 

  constructor(private router:Router, private hardcodedAuthentication:HardcodedAuthenticationService) {}

  ngOnInit() {
  }
  handleLogin(){
    // if(this.username === "sunnykumar" && this.password === '12345') 
    if(this.hardcodedAuthentication.authenticate(this.username,this.password)){
      this.router.navigate(['dashboard'])
      this.invalidLogin = false
  
    }else{
      this.invalidLogin = true;
    }


  }

}
