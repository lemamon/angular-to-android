import { Component, OnInit } from '@angular/core';
declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    document.addEventListener("deviceready", () => alert(device.platform), false);
  }
  title = 'testApp';
}
