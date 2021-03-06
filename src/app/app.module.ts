import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { ListAvailableEventsComponent } from './list-available-events/list-available-events.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { SummaryComponent } from './summary/summary.component';
import { TicketComponent } from './ticket/ticket.component';
import { DataService } from './services/data.service';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { QRCodeModule } from 'angularx-qrcode';
import html2canvas from 'html2canvas';
import { RegisterUserComponent } from './register-user/register-user.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogMoreInfo} from './list-available-events/list-available-events.component';
import {DialogCancellation} from './dash/dash.component'
import { DialogConfirmation } from './dash/dash.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    ListAvailableEventsComponent,
    LoginFormComponent,
    NewUserFormComponent,
    SummaryComponent,
    TicketComponent,
    RegisterUserComponent,
    DialogMoreInfo,
    DialogCancellation,
    DialogConfirmation
  ],
  imports: [
    MatTabsModule,
    MatCheckboxModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatStepperModule,
    FormsModule,
    MatSnackBarModule,
    QRCodeModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
