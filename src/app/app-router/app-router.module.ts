import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouterRoutingModule } from './app-router-routing.module';
import { AppRouterComponent } from './app-router.component';

@NgModule({
  imports: [
    CommonModule,
    AppRouterRoutingModule
  ],
  declarations: [AppRouterComponent]
})
export class AppRouterModule { }
