import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import {HttpClient } from '@angular/common/http';

import{UserData} from '../user-data';
import { Title } from '@angular/platform-browser';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

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
    add(){

    }

  }
