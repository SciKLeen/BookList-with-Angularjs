import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-drop-list',
  templateUrl: './drop-list.component.html',
  styleUrls: ['./drop-list.component.scss']
})
export class DropListComponent implements OnInit {
  constacts: SelectItem[];

  selectedContacts: string[] = [];

  items: SelectItem[];

  item: string;

  ngOnInit() {
  }

  constructor() {
    this.constacts = [
      { label: '1', value: { name: 'David Bowie', group: 'No group' } },
      { label: '2', value: { name: 'David Bowie 2', group: 'TMA' } },
      { label: '3', value: { name: 'Jack Jack', group: 'TMA' } },
      { label: '4', value: { name: 'Jack Jack 2', group: 'Ribbon' } },
      { label: '5', value: { name: 'jeff Beck', group: 'No Group' } },
      { label: '6', value: { name: 'jeff Beck 2', group: 'No Group' } },
      { label: '7', value: { name: 'Join Leenon', group: 'TMA' } }
    ];

    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
  }
}
