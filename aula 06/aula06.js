//Dados do aluno
let nome = "João";
let materia = "matematica";

//Notas do aluno
let nota1 = 6;
let nota2 = 7;
let nota3 = 9;

//Cálculo da média
let media = (nota1 + nota2 + nota3) / 3;

// exibição dos resultados
console.log("Aluno: " + nome);
console.log("Matéria: " + materia);
console.log("Média: " + media)

// Usando templante string
console.log(`O aluno ${nome} ficou com média ${media} em ${materia}`);