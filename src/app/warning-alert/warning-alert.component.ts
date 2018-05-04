import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p style="color: red">This is the Warning Alert Component</p>',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
