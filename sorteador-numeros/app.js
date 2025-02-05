function sortear() {
    let quantidade = parseInt(document.querySelector('#quantidade').value);
    let aPartirDe = parseInt(document.querySelector('#de').value);
    let ate = parseInt(document.querySelector('#ate').value);

    let numerosSortiados = [];
    let numero;

    if (aPartirDe >= ate ) {
        alert('O valor do campo "Do número" é maior do que a quantidade definina no campo "Até". Por favor digite novamente.');

        document.querySelector('#de').value = '';
        document.querySelector('#ate').value = '';
    }else {
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
        `;
        alterarStatusBotao();

    }


}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.querySelector('#btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar () {
    document.querySelector('#quantidade').value = '';
    document.querySelector('#de').value = '';
    document.querySelector('#ate').value = '';
    document.querySelector('#resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao();

}