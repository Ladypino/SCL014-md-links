README.md
Markdown Links
Índice
1. Preámbulo
2. Resumen del proyecto
3. Objetivos de aprendizaje
4. Consideraciones generales
5. Criterios de aceptación mínimos del proyecto
6. Entregables
7. Hacker edition
8. Pistas, tips y lecturas complementarias
9. Checklist
1. Preámbulo
Markdown es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README.md).

Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una herramienta usando Node.js, que lea y analice archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

md-links

2. Resumen del proyecto
Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo, ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder interactuar con el sistema en sí, archivos, redes, ...

En este proyecto nos alejamos un poco del navegador para construir un programa que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el sistema archivos, con el entorno (proceso, env, stdin/stdout/stderr), ...

En este proyecto crearás una herramienta de línea de comando (CLI) así como tu propia librería (o biblioteca - library) en JavaScript.

3. Objetivos de aprendizaje
Diseñar tu propia librería es una experiencia fundamental para cualquier desarrollador porque que te obliga a pensar en la interfaz (API) de tus módulos y cómo será usado por otros developers. Debes tener especial consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

A continuación puedes ver los objetivos de aprendizaje de este proyecto:

JavaScript
 Uso de condicionales (if-else | switch | operador ternario)
 Uso de funciones (parámetros | argumentos | valor de retorno)
 Manipular arrays (filter | map | sort | reduce)
 Manipular objects (key | value)
 Uso ES modules (import | export)
 Diferenciar entre expression y statements.
 Diferenciar entre tipos de datos atómicos y estructurados.
 Uso de callbacks.
 Consumo de Promesas.
 Creación de Promesas.
Node
 Uso de sistema de archivos. (fs, path)
 Instalar y usar módulos. (npm)
 Creación de modules. (CommonJS)
 Configuración de package.json.
 Configuración de npm-scripts
 Uso de CLI (Command Line Interface - Interfaz de Línea de Comando)
Testing
 Testeo unitario.
 Testeo asíncrono.
 Uso de librerias de Mock.
 Uso de Mocks manuales.
 Testeo para múltiples Sistemas Operativos.
Estructura del código y guía de estilo
 Organizar y dividir el código en módulos (Modularización)
 Uso de identificadores descriptivos (Nomenclatura | Semántica)
 Uso de linter (ESLINT)
Git y GitHub
 Uso de comandos de git (add | commit | pull | status | push)
 Manejo de repositorios de GitHub (clone | fork | gh-pages)
 Colaboración en Github (branches | pull requests | |tags)
 Organización en Github (projects | issues | labels | milestones)
HTTP
 Verbos HTTP (http.get)
Fundamentos de programación
 Recursión.
4. Consideraciones generales
Este proyecto se puede "resolver" de manera individual o en duplas.

La librería y script ejecutable (herramienta de línea de comando - CLI) debe estar implementada en JavaScript para ser ejecutada con Node.js. Está permitido usar librerías externas.

Tu módulo debe ser instalable via npm install <github-user>/md-links. Este módulo debe incluir tanto un ejecutable que podamos invocar en la línea de comando como una interfaz que podamos importar con require para usarlo programáticamente.

Los tests unitarios deben cubrir un mínimo del 70% de statements, functions, lines y branches. Te recomendamos explorar Jest para tus pruebas unitarias.

Para este proyecto no está permitido utilizar async/await.

Para este proyecto es opcional el uso de ES Modules (import/export), en el caso optes utilizarlo deberás de crear un script de build en el package.json que los transforme en requires y module.exports con ayuda de babel.

5. Criterios de aceptación mínimos del proyecto
Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio.

Antes de comenzar a codear, es necesario crear un plan de acción. Esto debería quedar detallado en el README.md de tu repo y en una serie de issues y milestones para priorizar y organizar el trabajo, y para poder hacer seguimiento de tu progreso.

Dentro de cada milestone se crearán y asignarán los issues que cada quien considere necesarios.

