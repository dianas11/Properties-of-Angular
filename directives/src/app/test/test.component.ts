import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  displayName = true;

  public color ="orange";

  public anime= ["naruto", "deathNote", "SilentVoices", "Aot"];

  constructor() { }

  ngOnInit(): void {
  }

}
