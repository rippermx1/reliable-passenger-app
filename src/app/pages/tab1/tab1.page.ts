import {Component, OnInit} from '@angular/core';
import random from '@angular-devkit/schematics/src/rules/random';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  /**
   * Navbar values
   */
  icon: string = 'logo-model-s';
  url: string = '/my-car';
  title: string = 'Viajes';

  /**
   * Fingerprint images
   */
  fingerprints: any[] = [
    '../assets/images/finger1.jpeg',
    '../assets/images/finger2.png',
    '../assets/images/finger3.png'
  ];
  fingerprintSelected: string;

  /**
   * Set a random fingerprint image
   */
  randomFingerprint() {
    this.fingerprintSelected = this.fingerprints[Math.floor(Math.random() * 3)];
  }

  class: string;

  /**
   * Set visible class
   */
  setVisibleClass(state: boolean) {
    if (!state)
      this.class = "reject-passenger";
    else
      this.class = "accept-passenger";
  }

  constructor() {}
  ngOnInit(): void {
    this.randomFingerprint();
    this.setVisibleClass(true);
  }

  /**
   * Accept passenger
   */
  acceptPassenger() {

  }

  /**
   * Reject passenger
   */
  rejectPassenger() {
    this.setVisibleClass(false);
  }
}
