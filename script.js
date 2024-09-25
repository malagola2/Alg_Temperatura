// Solicitar a temperatura em graus Celsius

let Temperatura = parseFloat(prompt("Insira a Temperatura em graus Celsius:"));

// Verificar se a temperatura está Muito frio, Frio, Agradável ou Quente

if (Temperatura < 0) {
    alert ("Muito Frio");
} else if (Temperatura >=0 && Temperatura <=15){
    alert("Frio");
} else if(Temperatura >=16 && Temperatura <= 25){
    alert ("Agradável");
} else if (Temperatura >= 26 && Temperatura <=35){
    alert ("Quente"); 
} else{   
    alert ("muito Quente");
} 
