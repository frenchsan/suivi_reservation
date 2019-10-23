import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Auth
import { JwtModule } from '@auth0/angular-jwt';

// Shared
import { CustomMaterialModule } from './shared/custom-material.module';

// Components
import { LoginComponent } from './components/login/login.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MyNavComponent } from './pages/my-nav/my-nav.component';



export function tokenGetter() {
  return localStorage.getItem('token');
}

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReservationsComponent,
    ReservationDetailsComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:4200', 'preprod.api.bureau401.fr', 'api.bureau401.fr'],
      }
    }),
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [FormsModule,
    { provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [MyNavComponent]
})
export class AppModule { }
