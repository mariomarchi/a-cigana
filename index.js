// Cria uma const que seleciona a tag h3 com id 'resposta' no HTML, para ser utilizada posteriormente
const elementoResposta = document.querySelector("#resposta")

// Cria uma const que seleciona a tag de input com o id 'inputPergunta', para ser utilizada posteriormente
const inputPergunta = document.querySelector("#inputPergunta")

const buttonPerguntar = document.querySelector("#buttonPerguntar")

// Declara a const que contém toda a variedade de respostas possíveis que a cigana resposde
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

// Declara a função que será executada através da propriedade 'onclick' passada na tag <button> do HTML
function fazerPergunta() {

    // Cria uma regra que retorna uma janela de alerta solicitando ao usuário à inserir uma resposta, CASO o mesmo não digite uma pergunta
    if(inputPergunta.value == "") {
    alert("Eu respondo perguntas, mas não leio mentes. Digite uma pergunta.")
    return
    }

    buttonPerguntar.setAttribute("disabled", true)

    // Cria uma div no HTML que contém o valor inserido (pergunta digitada) na tag <input>
    const perguntaDigitada = "<div>" + inputPergunta.value + "</div>"


    // Gerar resposta aleatória

    // Declara const que tem como valor a quantidade de itens inseridos na const respostas
    const totalRespostas = respostas.length

    // Gera um número aleatório que respeita o valor máximo da const totalRespostas utilizando os objetos Math.random e Math.floor e a const totalRespostas
    // Math.floor = arredonda para baixo (em números inteiros) o valor recebido
    // Math.random = gera um número randomico de 0 a 1
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)


    // Mostra para o usuário, inserindo no HTML, o valor da const perguntaDigitada concatenada com um item/valor da const respostas
    elementoResposta.innerHTML = perguntaDigitada + respostas[numeroAleatorio]

    elementoResposta.style.opacity =1;

    // faz a pergunta e resposta printadas na tela sumir, através de setar a opacidade do elemento para zero após 3 segundos da execução da função
    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)

}