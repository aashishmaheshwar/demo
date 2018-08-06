import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiCheckboxComponent } from './components/multi-checkbox/multi-checkbox.component';
import { MultiSelectDropdownComponent } from './components/multi-select-dropdown/multi-select-dropdown.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultiCheckboxComponent, MultiSelectDropdownComponent, RangeSliderComponent],
  exports: [MultiCheckboxComponent, MultiSelectDropdownComponent, RangeSliderComponent]
})
export class UtilitiesModule { }
