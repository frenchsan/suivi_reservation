import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MyNavComponent } from './my-nav/my-nav.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoomListComponent } from './room-list/room-list.component';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import { ReservationCreationComponent } from './reservation-creation/reservation-creation.component';
import { AvailabilityCreateComponent } from './availability-create/availability-create.component';
import { AvailabilityListComponent } from './availability-list/availability-list.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';

export function tokenGetter() {
  return localStorage.getItem('token');
}

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ReservationsComponent,
    ReservationDetailsComponent,
    LoginComponent,
    RoomListComponent,
    ReservationCreationComponent,
    AvailabilityCreateComponent,
    AvailabilityListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200', 'preprod.api.bureau401.fr', 'api.bureau401.fr'],
      }
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,

  ],
  providers: [FormsModule,
    { provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [MyNavComponent]
})
export class AppModule { }
