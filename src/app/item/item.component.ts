import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Item } from '../item';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';

import { ExampleDialogComponent } from '../example-dialog/example-dialog.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {
    this.item = {
      id: 2,
      name: 'Ned the Narwhal'
    }

  }

  ngOnInit() {}
  @Output() delete: EventEmitter<Item> = new EventEmitter<Item>();

  @Input() item?: Item;
  @Input() index?: number;

  

  openDialog(): void {
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      data: { }
    });



  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog result: ${result}');
    if (result == 'delete') {
      console.log('the user would like to delete the item');
      this.delete.emit(this.item);
    }
  });
}

  faTrash = faTrash;
}