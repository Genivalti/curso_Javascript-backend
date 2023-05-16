const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11 555555550", "11 444444440" ],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
        console.log("Saldo insuficinte");
    } else {
        this.saldo -= valor;
        console.log(`Pagamento Realizado. Saldo atual : ${this.saldo}`);
    }
    }
}
cliente.efetuaPagamento(25)
