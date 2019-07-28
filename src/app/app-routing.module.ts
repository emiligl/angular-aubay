import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TareasComponent } from './tareas/tareas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomeModule } from './home/home.module';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },//Estructura nueva angular 8  
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasModule' }, //Estructura angular .. -> 7
  // { path: 'tareas', component: TareasComponent },
  {
    path: 'usuarios', 
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
  },
  {
    path: 'cursos', 
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'catalogo', 
    loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoModule)
  },
  {
    path: 'libros', 
    loadChildren: () => import('./libros/libros.module').then(m => m.LibrosModule)
  },
  // { path: 'usuarios', component: UsuariosComponent },
  { path: '', pathMatch:'full', redirectTo: 'home' },
  { path: '**', component: ErrorComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
