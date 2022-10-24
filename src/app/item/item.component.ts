import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {
  constructor() { 
    this.item = {
      id: 2,
      name: 'Ned the Narwhal'
    }
  }

  ngOnInit() {
  }

  @Input() item?: Item;
  faTrash = faTrash;
}