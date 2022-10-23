import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;


  constructor(private placesService: PlacesService) { }

  //Despues que mi vista ya esta renderizada
  ngAfterViewInit(): void {

    //Sino tenemos location
    if (!this.placesService.useLoaction) throw Error('No hay placesService.userLocation');

    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesService.useLoaction, // starting position [lng, lat]
      zoom: 14, // starting zoom
      //projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
    });
  }

  // ngOnInit(): void {
  //   console.log(this.placesService.useLoaction);
  // }

}
