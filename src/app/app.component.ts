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

  openDropDown = false;

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
    window.open('https://www.instagram.com/psiamiris/','_blank')
  }

  linktreeClick(){
    window.open('https://linktr.ee/amiriscosta','_blank')
  }

  scrollTo(id: string) {
    this.onMenuTogleClick();
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  isMobileScreen() : boolean {
    return window.innerWidth <= 600;
  }

  onMenuTogleClick(){

  /*Toggle dropdown list*/
  /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

  var navMenuDiv = document.getElementById("nav-content");
  var navMenu = document.getElementById("nav-toggle");

  document.onclick = check;
  function check(e:any) {
    var target = (e && e.target) || (event && event.srcElement);

    //Nav Menu
    if (!checkParent(target, navMenuDiv)) {
      // click NOT on the menu
      if (checkParent(target, navMenu)) {
        // click on the link
        if (navMenuDiv?.classList.contains("hidden")) {
          navMenuDiv?.classList.remove("hidden");
        } else {
          navMenuDiv?.classList.add("hidden");
        }
      } else {
        // click both outside link and outside menu, hide menu
        navMenuDiv?.classList.add("hidden");
      }
    }
  }

  function checkParent(t:any, elm:any) {
    while (t.parentNode) {
      if (t == elm) {
        return true;
      }
      t = t.parentNode;
    }
    return false;
  }

  }

}
