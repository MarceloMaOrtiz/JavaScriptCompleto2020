import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Necessário injetar o serviço relacionado ao header para possibilitar o seu uso
  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: "Início",
      icon: "home",
      routeUrl: ""
    }
  }

  ngOnInit(): void {
  }

}
