import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
export interface ConfirmModel {
  title: string;
  message: string;
  dataex: any;
  vale: any;
}
@Component({
  selector: 'app-showresult',
  templateUrl: './showresult.component.html',
  styleUrls: ['./showresult.component.css']
})
export class ShowresultComponent  extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  result: any;
  dataex: any;
  resule: any;
  vale: any;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    this.result = { check: true, datarow: this.dataex };
    // this.anydata = this.model2;
    // console.log(this.result);
    //  console.log(this.model2);
    this.close();
  }
}

