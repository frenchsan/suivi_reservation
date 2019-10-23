import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getListRoom() {
    this.http.post(this.baseUrl + '/api/room/list', {}).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  roomPlanning() {
    const  body = {
      'idRoom' : 1,
      'startDateTime' : '2019-03-18 01:00:00',
      'endDateTime' : '2021-03-25 01:00:00'
    };
    this.http.post(this.baseUrl + '/api/room/planning', body).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }


}
