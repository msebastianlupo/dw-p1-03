"use strict";

//NOTA: SE HA TOMADO COMO PROMEDIO LAS NOTAS EN CADA CASO (NO SE HA PEDIDO PORCENTAJES DE UN TOTAL).

let ingreso;
let contadorDesa = 0;
let acumuladorDesa = 0;
let contadorApro = 0;
let acumuladorApro = 0;
let contadorPromo = 0;
let acumuladorPromo = 0;
let minNota = 0;
let maxNota = 0;



do{
    ingreso = parseInt(prompt("Ingrese una nota. (tipear 0, dejar vacío o bien presionar 'Cancelar' para terminar)"));
    if(ingreso > 0 && ingreso < 11){
        if(ingreso < 4){
            contadorDesa++;
            acumuladorDesa += ingreso;
        }else if(ingreso >= 4){
            contadorApro++;
            acumuladorApro += ingreso;
            if(ingreso >= 7){
                contadorPromo++;
                acumuladorPromo += ingreso;
            }
        }
        if(minNota === 0){
            minNota = ingreso;
            maxNota = ingreso;
        }else if(ingreso < minNota){
            minNota = ingreso;
        }else if(ingreso >= maxNota && ingreso < 11){
            maxNota = ingreso;
        }
    }else if(ingreso < 1 || ingreso > 10){
        alert("Error: las notas ingresadas deben ser del 1 al 10")
    }
}while(ingreso);

if(minNota){
    let promedioDesa = "sin datos";
    let promedioApro = "sin datos";
    let promedioPromo = "sin datos";
    if(contadorDesa){
        promedioDesa = Number((acumuladorDesa / contadorDesa).toFixed(1));
    }
    if(contadorApro){
        promedioApro = Number((acumuladorApro / contadorApro).toFixed(1));
    }
    if(contadorPromo){
        promedioPromo = Number((acumuladorPromo / contadorPromo).toFixed(1));
    }
    document.write(`<b>***PROMEDIOS DISCRIMINANDO POR SEGMENTO - TOTAL ${contadorDesa + contadorApro} ALUMNO/S***<br>Promedio entre desaprobados: ${promedioDesa} - (${contadorDesa} alumno/s)<br>Promedio entre aprobados: ${promedioApro} - (${contadorApro} alumno/s)<br>Promedio entre promocionados: ${promedioPromo} - (${contadorPromo} alumno/s)<br>Nota mínima: ${minNota}<br>Nota máxima: ${maxNota}</b>`);
}