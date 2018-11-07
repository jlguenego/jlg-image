import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JlgImageService {

  loadImage(url) {
    return new Promise((resolve, reject) => {
      console.log('start to load', url);
      const img = new Image();
      img.onload = async () => {
        console.log('loaded', url);
        resolve();
      };
      img.onerror = () => {
        console.log('error', url);
        reject();
      };
      img.src = url;
    });
  }
}



