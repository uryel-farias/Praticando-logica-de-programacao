let precoTotal= 0;

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

    quantidade.value = '';

    precoTotal += preco;
    let carrinhoTotal = document.querySelector('#valor-total');
    carrinhoTotal.innerHTML = `
    <span class="texto-azul" id="valor-total">R$${precoTotal}</span>
    `;
    
    
}

function limpar() {
//limpar carrinho
    let listaProdutos = document.querySelector('#lista-produtos');
    listaProdutos.innerHTML = `
          <section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          
        </section>
      </section>
    `
//limpar valores
    let carrinhoTotal = document.querySelector('#valor-total');
    carrinhoTotal.innerHTML = `
    <span class="texto-azul" id="valor-total">R$0,00</span>
    `;

    quantidade.value = '';
}