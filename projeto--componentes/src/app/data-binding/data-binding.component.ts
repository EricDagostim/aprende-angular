import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  public nome: string = "Kinho";
  public idade: number = 19;

  public checkedDisabled: boolean = true;

  public imgSrc: string = "https://avatars.githubusercontent.com/u/69852409?v=4";
  public Imgdescript:string = "Imagem de perfil Github-Brasil de Éric Dagostim";
  public imgTitle:string = "Imagem de perfil Github-Brasil de Éric Dagostim";
  
public position: {x: number, y: number } = {x: 0, y: 0 };

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
