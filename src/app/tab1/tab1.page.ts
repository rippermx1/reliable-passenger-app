import {Component, OnInit} from '@angular/core';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  passengersList: any;
  constructor(private passengerService: PassengerService) {}
  ngOnInit(): void {
    /*this.passengerService.passengers().subscribe(
        value => {
          console.log(value);
        },
        error1 => {
          console.error(error1);
        },
        () => {
          console.log('passengerService.passengers() => Complete');
        }
    );*/
    this.passengersList = this.passengerService.passengers();
    console.log(this.passengersList);
  }
}
