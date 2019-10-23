import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import * as moment from 'moment';
import { UtilsService } from '../common/utils.service';

@Component({
  selector: 'app-availability-create',
  templateUrl: './availability-create.component.html',
  styleUrls: ['./availability-create.component.css']
})
export class AvailabilityCreateComponent implements OnInit {
  selectedStartDate: any;
  selectedEndDate: any;
  gameTotalDuration: any;
  room_id: any;
  selected: any;


  rooms: any[] = [
    {value: '1', viewValue: 'Les disparus du Fort Lachaux'},
    {value: '2', viewValue: 'Halloween 2019'},
  ];

  constructor(private reservationService: ReservationService, private utilsService: UtilsService) { }

  ngOnInit() {
  }

  availabilityCreate() {
    console.log(this.selectedStartDate);
    // this.reservationService.availabilityCreate(availability);
  }

  creer() {
    const startDate = this.utilsService.getdateAndHour(this.selectedStartDate);
    const endDate = this.utilsService.getdateAndHour(this.selectedEndDate);
    console.log(this.gameTotalDuration);
    console.log(this.selected);
    this.reservationService.availabilityCreate(startDate, endDate, this.gameTotalDuration, this.selected);
  }
}
