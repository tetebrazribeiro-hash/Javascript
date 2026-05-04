const usuario = {
    nome: "Pedro",
    idade: 30,
    selecao: "Brasil"
}

const mensagemDeBoasVindas1 = "Bem Vindo, Torcedor Brasileiro";
const mensagemDeBoasVindas2 = "Bem vindo, Torcedor Argentino";

if(usuario.selecao  === 'Brasil') {
    console.log(mensagemDeBoasVindas1);
} else {
    console.log(mensagemDeBoasVindas2)
}

const mensagemDeEscolha = "Clique no setor a qual deseja comprar seu ingresso"
const mensagemFinal = "Divirta-se no maracanã"

console.log(mensagemDeEscolha);
console.log(mensagemFinal);