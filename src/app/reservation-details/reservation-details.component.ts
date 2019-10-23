import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../models/models';
import { ReservationService } from '../reservation.service';
import * as moment from 'moment';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {

  isCardOpen = false;
  ecart: number;
  @Input() reservation: Reservation;
  constructor( private reservationService: ReservationService) { }

  ngOnInit() {
    const dateresa = moment(this.reservation.hour_start).startOf('day');
    console.log('dateresa' + dateresa);
    const today = moment();
    this.ecart = dateresa.diff(today, 'days') ;
    console.log(this.ecart);
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
