import { Component, OnInit } from '@angular/core';
import { ICurso, ITurno, AlumnoModel } from 'src/app/models/alumno.model';
import { CURSOS, TURNOS } from 'src/app/models/datos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'aby-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {

  cursos: Array<ICurso>
  turnos: Array<ITurno>
  alumno: AlumnoModel
  formAlumno: FormGroup

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cursos = CURSOS
    this.turnos = TURNOS

    this.formAlumno = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: [''],
      email: ['@aubay.com', [Validators.required, Validators.email ] ],
      nacim: [],
      coment: [],
      isOk: ['', Validators.required],
      turno: ['', Validators.required],
      curso: ['', Validators.required]
    })

    this.alumno = new AlumnoModel()
  }

  onSubmit(ev){
    console.log(ev)
    console.log('Enviando...')
    // ev.preventDefault() //Angular lo hace por defecto
    this.alumno = this.formAlumno.value
    console.log(this.alumno)
  }

}
