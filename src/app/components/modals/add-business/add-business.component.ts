import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController} from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ImageService } from 'src/app/services/image.service';
import { Business } from 'src/models/Business';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.scss'],
})
export class AddBusinessComponent implements OnInit {

  public function?: ImageService;
  public businessForm: FormGroup;
  public socials = [
    { red: 'Whatsapp', IsEnabled: false, link: '',id: 'whatsapp',label: 'Número'},
    { red: 'Facebook', IsEnabled: false, link: '',id: 'facebook',label: 'Pérfil'},
    { red: 'Instagram', IsEnabled: false, link: '',id: 'instagram',label: 'Pérfil'},
  ]
  constructor(
    private imageService: ImageService,
    private fbs: FirebaseService,
    private formBuilder: FormBuilder,
    public modalCtrl: ModalController) {

    this.function = imageService;
    this.businessForm = formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      image:[null,Validators.required],
      whatsapp:[null,Validators.minLength(5)],
      facebook:[null,Validators.minLength(5)],
      instagram:[null,Validators.minLength(5)]
    });

    this.socials.map((x) => {
      this.businessForm.get(x.id).disable();
    })
    
  }

  ngOnInit() { }

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

  public onClick() {
    this._processMessage();
    this.fbs.uploadImage(this.imageService?.file).subscribe({
      next: (url) => {
        const business: Business = {
          address: this.businessForm.get('address')?.value,
          name: this.businessForm.get('name')?.value,
          image: url,
          description: this.businessForm.get('description')?.value,
          social:[],
          products:[]
        };
       this.socials.map((item) => {
        if(item.IsEnabled === true){
          business.social?.push({
            access: this.businessForm.get(item.id).value,
            isEnabled: item.IsEnabled,
            name: item.red
          });
        }
       });

        this.fbs.AddBusiness(business)
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

  public close(){
    this.function?.dismiss();
    this.modalCtrl.dismiss();
  }

  checkboxChanged(item: any) {
    const matchingMethod = this.socials.find((x) => x.id.match(item.id));
    if (matchingMethod) {
      matchingMethod.IsEnabled = !matchingMethod.IsEnabled;
    }
  }
}
