import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import {InputTextModule} from 'primeng/inputtext';

const PRIMENG_COMPONENTS = [
  ButtonModule,
  InputTextModule
]

const CUSTOM_COMPONENTS = [
  ButtonComponent
]

@NgModule({
  imports: [
    PRIMENG_COMPONENTS
  ],
  declarations: [
    CUSTOM_COMPONENTS,
    TableComponent,
    DropdownComponent,
    TabMenuComponent
  ],
  exports: [
    CUSTOM_COMPONENTS
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
