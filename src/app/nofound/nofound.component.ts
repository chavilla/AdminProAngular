import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nofound',
  templateUrl: './nofound.component.html',
  styleUrls: [ './nofound.component.css' ],
})
export class NofoundComponent implements OnInit {

  year: number = new Date().getFullYear();

  ngOnInit(): void {
  }

}
