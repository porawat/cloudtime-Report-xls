import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private name: string;
  private age: number;
  private max: any;
  private min: any;
  private Total: any;
  private email: string;
  private address: {
    street: string,
    city: string,
    provice: string,
  };
  private todoList: Todo[];
  private skills: string[];
  private editshow: boolean = true;
  private page: any;//= 11;
  private Perpage: any ;//= 10;//= 11;
  constructor(private todoServic: TodoService) {


  }

  ngOnInit() {
    this.name = 'porawat chinpala';
    this.age = 35;
    this.email = 'ico2upo@gmail.com ';
    this.address = {
      street: '93/167',
      city: 'สายไหม',
      provice: 'saimai'
    };
    this.skills = ['กินข้าวเก่งมาก', 'ชอบดูหนัง', 'ชักว่าง'];
    this.editshow = false;
    this.page = 1;
    this.Perpage = 15;
    this.min = 0;
    this.max = 15;
    //    call service
    this.todoServic.getTodoList().subscribe((serspose) => {
      this.todoList = serspose;
      console.log(this.todoList);
      this.Total = this.todoList.length;
    });
  }
  Backpage(p) {
    p = p - 1;
    this.page = p;
    this.min = (p * this.Perpage) - this.Perpage;//11;
    this.max = (p * this.Perpage);
  //  console.log(p, this.min, this.max);
  }
  Nextpage(p) {
    p = p + 1;
    // p=2
    this.page = p;
    this.min = (p * this.Perpage) - this.Perpage;//11;
    this.max = (p * this.Perpage);
    // console.log(p, this.min, this.max);
  }
  addskill(skill) {
    this.skills.unshift(skill);
    return false;

  }
  del(skill) {
    this.skills.splice(skill, 1);
    return false;
  }
  ishow() {
    this.editshow = !this.editshow;
    //return false;
  }

}


interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}