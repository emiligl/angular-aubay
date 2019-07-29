Datos Curso Angular 8

Clave Equipo = 201861

Email Profesor Angular: alce65@hotmail.com

https://github.com/alce65


urls:

-- angular
https://angular.io/
https://cli.angular.io/

-- estilos
https://getbootstrap.com/
https://material.io/


TypeScript = EC6 + types + annotations
Webpack-> transpila TS en JS


-- componentes
https://www.webcomponents.org/ JS puro W3C
https://www.polymer-project.org/ v3 LitElement framework ligero para crear componentes


-- herramienta debug chrome
https://augury.rangle.io/


-- IDE 
instalar visual studio code y sus extensiones
instalar git
git config  --global user.email emiliodelaiglesia2@gmail.com
git config  --global user.name emiligl
git config  --global -l


instalar node 12
empaquetador webpack (x defecto se instala solo)
instalar angular cli: npm install -g @angular/cli


ng new ‘app’ --prefix ‘pref’
git remote add origin https://github.com/emiligl/angular-aubay.git
git push -u origin master


Tests:
jasmine.js <- configurado x defecto
mocha
jest
karma
ng test  test unitario no se renderiza el elemento (dom virtual)


Protractor-> testing de angular
ng e2e integración distintos componentes (se renderiza en el navegador)


evaluar formularios y acciones (poder simular clicks)


Empaquetado
ng build --prod


Servidor local 
npm install -g live-server
live-server expone carpeta como file-server static


Bootstrap
npm install bootstrap
https://ng-bootstrap.github.io/#/home
ubicar css en angular.json siempre delante de nuestra hoja de estilos


Formateador del lenguaje EC6
npm install eslint
.\node_modules\.bin\eslint --version chequeo version local

TS<->JS
https://www.typescriptlang.org

En typeScript no poner extensiones en los import. En javascript sí

-- Angular
Crear módulo core dependiente de app
 ng g m core -m app
Crear modulo con routing dependiente del modulo app principal, fuerzo que sobreescriba
 ng g m home -m app --routing --force

Crear componente header dentro de modulo core y que sea visible desde todos los modulos
 ng g c core/header -m core --export
Crear componente flat, crea el componente al mismo nivel que el modulo. -s -t inline style y template
 ng g c home\home --flat -s -t -m home 

-- Estilos para un componente
:host {    
}
-- Inicializacion de variables en angular dentro de ngOnInit() -- Recomendación

-- Rutas component con a-r route eager
-- Lazy loading por componentes método angular 8 ivy
 quitar home tareas y usuarios de app.module
-- Los módulos que introduces en el padre no son heredadods por los módulos hijos, hay que volverlos a importar.
npm install @ng-bootstrap/ng-bootstrap -- instalación componentes bootstrap para angular
--
TESTS:
Karma utiliza jasmine para test (berhavior driven)
 instalar jasmine code snippets

Se puede utilizar jasmine sin karma
https://jasmine.github.io/pages/getting_started.html
añadir una nueva linea de test para ejecutar 

Test e2e va por páginas, pantallazos del navegador
protractor tambien ejecuta jasmine

-- Compilación 
    -> Just in time (JIT)  ng serve
    -> Ahead of time (AOT) ng serve --aot

Encapsulación dentro de un componente: 
ViewEncapsulation.ShadowDom no admite css de fuera, solo local al componente.
ViewEncapsulation.Emulated por defecto, css de ese componente afecta solo al componente
ViewEncapsulation.None si escribes en el css del componente se expande al resto

Guía oficial Angular
https://angular.io/guide/styleguide

ng-template sienpre fuera del *ngif-else-then

Font awesome
https://github.com/FortAwesome/angular-fontawesome
https://www.npmjs.com/package/angular-font-awesome

Patrón controlador - presentadores
EventEmitter se inicializan en el constructor no en ngOnInit (sería muy tarde)

Pipes
Date: internationalization
https://angular.io/guide/i18n

-- incluir en app.module.ts
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);
...
...
providers: [
    { provide:LOCALE_ID, useValue: 'es'}
],


Traducción en angular, librerías de terceros:
https://angular-translate.github.io/
https://github.com/ngx-translate/core

Servicios: todo aquello que pueden compartir varios componentes, operaciones internas, capa diferente para organizar mejor el proyecto, capa de servicios. Se inyectan no instancian.
@Injectable -> decorador que hace que sea inyectable
--> se puede utilizar para compartir variables entre componentes. Ejemplo Login JWT

Formularios:
Template Driven
Model Driven
La propia etiqueta <form> lleva implicita la llamada a la directiva ngForm (único caso que va implícita)
Operador elvis ? si el objeto es null el valor booleano es falso, no da error

---
DUDAS:
"resolveJsonModule": true,
"esModuleInterop": true,
Importar json desde TS automáticamente.

OBSERVABLES en Auth.guard y en Reactive Form?

https://rxjs-dev.firebaseapp.com/

Operador from similar a of pero más genérico

-- HttpClient
https://developers.google.com/apis-explorer/#p/ 
Ejemplo: https://developers.google.com/apis-explorer/#p/books/v1/books.volumes.list

https://developers.google.com/books/v1/volumes?q=intitle:"clave"

https://www.googleapis.com/books/v1/volumes?q=intitle:%22clave%22

https://codinglatte.com/posts/angular/angular-async-pipe-handle-errors/

-- Angular Universal
https://angular.io/guide/universal


-- Service Worker, pwa

