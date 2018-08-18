import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ItemsService {

  constructor(private http: Http) { }
  getItemsService() {
    return this.http.get('http://119.160.221.164/store-request/ang/services/Items.php').map((res) => res.json());
  }

  postDataItems(items) {
    return this.http.post('http://119.160.221.164/store-request/ang/services/additems.php', items).map((res) => res.json());

  }

  saveAllDataItems(items) {
    return this.http.post('http://119.160.221.164/store-request/ang/services/saveallitems.php', items).map((res) => res.json());

  }
  getexaminationService() {
    return this.http.get('http://119.160.221.164/store-request/ang/services/examination.php').map((res) => res.json());
  }

  savexlsdata(items) {
    return this.http.post('http://119.160.221.164/store-request/ang/services/ct_manpower.php', items).map((res) => res.json());

  }
  getxlsdata(items) {
    return this.http.post('http://119.160.221.164/store-request/ang/services/getxlsdata.php', items).map((res) => res.json());
  }
}
