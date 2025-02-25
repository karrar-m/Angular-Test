import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Form } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent {
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fullName: [''],
      lastName: [''],
      email:    [''],
      password: [''],
      confirmpassword :[''],
    });
  }  


  ngSubmit(){
    console.log(this.form.value);
  }
}
