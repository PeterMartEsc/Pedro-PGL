export class CanvasAhorcado {
    
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext('2d');
    }

    seleccionarCanvas(arrayFallos){

        let errores = arrayFallos.length;
        
            switch(errores){
            
                case 1:
                    this.canvas1();
                    break;
                case 2:
                    this.canvas2();
                    break;
                case 3:
                    this.canvas3();
                    break;
                case 4:
                    this.canvas4();
                    break;
                case 5:
                    this.canvas5();
                    break;
                case 6:
                    this.canvas6();
                    break;
                case 7:
                    this.canvas7();
                    break;
                case 8:
                    this.canvas8();
                    break;
            }
    
    }

    canvas1(){
    
            
        //limpiar el espacio de dibujo
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 6;
    
        //Dibujando lineas
        this.ctx.beginPath();
        this.ctx.moveTo(75,200);
        this.ctx.lineTo(125, 200);
        this.ctx.moveTo(100,200);
        this.ctx.lineTo( 100, 50);
        this.ctx.stroke();
    
    }

    canvas2(){

        //limpiar el espacio de dibujo
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 6;
    
        //Dibujando lineas
        this.ctx.beginPath();
        this.ctx.moveTo(75,200);
        this.ctx.lineTo(125, 200);
        this.ctx.moveTo(100,200);
        this.ctx.lineTo( 100, 50);
        this.ctx.lineTo(150,50); //Otro palo más
        this.ctx.stroke();
    }
    
    canvas3(){
    
        //limpiar el espacio de dibujo
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 6;
    
        //Dibujando lineas
        this.ctx.beginPath();
        this.ctx.moveTo(75,200);
        this.ctx.lineTo(125, 200);
        this.ctx.moveTo(100,200);
        this.ctx.lineTo( 100, 50);
        this.ctx.lineTo(150,50); //Otro palo más
        this.ctx.stroke();
    
    
        this.ctx.strokeStyle = "brown";
        this.ctx.beginPath();
        this.ctx.moveTo(145, 50);
        this.ctx.lineTo(145, 60); //Cuerda ahorcado
        this.ctx.stroke();
    
        //Dibujar cabeza:
        this.ctx.strokeStyle = "blue";
        this.ctx.beginPath();
        this.ctx.ellipse(145,80,17,17,0,0, Math.PI*2); //se establece centro y radios
        this.ctx.stroke();
    }
    
    canvas4(){

    
        //limpiar el espacio de dibujo
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 6;
    
        //Dibujando lineas
        this.ctx.beginPath();
        this.ctx.moveTo(75,200);
        this.ctx.lineTo(125, 200);
        this.ctx.moveTo(100,200);
        this.ctx.lineTo( 100, 50);
        this.ctx.lineTo(150,50); //Otro palo más
        this.ctx.stroke();
    
    
        this.ctx.strokeStyle = "brown";
        this.ctx.beginPath();
        this.ctx.moveTo(145, 50);
        this.ctx.lineTo(145, 60); //Cuerda ahorcado
        this.ctx.stroke();
    
        //Dibujar cabeza:
        this.ctx.strokeStyle = "blue";
        this.ctx.beginPath();
        this.ctx.ellipse(145,80,17,17,0,0, Math.PI*2); //se establece centro y radios
        this.ctx.stroke();
    
        //Dibujar columna
        this.ctx.strokeStyle = "black";
        this.ctx.beginPath();
        this.ctx.moveTo(145, 97);
        this.ctx.lineTo(145, 147); //Columna
        this.ctx.stroke();
    }
    
    canvas5(){

    
        //limpiar el espacio de dibujo
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 6;
    
        //Dibujando lineas
        this.ctx.beginPath();
        this.ctx.moveTo(75,200);
        this.ctx.lineTo(125, 200);
        this.ctx.moveTo(100,200);
        this.ctx.lineTo( 100, 50);
        this.ctx.lineTo(150,50); //Otro palo más
        this.ctx.stroke();
    
    
        this.ctx.strokeStyle = "brown";
        this.ctx.beginPath();
        this.ctx.moveTo(145, 50);
        this.ctx.lineTo(145, 60); //Cuerda ahorcado
        this.ctx.stroke();
    
        //Dibujar cabeza:
        this.ctx.strokeStyle = "blue";
        this.ctx.beginPath();
        this.ctx.ellipse(145,80,17,17,0,0, Math.PI*2); //se establece centro y radios
        this.ctx.stroke();
    
        //Dibujar columna y pierna
        this.ctx.strokeStyle = "black";
        this.ctx.beginPath();
        this.ctx.moveTo(145, 97);
        this.ctx.lineTo(145, 147); //Columna
        this.ctx.lineTo(125, 167);//Pierna 1
        this.ctx.stroke();
    
    }
    
    canvas6(){

    
        //limpiar el espacio de dibujo
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 6;
    
        //Dibujando lineas
        this.ctx.beginPath();
        this.ctx.moveTo(75,200);
        this.ctx.lineTo(125, 200);
        this.ctx.moveTo(100,200);
        this.ctx.lineTo( 100, 50);
        this.ctx.lineTo(150,50); //Otro palo más
        this.ctx.stroke();
    
    
        this.ctx.strokeStyle = "brown";
        this.ctx.beginPath();
        this.ctx.moveTo(145, 50);
        this.ctx.lineTo(145, 60); //Cuerda ahorcado
        this.ctx.stroke();
    
        //Dibujar cabeza:
        this.ctx.strokeStyle = "blue";
        this.ctx.beginPath();
        this.ctx.ellipse(145,80,17,17,0,0, Math.PI*2); //se establece centro y radios
        this.ctx.stroke();
    
        //Dibujar columna y piernas
        this.ctx.strokeStyle = "black";
        this.ctx.beginPath();
        this.ctx.moveTo(145, 97);
        this.ctx.lineTo(145, 147); //Columna
        this.ctx.lineTo(125, 167); //Pierna1
        this.ctx.moveTo(145, 147);
        this.ctx.lineTo(165, 167); //Pierna 2
        this.ctx.stroke();
    
    }
    
    canvas7(){
    
        //limpiar el espacio de dibujo
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 6;
    
        //Dibujando lineas
        this.ctx.beginPath();
        this.ctx.moveTo(75,200);
        this.ctx.lineTo(125, 200);
        this.ctx.moveTo(100,200);
        this.ctx.lineTo( 100, 50);
        this.ctx.lineTo(150,50); //Otro palo más
        this.ctx.stroke();
    
    
        this.ctx.strokeStyle = "brown";
        this.ctx.beginPath();
        this.ctx.moveTo(145, 50);
        this.ctx.lineTo(145, 60); //Cuerda ahorcado
        this.ctx.stroke();
    
        //Dibujar cabeza:
        this.ctx.strokeStyle = "blue";
        this.ctx.beginPath();
        this.ctx.ellipse(145,80,17,17,0,0, Math.PI*2); //se establece centro y radios
        this.ctx.stroke();
    
        //Dibujar columna, piernas y brazo
        this.ctx.strokeStyle = "black";
        this.ctx.beginPath();
        this.ctx.moveTo(145, 97);
        this.ctx.lineTo(145, 147); //Columna
        this.ctx.lineTo(125, 167); //Pierna1
    
        this.ctx.moveTo(145, 147);
        this.ctx.lineTo(165, 167); //Pierna 2
    
        this.ctx.moveTo(145, 107);
        this.ctx.lineTo(125, 127); //Brazo 1
    
        this.ctx.stroke();
    
    }
    
    canvas8(){
    
        //limpiar el espacio de dibujo
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 6;
    
        //Dibujando lineas
        this.ctx.beginPath();
        this.ctx.moveTo(75,200);
        this.ctx.lineTo(125, 200);
        this.ctx.moveTo(100,200);
        this.ctx.lineTo( 100, 50);
        this.ctx.lineTo(150,50); //Otro palo más
        this.ctx.stroke();
    
    
        this.ctx.strokeStyle = "brown";
        this.ctx.beginPath();
        this.ctx.moveTo(145, 50);
        this.ctx.lineTo(145, 60); //Cuerda ahorcado
        this.ctx.stroke();
    
        //Dibujar cabeza:
        this.ctx.strokeStyle = "blue";
        this.ctx.beginPath();
        this.ctx.ellipse(145,80,17,17,0,0, Math.PI*2); //se establece centro y radios
        this.ctx.stroke();
    
        //Dibujar columna, piernas y brazo
        this.ctx.strokeStyle = "black";
        this.ctx.beginPath();
        this.ctx.moveTo(145, 97);
        this.ctx.lineTo(145, 147); //Columna
        this.ctx.lineTo(125, 167); //Pierna1
    
        this.ctx.moveTo(145, 147);
        this.ctx.lineTo(165, 167); //Pierna 2
    
        this.ctx.moveTo(145, 107);
        this.ctx.lineTo(125, 127); //Brazo 1
    
        this.ctx.stroke();
    
        this.ctx.moveTo(145, 107);
        this.ctx.lineTo(165, 127); //Brazo 2
    
        this.ctx.stroke();
    
    }
}


