const cipher = {
  encode: (displace, txt) => {
    //Aplicar un for, saber el # ASCII de cada letra para sumarle 65
    //y sumar el offset que lo entrega index js
    //%26 + 65 para que dé el número de la letra
    //cada letra se añada a la misma variable para imprimirla
    let array = txt.split("");
    let encrypt = "";
    array.forEach((e) => {
      let index = e.charCodeAt(0);
      if ((index > 64 && index < 91) || (index > 96 && index < 123)) {
        let x = index < 91 ? 65 : 97;
        let nextIndex = ((index - x + displace) % 26) + x;
        encrypt += String.fromCharCode(nextIndex);
      } else {
        encrypt += e;
      }
    });
    return encrypt;
  },
  decode: (displace, txt) => {
    //Tiene que distinguir espacios
    //Aplicar un for, saber el # ASCII de cada letra para restarle 65
    //y sumar el offset que lo entrega index js
    //%26 + 65 para que dé el número de la letra
    //cada letra se añada a la misma variable para imprimirla
    let array = txt.split("");
    let encrypt = "";
    array.forEach((e) => {
      let index = e.charCodeAt(0);
      if ((index > 64 && index < 91) || (index > 96 && index < 123)) {
        let x = index < 91 ? 90 : 122;
        let nextIndex = x - ((x - index + displace) % 26);
        encrypt += String.fromCharCode(nextIndex);
      } else {
        encrypt += e;
      }
    });
    return encrypt;
  },
  createCipherWithOffset(offset) {
    return {
      encode(string) {
        return cipher.encode(offset, string);
      },
      decode(string) {
        return cipher.decode(offset, string);
      },
    };
  },
};
export default cipher;

/*src/cipher.js:
Acá escribirás las 2 funciones necesarias para el usuario pueda cifrar o descifrar.
Para esto debes implementar el objeto cipher, el cual ya se encuentra exportado en el objeto global (window).
Este objeto (cipher) contiene dos métodos:
1. cipher.encode(offset, string): offset es el número de posiciones que queremos
mover a la derecha en el alfabeto y string el mensaje
(texto) que queremos cifrar.
2. cipher.decode(offset, string): offset es el número de posiciones que queremos
mover a la izquierda en el alfabeto y string el mensaje
(texto) que queremos descifrar.
*/
