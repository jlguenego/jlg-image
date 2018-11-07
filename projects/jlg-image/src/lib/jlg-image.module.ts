import { NgModule } from '@angular/core';
import { JlgImageComponent } from './jlg-image/jlg-image.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [JlgImageComponent],
  imports: [
    CommonModule
  ],
  exports: [JlgImageComponent]
})
export class JlgImageModule { }
