import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResourceComponent } from './resource/resource.component';
import { ReservationComponent } from './reservation/reservation.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { EventsComponent } from './events/events.component';
import { MemberComponent } from './member/member.component';
import { MembershipComponent } from './membership/membership.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'resource', component: ResourceComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'workspace', component: WorkspaceComponent },
  { path: 'events', component: EventsComponent },
  { path: 'member', component: MemberComponent },
  { path: 'membership', component: MembershipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }