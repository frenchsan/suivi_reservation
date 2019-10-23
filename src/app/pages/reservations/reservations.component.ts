import { ReservationService } from './../../shared/services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { Reservation, ReservationObject } from 'src/app/shared/models/models';


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
