const searchBar = document.getElementById('search-bar');
const suggestionsList = document.getElementById('suggestion');

// Array de sugestões (substitua por suas operações)
const operations = [
  "Somar",
  "Subtrair",
  "Multiplicar",
  "Dividir",
  "Elevar"
];

// Função para filtrar sugestões
function filterSuggestions(searchTerm) {
    const filteredSuggestions = operations.filter(operation => operation.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return filteredSuggestions;
}

searchBar.addEventListener('focus', () => {
    suggestionsList.style.display = 'block';
});

suggestionsList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') { // Verifica se o elemento clicado é um <li>
        searchBar.value = event.target.textContent; // Preenche a barra de pesquisa com o texto da sugestão
        suggestionsList.style.display = 'none'; // Esconde a lista de sugestões
    }
});

// Função para exibir sugestões
function showSuggestions(suggestions) {
    suggestionsList.innerHTML = ''; // Limpa a lista antes de exibir novas sugestões
    if (suggestions.length > 0) { // Verifica se há sugestões antes de exibir a lista
        suggestionsList.style.display = 'block'; // Exibe a lista
    } 
    else {
        suggestionsList.style.display = 'none'; // Esconde a lista se não houver sugestões
    }
    suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('li');
        suggestionItem.textContent = suggestion;
        suggestionsList.appendChild(suggestionItem);   
  
    });
}

// Evento de digitação na barra de pesquisa
searchBar.addEventListener('keyup', function() {
    const searchTerm = searchBar.value;
    const filteredList = filterSuggestions(searchTerm);
    showSuggestions(filteredList);
});

// Opcional: Evento de clique em uma sugestão (para preencher a barra de pesquisa)
document.addEventListener('click', (event) => {
    const isClickInside = suggestionsList.contains(event.target) || searchBar.contains(event.target);
    if (!isClickInside) {
        suggestionsList.style.display = 'none';
    }
});

// Botão "Procurar"
const procurarButton = document.querySelector('.procurar-operacoes-btn');

// Evento de clique no botão "Procurar"
procurarButton.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do submit

    const searchTerm = searchBar.value.toLowerCase();
    const sectionToScroll = document.getElementById(searchTerm);

    if (sectionToScroll) {
        sectionToScroll.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Operação não encontrada.');
    }
});

// Selecionar os elementos do HTML para somar
const somaNum1Input = document.getElementById('soma-num1');
const somaNum2Input = document.getElementById('soma-num2');
const resultadoSoma = document.querySelector('.resultado-soma');
const botaoSomar = document.querySelector('.soma-btn');

// Adicionar um event listener ao botão de somar
botaoSomar.addEventListener('click', () => {
    // Obter os valores dos inputs
    const num1 = parseFloat(somaNum1Input.value);
    const num2 = parseFloat(somaNum2Input.value);

    // Realizar a soma
    const soma = num1 + num2;

    // Exibir o resultado
    resultadoSoma.textContent = `Resultado da soma entre ${num1} e ${num2} : ${soma}`;

    somaNum1Input.value = '';
    somaNum2Input.value = '';
});

// Selecionar os elementos do HTML para subtrair
const subNum1Input = document.getElementById('subtracao-num1');
const subNum2Input = document.getElementById('subtracao-num2');
const resultadoSubtracao = document.querySelector('.resultado-subtracao');
const botaoSubtrair = document.querySelector('.subtracao-btn');

// Adicionar um event listener ao botão de subtrair
botaoSubtrair.addEventListener('click', () => {
    // Obter os valores dos inputs
    const num1 = parseFloat(subNum1Input.value);
    const num2 = parseFloat(subNum2Input.value);

    // Realizar a subtracao
    const subtracao = num1 - num2;

    // Exibir o resultado
    resultadoSubtracao.textContent = `Resultado da subtração entre ${num1} e ${num2} : ${subtracao}`;

    subNum1Input.value = '';
    subNum2Input.value = '';
});

// Selecionar os elementos do HTML para multiplicar
const multNum1Input = document.getElementById('multiplicacao-num1');
const multNum2Input = document.getElementById('multiplicacao-num2');
const resultadoMultiplicacao = document.querySelector('.resultado-multiplicacao');
const botaoMultiplicar = document.querySelector('.multiplicacao-btn');

// Adicionar um event listener ao botão de multiplicar
botaoMultiplicar.addEventListener('click', () => {
    // Obter os valores dos inputs
    const num1 = parseFloat(multNum1Input.value);
    const num2 = parseFloat(multNum2Input.value);

    // Realizar a multiplicacao
    const multiplicacao = num1 * num2;

    // Exibir o resultado
    resultadoMultiplicacao.textContent = `Resultado da multiplicação entre ${num1} e ${num2} : ${multiplicacao}`;

    multNum1Input.value = '';
    multNum2Input.value = '';
})

// Selecionar os elementos do HTML para dividir
const divNum1Input = document.getElementById('divisao-num1');
const divNum2Input = document.getElementById('divisao-num2');
const resultadoDivisao = document.querySelector('.resultado-divisao');
const botaoDividir = document.querySelector('.divisao-btn');

// Adicionar um event listener ao botão de dividir
botaoDividir.addEventListener('click', () => {
    // Obter os valores dos inputs
    const num1 = parseFloat(divNum1Input.value);
    const num2 = parseFloat(divNum2Input.value);

    // Realizar a divisao
    if (num2 === 0) {
        resultadoDivisao.textContent = 'Não é possível dividir por zero!';
        divNum1Input.value = '';
        divNum2Input.value = '';
        return;
    };
    const divisao = num1 / num2;

    // Exibir o resultado
    resultadoDivisao.textContent = `Resultado da divisão entre ${num1} e ${num2} : ${divisao}`;

    divNum1Input.value = '';
    divNum2Input.value = '';
});

// Selecionar os elementos do HTML para elevar
const elevarNum1Input = document.getElementById('elevar-num1');
const elevarNum2Input = document.getElementById('elevar-num2');
const resultadoElevar = document.querySelector('.resultado-elevar');
const botaoElevar = document.querySelector('.elevar-btn');

// Adicionar um event listener ao botão de elevar
botaoElevar.addEventListener('click', () => {
    // Obter os valores dos inputs
    const num1 = parseFloat(elevarNum1Input.value);
    const num2 = parseFloat(elevarNum2Input.value);

    // Realizar a elevacao
    const elevacao = Math.pow(num1, num2);

    // Exibir o resultado
    resultadoElevar.textContent = `Resultado da elevação de ${num1} por ${num2} : ${elevacao}`;

    elevarNum1Input.value = '';
    elevarNum2Input.value = '';
});
