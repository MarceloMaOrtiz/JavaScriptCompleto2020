import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data-model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  // Behavior é uma classe que extend subject, é o porteiro da história que consegue
  //  detectar o evento
  private _headerData = new BehaviorSubject<HeaderData>({
    title: "Início",
    icon: "home",
    routeUrl: ""
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  // Dessa forma é possível captar sempre que há uma alteração no valor interno do header
  set headerData(headerData: HeaderData){
    this._headerData.next(headerData)
  }
}
