import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ALL_TAIGA_UI_MODULES } from 'src/app/all-taiga.modules';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ALL_TAIGA_UI_MODULES]
})
export class SignUpComponent {
  singUp: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.singUp = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }
}
