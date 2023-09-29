import { Injectable, inject } from '@angular/core';
import { Database } from '@angular/fire/database';
import { AngularFireDatabase} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: Database,private data: AngularFireDatabase){

  }

  
  getData() {
    
    return this.data.database.app;
  }
}
