import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getArray(key:string):Array<any>{
    return JSON.parse(localStorage.getItem(key))
  }

  setArray(key:string, aData: Array<any>){
    localStorage.setItem(key, JSON.stringify(aData))
  }

  removeArray(key:string){
    localStorage.removeItem(key)
  }

  clearStorage(){
    localStorage.clear()
  }
}
