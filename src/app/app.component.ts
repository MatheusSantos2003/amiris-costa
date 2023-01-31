import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amiris-costa';


  itens = [
    { descricao: 'Ansiedade' },
    { descricao: 'Depressão'},
    { descricao: 'Casais'},
    { descricao: 'Compulsões'},
    { descricao: 'Disfunções Sexuais'},
    { descricao: 'Estresse'},
    { descricao: 'Fobias'},
    { descricao: 'Morte e luto'},
    { descricao: 'Orientação Profissional'},
    { descricao: 'Transtorno Obsessivo Compulsivo - TOC'}

  ]

  whatsappClick(){
    window.open('https://wa.me/+5511948081340/?text=Ola%2C%20vim%20pelo%20seu%20site%2C%20e%20gostaria%20de%20marcar%20uma%20consulta%20ou%20conhecer%20mais%20sobre%20seus%20servicos!', '_blank');
  }

  scrollTo(id:string){
    const element = document.getElementById(id);

    if(element){
      element.scrollIntoView({behavior: 'smooth'})
    }
  }

}
