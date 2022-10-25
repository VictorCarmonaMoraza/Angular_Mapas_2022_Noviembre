import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  //Propiedades
  private map: Map | undefined;

  //Getter
  get isMapReady() {
    return !!this.map;
  }

  //Establecer
  setMap(map: Map) {
    this.map = map;
  }

  flyTo(coords: LngLatLike) {
    //Sino esta listo
    if (!this.isMapReady) throw Error('El mapa no esta inicializado');

    this.map?.flyTo({
      zoom:14,
      center:coords
    });
  }
}
