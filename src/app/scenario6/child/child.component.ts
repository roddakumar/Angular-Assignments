import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() public child =new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  log(value){
    this.child.emit(value);
  }

}
