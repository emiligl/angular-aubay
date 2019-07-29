import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { LibrosMockSrvComponent } from './libros-mock-srv/libros-mock-srv.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LibrosComponent, LibrosMockComponent, LibrosMockSrvComponent],
  imports: [
    CommonModule,
    FormsModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }