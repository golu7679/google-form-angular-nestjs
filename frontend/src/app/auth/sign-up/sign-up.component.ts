import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ALL_TAIGA_UI_MODULES } from 'src/app/all-taiga.modules';
import { validationConfig } from 'src/app/helper/custom-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ALL_TAIGA_UI_MODULES],
  providers: [validationConfig],
})
export class SignUpComponent {
  singUp: FormGroup;
  formSubmitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.singUp = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  submitSignUpForm() {
    this.singUp.markAllAsTouched();
    if (this.singUp.invalid) return;
    this.formSubmitted = true;
    this.singUp.disable();
    const formData = new FormData();
    const { first_name, last_name, email, password } = this.singUp.getRawValue();
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('password', password);
  }
}
