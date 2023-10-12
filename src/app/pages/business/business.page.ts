import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { AddProductComponent } from 'src/app/components/modals/add-product/add-product.component';
import { Business } from 'src/models/Business';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {
  public business: Business;
  constructor(
    private route: ActivatedRoute,
    private modalController: ModalController,
    public navCtrl: NavController) {
    this.route.queryParams.subscribe((queryParams) => {
      this.business = JSON.parse(queryParams['data']) as Business;  
    });
  }

  ngOnInit() {
    
  }
  public async addProduct(){
    const modal = this.modalController.create({
      component: AddProductComponent,
      componentProps:{
        objectBusiness: this.business
      }
    });
    (await modal).present();
  }

  public close(){
    this.modalController.dismiss();
  }
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
