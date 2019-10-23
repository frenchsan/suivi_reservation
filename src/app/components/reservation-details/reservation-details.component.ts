import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { Reservation } from 'src/app/shared/models/models';
import { ReservationService } from 'src/app/shared/services/reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {

  isCardOpen = false;
  ecart: number;
  thisweek = false;
  @Input() reservation: Reservation;
  constructor( private reservationService: ReservationService) { }

  ngOnInit() {
    // const dateresa = moment(this.reservation.hour_start).startOf('day');
    let startOfWeek = moment().startOf('isoWeek');
    let endOfWeek = moment().endOf('isoWeek');


    const dateresa = moment(this.reservation.hour_start);
    if (dateresa < endOfWeek) {
        this.thisweek = true;
      }
    const today = moment();
    this.ecart = dateresa.diff(today, 'days') ;
  }


  openCard() {
    this.isCardOpen = !this.isCardOpen;
  }

  updateSession(id: number) {
    console.log('updateSession', id);
    this.reservationService.sessionUpdate(id);
  }

  consultSession(id: number) {
    console.log('consultSession', id);
    this.reservationService.sessionConsult(id);
  }

  deleteSession(id: number) {
    console.log('deleteSession', id);
    this.reservationService.sessionDelete(id);
  }

}
