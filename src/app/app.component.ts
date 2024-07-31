import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { TicketComponent } from './dashboard/tickets/ticket/ticket.component';
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { NewTicketComponent } from './dashboard/tickets/new-ticket/new-ticket.component';
import { ButtonComponent } from './shared/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    TrafficComponent,
    ServerStatusComponent,
    DashboardItemComponent,
    DashboardItemComponent,
    TicketComponent,
    TicketsComponent,
    NewTicketComponent,
    ButtonComponent
],
})
export class AppComponent {}
