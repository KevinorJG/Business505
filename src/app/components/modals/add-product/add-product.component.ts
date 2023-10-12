import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ImageService } from 'src/app/services/image.service';
import { Business } from 'src/models/Business';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  public productForm: FormGroup;
  @Input() objectBusiness: Business;
  public function: ImageService;
  
  constructor(
    private formBuilder: FormBuilder,
    private fbs: FirebaseService,
    private imgService: ImageService,
    private modalCtrl: ModalController) {

    this.function = imgService;
    this.productForm = formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      image: [null, Validators.required]
    })

  }
  private _processMessage(): void {
    Swal.fire({
      title: 'Subiendo...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      heightAuto: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  ngOnInit() { }

  public close() {
    this.function.dismiss();
    this.modalCtrl.dismiss()
  }

  public onClick() {
    this._processMessage()
    this.fbs.uploadImage(this.imgService?.file).subscribe({
      next: (url) => {
        const newProduct = {
          image: url,
          name: this.productForm.get('name').value,
          price: this.productForm.get('price').value
        };

        if (!this.objectBusiness.products) {
          this.objectBusiness.products = [];
        }
        this.objectBusiness.products.push(newProduct);
        this.fbs.AddProduct(this.objectBusiness)
          .then(() => {
            Swal.close();
            Swal.fire({
              icon: 'success',
              title: 'Informacion subida correctamente',
              heightAuto: false,
              didClose: () => {
                this.function?.dismiss();
                this.modalCtrl.dismiss();
              },
            });
          })
          .catch((error) => {
            console.error('Error al agregar el negocio:', error);
          });
      }
    });
  }
}
