import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { EventsComponent } from './events/events.component';
import { ResourceComponent } from './resource/resource.component';
import { MemberComponent } from './member/member.component';
import { MembershipComponent } from './membership/membership.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    MenuComponent,
    ReservationComponent,
    WorkspaceComponent,
    EventsComponent,
    ResourceComponent,
    MemberComponent,
    MembershipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }