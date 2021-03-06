import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
export interface ConfirmModel {
  title: string;
  message: string;
  dataex: any;
}
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  result: any;
  dataex: any;
  model2: any;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    this.result = { check: true, datarow: this.model2 };
    // this.anydata = this.model2;
    // console.log(this.result);
    //  console.log(this.model2);
    this.close();
  }
}
