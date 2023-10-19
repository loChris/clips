import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50),
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(150),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm),
    Validators.minLength(8),
    Validators.maxLength(62),
  ]);
  passwordConfirmation = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(62),
  ]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(14),
    Validators.maxLength(14),
  ]);

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    passwordConfirmation: this.passwordConfirmation,
    phoneNumber: this.phoneNumber,
  });

  showAlert = false;
  alertMessage = 'Please wait. Your account is being created.';
  alertColor = 'blue';

  registerUser() {
    this.showAlert = true;
    this.alertMessage = 'Please wait. Your account is being created.';
    this.alertColor = 'blue';
  }
}
