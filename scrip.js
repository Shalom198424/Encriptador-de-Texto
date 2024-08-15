const d = document;
const textArea = d.querySelector(".text__area");
const imagenAbeja = d.querySelector(".abeja");
const botonEncriptar = d.querySelector(".boton-encriptar");
const botonDesencriptar = d.querySelector(".boton-desencriptar");
const mensajeTitulo = d.querySelector(".mensaje__titulo");
const mensajeText = d.querySelector(".mensaje__text");
const botonCopiar = d.querySelector(".boton-copiar");
const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < matrizCodigo.length; j++){
            if (letra=== matrizCodigo[j][0]) {
                encriptada = matrizCodigo[j][1];
            break;
    }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;    
}

function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < matrizCodigo.length; i++){
        let regex = new RegExp(matrizCodigo[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, matrizCodigo[i][0]);
    }
    return mensajeDesencriptado;
}

textArea.addEventListener("input", (e)=>{
mensajeTitulo.textContent = "";
mensajeText.textContent = "";
const allowedChars = /^[a-z0-9\s]*$/;
const textArea = e.target;
if (!allowedChars.test(textArea.value)) {
    textArea.value = textArea.value.slice(0, -1);
}
})

botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    mensajeText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    mensajeTitulo.textContent = "El resultado es:";    
})
 
botonDesencriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    mensajeText.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
    mensajeTitulo.textContent = "El resultado es:"
})

botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = mensajeText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        mensajeTitulo.textContent = "";
        mensajeText.textContent = "";
    })
})
