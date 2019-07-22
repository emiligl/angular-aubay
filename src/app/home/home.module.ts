import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';

@NgModule({
  declarations: [HomeComponent, SaludoComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
