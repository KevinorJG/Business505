import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss'],
})
export class CardDashboardComponent  implements OnInit {

  @Input() TitleCard: string = '';
  @Input() ImgSrc: string = '';
  constructor() { }

  ngOnInit() {}

}
