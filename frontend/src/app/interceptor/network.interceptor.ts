import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor() { }

  private get getAuthorizationHeader() {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      Authorization: `Token ${token}`
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiRequest = request.clone({
      url: environment.apiUrl + request.url,
      headers: this.getAuthorizationHeader
    });
    return next.handle(apiRequest).pipe(
      catchError((error) => {
        if (error.status === 0 && error.error instanceof ProgressEvent) {
          error.error = {
            status: 0,
            message: "Network error, please check your internet connection."
          };
        }
        if (error.status === 401) {

        }
        return throwError(error);
      })
    );
  }
}
