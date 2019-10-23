import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getListRoom();
    this.roomService.roomPlanning();
  }

}
