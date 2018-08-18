import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css'],
  providers: [ItemsService]
})
export class AdditemComponent implements OnInit {
  myforms: FormGroup;
  newitem: any;
  private itemsList = [];
  private itemsLists = {};
  constructor(
    private itemsService: ItemsService,
    private itemsServic: ItemsService) {
    this.myforms = new FormGroup({
      ID: new FormControl(''),
      Name: new FormControl(''),
      Price: new FormControl('')
    });
  }
  ngOnInit() {

    // this.itemsServic.getItemsService().subscribe((ser) => {
    //   this.itemsList = ser;
    //   console.log(ser);
    // });
  }
  allsave() {
    console.log(this.itemsList);

    this.itemsService.saveAllDataItems(this.itemsList).subscribe(
      (data) => {
        this.newitem = data;
        console.log(data);
        if (data.results = 'success') {
          this.myforms.reset();
          this.itemsList = [];
        }

      },
      (error) => console.log(error),
      () => console.log('success')
    );
  }
  tempsave() {
    // console.log(this.myforms.getRawValue());
    this.itemsLists = this.myforms.getRawValue();
    console.log(this.itemsLists);
    this.itemsList.push(this.itemsLists);
    this.myforms.reset();
    // this.itemsList = this.itemsList.unshift(this.myforms.getRawValue());
  }
  postitems() {
    this.itemsService.postDataItems('12356').subscribe(
      (data) => console.log(data), (error) => console.log(error), () => console.log('success')
    );
  }
  additems() {
    console.log(this.myforms.getRawValue());

    this.itemsService.postDataItems(this.myforms.getRawValue()).subscribe(
      (data) => {
        this.newitem = data;
        //  console.log(data.results);
        if (data.results = 'success') {
          this.myforms.reset();
        }

      },
      (error) => console.log(error),
      () => console.log('success')
    );
  }
}
