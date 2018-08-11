import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiCheckboxComponent } from './components/multi-checkbox/multi-checkbox.component';
import { MultiSelectDropdownComponent } from './components/multi-select-dropdown/multi-select-dropdown.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { FormsModule } from '@node_modules/@angular/forms';
import { SliderModule } from '@node_modules/primeng/components/slider/slider';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SliderModule
  ],
  declarations: [MultiCheckboxComponent, MultiSelectDropdownComponent, RangeSliderComponent, SpinnerComponent],
  exports: [MultiCheckboxComponent, MultiSelectDropdownComponent, RangeSliderComponent, SpinnerComponent, FormsModule, SliderModule]
})
export class UtilitiesModule { }
