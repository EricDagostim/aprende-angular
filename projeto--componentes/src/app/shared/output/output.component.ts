import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome:string, idade:number}> = [
    { nome: "AAA", idade: 23},
    { nome: "BBB", idade: 12},
    { nome: "CCC", idade: 45}
  ]
  
  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
    
  }

}
