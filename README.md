# nextjs-boilerplate
Boilerplate for NextJS

# Cómo instalar este proyecto
## Pre-requisitos
```bash
winget install Microsoft.VisualStudioCode 
winget install OpenJS.NodeJS 
winget install Git.Git 
```

Para Linux
```
sudo apt install Git
sudo apt install nodejs
sudo apt install code
```

1. Desde un terminal, clonar por medio de
```bash
git clone https://github.com/milescl/nextjs-boilerplate
```

2. Ingresar desde un terminal, a la carpeta del proyecto en la carpeta mycommerce, e instalar con npm 
```bash
cd nextjs-boilerplate/mycommerce
npm i -D
```
3. Desde la carpeta mycommerce, cambia el nombre del archivo .env.example, por ``` .env ```.
   A continuación, edita el archivo .env, y luego modifica los parámetros de la base de datos. 
```
# MONGODB CREDENTIALS
MONGODB_USERNAME = "USER"
MONGODB_PASSWORD = "PASSWORD"
MONGODB_HOST = "cloud.mongodb.example.com"
MONGODB_PORT = "27017"
MONGODB_DATABASE = "ecommerce"

```
4. Instala la extensión para mongoDB en VSCode, y posteriormente abre el archivo playground de mongoDB, que se encuentra en la carpeta /database/model.mongodb.js, y modifica el parámetro use de la base de datos. Sobre la línea 1 del archivo, aparecerá un mensaje **"Disconnected. Click here to connect."**, ingresa los parámetros de conexión para mongodb. ej: mongo+srv://asdf@qwerty....
Dicho archivo, contiene el modelo de producto, usuario y categoría.
Modifica el archivo, e inserta uno o vario de ellos en la base de datos. Agrega al final del archivo, la instrucción
```js
db.getCollection('products').insertMany[product_model,product_model,product_model]
```
Una vez conectado al servidor, presiona el botón play, del archivo mongodb playground. 

5.- Abre un terminal desde el directorio prisma/mongodb, y elejcuta el siguiente comando
```bash
npx prisma db pull
npx prisma generate
```

NOTA: Las siguientes instrucciones, describe los pasos realizados para construir el presente proyecto. 

**El siguiente documento, asume que ya se tiene los requerimientos por parte del cliente.**
# Inicio

Al momento de realizar una creación tanto de un sistema como para una página web, se debe comenzar generando el concepto de lo que se requiere realizar. 
Para comenzar, debes crear: 
1. Wireframe : Genera el concepto de la página o sistema a desarrollar, especificando por medio de líneas, los elementos que tendrá la página. 
- Secciones
- Imágenes
- Representación de Textos. 

Ejemplo: https://wireframe.cc/

