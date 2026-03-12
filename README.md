# BINX Web  

## **MISW-UX-GrupoA56-Binx-Alarms-Web**

Frontend web de **BINX Alarms**, desarrollado con **Angular 21**, **TypeScript**, **SCSS** y **Bootstrap**, a partir de mockups de alta fidelidad orientados a una experiencia limpia, clara y consistente.

Este proyecto implementa la versión web de BINX, incluyendo pantallas de:

- Inicio de sesión
- Plan del Día
- Alarmas
- Resumen
- Preferencias
- Integraciones
- Design System

---

## Tabla de contenido

1. [Descripción general](#descripción-general)
2. [Tecnologías usadas](#tecnologías-usadas)
3. [Requisitos previos](#requisitos-previos)
4. [Versiones recomendadas](#versiones-recomendadas)
5. [Clonar o abrir el proyecto](#clonar-o-abrir-el-proyecto)
6. [Instalación de dependencias](#instalación-de-dependencias)
7. [Cómo levantar el proyecto](#cómo-levantar-el-proyecto)
8. [Build de producción](#build-de-producción)
9. [Estructura del proyecto](#estructura-del-proyecto)
10. [Rutas principales](#rutas-principales)
11. [Arquitectura general](#arquitectura-general)
12. [Diseño y estilos](#diseño-y-estilos)
13. [Servicios y datos mock](#servicios-y-datos-mock)
14. [Comandos útiles](#comandos-útiles)
15. [Control de versiones](#control-de-versiones)
16. [Solución de problemas frecuentes](#solución-de-problemas-frecuentes)
17. [Notas finales](#notas-finales)

---

## Descripción general

BINX Web es la interfaz web del sistema de gestión de alarmas BINX.  
La aplicación fue construida siguiendo una arquitectura basada en componentes standalone de Angular, con lazy loading por pantalla y una organización interna pensada para escalabilidad, mantenibilidad y consistencia visual.

El proyecto replica y adapta los mockups suministrados, manteniendo una línea visual sobria y profesional, con mejoras puntuales de contraste, espaciado, alineación y organización visual.

---

## Tecnologías usadas

- **Angular 21**
- **TypeScript**
- **SCSS**
- **Bootstrap 5**
- **Bootstrap Icons**
- **ng-bootstrap**
- **Angular CDK**

---

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Git**
- **Node.js**
- **npm**
- **Angular CLI**

Puedes verificarlo con:

```bash
node -v
npm -v
ng version
git --version
```

---

## Versiones recomendadas

Este proyecto fue configurado y probado con las siguientes versiones:

- **Node.js**: `v20.19.0`
- **npm**: `10.8.2`
- **Angular CLI**: `21.2.2`

Si necesitas instalar Angular CLI globalmente:

```bash
npm install -g @angular/cli
```

Verificación:

```bash
ng version
```

---

## Clonar o abrir el proyecto

Si ya tienes el repositorio en tu máquina, entra a la carpeta raíz del proyecto:

```bash
cd MISW-UX-GrupoA56-Binx-Alarms-Web
```

Si necesitas clonarlo desde GitHub:

```bash
git clone https://github.com/isinning1/MISW-UX-GrupoA56-Binx-Alarms-Web.git
cd MISW-UX-GrupoA56-Binx-Alarms-Web
```

---

## Instalación de dependencias

Desde la raíz del proyecto, instala todas las dependencias con:

```bash
npm install
```

Esto leerá el archivo `package.json` e instalará automáticamente:

- Angular
- Bootstrap
- Bootstrap Icons
- ng-bootstrap
- Angular CDK
- utilidades de desarrollo

---

## Cómo levantar el proyecto

Para ejecutar la aplicación en modo desarrollo:

```bash
ng serve
```

o también:

```bash
npm start
```

Por defecto Angular levanta la aplicación en:

```text
http://localhost:4200/
```

Si deseas abrir el navegador automáticamente:

```bash
ng serve -o
```

---

## Build de producción

Para generar el build del proyecto:

```bash
ng build
```

La salida se genera en:

```text
dist/binx-web
```

Si deseas una compilación optimizada explícita:

```bash
ng build --configuration production
```

---

## Estructura del proyecto

La estructura principal del frontend es la siguiente:

```text
src/
  app/
    core/
      models/
      services/
      guards/
      interceptors/
      config/

    layout/
      shell/
      sidebar/
      topbar/

    shared/
      constants/
      interfaces/
      ui/
      utils/

    features/
      auth/
        pages/
          login-page/
      plan/
        pages/
          plan-page/
      alarms/
        pages/
          alarms-page/
      summary/
        pages/
          summary-page/
      preferences/
        pages/
          preferences-page/
      integrations/
        pages/
          integrations-page/
      design-system/
        pages/
          design-system-page/

    app.ts
    app.html
    app.scss
    app.routes.ts

  styles/
    _tokens.scss
    _reset.scss
    _utilities.scss
    _mixins.scss
    _bootstrap-overrides.scss

  styles.scss
```

---

## Rutas principales

La aplicación usa Angular Router con lazy loading de componentes standalone.

### Rutas configuradas

- `/login` → Inicio de sesión
- `/plan` → Plan del Día
- `/alarmas` → Gestión de alarmas
- `/resumen` → Dashboard / resumen
- `/preferencias` → Configuración de usuario
- `/integraciones` → Gestión de integraciones
- `/design-system` → Componentes base y validación visual

La ruta raíz redirige a:

```text
/login
```

---

## Arquitectura general

El proyecto sigue esta organización:

### `core/`

Contiene modelos y servicios base de la aplicación:

- tipos
- entidades
- datos mock
- servicios de negocio simples

### `layout/`

Contiene la estructura persistente de la app:

- `shell`
- `sidebar`
- `topbar`

### `shared/`

Contiene utilidades, constantes y componentes reutilizables.

### `features/`

Agrupa las pantallas por funcionalidad:

- autenticación
- plan
- alarmas
- resumen
- preferencias
- integraciones
- design system

---

## Diseño y estilos

El sistema visual se apoya en estos archivos globales:

### `src/styles/_tokens.scss`

Define:

- colores
- radios
- sombras
- tamaños base
- tipografía
- medidas estructurales

### `src/styles/_reset.scss`

Establece:

- normalización básica
- box sizing
- comportamiento base de body, links, inputs y focus

### `src/styles/_utilities.scss`

Incluye:

- utilidades reutilizables
- botones
- inputs
- tarjetas
- chips
- estados

### `src/styles.scss`

Importa:

- tokens
- reset
- utilities
- Bootstrap
- Bootstrap Icons

---

## Servicios y datos mock

Actualmente el frontend funciona con datos mock dentro de servicios Angular.

Ejemplos:

- `PlanService`
- `AlarmService`
- `SummaryService`
- `PreferencesService`
- `IntegrationsService`

Esto permite:

- probar pantallas sin backend
- iterar visualmente
- validar rutas y comportamiento UI

Si en una siguiente fase se desea conectar backend, estos servicios son el punto natural de integración.

---

## Comandos útiles

### Ejecutar en desarrollo

```bash
ng serve
```

### Ejecutar y abrir navegador

```bash
ng serve -o
```

### Build del proyecto

```bash
ng build
```

### Build continuo en modo desarrollo

```bash
ng build --watch --configuration development
```

### Ejecutar pruebas

```bash
ng test
```

### Verificar versión de Angular

```bash
ng version
```

### Instalar dependencias nuevamente

```bash
npm install
```

### Limpiar dependencias e instalar de nuevo

En caso de error de módulos:

```bash
rm -rf node_modules package-lock.json
npm install
```

En PowerShell, si `rm -rf` no funciona:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

---

## Control de versiones

### Ver estado del repositorio

```bash
git status
```

### Agregar cambios

```bash
git add .
```

### Crear commit

```bash
git commit -m "feat: update BINX web frontend"
```

### Subir cambios

```bash
git push
```

### Descargar cambios del remoto

```bash
git pull
```

---

## Solución de problemas frecuentes

### 1. `ng: command not found`

Instala Angular CLI globalmente:

```bash
npm install -g @angular/cli
```

Luego verifica:

```bash
ng version
```

---

### 2. El proyecto no encuentra módulos

Ejecuta:

```bash
npm install
```

Si persiste:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

### 3. Advertencia de Sass por `@import`

Es una advertencia conocida relacionada con Bootstrap y Sass.  
No bloquea la ejecución del proyecto. En una futura mejora se puede migrar a `@use`.

---

### 4. Warning de bundle size en `ng build`

El proyecto puede mostrar una advertencia de presupuesto de bundle inicial.  
Esto no impide el funcionamiento. Se puede optimizar más adelante mediante:

- carga selectiva de estilos
- refinamiento del budget en `angular.json`
- reducción de dependencias visuales si fuera necesario

---

### 5. El editor marca imports como unused

A veces VS Code o el Angular Language Service no refrescan bien templates externos.  
Si el proyecto compila con:

```bash
ng build
```

entonces el código está correcto.

Para refrescar el editor:

- guarda todos los archivos
- reinicia VS Code
- ejecuta `TypeScript: Restart TS Server`

---

## Notas finales

- Este proyecto está orientado a una **implementación visual web basada en mockups**.
- Se priorizó una arquitectura limpia, reusable y consistente.
- Los datos actuales son mock y están preparados para una futura integración con backend.
- La interfaz fue refinada para mantener una estética clara, profesional y cercana a los diseños de referencia.

---

## Ejecución rápida

Si solo quieres levantar el proyecto rápidamente:

```bash
git clone https://github.com/isinning1/MISW-UX-GrupoA56-Binx-Alarms-Web.git
cd MISW-UX-GrupoA56-Binx-Alarms-Web
npm install
ng serve -o
```

---

## Autoría

Grupo A56 UX UI  
Proyecto académico y de implementación frontend para **BINX Web**.
