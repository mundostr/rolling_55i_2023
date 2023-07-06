## RESUMEN CREACION PROYECTO REACT CON VITE

1. Instalar NodeJS en el equipo (versión LTS), descargando instalador desde https://nodejs.org. Aceptar las opciones por defecto del asistente, y asegurarse que se encuentre activa la opción Agregar a la ruta del sistema (Add to path). No es crítico en este momento instalar las herramientas adicionales como Chocolatey, pero no molesta activarlas.

2. Por comodidad, utilizaremos la ventana de terminal integrada en VSCode, por supuesto podría utilizarse una externa del Command Prompt original de Windows, el Git Bash si se tiene Git instalado, o Powershell (en caso de problemas al ejecutar comandos en Powershell, intentar cambiar a una de las otras alternativas. Esto puede hacerse fácilmente en VSCode seleccionando el tipo de terminal en la zona derecha del área de consola).

3. En la terminal, verificar el funcionamiento de Node y npm, con los comandos node -v y npm -v. Escribir el comando en la consola y dar Enter para ejecutar. Si se utiliza Powershell y el sistema no localiza estos comandos, cambiar a otra terminal como se menciona en el paso anterior. Si aún así no se reconocen los comandos, repasar la instalación de NodeJS, reiniciar el equipo y volver a probar.

4. Posicionarse dentro de la carpeta en la que se desee trabajar (para esto será cómodo repasar los comandos característicos de terminal en la plataforma de Rolling) y solicitar la creación de un nuevo proyecto con Vite:

```
npm create vite@latest
```

Estamos utilizando el gestor de paquetes npm, para crear un nuevo proyecto utilizando la herramienta Vite en su última versión (latest). Si aún no tenemos Vite instalado, el sistema mostrará un mensaje de confirmación, indicándonos que debe hacerlo.

5. Se solicitará luego un nombre (este será el nombre de la subcarpeta donde se colocarán todos los archivos del proyecto), el tipo de proyecto (en este caso elegiremos <b>React</b>) y el lenguaje base (por el momento será <b>Javascript</b>).

6. En pocos segundos el proyecto estará creado y veremos la nueva carpeta con los diferentes archivos. Para instalar las dependencias necesarias, debemos ejecutar:

```
cd nombre_carpeta
npm install
```

nombre_carpeta es por supuesto el nombre que hemos decidido darle al proyecto en el paso 5.

7. Recordar que el sistema de gestión de paquetes de Node, utiliza el archivo package.json como configuración central. Si abrimos ese archivo, veremos toda la lista de dependencias (módulos) que se necesitan para nuestro proyecto. El npm install se encarga de descargar e instalar todo lo requerido.

8. Para comenzar a trabajar, iniciaremos un servidor local de Vite en modo desarrollo, estando siempre en la carpeta del proyecto:

```
npm run dev
```

9. Veremos que luego de pocos segundos, Vite nos indicará en la consola la url de acceso al servidor (normalmente http://localhost:5173). A partir de allí, podremos abrir esa url en una ventana de navegador y comenzar a trabajar en nuestro código, cada vez que efectuemos cambios y guardemos en VSCode, el resultado se refrescará automáticamente en el navegador.
