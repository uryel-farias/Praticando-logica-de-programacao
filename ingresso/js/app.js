let pistaDisponivel = parseInt(document.querySelector('#qtd-pista').textContent);
let superiorDisponivel = parseInt(document.querySelector('#qtd-superior').textContent);
let inferiorDisponivel = parseInt(document.querySelector('#qtd-inferior').textContent);

function comprar() {
    let tipoIngresso = document.querySelector('#tipo-ingresso').value;
    let quantidade = parseInt(document.querySelector('#qtd').value);

    if (tipoIngresso == "pista" ) {
        if(quantidade > pistaDisponivel){
            alert('Voce pediu uma quantidade superior ao que temos disponível. por favor tente novamente.');  
        } else {
                pistaDisponivel -= quantidade;
                document.querySelector('#qtd-pista').textContent= `${pistaDisponivel}`;
            }

    }

    if (tipoIngresso == "inferior" ) {
        if(quantidade > inferiorDisponivel){
            alert('Voce pediu uma quantidade superior ao que temos disponível. por favor tente novamente.');  
        } else {
                inferiorDisponivel -= quantidade;
                document.querySelector('#qtd-inferior').textContent= `${inferiorDisponivel}`;
            }

    }

    if (tipoIngresso == "superior" ) {
        if(quantidade > superiorDisponivel){
            alert('Voce pediu uma quantidade superior ao que temos disponível. por favor tente novamente.');  
        } else {
                superiorDisponivel -= quantidade;
                document.querySelector('#qtd-superior').textContent= `${superiorDisponivel}`;
            }

    }

        
    }

