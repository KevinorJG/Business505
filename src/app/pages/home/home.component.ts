import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataInfo, Product } from 'src/app/models/DataInfo';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {
  public infoBusinesses: viewProduct[] = [];

  constructor(private database: DatabaseService, private route: Router) {
    database.getAllData().subscribe((data) => {
      this.infoBusinesses = data.flatMap((item) => {
        return item.products.map((product) => {
          return {
            idBusiness: item.id,
            name: product.name,
            image: product.image,
            infoDetail: item
          };
        });
      });
    })
  }

  ngAfterContentInit(): void {
    // Tu lógica después de la inicialización del contenido
  }

  ngOnInit(): void {
    // Tu lógica de inicialización
  }
  public onClick(item: viewProduct){
    console.log('éjecutado');
    

    this.route.navigate(['emprendimiento/',item.infoDetail.name],{queryParams:{data: JSON.stringify(item.infoDetail)}})
  }
}

export class viewProduct {
  idBusiness: string = '';
  name: string = '';
  image: string = '';
  infoDetail: DataInfo;
}
