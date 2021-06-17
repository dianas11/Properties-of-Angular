import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  public name="Welcome to Angular Tutorial";
  public message="Welcome Senpai";
  public person={
    "firstName": "Diana",
    "lastName": "Satapathy"
  }

  file = { name: 'logo.svg', size: 2120109, type: 'image/svg' };


  public date = new Date();

  ngOnInit(): void {
    
  }

}