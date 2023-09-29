import { Component, OnInit, inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Business505';

  constructor(private database: AngularFireDatabase) {

  }
  hola() {


  }
  ngOnInit(): void {
    this.database.object('Commerce/').valueChanges().subscribe(data => {
      console.log('Registros de Commerce:', data);
    });
    const newData = {
      Address: {
        lat: "nueva_latitud",
        lon: "nueva_longitud"
      },
      Id: "nuevo_id",
      Name: "nuevo_nombre",
      Products: [
        {
          name: "dadad"
        },
        {
          name: "dasda"
        }
      ],
      Social: {
        Facebook: "nuevo_facebook",
        Instagram: "nuevo_instagram",
        Whatsapp: "nuevo_whatsapp"
      }
    };
    this.database.list('Commerce').push(newData)
      .then(() => {
        console.log('Datos escritos con éxito.');
      })
    this.database.object('Commerce').valueChanges().subscribe(data => {
      console.log('Registros de Commerce:', data);
    });
  }
}
