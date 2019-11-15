import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private uri: string;
  private apiUri: string = environment.apiUri;
  private passengersList = [
    {
      image: 'https://picsum.photos/id/374/64/64',
      pickedUpAt: '21:00 PM'
    },
    {
      image: 'https://picsum.photos/id/374/64/64',
      pickedUpAt: '9:00 AM'
    },
  ];
  constructor(private http: HttpClient) { }
  passengers() {
    /* this.uri = `https://jsonplaceholder.typicode.com/todos/1`;
    return this.http.get(this.uri); */
    return this.passengersList;
  }
}
