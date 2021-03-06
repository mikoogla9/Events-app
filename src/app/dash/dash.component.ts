import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatStepper } from '@angular/material/stepper';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  ngOnInit() {}
  
  constructor(private dataService: DataService, public dialog: MatDialog) {}

  hasSelectedAtLeastOneEvent() : boolean {
    if(this.dataService.getEventsSelectedCount()>=1){
      return true;
    } 
    return false;   
  }

  hasFilledAllDataInUser() : boolean {
    if(this.dataService.hasFilledAllDataInUser()){
      return true;
    }
    return false;
  }

  confirmDataInForm() {
    this.dataService.confirmDataInForm();
  }

  hasConfirmedDataInForm() : boolean {
    if(this.dataService.hasConfirmedDataInForm == true) {
      return true;
    }
    return false;
  }

  hasConfirmedTicket() : boolean {
    if(this.dataService.hasConfirmedTicket == true) {
      return true;
    }
    return false;
  }

  hasGeneratedTicket() : boolean {
    if(this.dataService.hasGeneratedTicket == true){
      return true;
    }
    return false;
  }

  openDialogConfirmationBox(stepper: MatStepper) {
    const dialogRef = this.dialog.open(DialogConfirmation, {
      width: '200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(this.dataService.hasConfirmedTicket == true){
        stepper.next();
      }
    });
  }

  openDialogCancellationBox(stepper: MatStepper) {
    const dialogRef = this.dialog.open(DialogCancellation, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(this.dataService.hasConfirmedTicket == false){
         stepper.next();
      }
    });
  }

  getFormTooltip() : string {
    if (!this.hasFilledAllDataInUser())
      return "Uzupełnij wszystkie wymagane pola";
    if (!this.dataService.hasConfirmedDataInForm)
      return "Wymagane zatwierdzenie formularza";
    return "";
  }

  getSummaryTooltip() : string {
    if (!this.hasFilledAllDataInUser())
      return "Uzupełnij wszystkie wymagane pola";
    if (!this.dataService.hasConfirmedDataInForm)
    return "Wymagane zatwierdzenie formularza";
      return "Podsumowanie wybranych wydarzeń";
  }
} 

@Component({
  selector: 'dialog-confirmation',
  templateUrl: 'dialog-confirmation.html',
  styleUrls: ['./dash.component.css']
})
export class DialogConfirmation {
  constructor(
    public dialogRef: MatDialogRef<DialogConfirmation>,
    private dataService: DataService
  ) { }

  confirmClick(): void {
    this.dialogRef.close();
    this.dataService.confirmTicket();
  }

  cancelClick() : void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-cancellation',
  templateUrl: 'dialog-cancellation.html',
  styleUrls: ['./dash.component.css']
})
export class DialogCancellation {
  constructor(
    public dialogRef: MatDialogRef<DialogCancellation>,
    private dataService: DataService
  ) { }

  confirmClick(): void {
    this.dialogRef.close();
    this.dataService.cancelTicket();
  }

  cancelClick() : void {
    this.dialogRef.close();
  }

}