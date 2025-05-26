import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [MatInputModule, MatCardModule, MatTableModule, MatButtonModule]
})
export class MaterialModule {}
