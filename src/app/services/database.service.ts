import { Injectable, inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BlogInfo, DataInfo } from '../models/DataInfo';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private data: AngularFireDatabase, private storage: AngularFireStorage) {

  }


  public getAllData(): Observable<DataInfo[]> {
    return this.data.list<DataInfo>('/dataBusiness').snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const id = a.payload.key;
            const data = a.payload.val();
            data.id = id;
            // Asigna el ID al objeto DataInfo
            return data;
          });
        })
      );
  }

  public getInfoBlog(){
    return this.data.list<BlogInfo>('/blog').valueChanges();
  }




}
