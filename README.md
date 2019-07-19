Datos Curso Angular 8

Clave Equipo = 201861

Email Profesor Angular: alce65@hotmail.com

https://github.com/alce65


urls:

--angular
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