import { Component, DoCheck } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';
import { config } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements DoCheck{

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  ngDoCheck(){
    this.setLocalStorage();
  }


  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja DELETAR tudo?");
    if(confirm){
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("A tarefa foi esvaziada, deseja DELETAR?");

      if(confirm){
        this.deleteItemTaskList (index);
      }
    }
  }

  public setEmmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }
  
  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));
      // Adicionando dados ao localStorage como string obrigatóriamente
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }


  

}
