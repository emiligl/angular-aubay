import { Injectable } from '@angular/core';
import { TITULOS } from '../libros/libros-mock/data';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAll(clave):Array<string> {
    if(!clave) { 
      return
    }
    return TITULOS
  }

   //Promesas
   getAllPromise(clave: string): Promise<Array<string>> {    
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        if (!clave) { 
          reject(new Error('Clave no suministrada'))
        }
        else {
          resolve(TITULOS)
        }        
      }, 2000)
    })
  }

  //Observables
  getAllRx(clave: string): Observable<Array<string>> {
    //return from(TITULOS)
    return new Observable( observer => {
      setTimeout(() => {
        if(!clave) { 
          //throw new Error('Clave no suministrada')
          observer.error(new Error('Clave no suministrada'))
        }
        else{
          observer.next(TITULOS)
        }      
      }, 2000)
    })
    
  }
}