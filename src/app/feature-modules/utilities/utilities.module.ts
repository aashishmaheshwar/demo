import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiCheckboxComponent } from './components/multi-checkbox/multi-checkbox.component';
import { MultiSelectDropdownComponent } from './components/multi-select-dropdown/multi-select-dropdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultiCheckboxComponent, MultiSelectDropdownComponent],
  exports: [MultiCheckboxComponent, MultiSelectDropdownComponent]
})
export class UtilitiesModule { }
