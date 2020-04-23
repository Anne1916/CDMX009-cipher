import cipher from './cipher.js';

//console.log(cipher);

//manipulación del DOM

let buttonEncode = document.getElementById("encode");
let buttonDecode = document.getElementById("decode");
let string = '';
let offset = 0;

function myFunction() {
  string = document.getElementById("txt").value;//Valor del texto a descifrar
  offset = parseInt(document.getElementById("displace").value);
}

buttonEncode.onclick = () => {
  myFunction();
  document.getElementById("txtResult").value = cipher.encode(offset, string);
};

buttonDecode.onclick = () => {
  myFunction();
  document.getElementById("txtResult").value = cipher.decode(offset, string);
}; 

/*src/index.js:

Acá escribirás todo el código que tenga que ver con la interacción del DOM 
(seleccionar, actualizar y manipular elementos del DOM y eventos). 
Es decir, en este archivo deberás invocar a cipher.encode(offset, string) 
y cipher.decode(offset, string) según sea necesario para actualizar e
l resultado en la pantalla(UI).*/
