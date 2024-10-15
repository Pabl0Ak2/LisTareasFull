# Título del Proyecto

Este proyecto es una aplicación web construida con Angular y NestJS, diseñada para gestionar información relacionada con el fútbol. Utiliza MySQL como base de datos y TailwindCSS para el diseño.

## Instalación

Para instalar y ejecutar este proyecto, asegúrate de tener instalados los siguientes programas y herramientas en tu máquina:

1. **MySQL**:
   - Descarga e instala MySQL desde [MySQL Downloads](https://dev.mysql.com/downloads/mysql/).
   - Configura una nueva base de datos para el proyecto.

2. **NestJS**:
   - Asegúrate de tener Node.js instalado. Puedes descargarlo desde [Node.js](https://nodejs.org/).
   - Instala el CLI de NestJS globalmente:
     ```bash
     npm install -g @nestjs/cli
     ```

3. **Angular**:
   - Instala Angular CLI globalmente:
     ```bash
     npm install -g @angular/cli
     ```

4. **TailwindCSS**:
   - Asegúrate de estar en la carpeta del proyecto de Angular.
   - Instala TailwindCSS usando npm:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     ```
   - Luego, inicializa TailwindCSS:
     ```bash
     npx tailwindcss init
     ```
   - Configura los archivos de TailwindCSS siguiendo la [documentación oficial](https://tailwindcss.com/docs/installation).

## Uso

1. **Inicia el servidor de NestJS**:
   - Navega a la carpeta de tu proyecto de NestJS y ejecuta:
     ```bash
     npm run start
     ```
   - Esto iniciará el servidor en `http://localhost:3000`.

2. **Inicia la aplicación Angular**:
   - Navega a la carpeta de tu proyecto de Angular y ejecuta:
     ```bash
     ng serve
     ```
   - Esto iniciará la aplicación en `http://localhost:4200`.

3. **Accede a la aplicación**:
   - Abre tu navegador y visita `http://localhost:4200` para ver la aplicación en acción.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
