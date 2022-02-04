import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ozma-button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() classValue: string = "p-button-primary";
  @Input() labelValue: string = "Label";

  @Output() emitClickevent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(clickEvent){
    this.emitClickevent.emit(clickEvent);
  }

}
