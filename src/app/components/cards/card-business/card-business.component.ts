import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-business',
  templateUrl: './card-business.component.html',
  styleUrls: ['./card-business.component.scss'],
})
export class CardBusinessComponent  implements OnInit {
  @Input() ImgSrc: string = '';
  @Input() name: string = '';

  constructor() { }

  ngOnInit() {}

}
