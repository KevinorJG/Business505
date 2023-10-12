import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private output?: string | ArrayBuffer | null = null;
  public file?: File;
  constructor() { }
  
  public processImage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      this.file = inputElement.files[0];
      if(!this.isValidImageType(this.file.type)){
        return;
      }
      if (this.file.size > 5 * 1024 * 1024) {
        console.error('El tamaño del archivo es demasiado grande. El límite es 5 MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => { 
        this.output = e.target?.result;
      };
      reader.readAsDataURL(inputElement.files[0]);
    }
  }

  public getProcessedImage(){
    return this.output;
  }

  private isValidImageType(type: string): boolean {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; // Agrega más tipos si es necesario
    return allowedTypes.includes(type);
  }

  public dismiss(){
    this.output = null;
  }
}
