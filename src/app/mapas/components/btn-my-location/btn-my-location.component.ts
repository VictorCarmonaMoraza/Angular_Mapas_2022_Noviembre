import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent implements OnInit {

  constructor(
    private mapService:MapService,
    private placesService:PlacesService
    ) { }

  ngOnInit(): void {
  }

  goToMyLocation(){
    console.log('ir a mi ubicacion');

    if(!this.placesService.isUserLocationReady) throw Error('No hay ubicacion de usuario');
    if(!this.mapService.isMapReady) throw Error('No hay mapa disponible');
    //Navegar a ese lugar que pusimos
    this.mapService.flyTo(this.placesService.useLoaction!)
  }

}
