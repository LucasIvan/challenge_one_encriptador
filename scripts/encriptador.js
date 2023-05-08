const textArea = document.querySelector(".input-text");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    document.getElementById("previo").style.display = "none";
    document.getElementById("mensaje").style.display = "flex";
    const msjEncript = encriptar(textArea.value)
    mensaje.innerHTML = msjEncript
    textArea.value = ""

}

function btnDesencriptar() {
    document.getElementById("previo").style.display = "none";
    document.getElementById("mensaje").style.display = "flex";
    const msjEncript = desencriptar(textArea.value)
    mensaje.innerHTML = msjEncript
    textArea.value = ""
}

function btnCopiar() {
    const contenido = mensaje.innerHTML;
    navigator.clipboard.writeText(contenido)
}

function encriptar(encript) {
    let key = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    encript = encript.toLowerCase()
    for (let i = 0; i < key.length; i++) {
        if (encript.includes(key[i][0])) {
            encript = encript.replaceAll(key[i][0],key[i][1]);
        }
    }
    return encript
}

function desencriptar(encript) {
    let key = [["a","ai"], ["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    encript = encript.toLowerCase()
    for (let i = 0; i < key.length; i++) {
        if (encript.includes(key[i][1])) {
            encript = encript.replaceAll(key[i][1],key[i][0]);
        }
    }
    return encript
}