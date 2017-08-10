import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  tempLevel: Number = 1;
  lvl: Number = 1;

  constructor() { }

  ngOnInit() {
  	// this.initalLevel = 1;/
  }

  calculate(){
  	this.lvl = this.tempLevel;
  }
}
