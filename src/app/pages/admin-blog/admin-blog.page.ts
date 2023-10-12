import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.page.html',
  styleUrls: ['./admin-blog.page.scss'],
})
export class AdminBlogPage implements OnInit {
  public blogForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private fbs: FirebaseService) {
    
    this.blogForm = formBuilder.group({
      email: ['',Validators.required],
      address: ['',Validators.required],
      phone: ['',Validators.required]
    });
  }


  ngOnInit() {
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

  public UpdateInfo(){
    const blog = {
      address: '',
      phone: '',

    }
    
    this._processMessage();
    this.fbs.UpdateInfoBlog(blog)
    .then(() => {
      Swal.close();
      Swal.fire({
        icon: 'success',
        title: 'Informacion subida correctamente',
        heightAuto: false,
        didClose: () => {
          
        },
      });
    })
    .catch((error) => {
      console.log(error);
      
    })
  }

}
