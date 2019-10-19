# Empecemos

Este repositorio contiene todas las instrucciones para la implementación de la evaluación.

Caso considere que estuviera faltando alguna información para la ejecución del examen, abra un issue en el repositorio para que este sea validado.

### Requisitos

La aplicación a ser desarrollada consiste en una lista de tareas siguiendo como ejemplo la imagen a continuación.

![Image of todos](https://github.com/tonitim13/frontend-examen/blob/master/wireframe.png)

Debe ser implementado la creación de tareas usando un campo de entrada de texto (de acuerdo a la imagen).

Deben ser implementado filtros (de acuerdo a la imagen) para las tareas completadas y tareas a realizar, y, sin filtro mostrar todas las tareas.

Al clicar en la "X" en la fila de la tarea, la tarea debe ser eliminada (No es necesario confirmar la acción).

Debera ser usado algun framework de frontend (VueMaterial, BootstrapVue, MaterialUI, etc) y deben ser desarrollados componentes separados para la lista de las tareas y filas de la lista de tareas. Por lo menos un **un componente** debe tener un test unitario implementado.

La aplicación debe ser resposiva.

Para simular un API REST, utilice un [json-server](https://github.com/typicode/json-server) pasando el archivo `database.json` como entrada. Todas las informaciones de instalación y uso de la herramienta esta en su propio repositorio.

### Desafío

Implementar una ordenación de tareas. Debe ser posible definir un orden de las tareas en la lista (No necesariamente usando drag and drop).

Tareas completadas deben estar abajo de las tareas por realizar.

### Evaluación

Usted sera evaluado por el código, las pruebas unitarias creadas y por respetar la guia de estilo de código [Airbnb Style Guide](https://github.com/airbnb/javascript).

Para el desarrollo de la aplicación y pruebas unitarias se deben utilizar frameworks (VueMaterial, BootstrapVue, MaterialUI, Jest para pruebas, etc). Pueden ser utilizados los frameworks con que más experiencia tiene.

Separe los commits por pasos que fueron ejecutados en el desarrollo del proyecto con un nivel adecuado de detalle (Ni mucho ni poco detalle). Esperamos que usted consiga explicar las decisiones que tomó durante el desarrollo a través de los commits.

Requerido:

* ES6
* Pruebas unitarias en al menos en un componente implementado.
* [Airbnb Style Guide](https://github.com/airbnb/javascript)

### Al publicar

Agregue un archivo HOWTO.md con los procedimientos para la inicialización y ejecución de la aplicación y las pruebas. Trabaje solo y no comparta el proyecto por la internet.

Realice un fork de este repositorio y al finalizar haga un Pull Request con el resultado y con las instrucciones para la ejecución del proyecto. Toda comunicación referente al envio será realizada en el propio Pull Request.

## ¡Buena Suerte!

