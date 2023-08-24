require('colors')

const matematicas = require('./modules/matematicas.js')

const main = () => {


    console.clear();
  
    console.log('***************************'.bgWhite);
    console.log('*  '.bgWhite + 'Ejercicios Matematicos '.bgWhite);
    console.log('*  '.bgWhite + '***********************'.bgWhite);
    console.log('***************************'.bgWhite );

    let mate1 = matematicas.getRandom();
    let mate2 = matematicas.getRandom();
    console.log('===================================================================================');
    console.log('===================================================================================');
    console.log('!' + "  " + "Numero aleatorio  " + " (1): ".red +
     "  " + mate1.toString().yellow , "  " + "Numero aleatorio  " + " (2): ".red + " " + 
     mate2.toString().yellow);

     console.log('***********************************************************************************');
     console.log('[');
     console.log('[' + "  " + "El resultado de la operacion add es: " +"   "+ 
     matematicas.add(mate1,mate2).toString().yellow);
    console.log('[' + "  " + "El resultado de la operacion substract es: " +
     matematicas.substract(mate1,mate2).toString().yellow);
    console.log('[' + "  " + "El resultado de la operacion multiply es: ".toString().white +
     matematicas.multiply(mate1,mate2).toString().yellow);
    console.log('[' + "  " + "El resultado de la operacion divide es: ".toString().white +
     matematicas.divide(mate1,mate2).toString().yellow);
    console.log('[');
    console.log('===================================================================================');
    
}
 
main()