Archivos del proyecto
README.md con descripción del módulo, instrucciones de instalación/uso, documentación del API y ejemplos. Todo lo relevante para que cualquier developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
index.js: Desde este archivo debes exportar una función (mdLinks).
package.json con nombre, versión, descripción, autores, licencia, dependencias, scripts (pretest, test, ...)
.editorconfig con configuración para editores de texto. Este archivo no se debe cambiar.
.eslintrc con configuración para linter. Este archivo no se debe cambiar.
.gitignore para ignorar node_modules u otras carpetas que no deban incluirse en control de versiones (git).
test/md-links.spec.js debe contener los tests unitarios para la función mdLinks(). Tu inplementación debe pasar estos tets.
JavaScript API
El módulo debe poder importarse en otros scripts de Node.js y debe ofrecer la siguiente interfaz:

mdLinks(path, options)
Argumentos
path: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es relativa, debe resolverse como relativa al directorio desde donde se invoca node - current working directory).
options: Un objeto con las siguientes propiedades:
validate: Booleano que determina si se desea validar los links encontrados.
Valor de retorno
La función debe retornar una promesa (Promise) que resuelva a un arreglo (Array) de objetos (Object), donde cada objeto representa un link y contiene las siguientes propiedades:

href: URL encontrada.
text: Texto que aparecía dentro del link (<a>).
file: Ruta del archivo donde se encontró el link.
Ejemplo
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
CLI (Command Line Interface - Interfaz de Línea de Comando)
El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente manera a través de la terminal:

md-links <path-to-file> [options]

Por ejemplo:

$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
El comportamiento por defecto no debe validar si las URLs responden ok o no, solo debe identificar el archivo markdown (a partir de la ruta que recibe como argumento), analizar el archivo Markdown e imprimir los links que vaya encontrando, junto con la ruta del archivo donde aparece y el texto que hay dentro del link (truncado a 50 caracteres).

Options
--validate
Si pasamos la opción --validate, el módulo debe hacer una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
Vemos que el output en este caso incluye la palabra ok o fail después de la URL, así como el status de la respuesta recibida a la petición HTTP a dicha URL.

--stats
Si pasamos la opción --stats el output (salida) será un texto con estadísticas básicas sobre los links.

$ md-links ./some/example.md --stats
Total: 3
Unique: 3
También podemos combinar --stats y --validate para obtener estadísticas que necesiten de los resultados de la validación.

$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
6. Entregables
Módulo instalable via npm install <github-user>/md-links. Este módulo debe incluir tanto un ejecutable como una interfaz que podamos importar con require para usarlo programáticamente.

7. Hacker edition
Las secciones llamadas Hacker Edition son opcionales. Si terminaste con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Puedes agregar la propiedad line a cada objeto link indicando en qué línea del archivo se encontró el link.
Puedes agregar más estadísticas.
Integración continua con Travis o Circle CI.
8. Pistas, tips y lecturas complementarias
FAQs
¿Cómo hago para que mi módulo sea instalable desde GitHub?
Para que el módulo sea instalable desde GitHub solo tiene que:

Estar en un repo público de GitHub
Contener un package.json válido
Con el comando npm install githubname/reponame podemos instalar directamente desde GitHub. Ver docs oficiales de npm install acá.

Por ejemplo, el course-parser que usamos para la currícula no está publicado en el registro público de NPM, así que lo instalamos directamente desde GitHub con el comando npm install Laboratoria/course-parser.

Sugerencias de implementación
La implementación de este proyecto tiene varias partes: leer del sistema de archivos, recibir argumentos a través de la línea de comando, analizar texto, hacer consultas HTTP, ... y todas estas cosas pueden enfocarse de muchas formas, tanto usando librerías como implementando en VanillaJS.

Por poner un ejemplo, el parseado (análisis) del markdown para extraer los links podría plantearse de las siguientes maneras (todas válidas):

Usando un módulo como markdown-it, que nos devuelve un arreglo de tokens que podemos recorrer para identificar los links.
Siguiendo otro camino completamente, podríamos usar expresiones regulares (RegExp).
También podríamos usar una combinación de varios módulos (podría ser válido transformar el markdown a HTML usando algo como marked y de ahí extraer los link con una librería de DOM como JSDOM o Cheerio entre otras).
Usando un custom renderer de marked (new marked.Renderer()).
No dudes en consultar a tus compañeras, coaches y/o el foro de la comunidad si tienes dudas existenciales con respecto a estas decisiones. No existe una "única" manera correcta wink

