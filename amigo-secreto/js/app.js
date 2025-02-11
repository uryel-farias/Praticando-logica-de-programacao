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
    let sorteio = document.querySelector('#lista-sorteio');

    for(let i = 0; i < amigos.length; i++ ) {
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[ i+1 ] + '<br>'
        }
        
    }

}

function reiniciar() {

    document.querySelector('#nome-amigo').value = '';
    document.querySelector('#lista-amigos').innerHTML = '';
    document.querySelector('#lista-sorteio').innerHTML = '';
    amigos = [];

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}