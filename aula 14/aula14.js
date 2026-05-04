const usuario = {
    nome: "Pedro",
    idade: 30,
    selecao: "Argertina"
}

console.log(usuario.idade);
  
const mensagemDeBoasVindas1 = "Bem vindo, torcedor Brasileiro";
const mensagemDeBoasVindas2 = "Bem vindo, torcedor Argentino";

usuario.selecao === "Brasil"
? console.log(mensagemDeBoasVindas1)
: console.log(mensagemDeBoasVindas2)
// ?  "se a condição for verdadeira, faça isso"
// : "senão (caso seja falsa), faça aquilo"


const mensagemDeEscolha = "Clique no setor a qual deseja comprar seu ingresso";
const mensagemFinal = "Divirta-se no maracanã";
console.log(mensagemDeEscolha);
console.log(mensagemFinal);