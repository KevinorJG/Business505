import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-view-image',
  templateUrl: './modal-view-image.component.html',
  styleUrls: ['./modal-view-image.component.css']
})
export class ModalViewImageComponent {
  @Input() imgPreview: string = '';
  @Input() nameImg: string = '';
  @Input() idModal?: string = '';
}
