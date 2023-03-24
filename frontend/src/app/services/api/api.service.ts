import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(formData: FormData) {
    return this.http.post('login', formData);
  }

  signup(formData: FormData) {
    return this.http.post('signup', formData);
  }

  forgetEmail(formData: FormData) {
    return this.http.post('forget_email', formData);
  }

  verifyForgetEmailOtp(formData: FormData) {
    return this.http.post('verify_forget_email_otp', formData);
  }

  resetPassword(formData: FormData) {
    return this.http.post('reset_password', formData);
  }

  resendForgetPasswordOtp(formData: FormData) {
    return this.http.post('resend_forget_password_otp', formData);
  }

}
