
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  imports: [
    MatButtonModule,
    MatRadioModule,
    MatDividerModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatRadioModule,
    MatDividerModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatProgressBarModule
  ],
})
export class CustomMaterialModule { }