import { CommonModule, formatCurrency } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgOtpInputModule } from 'ng-otp-input';
import { ALL_TAIGA_UI_MODULES } from 'src/app/all-taiga.modules';
import { validationConfig } from 'src/app/helper/custom-validator';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ALL_TAIGA_UI_MODULES, NgOtpInputModule],
  providers: [validationConfig],
  standalone: true,
})
export class ForgetPasswordComponent {
  forgetPasswordForm: FormGroup;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder, private alertService: AlertService, private apiService: ApiService) {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  forgetPasswordFormSubmit() {
    this.forgetPasswordForm.markAllAsTouched();
    if (this.forgetPasswordForm.invalid) return;
    const formData = new FormData();
    formData.append('email', this.forgetPasswordForm.value.email);
    this.apiService.forgetEmail(formData).subscribe({
      next: (result: any) => {
        this.alertService.success(result.message);
      },
      error: (error: any) => {
        this.alertService.error(error.message);
      }
    })
  }

}
