import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-drop-list',
  templateUrl: './drop-list.component.html',
  styleUrls: ['./drop-list.component.scss']
})
export class DropListComponent implements OnInit {
  ngOnInit() {
  }

    constacts: SelectItem[];

    selectedContacts: string[] = [];

    items: SelectItem[];

    item: string;

    constructor() {
        this.constacts = [
          {label: '1', value: {name: 'header', group: 'No group', header: "header"}},
          {label: '2', value: {name: 'David Bowie 2', group: 'TMA'}},
          {label: '3', value: {name: 'Jack Jack', group: 'TMA'}},
          {label: '4', value: {name: 'Jack Jack 2', group: 'Ribbon'}},
          {label: '5', value: {name: 'jeff Beck', group: 'No Group'}},
          {label: '6', value: {name: 'jeff Beck 2', group: 'No Group'}},
          {label: '7', value: {name: 'Join Leenon', group: 'TMA'}}
        ];
        
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({label: 'Item ' + i, value: 'Item ' + i});
        }
    }

    sizeFront: number  = 0; 
    checkClick(){
      // console.log(this.selectedContacts)
      // var lengContacts = this.constacts.length - 1;
      // // if(this.selectedContacts.length = lengContacts){
      // //   this.selectedContacts =  this.selectedContacts.filter(item => item !== this.constacts[0].label)
      // // }
      // var checkSelectAll = false;

      // // selectedContacts
      // this.selectedContacts.forEach(contact => {
      //   if(contact.header){
      //     checkSelectAll = true;
      //     return;
      //   }
      // });
      // console.log(checkSelectAll)

      // if(checkSelectAll){
      //   this.selectedContacts = []
      //   this.constacts.forEach(contact => {
      //     this.selectedContacts.push(contact.value)
      //     // this.selectedContacts = contact.value;
      //   });
      //   // this.selectedContacts = this.constacts.values;
      // }

      var sizeBack = this.selectedContacts.length 
      console.log(this.sizeFront, sizeBack)
      if(sizeBack <  this.sizeFront){
        if(sizeBack == this.constacts.length - 1){
          console.log("check")
          var unSelectHeader = false
          console.log(this.selectedContacts)
          // this.selectedContacts.forEach(contact => {
          //   console.log("Check:", contact.header == "header", + ', ' + contact.header)
          //   if(contact.header){
          //     unSelectHeader = true;
          //     return 0;
          //   }
          // });
          for (let i = 0; i < this.selectedContacts.length; i++) {
            console.log("Check:", this.selectedContacts[i].header == "header", + ', ' + this.selectedContacts[i].header)
            if(this.selectedContacts[i].header){ 
              unSelectHeader = true;
              break;
            }
          }
          if(!unSelectHeader){
            this.selectedContacts = []
          }else{
            this.selectedContacts = this.selectedContacts.filter(item => item.header == undefined)
          }
        }
      }else{
        if(sizeBack > this.sizeFront){
          if(this.selectedContacts[sizeBack - 1].header == "header"){
            this.selectedContacts = []
            for (let i = 0; i < this.constacts.length; i++) {
              this.selectedContacts.push(this.constacts[i].value)
            }
          }else{
            if(sizeBack == this.constacts.length - 1){
              this.selectedContacts = []
              for (let i = 0; i < this.constacts.length; i++) {
                this.selectedContacts.push(this.constacts[i].value)
              }
            }
          }
        }
      }
      this.sizeFront = this.selectedContacts.length;
    }
}
