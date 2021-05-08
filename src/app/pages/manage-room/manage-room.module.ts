import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoomComponent } from './list-room/list-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { ManageRoomComponent } from './manage-room.component';
import { ManageRoomRoutingModule } from './manage-room-routing.module';



@NgModule({
  declarations: [ManageRoomComponent, ListRoomComponent, EditRoomComponent],
  imports: [
    CommonModule,
    ManageRoomRoutingModule
  ]
})
export class ManageRoomModule { }
