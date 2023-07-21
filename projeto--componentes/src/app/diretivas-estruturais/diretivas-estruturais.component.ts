import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string }> = [
    { nome : "Éric Nascimento"},
    { nome : "Éric"},
    { nome : "Nascimento"},
    { nome : "Éric Dagostim"},
    { nome : "Amendoim"},
    { nome : "Éric Nascimento"},
    { nome : "Éric Nascimento"}
  ];

  public nome: string = 'kinho';

  ngOnInit(): void{
    
    setInterval( () =>{
      if(this.condition){
        this.condition = false;
      }else{
        this.condition = true;
      }
    }, 2000)
  }

  public onClick(){
    if(this.conditionClick){
      this.conditionClick = false;
    } else { 
      this.conditionClick = true;
    }
  }

  public onClickAddList(){
    this.list.push({nome: "Pessoa"})
  }

}
