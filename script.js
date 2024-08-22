const textoUsuario = document.querySelector(".texto__usuario");
const textoRespuesta = document.querySelector(".texto__respuesta");
const botonCopiar = document.querySelector(".boton__copiar");
const botonBorrar = document.querySelector(".boton__borrar");


// "a" es convertida en "ai"
// "e" es convertida en "enter"
// "i" es convertida en "imes"
// "o" es convertida en "ober"
// "u" es convertida en "ufat"

const refCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function caracteresEspeciales(texto) {
    const regex = /^[a-z\sñ]+$/;
    return !regex.test(texto);
}

function botonEncriptar() {
    const textoActual = textoUsuario.value.trim().toLowerCase();
    if (!textoActual) {
        alert("No hay texto para encriptar");
        return;
    }

    if (caracteresEspeciales(textoActual)) {
        alert("El texto contiene caracteres especiales o acentos.");
        return;
    }
    
    const textoEncriptado = encriptar(textoActual);
    textoRespuesta.value = textoEncriptado;
    textoUsuario.value = "";
    textoRespuesta.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    refCodigo.forEach(([original, reemplazo]) => {
        stringEncriptada = stringEncriptada.replaceAll(original, reemplazo);
    });
    return stringEncriptada;
}

function botonDesencriptar() {
    const textoEncriptado = textoUsuario.value.trim().toLowerCase();
    if (!textoEncriptado) {
        alert("No hay texto para desencriptar");
        return;
    }

    if (caracteresEspeciales(textoEncriptado)) {
        alert("El texto contiene caracteres especiales o acentos.");
        return;

    }
    
    const textoDesencriptado = desencriptar(textoEncriptado);
    textoRespuesta.value = textoDesencriptado;
    textoUsuario.value = "";
    textoRespuesta.style.backgroundImage = "none";
}

function desencriptar(stringDesEncriptada) {
    let textoDesencriptado = stringDesEncriptada;
            refCodigo.forEach(([original, reemplazo]) => {
                textoDesencriptado = textoDesencriptado.split(reemplazo).join(original);
            });
            return textoDesencriptado;
}

botonCopiar.addEventListener("click", function () {
    textoRespuesta.select();
    document.execCommand("copy");
});
