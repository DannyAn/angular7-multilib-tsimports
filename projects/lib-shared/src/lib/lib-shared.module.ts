import { NgModule } from '@angular/core';
import { LibSharedComponent } from './lib-shared.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LibSharedComponent],
  exports: [LibSharedComponent]
})
export class LibSharedModule { }
