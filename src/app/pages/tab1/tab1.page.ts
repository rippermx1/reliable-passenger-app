import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  icon: string = 'logo-model-s';
  url: string = '/my-car';
  title: string = 'Viajes';
  constructor() {}
  ngOnInit(): void {
  }
}
