import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
// Components
import { NewComponentComponent } from './new-component/new-component.component';
import { InpuComponent } from './inpu/inpu.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';



@NgModule({
  declarations: [NewComponentComponent, InpuComponent, OutputComponent, FoodListComponent, FoodAddComponent],
  exports: [
    NewComponentComponent, 
    InpuComponent, 
    OutputComponent, 
    FoodListComponent, 
    FoodAddComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
