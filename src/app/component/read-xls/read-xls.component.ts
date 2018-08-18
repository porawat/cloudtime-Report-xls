import { Component, OnInit, ViewContainerRef } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { BootstrapModalModule, DialogService } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from '../confirm/confirm.component';
import { AppComponent } from '../../app.component';
import { ItemsService } from '../../services/items.service';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
type AOA = Array<Array<any>>;
function s2ab(s: string): ArrayBuffer {
  const buf: ArrayBuffer = new ArrayBuffer(s.length);
  const view: Uint8Array = new Uint8Array(buf);
  for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}
@Component({
  selector: 'app-read-xls',
  templateUrl: './read-xls.component.html',
  styleUrls: ['./read-xls.component.css'],
})
export class ReadXlsComponent implements OnInit {
  data: any;
  AOA: any;
  deptCode: any = '';
  deptName: any = '';
  savedata: any;
  form: any = {};
  exform: any = {};
  datarow: any;
  getData;
  showBXLS;
  XLSData;

  constructor(
    private dialogService: DialogService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef,
    private itemsService: ItemsService) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {
  }
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    const ftype = target.files[0].type;
    console.log(ftype);
    if (ftype !== 'application/vnd.ms-excel' && ftype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      // | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
      alert('excel เท่านั่น');
      return false;
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      const headerNames = XLSX.utils.sheet_to_json(ws, { header: 1 })[0];
      // console.log(headerNames);
      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, headerNames));
      this.savedata = <AOA>XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log(this.savedata);
      // this.showConfirm(this.data);
      //  this.savedatabase(this.data, this.form);
    };
    reader.readAsBinaryString(target.files[0]);
  }
  savefile(database) {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(database);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    const wbout: string = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    saveAs(new Blob([s2ab(wbout)]), 'SheetJS.xlsx');
  }

  datatodb() {
    if (this.form.myDate === undefined) {
      this.toastr.error('เลือกวันที่ก่อนครับ', 'Oops!');
      return false;
    } else {
      this.savedatabase(this.data, this.form);
    }

  }
  exportxls() {
    // new Angular2Csv(this.data2db, 'My Report');
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      useBom: true,
      // headers: ['วันที่', 'title', 'รหัสหน่วยงาน','ชื่อหน่วยงาน','รวม','กะเช้า(A)','กะเช้า(เข้า)','กะเช้า(ครบ)','กะเช้า(เกิน)','กะเช้า(ขาด)','กะบ่าย','กะบ่าย(เข้า)','กะบ่าย(ครบ)','กะบ่าย(เกิน)','กะบ่าย(ขาด)']
    };
    const startDate = this.exform.startDate;
    const stopDate = this.exform.stopDate;
    const data = {
      startDate: startDate,
      stopDate: stopDate
    };
    this.itemsService.getxlsdata(data).subscribe(res => {
      console.log(res.datarow);
      this.XLSData = res.datarow;
      // new Angular2Csv(this.XLSData,'My Report',options);
      new Angular5Csv(res.datarow, 'My Report', options);
    });
  }
  savedatabase(data, date) {
    //  console.log(date.myDate);
    const mydata: any = {
      dataxls: data,
      datelog: date.myDate
    };
    this.itemsService.savexlsdata(mydata).subscribe(
      (res) => {
        // this.newitem = res;
        //  console.log(res);
        if (res.results = 'success') {
          this.toastr.success('บันทึกสำเร็จ', 'success');
          this.datarow = res.data;
          this.data = undefined;
        } else {
          this.toastr.error('เกิดข้อผิดพลาด', 'Oops!');
        }

      },
      (error) => console.log(error),
      () => console.log('success')
    );
  }
  public onDate(event): void {
    //  console.log(this.exform.startDate);
    this.showBXLS = (this.exform.startDate !== undefined && this.exform.stopDate !== undefined);
  }
  showConfirm(data) {
    const disposable = this.dialogService.addDialog(ConfirmComponent, {
      title: 'ค้นหา',
      message: 'Confirm message',
      dataex: data
    })
      .subscribe((isConfirmed) => {

        if (isConfirmed) {
          console.log(isConfirmed.datarow);
          this.deptCode = isConfirmed.datarow.DeptCode;
          this.deptName = isConfirmed.datarow.DeptName;
        }
      });
    // setTimeout(() => {
    //   disposable.unsubscribe();
    // }, 10000);
  }

}
