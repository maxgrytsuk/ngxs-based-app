import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/lang/en').subscribe(items => {
      console.table(items);
    });
    this.http.get('https://commons.wikimedia.org/w/api.php?action=query&list=allimages&ailimit=50&format=json&origin=*').subscribe(items => {
      console.table(items);
    });
  }

}