Tutoriales / NodeSchool workshoppers
learnyounode
how-to-npm
promise-it-wont-hurt
Otros recursos
Acerca de Node.js - Documentación oficial
Node.js file system - Documentación oficial
Node.js http.get - Documentación oficial
Node.js - Wikipedia
What exactly is Node.js? - freeCodeCamp
¿Qué es Node.js y para qué sirve? - drauta.com
¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube
¿Simplemente qué es Node.js? - IBM Developer Works, 2011
Node.js y npm
Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?
Asíncronía en js
NPM
Publicar packpage
Crear módulos en Node.js
Leer un archivo
Leer un directorio
Path
Linea de comando CLI
9. Checklist
General
 Puede instalarse via npm install --global <github-user>/md-links
README.md
 Un board con el backlog para la implementación de la librería.
 Documentación técnica de la librería.
 Guía de uso e instalación de la librería
API mdLinks(path, opts)
 El módulo exporta una función con la interfaz (API) esperada.
 Implementa soporte para archivo individual
 Implementa soporte para directorios
 Implementa options.validate
CLI
 Expone ejecutable md-links en el path (configurado en package.json)
 Se ejecuta sin errores / output esperado
 Implementa --validate
 Implementa --stats
Pruebas / tests
 Pruebas unitarias cubren un mínimo del 70% de statements, functions, lines, y branches.
 Pasa tests (y linters) (npm test).
About
No description, website, or topics provided.
Topics
Resources
 Readme
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Languages
JavaScript
100.0%
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About













# Markdown Links

## Índice

