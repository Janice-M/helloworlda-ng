import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
Welcome {{name}}
  </div>`,
  styles: [` div{
  color: red} `]
})
export class TestComponent implements OnInit {
 public name = "Janice";
  constructor() { }

  ngOnInit() {
  }

}
