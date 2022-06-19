import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './ngSwitch.component.html',
  styleUrls: ['./ngSwitch.component.css']
})
export class NgSwitchComponent implements OnInit {
  num: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
