function alterarStatus(status_id) {
    let gameCliacado = document.querySelector(`#game-${status_id}`);
    let imagem = gameCliacado.querySelector('.dashboard__item__img');
    let botao = gameCliacado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';


    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';


    }
}