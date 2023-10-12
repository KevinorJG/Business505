import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataInfo } from 'src/app/models/DataInfo';

@Component({
  selector: 'app-view-business',
  templateUrl: './view-business.component.html',
  styleUrls: ['./view-business.component.css']
})
export class ViewBusinessComponent {

  public infoBusiness: DataInfo;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((queryParams) => {
      this.infoBusiness = JSON.parse(queryParams['data']) as DataInfo
    });
    this.scrollToTop();
  }

  public onClick(id: string, network: string) {

    switch (network.toLowerCase()) {
      case 'whatsapp':

        const date = new Date();
        const currentHour = date.getHours();
        let timeMessage = '';

        if (currentHour >= 6 && currentHour < 12) {
          timeMessage = "buenos dias"
        } else if (currentHour >= 12 && currentHour < 18) {
          timeMessage = "buenas tardes";
        } else {
          timeMessage = "buenas noches";
        }

        let message = `¡Hola!, ¡${timeMessage}!, sus productos me llaman mucho la atencion.`
        const whatsappURL = `https://api.whatsapp.com/send?phone=+505${id}&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');

        break;

      case 'instagram':
        const instagramUrl = `https://www.instagram.com/${id}/`;
        window.open(instagramUrl, '_blank');
        break;

      default:
        break;
    }
  }
  public scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  contact(){
    this.infoBusiness.social.map((item) => {
      if(item.name.toLowerCase() === 'whatsapp'){
        const whatsappURL = `https://api.whatsapp.com/send?phone=+505${item.access}&text=${encodeURIComponent('Estoy interesado en ciertos productos.')}`;
        window.open(whatsappURL, '_blank');
        return;
      }   
    })
  }

}
