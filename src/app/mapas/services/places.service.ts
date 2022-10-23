import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLoaction: [number, number] | undefined;


  //Getter
  get isUserLocationReady(): boolean {
    //Devolvera cuando tenga valor
    return !!this.useLoaction;
  }

  constructor() {
    this.getUserLocation();
   }

  getUserLocation(): Promise<[number, number]> {

    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        //Callback
        ({ coords }) => {
          this.useLoaction = [coords.longitude, coords.latitude];
          resolve(this.useLoaction)
        },
        (err) => {
          console.log('No se pudo obtener la geolocalizacion');
          console.log(err);
          reject();
        }

      );

    });
  }
}
