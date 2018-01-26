const cipher = () => {
  let input = $('#cipher').val();
  let letters = /[a-zA-Z\s]/g;

  let output = '';
  let content = $('#cipher').val().toUpperCase();
    if(/[a-zA-Z\s]/g.test(input) {



    console.log(content);

    for (let j = 0, l = content.length; j < l; j++) {
      //Por medio de la condicion de if verificamos que si el contenido ingresado contiene espacios
      if (content[j] === ' ') {
        //se respete y se ingrese este tambien
        output += ' ';
        //de lo contrario se lee normal y se le agrega a la variable output el valor cifrado utilizando los dos metodos de ASCII input1.charCodeAt(k) te brinda la posicion de la letra en el codigo ASCII Y String.fromCharCode() te brinda la letra en la posicion dada en codigo ASCII
      } else {
        output += String.fromCharCode((content.charCodeAt(j) - 65 + 33) % 26 + 65);
        };
      };
    } else {
      alert('Ingrese el mensaje que desea Cifrar');
    }
    $('.textCipher').text(output);
  };
  $('#btnCipher').click(cipher);

const decipher = () => {
  let input2 = $('#decipher').val();
  let output1 = '';
  for (let i = 0, l = input2.length; i < l; i++) {
    //Por medio de una condicional que en este caso es if preguntamos si if es igual a un espacio vacio
    if (input2[i] === ' ') {
      //Entonces agregamos un espacio vacio a la variable input2
      output1 += ' ';
      //De no tener espacios la palabra pasa tal y como esta, despues por medio de estas dos metodos del codigo ASCII se reemplaza la letra cifrada por las decifradas
    } else {
      output1 += String.fromCharCode((input2.charCodeAt(i) + 65 - 33) % 26 + 65);
    }
  }
  //Mostramos en pantalla la frase descifrada
  return $('.textDecipher').text(output1);
}
$('#btnDecipher').click(decipher);
