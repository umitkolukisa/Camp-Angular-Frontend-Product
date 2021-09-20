import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getAddProductClass() {
    return 'list-group-item active';
  }

  getLoginClass() {
    return 'list-group-item active';
  }
}
