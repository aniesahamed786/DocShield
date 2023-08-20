import { Component,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-docissuepopup',
  templateUrl: './docissuepopup.component.html',
  styleUrls: ['./docissuepopup.component.scss']
})
export class DocissuepopupComponent {
  selectedValue: any;
  selectedCar: any;

  constructor(
    public dialogRef: MatDialogRef<DocissuepopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}

 
  foods: any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
