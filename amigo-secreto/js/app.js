function adicionar() {
    let amigo = document.querySelector('#nome-amigo');
    let lista = document.querySelector('#lista-amigos');

    if(lista.textContent == ''){
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    document.querySelector('#nome-amigo').value = '';
}

function sortear() {

}

function reiniciar() {

}