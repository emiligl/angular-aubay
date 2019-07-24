import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aby-lista-plus',
  templateUrl: './lista-plus.component.html',
  styleUrls: ['./lista-plus.component.css']
})
export class ListaPlusComponent implements OnInit {

  aTareas: Array<TareaModel>
  @ViewChild('dlgConfirmar', { static: true }) dlgConfirmar: ElementRef

  constructor() { }

  ngOnInit() {
    this.aTareas = localStorage.getItem('tareasPlus') ? JSON.parse(localStorage.getItem('tareasPlus')) : []
  }

  addTarea(newTarea: TareaModel) {
    this.aTareas.push(newTarea)
    this.saveTareas()
  }

  deleteAllTareas(ok = false) {
    if (!ok)
      this.dlgConfirmar.nativeElement.showModal()
    else {
      this.dlgConfirmar.nativeElement.close()
      this.aTareas = []
      localStorage.removeItem('tareasPlus')
    }
  }
  saveTareas() {
    localStorage.setItem('tareasPlus', JSON.stringify(this.aTareas))
  }

  deleteTarea(i: number) {
    this.aTareas.splice(i, 1)
    this.saveTareas();
  }

  changeTarea(o: { i: number, tarea: TareaModel }) {
    this.aTareas.splice(o.i, 1, o.tarea)
    //sustituir la tarea que estaba en la posicion i por la que acaba de llegar
    this.saveTareas();
  }

}
