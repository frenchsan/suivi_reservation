import { UtilsService } from './../../shared/services/utils.service';
import { ReservationService } from './../../shared/services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { Reservation, ReservationObject } from 'src/app/shared/models/models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


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



  constructor(private reservationService: ReservationService, private utilsService: UtilsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      console.log(params);
      let id = +params.get('id');
      if (id == 1) {
        this.reservationService.getListReservation().subscribe(
          (data: ReservationObject ) => {
            this.reservationList = data.message;
          }
        );
      } else {
        this.reservationService.getListReservation(this.utilsService.tomorrow).subscribe(
          (data: ReservationObject ) => {
            this.reservationList = data.message;
          }
        );
      }
    });


  }
}
