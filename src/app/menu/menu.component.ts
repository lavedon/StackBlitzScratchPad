import { OnInit, Component } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit { 

  items = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Item[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  deleteItem(i: Item) {
    // delete the item from the array
    console.log('delete item ${i}');
    this.items = this.items.filter(item => item !== i);
  }
}