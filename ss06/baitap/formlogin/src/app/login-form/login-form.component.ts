import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user:User;
  formlogin:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formlogin=new FormGroup({
    email: new FormControl('', [Validators.required,Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}")]),
      password:new FormControl('', [Validators.required,Validators.minLength(6)])

    });
    this.formlogin.reset()
  }

  login() {
  this.user=this.formlogin.value;
  console.log(this.user);
  }
}
