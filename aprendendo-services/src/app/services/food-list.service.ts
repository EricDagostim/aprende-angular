import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "X BACON",
    "X Salada",
    "X Egg"
  ]; 

  constructor() { }

  public foodList(){
    this.list;
  }
}