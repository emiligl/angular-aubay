import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aby-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {

  aTareas: Array<TareaModel>
  newTarea: TareaModel

  constructor() { }

  ngOnInit() {
    this.aTareas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : []           
    this.newTarea = new TareaModel()
  }

  addTarea() {
    this.aTareas.push(this.newTarea)    
    this.newTarea = new TareaModel()
    this.saveTareas();
  }

  deleteTarea(i: number){
    this.aTareas.splice(i,1)
  }

  deleteAllTareas(){
    this.aTareas = []
    localStorage.removeItem('tareas')
  }

  saveTareas(){
    localStorage.setItem('tareas',JSON.stringify(this.aTareas));
  }

}
