
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  imports: [MatButtonModule, MatRadioModule, MatDividerModule],
  exports: [MatButtonModule, MatRadioModule, MatDividerModule],
})
export class CustomMaterialModule { }