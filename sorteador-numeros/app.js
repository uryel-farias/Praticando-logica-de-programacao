function sortear() {
    let quantidade = parseInt(document.querySelector('#quantidade').value);
    let aPartirDe = parseInt(document.querySelector('#de').value);
    let ate = parseInt(document.querySelector('#ate').value);

    let numerosSortiados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(aPartirDe, ate);
        numerosSortiados.push(numero);
    }

    alert(numerosSortiados);

}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}