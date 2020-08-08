import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import {HttpClient } from '@angular/common/http';

import{UserData} from '../user-data';
import { Title } from '@angular/platform-browser';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

 title = 'User';
  blogs;
  error: {};
  router;




  constructor(
    private http: HttpClient, private  dataService :DataService,private route:Router
    ) { }

  ngOnInit() {


    this.dataService.retrevAlldata().subscribe(
      (data) => {
        console.log(data)
        this.blogs = data,
      error => this.error = error }
    );
  
  }

  editprofile(){
      
    this.router.navigate(['editprofile'])

    }

  }

  

  
  


