import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
Welcome {{name}}
  </div>
  <h2>{{2+2}}</h2>
  <h2>{{"welcome " + name }}</h2>
  <h2>{{ name.length }}</h2>
  <h2>{{ name.toUpperCase()}}</h2>`
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