![image](https://github.com/milescl/nextjs-boilerplate/assets/109394677/b8e1bcb2-0c41-4304-b8a1-012ebefef93f)

2. Mockup : Es un poco más sofisticado que un wireframe, acá ya puedes seleccionar los colores a utilizar, es un intermedio entre un prototipo y un wireframe. Una página para generar mockups, https://creately.com/
3. Prototipo : Acá se incluye el modelo final, incluyendo imágenes, textos a presentar, menús, etc..., por medio de un dibujo. Normalmente son softwares de pago, como justinmind prototyper. Sin embargo, hay alternativas que permite probar el producto, como https://www.canva.com/

# Análisis del producto de software
Una vez que has finalizado tu prototipo, analiza cada una de las páginas que has creado, e identifica los componentes. En pocas palabras, divide tu página, en funcionalidades. Acá demuestro el ejemplo anterior. 

1. Identifica las secciones de tu documento, por ejemplo: 
![image](https://github.com/milescl/nextjs-boilerplate/assets/109394677/8e769ed0-b509-4619-a1af-45b4ae266a56)

Cada una de las secciones del documento anterior, será un COMPONENTE, lo cual se convertirá cada uno en un documento JSX, en la parte de programación.

# Analiza cada una de las partes.
Una vez identificadas las secciones que contendrá tu sistema, analiza el comportamiento de cada una de las partes, con su respectiva explicación de funcionamiento. 

![image](https://github.com/milescl/nextjs-boilerplate/assets/109394677/041b820e-2e48-4053-ac1a-6ee3028fd87c)

## Componentes
cada uno de los componentes, corresponderá al nombre de una carpeta.
- LOGO : Se considera una imagen, el nombre de la empresa, y el slogan. 
- MENU : Es el botón que mostrará las categorías del sistema. 
- SEARCH : Es la barra de búsqueda de productos o elementos dentro del sitio. 
- NAVICONS : Es el grupo, en donde se pueden añadir íconos, como botones, que realizan cierta acción sobre el sitio. 

NOTA : Analiza cada una de las partes para las secciones MAIN y FOOTER. 

# Cómo crear un proyecto desde cero
1. Cómo comenzar con un proyecto? para comenzar, debes tener instalado en tu computador:
https://nodejs.org/
Un editor de textos, como https://code.visualstudio.com/

Puedes realizar la instalación de los elementos anteriores, por medio de un terminal
```terminal
winget install OpenJS.NodeJS
winget install Microsoft.VisualStudioCode
```
Comprueba el funcionamiento de node, cerrando y abriendo nuevamente el terminal, y escribe el comando "node". Si todo va bien, deberías recibir el siguiente mensaje. En caso contrario, reinicia tu computador, para que reconozca la ruta del comando y el sistema operativo cargue nuevamente la variable de entorno PATH. Si aún así no funciona el comando, busca en la red *"How to configure environment variables for node in windows"*

![image](https://github.com/milescl/nextjs-boilerplate/assets/109394677/33bfbbe0-b645-489a-aacd-3cdae78ef83d)

Para salir de la consola de node, presiona <kbd>Ctrl</kbd>+<kbd>C</kbd> dos veces. 

2. Crea una carpeta en blanco en tu equipo, y abre la carpeta desde VSCode. O bien, desde un terminal, lo puedes realizar con los siguientes comandos. 

Ejemplo: 
```dos
mkdir c:\miproyecto
cd c:\miproyecto
code .
```

3. Abre un terminal desde VSCode, desde el menu TERMINAL -> NUEVO TERMINAL. También puedes utilizar el atajo desde teclado <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Ñ</kbd>.
4. Instala la plantilla de NextJS, por medio de:
 
```dos
npx create-next-app nombredelproyecto
```
Procura reemplazar nombredelproyecto, por el nombre real de tu proyecto, ya que esto creará una carpeta con dicho nombre. ej: ecommerce, sanscommerce, mycommerce, etc.. No coloques el mismo nombre de la carpeta del punto 2, ya que te podrías confundir en los futuros procesos. 

La siguiente imagen, muestra el proceso completo de creación del proyecto. 

![image](https://github.com/milescl/nextjs-boilerplate/assets/109394677/5810e0bb-f681-48f1-9f2d-2ca4f7fd9fd5)

Estructura de carpetas. 

![image](https://github.com/milescl/nextjs-boilerplate/assets/109394677/c0ee5564-8908-4fa9-becc-cd368e67d1cb)

|-app    en esta carpeta, es en donde irán los archivos .jsx, apis, etc.
|-public En esta carpeta, se debe colocar el contenido estático para el sitio, y que puede ser descargado por los usuarios (imágenes,archivos, íconos, etc.). 

En este repositorio, está el ejemplo para que puedas clonar, y modificar de acuerdo a tus requerimientos. 

# Qué es ESLINT?
Es una herramienta que permite analizar el código, y detectar errores de sintaxis, y de programación.
Para instalarlo, debes abrir un terminal, y escribir el siguiente comando. 

```dos
npm install eslint --save-dev
```

Una vez instalado, debes inicializarlo, por medio del siguiente comando. 

```dos
npx eslint --init
```

El comando anterior, te hará una serie de preguntas, para configurar el archivo de configuración de eslint.

Primero que todo, debes seleccionar el tipo de archivo que deseas analizar. En este caso, selecciona "Use a popular style guide", y presiona ENTER.
Which framework does your project use? Selecciona "React", y presiona ENTER.
para tailwindcss, selecciona "Javascript modules (import/export)", y presiona ENTER.
en style guide, debes seleccionar "Airbnb", y presiona ENTER.
What format for nextjs : Selecciona "JSON", y presiona ENTER.

A continuación, para instalar prettier, el cual es un formateador de código, que permite darle un formato estándar al código, y que sea más fácil de leer. 

```dos
npm install --save-dev --save-exact prettier
```

Para finalizar, debes instalar el plugin de prettier para eslint, por medio del siguiente comando. 

```dos
npm install --save-dev eslint-plugin-prettier
```
