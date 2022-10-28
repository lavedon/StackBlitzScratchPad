import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Item } from '../item';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

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

  openDialog(event: Event): void {
    event?.stopPropagation();
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      data: { }
    });

  dialogRef.afterClosed().subscribe(result => {
    if (result == 'delete') {
      this.delete.emit(this.item);
    }
  });
}

  faTrash = faTrash;
}