import {Component, OnInit} from '@angular/core';
import { PassengerService } from '../../services/passenger.service';
import { Navbar } from '../../interfaces/navbar/Navbar';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  /**
   * Navbar object
   */
  navbar: Navbar = {
    title: 'Pasajeros',
    icon: 'home',
    url: '/tabs/tab1'
  };
  passengersList: any;
  constructor(private passengerService: PassengerService) {}
  ngOnInit(): void {
    this.passengersList = this.passengerService.passengers();
    console.log(this.passengersList);
  }
}
