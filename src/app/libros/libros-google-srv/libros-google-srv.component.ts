import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from 'src/app/services/google-books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'aby-libros-google-srv',
  templateUrl: './libros-google-srv.component.html',
  styleUrls: ['./libros-google-srv.component.css']
})
export class LibrosGoogleSrvComponent implements OnInit {

  aLibros: Array<string>
  clave: string
  aLibros$: Observable<Array<string>>
  mensajesError: string

  constructor(public googleBooks: GoogleBooksService) { }

  ngOnInit() {
    this.aLibros = []
  }

  onBuscarPromise(){    
    this.googleBooks.getAll(this.clave)
    .then(
      (response: any) => {
        this.aLibros = response
      }
    )
    .catch(error => this.mensajesError = error.message)
  }

  onBuscarRx(){
    this.aLibros$ = this.googleBooks.getAllRx(this.clave) //usando el pipe

    this.googleBooks.getAllRx(this.clave) // sin usar el pipe
    .subscribe(
      response => this.aLibros = response,
      error => this.mensajesError = error.message
    )
  }

}
