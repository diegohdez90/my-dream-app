import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouterRoutingModule } from './app-router/app-router-routing.module';

import { AppComponent } from './app.component';

import { GizmoComponent } from './gizmo/gizmo.component';

import { GizmoService } from './gizmo.service';


@NgModule({
  declarations: [
    AppComponent,
    GizmoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterRoutingModule
  ],
  providers: [GizmoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
