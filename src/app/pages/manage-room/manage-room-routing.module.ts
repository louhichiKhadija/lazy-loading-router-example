import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageRoomComponent } from './manage-room.component';
import { ListRoomComponent } from './list-room/list-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';


const routes: Routes = [{ path:'', component:ManageRoomComponent, children:[
    {path: '', redirectTo: 'listing-room', pathMatch: "full" },
    {path: 'listing-room', component: ListRoomComponent},
    {path: 'edit-room', component: EditRoomComponent}
  ]}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ManageRoomRoutingModule { }