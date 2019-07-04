import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
   styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
fireEvent(value){
  this.childEvent.emit(value);
}
}
