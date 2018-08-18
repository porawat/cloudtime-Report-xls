import { Component, OnInit} from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { BootstrapModalModule, DialogService } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from '../confirm/confirm.component';
import { ShowresultComponent } from '../showresult/showresult.component';
@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {
  private ChoiceList;
  private countX;
  private result;
  animal: string;
  name: string;
  score: any;
  constructor(
    private itemsServic: ItemsService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.itemsServic.getexaminationService().subscribe((Choice) => {
      this.ChoiceList = Choice;
      console.log(Choice);
    });
  }
  newValue(o, t, a) {
    console.log(o, t, a);
  }

  ark(x) {
    console.log(x);
    this.result = x.filter(function (xs) {
      return xs.Answer == xs.ark;
    });
      this.score = this.result.length;
    this.showConfirm(this.result, this.score);
  }
  showConfirm(data, score) {
    const disposable = this.dialogService.addDialog(ShowresultComponent, {
      title: 'แสดงผล',
      message: 'คะแนนรวม',
      dataex: data,
      vale : score
    })
      .subscribe((isConfirmed) => {

        if (isConfirmed) {
          console.log(isConfirmed);
          //this.deptCode = isConfirmed.datarow.DeptCode;
         // this.deptName = isConfirmed.datarow.DeptName;
        }
      });
    // setTimeout(() => {
    //   disposable.unsubscribe();
    // }, 10000);
  }
}
