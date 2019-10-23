import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { ReservationObject, Reservation } from '../models/models';


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

reservationList: Reservation[];
panelOpenState = false;
test;
liste = [];
today = new Date();



  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservationService.getListReservation().subscribe(
      (data: ReservationObject ) => {
        this.reservationList = data.message;
      }
    );
  }
}
