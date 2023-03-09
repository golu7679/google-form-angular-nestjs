import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(formData: FormData) {

  }

  signup(formData: FormData) {

  }

  forgetEmail(formData: FormData) {

  }

  verifyForgetEmailOtp(formData: FormData) {

  }

  resetPassword(formData: FormData) {

  }

  resendOtp(formData: FormData) {

  }

}
