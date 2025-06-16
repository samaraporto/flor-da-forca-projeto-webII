// Banco de palavras para jogo solo
const bancoPalavras = [
{ palavra: 'GATO', dica: 'É um animal que mia' },
{ palavra: 'CACHORRO', dica: 'Melhor amigo do homem' },
{ palavra: 'CARRO', dica: 'Tem quatro rodas e anda na rua' },
{ palavra: 'FLOR', dica: 'Planta bonita que cresce no jardim' },
{ palavra: 'LIVRO', dica: 'Tem páginas e conta histórias' },
{ palavra: 'MESA', dica: 'Onde colocamos objetos para trabalhar ou comer' },
{ palavra: 'SOL', dica: 'Estrela que ilumina nosso planeta' }
];

const maxErros = 6;
let erros;
let letrasCorretas;
let palavraSecreta = '';
let dica = '';
let modoJogo = ''; // Pode ser 'solo' ou 'dois'


// Elementos
const telaInicial = document.getElementById('tela-inicial');
const btnSolo = document.getElementById('btn-solo');
const btnDois = document.getElementById('btn-dois');
const formDoisJogadores = document.getElementById('form-dois-jogadores');
const inputPalavra = document.getElementById('input-palavra');
const inputDica = document.getElementById('input-dica');
const svgFlor = document.querySelector('svg');
const dicaDiv = document.getElementById('dica');
const tentativas = document.getElementById('tentativas');
const palavraDiv = document.getElementById('palavra');
const tecladoDiv = document.getElementById('teclado');
const mensagemDiv = document.getElementById('mensagem');
const petalas = document.querySelectorAll('.petala');
const btnReiniciar = document.getElementById('btn-reiniciar');
const btnContinuar = document.getElementById('btn-continuar');


// Event listeners - escolher modo jogo
btnSolo.addEventListener('click', () => {
    modoJogo = 'solo';
// escolhe palavra aleatória
const escolha = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)];
palavraSecreta = escolha.palavra.toUpperCase().replace(/\s+/g, '-');
dica = escolha.dica;
iniciarJogo();
telaInicial.style.display = 'none';
formDoisJogadores.style.display = 'none';
});

btnDois.addEventListener('click', () => {
modoJogo = 'dois';
telaInicial.style.display = 'none';
formDoisJogadores.style.display = 'flex';
});

// Submeter palavra e dica do form 2 jogadores
formDoisJogadores.addEventListener('submit', (e) => {
e.preventDefault();
const palavraInput = inputPalavra.value.trim();
const dicaInput = inputDica.value.trim();
if (!palavraInput || !dicaInput) return alert('Preencha palavra e dica!');

// Valida somente letras e espaços
if (!/^[a-zA-ZÀ-ÿ\s\-]+$/.test(palavraInput)) {
    return alert('Palavra deve conter apenas letras e espaços.');
}

palavraSecreta = palavraInput.toUpperCase().replace(/\s+/g, '-');
dica = dicaInput;
iniciarJogo();
formDoisJogadores.style.display = 'none';
});

// Inicializa o jogo (show flor, teclado, etc)
function iniciarJogo() {
erros = 0;
letrasCorretas = new Set();

// Mostrar tudo do jogo
svgFlor.style.display = 'block';
dicaDiv.style.display = 'block';
palavraDiv.style.display = 'block';
tecladoDiv.style.display = 'flex';
mensagemDiv.style.display = 'block';
btnReiniciar.style.display = 'none';
btnContinuar.style.display = 'none';
tentativas.style.display = 'block';

dicaDiv.textContent = 'Dica: ' + dica;
mensagemDiv.textContent = '';
mensagemDiv.style.color = '#d32f2f';

// Reset flor - pétalas visíveis
petalas.forEach(p => p.style.opacity = 1);

criarTeclado();
mostrarPalavra();
}

// Mostrar palavra no formato _ _ _ _
function mostrarPalavra() {
let display = '';
for (let letra of palavraSecreta) {
    if (letra === '-') {
      display += '- ';
    } else {
      display += letrasCorretas.has(letra) ? letra + ' ' : '_ ';
    }
}
palavraDiv.textContent = display.trim();
}

// Cria teclado virtual
function criarTeclado() {
tecladoDiv.innerHTML = '';
const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
for (let letra of letras) {
    const btn = document.createElement('button');
    btn.textContent = letra;
    btn.classList.add('tecla');
    btn.disabled = false;
    btn.addEventListener('click', () => letraClicada(letra, btn));
    tecladoDiv.appendChild(btn);
}
}

// Função letra clicada
function letraClicada(letra, botao) {
botao.disabled = true;
if (palavraSecreta.includes(letra)) {
    letrasCorretas.add(letra);
    mostrarPalavra();
    if (ganhou()) {
    mensagemDiv.style.color = 'green';
    mensagemDiv.textContent = 'Parabéns! Você ganhou!';
    tentativas.style.display = 'none';
    finalizarJogo();
    }
} else {
    erros++;
    sumirPetala(erros);
    tentativas.textContent = `Pétalas restantes: ${maxErros - erros}`;
    if (erros >= maxErros) {
    mensagemDiv.style.color = 'red';
    mensagemDiv.textContent = 'Você perdeu! A palavra era: ' + palavraSecreta;
    tentativas.style.display = 'none';
    mostrarPalavraCompleta();
    finalizarJogo();
    }
}
}

// Sumir pétala
function sumirPetala(num) {
if (num <= petalas.length) {
    petalas[num - 1].style.opacity = 0;
}
}

// Verifica se ganhou
function ganhou() {
for (let letra of palavraSecreta) {
    if (letra !== '-' && !letrasCorretas.has(letra)) return false;
}
return true;
}

// Mostra palavra completa no fim do jogo
function mostrarPalavraCompleta() {
let display = '';
for (let letra of palavraSecreta) {
    display += letra + ' ';
}
palavraDiv.textContent = display.trim();
}

// Desabilita teclado após fim
function desabilitarTeclado() {
const botoes = document.querySelectorAll('.tecla');
botoes.forEach(btn => btn.disabled = true);
}

// Finaliza jogo e mostra botão reiniciar
function finalizarJogo() {
desabilitarTeclado();
btnReiniciar.style.display = 'inline-block';
btnContinuar.style.display = 'inline-block';
}

// Botão reiniciar recarrega a página para voltar a tela inicial
btnReiniciar.addEventListener('click', () => {
location.reload();
});

btnContinuar.addEventListener('click', () => {
  if (modoJogo === 'solo') {
    const escolha = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)];
    palavraSecreta = escolha.palavra.toUpperCase();
    dica = escolha.dica;
    iniciarJogo();
  } else if (modoJogo === 'dois') {
    inputPalavra.value = '';
    inputDica.value = '';
    formDoisJogadores.style.display = 'flex';
    svgFlor.style.display = 'none';
    dicaDiv.style.display = 'none';
    palavraDiv.style.display = 'none';
    tecladoDiv.style.display = 'none';
    mensagemDiv.style.display = 'none';
    btnReiniciar.style.display = 'none';
    btnContinuar.style.display = 'none';
    tentativas.style.display = 'none';
  }
});
