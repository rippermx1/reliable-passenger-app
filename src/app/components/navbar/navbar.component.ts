import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() icon: string;
  @Input() url: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
    console.log(this.url);
  }

}
