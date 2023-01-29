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
    { descricao: 'TOC'}

  ]


}
