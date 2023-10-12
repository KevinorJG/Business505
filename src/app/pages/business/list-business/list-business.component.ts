import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataInfo } from 'src/app/models/DataInfo';
import { DatabaseService } from 'src/app/services/database.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-business',
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.css']
})
export class ListBusinessComponent {
  public listBusiness: DataInfo[] = [];

  constructor(private firebase: DatabaseService, private navRoute: Router) {

    
    if(this.listBusiness.length > 0){
      Swal.close();
    }else{
      this.processMessage();
      firebase.getAllData().subscribe({
        next: (infoDb) => {
          Swal.close();
          if (infoDb.length > 0) {
            this.listBusiness = infoDb;
          }
        }
      });
    }
    
    
  }

  public navBusinnes(input: DataInfo) {
    this.navRoute.navigate(
      ['emprendimiento/', input.name],
      {
        queryParams: {
          data: JSON.stringify(input)
        }
     }
    );
  }

  private processMessage(){
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


}
