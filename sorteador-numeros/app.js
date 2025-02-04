function sortear() {
    let quantidade = parseInt(document.querySelector('#quantidade').value);
    let aPartirDe = parseInt(document.querySelector('#de').value);
    let ate = parseInt(document.querySelector('#ate').value);

    let numerosSortiados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(aPartirDe, ate);

        while(numerosSortiados.includes(numero)) {
            numero = obterNumeroAleatorio(aPartirDe, ate);
        }
        numerosSortiados.push(numero);
    }

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `
    <label class="texto__paragrafo">Números sorteados: ${numerosSortiados}</label>
    `

}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}