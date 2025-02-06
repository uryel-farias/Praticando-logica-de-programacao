function adicionar() {
//recuperar valores - nome, quant, valores
    let produto = document.querySelector('#produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.querySelector('#quantidade');

    let preco = quantidade.value * valorUnitario;

    alert(nomeProduto);
    alert(valorUnitario);
    alert(preco)
//calcular preço = subtotal initário
//atualizar valor total

}

function limpar() {
//limpar carrinho
//limpar valores

}