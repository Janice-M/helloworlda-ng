import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
  <input type="text" value="Janice">
  `
  ,
  styles: [` div{
  color: red} `]
})
export class TestComponent implements OnInit {
  public name = "Janice";
  constructor() { }

  ngOnInit() {
  }

}

