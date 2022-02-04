import { TextInputComponent } from './text-input/text-input.component';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';

const PRIMENG_COMPONENTS = [
  ButtonModule,
  InputTextModule,
  DropdownModule,
  TabMenuModule,
  TableModule
]

const CUSTOM_COMPONENTS = [
  ButtonComponent,
  TableComponent,
  DropdownComponent,
  TabMenuComponent,
  TextInputComponent
]

@NgModule({
  imports: [
    PRIMENG_COMPONENTS
  ],
  declarations: [
    CUSTOM_COMPONENTS,
  ],
  exports: [
    CUSTOM_COMPONENTS
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
