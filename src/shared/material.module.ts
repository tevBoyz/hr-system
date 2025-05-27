import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Optional if using icons
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  exports: [MatSelectModule, MatInputModule, MatCardModule, MatTableModule, MatButtonModule,MatToolbarModule, MatButtonToggleModule,MatIconModule  ]
})
export class MaterialModule {}
