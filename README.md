
# Markdown Links

## Índice

* [1. Introducción](#1-Introducción)
* [2. Objetivos de aprendizaje](#2-objetivos-de-aprendizaje)
* [3.  Guía de uso e instalación de la librería](#3-Guía-de-uso-e-instalación-de-la-librería)

 4. Instale la libreria via
* [5. CLI](#5-CLI)
6. Javascripts API
* [7. Argumentos ](#7-Argumentos)
* [8. Ejemplos](#8-Ejemplos)
* [9. Options](#9-Options)



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

![diagrama-de-flujo](https://github.com/Ladypino/SCL014-md-links/blob/master/images/Blue%20and%20Pink%20Customer%20Support%20Flowchart.png)

## Guía de uso e instalación de la librería.

# Instale la libreria via:

npm i md-links-ladypino

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

## Argumentos
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






### Tutoriales / NodeSchool workshoppers Utilizados de guia

* [learnyounode](https://github.com/workshopper/learnyounode)
* [how-to-npm](https://github.com/workshopper/how-to-npm)
* [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

###  Recursos Utilizados de guia

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









