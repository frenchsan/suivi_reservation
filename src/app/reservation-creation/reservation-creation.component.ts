import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-creation',
  templateUrl: './reservation-creation.component.html',
  styleUrls: ['./reservation-creation.component.css']
})
export class ReservationCreationComponent implements OnInit {

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
  }

  createReservation() {
      this.reservationService.sessionCreate();

  }

}
