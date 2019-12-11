import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-car',
  templateUrl: './my-car.page.html',
  styleUrls: ['./my-car.page.scss'],
})
export class MyCarPage implements OnInit {
  icon: string = 'home';
  url: string = '/tabs/tab1';

  car: any = {
    number: 'AB*CD*12',
    moddel: 'Tercel',
    manufacter: 'Toyota'
  }
  constructor() { }

  ngOnInit() {
  }

}
