const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11 555555550", "11 444444440" ]
};

cliente.enderecos = [{
    rua: "Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}
];

cliente.enderecos.push({
    rua: "R. Joseph ladder",
    apartamento: false,
    numero: 404
})

const listaApenasApartamento = cliente.enderecos.filter((endereco) =>
    endereco.apartamento === true
);

console.log(listaApenasApartamento);