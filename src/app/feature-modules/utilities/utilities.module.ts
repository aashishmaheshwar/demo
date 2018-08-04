import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiCheckboxComponent } from './components/multi-checkbox/multi-checkbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultiCheckboxComponent],
  exports: [MultiCheckboxComponent]
})
export class UtilitiesModule { }
