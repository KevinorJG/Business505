import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize, map } from 'rxjs';
import { Business } from 'src/models/Business';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private database: AngularFireDatabase, private storage: AngularFireStorage) { }


  public AddBusiness(business: Business): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.database.list('/dataBusiness/').push(business)
        .then(() => {
          console.log('Negocio subido correctamente');
          resolve(); // Resuelve la promesa si se sube correctamente
        })
        .catch((error) => {
          console.error('Error al subir el negocio:', error);
          reject(error); // Rechaza la promesa en caso de error
        });
    });
  }
  
  public AddProduct(business: Business):Promise<void>{
    return new Promise<void>((resolve, reject) => {
      const businessRef = this.database.object(`/dataBusiness/${business.id}`);
      const updateObj = {
        products: business.products
      };

      businessRef.update(updateObj)
      .then(() => {
        console.log('Campo "products" agregado con éxito al registro existente');
        resolve(); // Resuelve la promesa si se actualiza correctamente
      })
      .catch((error) => {
        console.error('Error al agregar el campo "products" al registro:', error);
        reject(error); // Rechaza la promesa en caso de error
      });
    })
  }

  public getDataDatabase(): Observable<Business[]> {  
    return this.database.list<Business>('/dataBusiness/').snapshotChanges()
    .pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.val();
          const id = a.payload.key
          data.id = id;
          return data;
        });
      })
    );
  }

  public getInfoById(id: string):Observable<Business> {
    return this.database.object<Business>(`/${id}`).valueChanges();
  }


  public uploadImage(file?: File){
    const filePath = `images/${file?.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);

    return new Observable<string>((observer) => {
      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            observer.next(url),
            observer.complete();
          })
        })
      ).subscribe();
    });  
  }

  public UpdateInfoBlog(blog: any) {
    return new Promise<void>((resolve, reject) => {
      this.database.list('/blog').push(blog)
        .then(() => {
          console.log('Subido correctamente');
          resolve(); // Resuelve la promesa si se sube correctamente
        })
        .catch((error) => {
          console.error('Error al subir', error);
          reject(error); // Rechaza la promesa en caso de error
        });
    });
  }

}
