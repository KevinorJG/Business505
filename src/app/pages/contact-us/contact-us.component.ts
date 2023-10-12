import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {

    this.contactForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      message: ['', [Validators.required, Validators.minLength(20)]]
    })


  }
  public sendMessage() {
    if (this.contactForm.valid == true) {

      let message = `Negocio: ${this.contactForm.get('name').value}.\nMensaje: ${this.contactForm.get('message').value}`;
      
      const whatsappURL = `https://api.whatsapp.com/send?phone=+505${'88812027'}&text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');

    }
  }
}
