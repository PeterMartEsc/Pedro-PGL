<div align=justify>

# Dossier - ReactNative

En este dossier realizaré las practicas del pdf aportado por el profesor para aprender a trabajar con ReactNative, en las que se especifique alguna __pregunta__ o pida __capturas__ de demostración de funcionamiento. 

Todas las prácticas realizadas, serán adjuntadas en un zip del proyecto, junto con este pdf.

Para lanzar el proyecto:

```bash
    npm start
```

> Luego deberemos escoger la `a` para lanzarlo en Android

Todas las practicas estan comentadas en `App.tsx`, solo hay que descomentar la que se quiera visualizar.

### Practica 1

> Crearemos un: “hola mundo!. Soy nombrealumno”
Para ello vamos a App.tsx. Dejaremos únicamente un componente View ( que es el
contenedor habitual en react native ) y pondremos dentro un componente Text ( que es
donde escribiremos ) Practica con tus conocimientos de CSS
Tener en cuenta que la mayoría son válidos, únicamente cambiando la separación con
guiones por camel case, y pasando un objeto JSON a style. Así por ejemplo, si queremos
hacer que el view ocupe todo en color rosa y ubique su contenido en el centro de la
pantalla:   <View style={{ backgroundColor: "lightpink", flex: 1, justifyContent: 'center' }}>

```
    practias/pr01
```

<img src="../markdown/capturas/pr01.png">

### Practica 2

Reproducir el código anterior. Cambia el color del borde, redondea un poco el
borde ( busca la propiedad, es muy parecida a CSS ) y pon otro color de fondo. Modifica
también para que aparezcan dos botones. Uno será para incrementar ( el botón dirá:
“incrementar” ) y otro botón para decrementar. 

```
    practias/pr02
```

<img src="../markdown/capturas/pr02.png">

### Practica 3

Crear la estructura de carpetas que hemos nombrado y un componente:
InicioScreen que será el que contenga la pantalla con los botones y el contador. En
App.tsx se hará la llamada a: <InicioScreen /> Los estilos deberán separarse usando
StyleSheet.create() 

```
    practias/pr03
```

<img src="../markdown/capturas/pr03.png">

### Práctica 11

_Nota:_ se encuentra dentro de la carpeta de la Pr10

### Práctica 25

Reproducir el ejemplo anterior. Girar la pantalla ¿ quéda el menú visible ? Cambiar el color de fondo del menú lateral y poner que tenga un ancho de 200. Prueba a comentar   y   descomentar   la   línea   del   drawerContent   ¿   Cuándo   lo   activas   siguen mostrándose los enlaces a las pantallas ? Vamos a personalizar el menú. 

Si, queda el menú visible, a mitad de la pantalla. Si comento la linea del drawer content, se muestra cada componente como un elemento del drawer content por defecto.


</div>