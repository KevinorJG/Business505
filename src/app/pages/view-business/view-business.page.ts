import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddBusinessComponent } from 'src/app/components/modals/add-business/add-business.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Business } from 'src/models/Business';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-business',
  templateUrl: './view-business.page.html',
  styleUrls: ['./view-business.page.scss'],
})
export class ViewBusinessPage implements OnInit {
  public results:Business[] = [];
  public data:Business[] = [];
  constructor(
    private modalController: ModalController, 
    private fbs: FirebaseService,
    private router: Router) {

      this._processMessage(); 
      fbs.getDataDatabase().subscribe({
        next: (infoDb) => {
          console.log(infoDb);
          if(infoDb.length == 0){
            Swal.close();
          }
          if(infoDb.length > 0){
            Swal.close();
            this.results = infoDb;
          }       
        }
      }); 
  }


  ngOnInit() {
  }

  private _processMessage(): void {
    Swal.fire({
      title: 'Cargando contenido',
      allowOutsideClick: false,
      heightAuto: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }
  public handleInput(event: any){
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.name.toLowerCase().indexOf(query) > -1);
  }
  public async addBusinnes(){
    const modal = await this.modalController.create({
      component: AddBusinessComponent
    });
    await modal.present();
  }
  
  public viewBusiness(data: Business){
    this.router.navigate(['business/',data.id],{queryParams:{data: JSON.stringify(data)}});
  }
}
