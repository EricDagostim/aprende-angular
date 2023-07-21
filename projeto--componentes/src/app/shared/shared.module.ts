import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { InpuComponent } from './inpu/inpu.component';
import { OutputComponent } from './output/output.component';



@NgModule({
  declarations: [NewComponentComponent, InpuComponent, OutputComponent],
  exports: [NewComponentComponent, InpuComponent, OutputComponent],
  imports: [CommonModule]
})
export class SharedModule { }
