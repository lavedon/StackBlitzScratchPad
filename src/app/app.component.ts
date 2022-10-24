import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ExampleDialogComponent } from './example-dialog/example-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloStackBlitz';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      data: { }
    });


  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
  });
}
}
