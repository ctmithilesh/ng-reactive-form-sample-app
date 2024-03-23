import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent implements OnInit {

  isSubmitted: boolean = false;
  formNotValid: boolean = false;

  firstNameError: string = "First Name is required"
  lastNameError: string = "Last Name is required"
  emailError: string = "Email is required"
  contactError: string = "Contact is required"

  constructor(private fb: FormBuilder) {

  }

  registerForm: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
  });

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      contact: ['', Validators.required]
    })

  }

  onSubmit() {

    console.log(
      this.registerForm.value,
      this.registerForm.invalid
    )

    if (this.registerForm.invalid) {
      this.formNotValid = true
    }


  }

}
