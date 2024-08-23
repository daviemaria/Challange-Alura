






const textArea = document.querySelector(".text-area");
const mensagem = document. querySelector(".mensagem"); 

function btnEncriptar ()   {
    const textEncriptado = encriptar(textArea.value);
    mensagem.value= textEncriptado;
    (document.querySelector(".text-area")).value = "";
}

function encriptar(strinencriptada) {
    let matrizCodigo = [["e" ,"enter"] , ["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]  ]
    strinencriptada = strinencriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(strinencriptada.includes(matrizCodigo[i] [0])){
            strinencriptada = strinencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo [i] [1]); 
        }
    } 

    return strinencriptada;
}
//
function btnDesencriptar ()   {
    const textEncriptado = desencriptar(textArea.value);
    mensagem.value= textEncriptado;
    (document.querySelector(".text-area")).value = "";
}

function desencriptar(strineDesencriptada) {
    let matrizCodigo = [["e" ,"enter"] , ["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]  ]
    strineDesencriptada = strineDesencriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(strineDesencriptada.includes(matrizCodigo[i] [1])){
            strineDesencriptada = strineDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo [i] [0]); 
        }
    } 

    return strineDesencriptada;
}