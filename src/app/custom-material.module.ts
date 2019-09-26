
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [MatButtonModule, MatRadioModule, MatDividerModule, MatSortModule, MatTableModule, MatCheckboxModule],
  exports: [MatButtonModule, MatRadioModule, MatDividerModule, MatSortModule, MatTableModule, MatCheckboxModule],
})
export class CustomMaterialModule { }