* [1. Introducción](#1-Introducción)
* [2. Objetivos de aprendizaje](#2-objetivos-de-aprendizaje)
* [3. Guía de uso e instalación de la librería](#3-Guía de uso e instalación de la librería)
* [4. Instale la libreria via](#4-Instale la libreria via )
* [5. CLI](#5-CLI)
* [7. Hacker edition](#7-hacker-edition)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

# README.md

## Introducción
Markdown es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README.md).

Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo, ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder interactuar con el sistema en sí, archivos, redes, ...

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## Objetivos

El objetivo práctico de este proyecto fué crear mi propia librería (o biblioteca - library) en JavaScript, usando usando Node.js, que lea y analice archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

En este proyecto nos alejamos un poco del navegador para construir un programa que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el sistema archivos, con el entorno (proceso, env, stdin/stdout/stderr), ...

Diagrama de flujo
Diagrama de flujo 


## Guía de uso e instalación de la librería.

# Instale la libreria via:

npm install LadyPino/SCL014-md-links

El módulo exporta una función con la interfaz (API) esperada.
El módulo implementa soporte para archivo individual
El módulo implementa soporte para directorios
El módulo implementa validate y stats


## CLI

Expone ejecutable md-links en el path (configurado en package.json)

~~~
Se ejecuta sin errores ./ output esperado.
El ejecutable implementa --validate.
El ejecutable implementa --stats.
El ejecutable implementa --validate y --stats juntos.
~~~



## JavaScript API
El módulo se importa en otros scripts de Node.js y  ofrece la siguiente interfaz:

mdLinks(path, options)

Argumentos
path: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es relativa, debe resolverse como relativa al directorio desde donde se invoca node - current working directory).
options: Un objeto con las siguientes propiedades:
validate: Booleano que determina si se desea validar los links encontrados.
Valor de retorno
La función debe retornar una promesa (Promise) que resuelva a un arreglo (Array) de objetos (Object), donde cada objeto representa un link y contiene las siguientes propiedades:

* [ ]  linkUrl: URL encontrada.
* [ ]  textVf: Texto que aparecía dentro del link (<a>).
* [ ]  fileRoute: Ruta del archivo donde se encontró el link.
* [ ]  NumberVf: códigos que devuelve el servidor después de recibir una petición HTTP, y que identifica si todo ha ido    bien o ha habido algún error.


## Ejemplo

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
  ```
CLI 
(Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente manera a través de la terminal:

md-links <path-to-file> [options]

## Por ejemplo:
~~~
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google

~~~
El comportamiento por defecto no debe validar si las URLs responden ok o no, solo debe identificar el archivo markdown (a partir de la ruta que recibe como argumento), analizar el archivo Markdown e imprimir los links que vaya encontrando, junto con la ruta del archivo donde aparece y el texto que hay dentro del link (truncado a 50 caracteres).

## Options

**--validate**.
Si pasamos la opción --validate, el módulo debe hacer una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.

## Por ejemplo:
~~~
$ md-13d99df067c1
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
~~~

Vemos que el output en este caso incluye la palabra ok o fail después de la URL, así como el status de la respuesta recibida a la petición HTTP a dicha URL.

**--stats**
Si pasamos la opción --stats el output (salida) será un texto con estadísticas básicas sobre los links.

~~~
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
~~~

También podemos combinar --stats y --validate para obtener estadísticas que necesiten de los resultados de la validación.

~~~
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
~~~






### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)
* [ ] Uso de Mocks manuales.
* [ ] Testeo para múltiples Sistemas Operativos.

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### HTTP

* [ ] Verbos HTTP ([http.get](https://nodejs.org/api/http.html#http_http_get_options_callback))

### Fundamentos de programación

* [ ] [Recursión.](https://www.youtube.com/watch?v=lPPgY3HLlhQ)

***


* Tu módulo debe ser instalable via `npm install <github-user>/md-links`. Este
  módulo debe incluir tanto un _ejecutable_ que podamos invocar en la línea de
  comando como una interfaz que podamos importar con `require` para usarlo
  programáticamente.

* Los tests unitarios deben cubrir un mínimo del 70% de _statements_,
  _functions_, _lines_ y _branches_. Te recomendamos explorar [Jest](https://jestjs.io/)
  para tus pruebas unitarias.





### Archivos del proyecto

* `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos. Todo lo relevante para que cualquier
  developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
* `index.js`: Desde este archivo debes exportar una función (`mdLinks`).
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...)
* `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
* `.eslintrc` con configuración para linter. Este archivo no
  se debe cambiar.
* `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
* `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. Tu inplementación debe pasar estos tets.

### JavaScript API

El módulo debe poder importarse en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

* `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es
  relativa, debe resolverse como relativa al directorio desde donde se invoca
  node - _current working directory_).
* `options`: Un objeto con las siguientes propiedades:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función debe retornar una promesa (`Promise`) que resuelva a un arreglo
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.



Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

## 6. Entregables

Módulo instalable via `npm install <github-user>/md-links`. Este módulo debe
incluir tanto un ejecutable como una interfaz que podamos importar con `require`
para usarlo programáticamente.





***





#### ¿Cómo hago para que mi módulo sea _instalable_ desde GitHub?

Para que el módulo sea instalable desde GitHub solo tiene que:

* Estar en un repo público de GitHub
* Contener un `package.json` válido

Con el comando `npm install githubname/reponame` podemos instalar directamente
desde GitHub. Ver [docs oficiales de `npm install` acá](https://docs.npmjs.com/cli/install).




### Tutoriales / NodeSchool workshoppers

* [learnyounode](https://github.com/workshopper/learnyounode)
* [how-to-npm](https://github.com/workshopper/how-to-npm)
* [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Otros recursos

* [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
* [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
* [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
* [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
* [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
* [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
* [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
* [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
* [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
* [Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
* [Asíncronía en js](https://carlosazaustre.es/manejando-la-asincronia-en-javascript)
* [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
* [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
* [Leer un directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
* [Path](https://nodejs.org/api/path.html)
* [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)

## 9. Checklist

### General

* [ ] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`



### API `mdLinks(path, opts)`

* [ ] El módulo exporta una función con la interfaz (API) esperada.
* [ ] Implementa soporte para archivo individual
* [ ] Implementa soporte para directorios
* [ ] Implementa `options.validate`

### CLI

* [ ] Expone ejecutable `md-links` en el path (configurado en `package.json`)
* [ ] Se ejecuta sin errores / output esperado
* [ ] Implementa `--validate`
* [ ] Implementa `--stats`

### Pruebas / tests

* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [ ] Pasa tests (y linters) (`npm test`).
