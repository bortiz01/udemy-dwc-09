/* -------------------------------------------------------------------------- */
/*                                    Date                                    */
/* -------------------------------------------------------------------------- */

const diaHoy = new Date();

let valor;

//retorna el numero del mes. 0 = enero
valor = diaHoy.getMonth();
//retorna el numero del dia de la semana. 0 = domingo
valor = diaHoy.getDay();
//retorna el numero del dia del mes
valor = diaHoy.getDate();
//retorna minutos de la hora
valor = diaHoy.getMinutes();
//retorna las horas del dia
valor = diaHoy.getHours();
//timestand
valor = diaHoy.getTime();
//anio actual
valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(1989); //setear un valor
valor = diaHoy.getFullYear();

console.log(valor);


//setear un fecha ( ANIO/MES/DIA)
const unDia = new Date('1989/04/15');

let valor2 = unDia.getDay();

console.log(valor2);