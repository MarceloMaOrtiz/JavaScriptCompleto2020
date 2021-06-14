import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appFor]',
})

// Adicionado o OnInit -> Um ciclo de vida, quando finalizar o carregamento
// isto é executado
export class ForDirective implements OnInit{

  @Input('appForEm') numbers!: number[]
  // @Input('appForUsando') texto!: string

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {
    // console.log('MyFor');
  }
  ngOnInit(): void {
    console.log(this.numbers)
    // console.log(this.texto)
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit : number})
    } 
  }
}
