import { OnInit, Component,  } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit { 

  items = ITEMS;
  public selectedItem: Item | null;
  public pendingValue: string;

  constructor() { 
    this.pendingValue = "";
    this.selectedItem = null;
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Item[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  deleteItem(i: Item) {
    this.items = this.items.filter(item => item !== i);
  }
  
  cancel() : void {
    this.selectedItem = null;
  }

  edit( item: Item ) : void {
    this.pendingValue = item.name;
    this.selectedItem = item;
  }

  processChanges() : void {
    if ( this.pendingValue !== this.selectedItem!.name ) {
      this.selectedItem!.name = this.pendingValue;
    }
    this.selectedItem = null;
  }

}