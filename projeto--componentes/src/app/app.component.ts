import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <!-- 
  <app-diretivas-estruturais></app-diretivas-estruturais>
    <app-data-binding></app-data-binding> 
    
    <app-inpu [contador]="addValue"></app-inpu>
    <button (click) = "add()"> Adicionar </button>
    <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
    -->
    <app-food-list></app-food-list>
    <app-food-add></app-food-add>
    <router-outlet></router-outlet>

  `
})
export class AppComponent implements OnInit{

  constructor(){ }
  public addValue: number = 10;

  public getDados: {nome: string, idade: number} | undefined;

  ngOnInit(): void {
    
  }

  public add(){
    this.addValue += 1;
  }

  public setDados(event: {nome: string, idade: number}){
    this.getDados = event;
  }

  

  
}

