import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  public name="Diana";
  public siteUrl =  window.location.href;
  public myId = "testId";
  public isDisabled = false;

  public successClass="text-success";
  public hasError = false;

  //for adding multiple classes
  public isSpecial = true;
  public messageClasses= {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  
  //style binding
  public highlightColor ="orange";

  //event binding
  //also possible to set properties on mouseClick
  public greeting="";

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  //two way binding
  public surname="";

  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " + this.name;
  }

  onClick(event) {
    alert("Welcome Diana Senpai!!!")
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value) {
    console.log(value);
  }

}
