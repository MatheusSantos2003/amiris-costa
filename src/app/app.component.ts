import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'amiris-costa';
  center: google.maps.LatLngLiteral = { lat: -22.9476511, lng: -43.1908195 };
  markerPosition: google.maps.LatLngLiteral = { lat: -22.9476511, lng: -43.1908195 };
  center2: google.maps.LatLngLiteral = { lat: -23.0036424, lng: -43.3194235 };
  markerPosition2: google.maps.LatLngLiteral = { lat: -23.0036424, lng: -43.3194235 };
  zoom = 15;
  zoom2 = 15;

  itens = [
    { descricao: 'Ansiedade' },
    { descricao: 'Depressão' },
    { descricao: 'TDHA'},
    { descricao: 'Relações familiares'},
    { descricao: 'Casais' },
    { descricao: 'Compulsões' },
    { descricao: 'Disfunções Sexuais' },
    { descricao: 'Estresse' },
    { descricao: 'Fobias' },
    { descricao: 'Morte e luto' },
    { descricao: 'Orientação Profissional' },
    { descricao: 'Transtorno Obsessivo Compulsivo - TOC' }

  ];

  apiLoaded:boolean = false;



  constructor(private httpClient: HttpClient) {
    // this.apiLoaded = this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyCGEBvPMfkw-M73JRQA7JGU2MNSISImFVM', 'callback')
    // .pipe(
    //   map((val) =>{
    //     console.log(val);
    //   } true),
    //   catchError((value) => of(false)),
    // );

    this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyCGEBvPMfkw-M73JRQA7JGU2MNSISImFVM', 'callback').subscribe((value: any) => {
      console.log(value);
      this.apiLoaded = true;
    })
  }

  ngOnInit(): void {

  }


  whatsappClick() {
    window.open('https://wa.me/+5511948081340/?text=Ola%2C%20vim%20pelo%20seu%20site%2C%20e%20gostaria%20de%20marcar%20uma%20consulta%20ou%20conhecer%20mais%20sobre%20seus%20servicos!', '_blank');
  }

  instagramClick() {
    window.open('https://www.instagram.com/amiriscosta_psico/','_blank')
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

}
