const inputText = document.querySelector(".ingresarText")
const texto = document.querySelector(".mensajero")


function btnEncriptar() {
    const TextoEncriptado = encriptador(inputText.value);
    texto.value = TextoEncriptado;
    inputText.value = "";    
    ocultar();

    
}

function encriptador(stringEncriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    return stringEncriptar;
   
}

function btnDesencritar() {
    const TextoEncriptado = desincriptado(inputText.value);
    texto.value = TextoEncriptado;
    inputText.value = "";
     document.getElementById("seimg").style.display ="none";
  document.getElementById("copiar").style.display ="block";
    
}

function desincriptado(stringDesencriptar) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }

    }
    return stringDesencriptar;
}

function copiarmensaje(){
    texto.select()
    navigator.clipboard.writeText(texto.value)
    texto.value="";
    alert("El texto fue copiado.")
  document.getElementById("seimg").style.display ="block";
 document.getElementById("copiar").style.display ="none";
}

function ocultar(){
  document.getElementById("seimg").style.display ="none";
  document.getElementById("copiar").style.display ="block";

}