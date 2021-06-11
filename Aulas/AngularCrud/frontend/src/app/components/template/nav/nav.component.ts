import { Component, OnInit } from '@angular/core';

// Transforma a classe em um componente, definindo algums fields do objeto
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
