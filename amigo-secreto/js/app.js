let amigos = [];

function adicionar() {
    let amigo = document.querySelector('#nome-amigo');
    let lista = document.querySelector('#lista-amigos');
    
    amigos.push(amigo.value);

    if(lista.textContent == ''){
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    document.querySelector('#nome-amigo').value = '';
}

function sortear() {
    embaralha(amigos);
    

}

function reiniciar() {

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}