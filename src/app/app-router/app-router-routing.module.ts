import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GizmoComponent } from '../gizmo/gizmo.component'


const routes: Routes = [
	{ path : 'gizmo', component : GizmoComponent },
	{ path : '**', redirectTo : '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRouterRoutingModule { }
