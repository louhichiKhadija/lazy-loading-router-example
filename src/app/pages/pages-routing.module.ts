import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    { path:'', component:PagesComponent, children:[
      {path: 'manage-room', loadChildren:'./manage-room/manage-room.module#ManageRoomModule'}
    ]}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }