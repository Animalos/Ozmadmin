import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'ozma-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() classValue: string = "p-button-primary";
  @Input() labelValue: string = "Label";

  @Output() emitClickevent: EventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(clickEvent){
    this.emitClickevent.emit(clickEvent);
  }

}
