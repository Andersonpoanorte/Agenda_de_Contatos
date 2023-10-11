const form = document.getElementById('form-contatos');
const cadastradoEmoji = '<img src="./assets/imagens/cadastro.png" alt="icon-cadastro"';
const nomes = [];
const contatos = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha() {
    const inputNome = document.getElementById('Nome-Contato');
    const inputContato = document.getElementById('Numero-Contato');

    if (nomes.includes(inputNome.value)) {
        alert(`Este contato: ${inputNome.value} já existe`);
    } else {
        nomes.push(inputNome.value);
        contatos.push(parseInt(inputContato.value));
        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputContato.value}</td>`;
        linha += `<td>${inputNome.value && inputContato.value ? cadastradoEmoji : 'Não cadastrado'}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNome.value = '';
    inputContato.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}