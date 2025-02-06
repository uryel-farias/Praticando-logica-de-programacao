function adicionar() {
//recuperar valores - nome, quant, valores
    let produto = document.querySelector('#produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.querySelector('#quantidade').value;

//calcular preço = subtotal initário
    let preco = quantidade * valorUnitario;

//atualizar valor total
    let carrinho = document.querySelector('#lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `
            <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>
    `;
}

function limpar() {
//limpar carrinho
//limpar valores

}