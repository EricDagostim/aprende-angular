import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor = true;
  public heigthPx: string = "20px";
  public nome:string = "";
  public list: Array<{nome:string}> = [{nome: "Kinhosss"}];
  
  public date:Date = new Date();


  ngOnInit(): void{
    setInterval( () => {
      if(this.valor){
        this.valor = false;
      }else{
        this.valor = true;
      }

      if (this.heigthPx == "20px"){
        this.heigthPx = "80px";
      }else{
        this.heigthPx = "20px";
      }
    }, 2000)
  }

  public salvar(){
    this.list.push({nome: this.nome});
  }

}
