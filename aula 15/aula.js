const usuario = {
    nome: "Pedro",
    idade: 18,
selecao: "Brasil"
}

const mensagemDeBoasVindas1 = "Bem vindo, torcedor Brasileiro";
const mensagemDeBoasVindas2 = "Bem vindo, torcedor Argentino";
const mensagemDeBoasVindasGeral = "Bem vindo, amante do esporte";

usuario.selecao === "Brasil" && usuario.idade >= 18
? console.log(mensagemDeBoasVindas1)

:usuario.selecao === "Argentino" && usuario.idade >=18
? console.log(mensagemDeBoasVindas2)

:usuario.idade >= 18
? console.log(mensagemDeBoasVindasGeral)
:console.log("Não vendemos ingressos para menores de 18 anos.");

const mensagemDeEscolha = "Clique no setor a qual deseja comprar seu ingresso";
const mensagemFinal = "Divirta-se no maracanã";

console.log(mensagemDeEscolha);
console.log(mensagemFinal);






