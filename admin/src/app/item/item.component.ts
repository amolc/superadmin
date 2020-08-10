import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import {HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

 
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
