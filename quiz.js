const questions = [
    // ETAPA 1
    {
        question: "Quer começar?",
        options: ["Sim quero!",]
    },
    {
        question: "Qual é o seu sexo?",
        options: ["Masculino","Femenina","Prefiro não divulgar"]
    },
    {
        question: "Qual é o seu nível de experiência no mercado financeiro?",
        options: ["Sou iniciante e nunca investi antes.","Tenho um pouco de experiência, já fiz alguns investimentos simples.","Já invisto há algum tempo, mas quero aprender estratégias mais avançadas.","Sou um investidor experiente e já aplico em ações e outros ativos."]
    },
    {
        question: "Quanto você está disposto a investir inicialmente?",
        options: ["Quero começar com R$ 50.","Estou disposto a investir entre R$ 100 e R$ 500", "Tenho R$ 1.000 para começar a investir.", "Quero investir uma quantia maior, algo entre R$ 2.000 e R$ 5.000."]
    },





    // ETAPA 2
    {
        question: "Não tem experiência ou valores altos para começar a investir?",
        options: ["Não tenho experiência, mas quero aprender e começar com o que eu tiver." , "Ainda não tenho muito dinheiro para investir, mas estou disposto a começar com pouco.", "Estou começando agora, sem muito conhecimento, mas com vontade de aprender." , "Tenho um valor baixo para começar, mas quero saber como investir de forma segura e rentável."]
    },

    {
        question: "Já tentou investir alguma vez?",
        options: ["Sim, tentei, mas não obtive os resultados que esperava.", "Sim, fiz alguns investimentos, mas não me senti seguro nas minhas escolhas.","Ainda não tentei, mas tenho interesse em começar.","Não, nunca tentei investir, mas estou começando a estudar sobre isso agora."]
    },

    {
        question: "O que mais te estressaria se começasse a investir agora?",
        options: ["Não saber com quanto devo começar a investir.", "Não saber qual a melhor área para investir e ter bons resultados.", "A dificuldade de ter lucro rápido e ver meu dinheiro crescer.", "Ficar inseguro sobre quais decisões tomar para não perder dinheiro."]

    },
   
    // ETAPA 3
    {
        question: "Você quer aprender a investir R$ 100 ou menos e ter um retorno rápido?",
        options: ["Sim, quero aprender a investir com pouco e ver resultados rápidos!", "Prefiro começar com mais, mas quero aprender a investir rápido.", "Sim, acho que é possível ter lucro rápido com pouco investimento." , "Não, prefiro investir mais, mas estou aberto a aprender."]
    },
    {
        question: "Por que você quer começar a investir?",
        options: ["Quero mudar minha vida financeira e ter mais liberdade.", "Quero melhorar a vida da minha família e garantir um futuro melhor.", "Meu objetivo é comprar um carro novo e conquistar mais conforto.", "Quero comprar uma casa nova e realizar o sonho da minha família."]
    },

    {
        question: "Se você estiver ganhando mais de 10K por mês, continuará investindo?",
        options: ["Sim, quero fazer meu dinheiro crescer ainda mais.", "Sim, investir é a chave para manter e aumentar minha renda.", "Com certeza, quero garantir a segurança financeira a longo prazo.", "Sim, o investimento é essencial para alcançar meus objetivos financeiros."]
    },
   
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const questionData = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.textContent = questionData.question;

    const optionsElement = document.createElement('ul');
    optionsElement.className = 'options';

    questionData.options.forEach(option => {
        const optionElement = document.createElement('li');
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = 'option';
        optionInput.value = option;
        optionInput.id = option;

        const optionLabel = document.createElement('label');
        optionLabel.htmlFor = option;
        optionLabel.textContent = option;

        optionElement.appendChild(optionInput);
        optionElement.appendChild(optionLabel);
        optionsElement.appendChild(optionElement);
    });

    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}

function nextQuestion() {
    document.getElementById("container-esconder").classList.add("esconder");
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        // Store the selected answer (optional)
        const answer = selectedOption.value;
        console.log(`Answer to question ${currentQuestionIndex + 1}: ${answer}`);

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        alert('Por favor, selecione uma opção.');
    }
}

function showResults() {
    window.location.href = 'quiz2.html'; // Redireciona automaticamente para index.html
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});

