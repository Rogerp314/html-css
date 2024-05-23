function realizarBusca() {
    const termoBusca = document.getElementById('pesquisa').value.toLowerCase();
    const listaItens = ['maçã', 'banana', 'laranja', 'uva']; // Exemplo de lista

    const resultados = listaItens.filter(item => item.toLowerCase().includes(termoBusca));

    const resultsContainer = document.getElementById('resultado');
    resultsContainer.innerHTML = ''; // Limpa resultados anteriores


    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        resultsContainer.appendChild(li);
    });
}