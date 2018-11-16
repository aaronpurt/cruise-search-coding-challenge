import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-state-rooms",
  templateUrl: "./state-rooms.component.html",
  styleUrls: ["./state-rooms.component.sass"]
})
export class StateRoomsComponent implements OnInit {
  @Input() stateRooms;
  activeRoomIndex = 0;

  constructor() {}

  ngOnInit() {}

  setActiveRoom(index) {
    this.activeRoomIndex = index;
  }
}
