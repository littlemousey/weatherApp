import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent implements OnInit {

    @Input('lat') lat : number;
    @Input('lng') lng : number;
    @Input('name') name : string;

  constructor() { }

  ngOnInit() {
  }

}
