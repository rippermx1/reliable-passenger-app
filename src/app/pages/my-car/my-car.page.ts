import { Component, OnInit } from '@angular/core';
import {Navbar} from '../../interfaces/navbar/Navbar';

@Component({
  selector: 'app-my-car',
  templateUrl: './my-car.page.html',
  styleUrls: ['./my-car.page.scss'],
})
export class MyCarPage implements OnInit {
  /**
   * Navbar object
   */
  navbar: Navbar = {
    title: 'Vehículos',
    icon: 'home',
    url: '/tabs/tab1'
  };
  /**
   * User's car
   */
  car: any = {
    number: 'AB*CD*12',
    moddel: 'Tercel',
    manufacter: 'Toyota'
  }
  constructor() { }

  ngOnInit() {
  }

}
