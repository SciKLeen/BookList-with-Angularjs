import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Output() newItemEvent: any;
  event: EventEmitter<any>;

  addNewItem(value: string) {
    // this.newItemEvent.emit(value);
    this.newItemEvent = value
    // alert(this.newItemEvent)
    this.event.emit(this.newItemEvent);
  }


  constructor() { }

  ngOnInit() {
    this.event = new EventEmitter
  }

}
