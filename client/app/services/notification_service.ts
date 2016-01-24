import { Injectable } from 'angular2/core'

@Injectable()
export class NotificationService {
  alert(message: string):void {
    console.log(message);
    alert(message);
  }
}
