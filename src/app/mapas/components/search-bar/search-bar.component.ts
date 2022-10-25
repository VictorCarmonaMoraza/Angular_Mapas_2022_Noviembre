import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  private debounceTimer?: NodeJS.Timeout;

  constructor() { }

  ngOnInit(): void {
  }

  onQueryChanged(query: string = '') {

    //Si tiene valor lo borramos
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    //Cuando dejemos de escribri medio segundo entonces se pasara el query
    this.debounceTimer = setTimeout(() => {
      console.log('Mandar este query', query)
    }, 500);

  }

}
