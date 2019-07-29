import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'aby-libros-mock-srv',
  templateUrl: './libros-mock-srv.component.html',
  styleUrls: ['./libros-mock-srv.component.css']
})
export class LibrosMockSrvComponent implements OnInit {
  aLibros: Array<string>;
  clave: string;
  mensajesError: string;

  aLibros$: Observable<Array<string>> //poner $ es buena práctica

  constructor(public booksService: BooksService) { }

  ngOnInit() {
    this.aLibros = []
  }

  onBuscar() {
    this.aLibros = 
      this.booksService.getAll(this.clave)
    this.clave = ''
  }

  onBuscarPromise() {    
    this.booksService.getAllPromise(this.clave)
    .then(response => {
      this.aLibros = response
      console.log(response)
    })
    .catch(error => {
      this.mensajesError = error.message
      console.log(error.message)
    })
    this.clave = ''
  }

  onBuscarRx() {
    this.booksService.getAllRx(this.clave).subscribe(
      response => {
        this.aLibros = response
        console.log(response)
      },
      error => {
        this.mensajesError = error.message
        console.log(error.message)
      }
    )
    // this.aLibros$ = this.booksService.getAllRx(this.clave)
    this.clave = ''
  }

}