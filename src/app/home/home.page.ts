import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private firebaseService: FirebaseService) {
    firebaseService.getDataDatabase().subscribe(data => {
      console.log(data);
      
    });
  }

}
