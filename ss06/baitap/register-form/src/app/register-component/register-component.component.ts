import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserDao} from "../Dao/UserDao";

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  users:FormGroup;
  constructor() { }

  ngOnInit(): void {
this.users=new FormGroup({
email:new FormControl('',[Validators.required,Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]),
pass:new FormGroup({
  password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  confirmPass:new FormControl('',[Validators.required,Validators.minLength(6)]),
},this.comparePass),
  country:new FormControl("",[Validators.required]),
  gender:new FormControl('',[Validators.required]),
  phone:new FormControl('',[Validators.required,Validators.pattern("^\\+84\\d{9,10}$")]),
})
  }
  comparePass(c:AbstractControl){
    const v = c.value;
    return (v.password === v.confirmPass) ?
      null : {
        passwordnotmatch: true
      } ;
  }

  createUser() {
    UserDao.user.push(this.users.value)
    console.log(this.users.value);

  }
}
