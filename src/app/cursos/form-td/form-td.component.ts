import { Component, OnInit, ViewChild } from '@angular/core';
import { ICurso, ITurno, AlumnoModel } from 'src/app/models/alumno.model';
import { CURSOS, TURNOS } from 'src/app/models/datos';

@Component({
  selector: 'aby-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {

  cursos: Array<ICurso>
  turnos: Array<ITurno>
  alumno: AlumnoModel

  constructor() { }

  @ViewChild('formAlumno', { static: true}) form:any;


  ngOnInit() {
    this.cursos = CURSOS
    this.turnos = TURNOS
    this.alumno = new AlumnoModel()
    console.log(this.form)
  }

  onSubmit(ev){
    console.log(ev)
    console.log('Enviando...')
    ev.preventDefault() //Angular lo hace por defecto
  }

}
