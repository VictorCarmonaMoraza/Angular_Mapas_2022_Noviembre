import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import mapboxgl from 'mapbox-gl';
import { Map, Popup, Marker } from 'mapbox-gl';
import { PlacesService } from '../../services/places.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;


  constructor(
    private placesService: PlacesService,
    private mapService:MapService) { }

  //Despues que mi vista ya esta renderizada
  ngAfterViewInit(): void {

    //Sino tenemos location
    if (!this.placesService.useLoaction) throw Error('No hay placesService.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesService.useLoaction, // starting position [lng, lat]
      zoom: 14, // starting zoom
      //projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
    });


    const popup = new Popup()
      .setHTML(`
        <h6>Aqui estoy</h6>
        <span>Estoy en este lugar del mundo</span>
    `);

    //Creamos un nuevo marcador
    new Marker({color:'red'})
    .setLngLat(this.placesService.useLoaction)
    .setPopup(popup)
    .addTo(map)

    this.mapService.setMap(map);
  }

  // ngOnInit(): void {
  //   console.log(this.placesService.useLoaction);
  // }

}
