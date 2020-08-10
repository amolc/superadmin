import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username , password){
    //  console.log('before ' +this.isUserLoggedIn());
    if (username === "sunnykumar" && password === '12345'){
       sessionStorage.setItem('authenticaterUser',username)
      // console.log('after ' +this.isUserLoggedIn());
      return true;
    }
    return false;
  }
   isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
      return !(user === null)

}

   isAdminRights():boolean{
     return true;


   }
  
  
}

