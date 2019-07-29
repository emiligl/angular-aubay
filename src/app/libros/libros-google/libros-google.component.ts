import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'aby-libros-google',
  templateUrl: './libros-google.component.html',
  styleUrls: ['./libros-google.component.css']
})
export class LibrosGoogleComponent implements OnInit {

  aLibros: Array<string>
  clave: string

  mensajesError: string

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.aLibros = []
  }

  onBuscarPromise(){
    const url = environment.urlLibros + this.clave

    if (!this.clave)  {
      this.mensajesError = 'Se necesita un valor de búsqueda'
      return
    }
    else
    {
      this.http.get(url).toPromise().then(
        (response: any) => {
          this.aLibros = response.items.map(
            (item: any) => item.volumeInfo.title
          )
        }
      ).catch(
        error => this.mensajesError = error.message
      )     
    }
  }

  onBuscarRx(){
    const url = environment.urlLibros + this.clave

    if (!this.clave)  {
      this.mensajesError = 'Se necesita un valor de búsqueda'
      return
    }
    else
    {
      this.http.get(url).subscribe(
        (response: any) => {
          this.aLibros = response.items.map(
            (item: any) => item.volumeInfo.title
          )
        },
        error => this.mensajesError = error.message
      )
    }
  }

}
