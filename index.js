// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem de cálculo da média.

const alunosDaTurmaA = [
    {
        nome: "Mayk",
        nota: 9.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 2
    },
    {
        nome: "Outro Aluno",
        nota: 6
    }
]

const alunosDaTurmaB = [
    {
        nome: "Ciclano",
        nota: 10
    },
    {
        nome: "Manu",
        nota: 3
    },
    {
        nome: "Mariana",
        nota: 7
    },
    {
        nome: "Novo Aluno",
        nota: 5
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma  / alunos.length
    return media 
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A media da ${turma} foi de ${media}. Parabens!`)
    }
    else {
        console.log( `A media da ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, "Turma A")
enviaMensagem(media2, "Turma B")






