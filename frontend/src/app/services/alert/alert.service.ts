import { Injectable } from '@angular/core';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertService: TuiAlertService) { }

  success(message: string, autoClose: boolean = true, label: string = '') {
    this.alertService
      .open(message, {
        label,
        status: TuiNotification.Success,
        autoClose,
      })
      .subscribe();
  }

  warning(message: string, autoClose: boolean = true, label: string = '') {
    this.alertService
      .open(message, {
        label,
        status: TuiNotification.Warning,
        autoClose,
      })
      .subscribe();
  }

  error(message: string, autoClose: boolean = true, label: string = '') {
    this.alertService
      .open(message, {
        label,
        status: TuiNotification.Error,
        autoClose,
      })
      .subscribe();
  }
  info(message: string, autoClose: boolean = true, label: string = '') {
    this.alertService
      .open(message, {
        label,
        status: TuiNotification.Info,
        autoClose,
      })
      .subscribe();
  }
}
