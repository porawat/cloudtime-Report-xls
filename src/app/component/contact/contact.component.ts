import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private itemsList; // :Items[];
  constructor(private itemsServic: ItemsService) { }

  ngOnInit() {

    this.itemsServic.getItemsService().subscribe((ser) => {
      this.itemsList = ser;
      console.log(ser);
    });
  }

}
/*
interface  Items {
  MemberID: string;
  Username: string;
  Name: string;
  Tel: string;
  Email: string; }
  */