import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-business',
  templateUrl: './card-business.component.html',
  styleUrls: ['./card-business.component.css']
})
export class CardBusinessComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
}
