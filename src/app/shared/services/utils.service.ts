import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  today = new Date();
  date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
  dateAndHour = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate() + ' ' + this.today.getHours() + ':' + '00:00';
  tomorrow = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate()  + ' ' +  '23:59:59';



  constructor() { }

  getdateAndHour(datefullformat) {
    // tslint:disable-next-line:max-line-length
    return datefullformat.getFullYear() + '-' + (datefullformat.getMonth() + 1) + '-' + datefullformat.getDate() + ' ' + datefullformat.getHours() + ':' + '00:00';
  }



}
