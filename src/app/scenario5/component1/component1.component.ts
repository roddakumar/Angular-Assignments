import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
public message="";
@Output() public child1=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  messages(value){
    this.message=value;
    this.child1.emit(value);
  }

}
