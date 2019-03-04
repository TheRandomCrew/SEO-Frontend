# serp - KeyWords Tool

Es la Mejor Alternativa para el Planificador de Palabras Claves de Googgle y Otras Herramientas de Palabra Claves

<img src='https://cdn.glitch.com/ed38e511-b719-4c3a-abfd-47bc110ddac1%2Fthumbnails%2FHome.png?1548100758734'/>

## Getting Started

Al ser un proyecto basado en CRA, para iniciarlo tenemos muchos tutoriales que nos ayudan. Los paquetes utilizados son estandar y al no usarse *redux* u otros parecidos, la estructura es practicamente estandar. Tambien al no usar ni *CSS-Vanilla* ni otros gestores visuales con excceso de boilerplate, el codigo es eminentemente sobre la logica de los componentes y menos codigo visual.

### Pre Requisitos

Primero necesitamos lo usual para trabajar con proyectos de `nodejs` en Linux basado en **debian** (agregue `sudo` si es necesario antes de cada linea, VSCode opcional)

```
apt-get install git code nodejs
```

Para installar individualmente nodejs puede visitar https://github.com/nodesource/distributions/blob/master/README.md

Algo muy importante es tener internet activo en el momento de correr la aplicaccion pues necesitamos datos de un par de APIs online. Tambien un navegador web que soporte los ultimos features de HTML5 como Chrome/Chromium o Firefox, donde podra acceder a las opciones de desarrollador asi como el plugin de react usando `ctl+i`.

Algunas extensiones utiles en VSCode (en mi opinion) son 

* ES7 React/Redux/GraphQL/React-Native snippets
* npm Intellisense
* exports autocomplete
* Path Autocomplete
* Auto Complete Tag



### Instalacion

Lo primero es clonar el repositorio. Ubiquese con una terminal en la carpeta donde estara el repositorio, luego:

```
git clone git@github.com:luis-rp/serp.git
```

(Lo anterior usando SSH)

Con `git`, `nodejs` y un navegador decente listo, ubiquese en la carpeta `/serp` donde esta el root del repo, luego:

```
npm i
cd backend/ && npm i
cd ../frontend/ && npm i
cd ..
```

Lo anterior para instalar los paquetes necesarios en cada caarpeta. Ahora si no ha tenido problemas con algun paquete podra:

```
npm start
```

Lo anterior iniciara el servidor y el app de desarrollo, que se abrira automaticamente en su navegador por defecto.

<!-- ## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
``` -->

## Deployment a produccion

Primero debe ejecutar

```
npm run build
```

Esto construye la app para produccion en la carpeta `/build`.<br>
Combina correctamente React en modo de producción y optimiza el build para el mejor rendimiento.

El build es minificado y los filenames incluyen los hashes correctos.<br>
el app eesta lista para produccion!

Consulte [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mas info.

Mas de esto pronto...

## Tecnologias usadas mas llamativas

Este proyecto fue bootstrapped en frontend con CRA ([Create React App](https://github.com/facebook/create-react-app)).

* [React Router](https://github.com/ReactTraining/react-router) - Routing Declarativo en React 
* [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Componentes de Bootstrap 4 construidos con React 
* [axios](https://github.com/axios/axios) - Librería construida con el objetivo de gestionar la programación asíncrona con promesas.
* [devextreme-reactive](https://github.com/DevExpress/devextreme-reactive) - Conjunto de componentes para crear aplicaciones web altamente responsivas para dispositivos táctiles y escritorios tradicionales.
* [react-styleguidist](https://github.com/styleguidist/react-styleguidist) - Genera documentación para sus componentes en base a los comentarios en su código fuente, Proptypes y archivos Readme.

<!-- ## Contribuciones

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).  -->

## Autores

* **Israel Laguan** - *De lo mas completo que hice* - [Israel-Laguan](https://github.com/Israel-Laguan)
* **luis-rp** - *primer trabajo con react* - [Israel-Laguan](https://github.com/luis-rp)

<!-- See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc -->



## Mas informacion

 * [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

* [React documentation](https://reactjs.org/).
