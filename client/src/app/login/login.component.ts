import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message;
  messageClass;
  processing = false;

  constructor(private formBuilder: FormBuilder) { this.createForm(); }
  createForm(){
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  disableForm(){
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }
  enableForm(){
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }

  onLoginSubmit(){
    this.processing = true;
    this.disableForm();
    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }
  }
  ngOnInit() {
  }

}
