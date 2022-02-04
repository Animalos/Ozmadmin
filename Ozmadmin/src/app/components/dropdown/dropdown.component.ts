import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ozma-dropdown-component',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  dropdownListValues: any[];

  selectedDropdownValue: any;

}
