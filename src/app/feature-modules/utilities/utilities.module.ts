import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiCheckboxComponent } from './components/multi-checkbox/multi-checkbox.component';
import { MultiSelectDropdownComponent } from './components/multi-select-dropdown/multi-select-dropdown.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { SliderModule } from '../../../../node_modules/primeng/components/slider/slider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SliderModule
  ],
  declarations: [MultiCheckboxComponent, MultiSelectDropdownComponent, RangeSliderComponent],
  exports: [MultiCheckboxComponent, MultiSelectDropdownComponent, RangeSliderComponent, FormsModule, SliderModule]
})
export class UtilitiesModule { }
