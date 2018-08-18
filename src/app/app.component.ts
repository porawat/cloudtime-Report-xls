import { Component , enableProdMode} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';


enableProdMode();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'ng app';
}

