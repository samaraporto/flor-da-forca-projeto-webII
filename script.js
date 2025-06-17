const bancoPalavras = [
  { palavra: "GATO", dica: "Animal que mia" },
  { palavra: "CACHORRO", dica: "Melhor amigo do homem" },
  { palavra: "CARRO", dica: "Tem quatro rodas e anda na rua" },
  { palavra: "FLOR", dica: "Planta bonita que cresce no jardim" },
  { palavra: "LIVRO", dica: "Tem páginas e você lê" },
  { palavra: "JANELA", dica: "Você olha para fora por aqui" },
  { palavra: "SOL", dica: "Estrela que ilumina nosso planeta" },
  { palavra: "LUA", dica: "Brilha no céu à noite" },
  { palavra: "CIDADE", dica: "Lugar onde moram muitas pessoas" },
  { palavra: "MESA", dica: "Onde colocamos comida para comer" },
  { palavra: "CADEIRA", dica: "Usada para sentar" },
  { palavra: "BICICLETA", dica: "Meio de transporte com duas rodas" },
  { palavra: "ESCOLA", dica: "Lugar para aprender" },
  { palavra: "PRAIA", dica: "Lugar com areia e mar" },
  { palavra: "MONTANHA", dica: "Grande elevação natural do terreno" },
  { palavra: "RIO", dica: "Água corrente natural" },
  { palavra: "GELADEIRA", dica: "Aparelho para conservar alimentos" },
  { palavra: "FELIZ", dica: "Sentimento de alegria" },
  { palavra: "TRABALHO", dica: "Atividade remunerada" },
  { palavra: "AMIGO", dica: "Pessoa querida e companheira" },
  { palavra: "ESPELHO", dica: "Mostra seu reflexo" },
  { palavra: "PASSEIO", dica: "Atividade para lazer" },
  { palavra: "JARDIM", dica: "Lugar onde se cultivam flores" },
  { palavra: "BOLA", dica: "Usada em muitos esportes" },
  { palavra: "TELA", dica: "Onde vemos imagens na TV ou computador" },
  { palavra: "CEU", dica: "Fica acima de nós, azul durante o dia" },
  { palavra: "FESTA", dica: "Evento para comemorar" },
  { palavra: "MUSICA", dica: "Arte dos sons" },
  { palavra: "DANÇA", dica: "Movimento rítmico do corpo" },
  { palavra: "COMIDA", dica: "O que se come" },
  { palavra: "BEBIDA", dica: "O que se bebe" },
  { palavra: "TELEFONE", dica: "Usado para conversar à distância" },
  { palavra: "RELOGIO", dica: "Mostra as horas" },
  { palavra: "LIVRARIA", dica: "Lugar que vende livros" },
  { palavra: "ARVORE", dica: "Planta grande com tronco" },
  { palavra: "NUVEM", dica: "Formação branca no céu" },
  { palavra: "ESTRELA", dica: "Brilha no céu à noite" },
  { palavra: "PASSEAR", dica: "Ir dar uma volta" },
  { palavra: "CINEMA", dica: "Lugar para assistir filmes" },
  { palavra: "QUADRO", dica: "Objeto na parede para desenhar ou pintar" },
  { palavra: "CHAVE", dica: "Usada para abrir portas" },
  { palavra: "GUERRA", dica: "Conflito entre países ou grupos" },
  { palavra: "PAZ", dica: "Ausência de conflito" },
  { palavra: "VIAGEM", dica: "Ir para outro lugar" },
  { palavra: "CACHOEIRA", dica: "Água caindo de uma altura" },
  { palavra: "ILHA", dica: "Terra cercada por água" },
  { palavra: "FLORESTA", dica: "Lugar com muitas árvores" }
];



const maxErros = 6;
let erros;
let letrasCorretas;
let palavraSecreta = '';
let dica = '';
let modoJogo = '';
let letrasUsadas = new Set(); // <<< ADICIONE ESTA LINHA


// --- Variáveis de Sessão ---
// Para 2 Jogadores
let jogador1 = { nome: '', pontuacao: 0 };
let jogador2 = { nome: '', pontuacao: 0 };
let definidorDaPalavra; // Guarda 1 ou 2

// Para 1 Jogador
let jogadorSolo = { nome: '', pontuacao: 0 };

// Para o Timer
let timer;
let tempoRestante;

// --- Elementos do DOM ---
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
const mensagemDiv = document.getElementById('mensagem');
const petalas = document.querySelectorAll('.petala');
const btnReiniciar = document.getElementById('btn-reiniciar');
const btnContinuar = document.getElementById('btn-continuar');

// ==================================================================
// INÍCIO DO JOGO E SELEÇÃO DE MODO
// ==================================================================

// NOVO: Event listener para o teclado físico
document.addEventListener('keydown', (e) => {
    // Só funciona se a tela do jogo estiver ativa
    if (document.getElementById('gameArea').style.display !== 'block' || mensagemDiv.textContent.includes('ganhou') || mensagemDiv.textContent.includes('perdeu') || mensagemDiv.textContent.includes('descobe')) {
        return;
    }

    const letra = e.key.toUpperCase();

    // Valida se é uma letra de A-Z (e não uma tecla como Shift, etc.)
    if (letra.length === 1 && letra >= 'A' && letra <= 'Z') {
        
        // Se a letra já foi usada, não faz nada
        if (letrasUsadas.has(letra)) {
            return;
        }

        // Adiciona a letra ao conjunto de usadas e atualiza o display
        letrasUsadas.add(letra);
        atualizarLetrasUsadas();

        // Roda a lógica do jogo com a nova letra
        verificarLetra(letra);
    }
});

btnSolo.addEventListener('click', () => {
    const nome = prompt("Digite o nome do jogador (Modo Solo):");
    if (!nome || nome.trim() === "") {
        alert("Nome inválido. O jogo não pode começar.");
        return;
    }
    
    jogadorSolo = { nome: nome.trim(), pontuacao: 0 };
    modoJogo = 'solo';
    
    const escolha = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)];
    palavraSecreta = escolha.palavra.toUpperCase().replace(/\s+/g, '-');
    dica = escolha.dica;
    
    telaInicial.style.display = 'none';
    iniciarJogo();
});

btnDois.addEventListener('click', () => {
    const nomeJ1 = prompt("Digite o nome do Jogador 1:");
    if (!nomeJ1 || nomeJ1.trim() === "") return alert("Nome inválido.");
    
    const nomeJ2 = prompt("Digite o nome do Jogador 2:");
    if (!nomeJ2 || nomeJ2.trim() === "") return alert("Nome inválido.");

    jogador1 = { nome: nomeJ1.trim(), pontuacao: 0 };
    jogador2 = { nome: nomeJ2.trim(), pontuacao: 0 };
    definidorDaPalavra = 1;
    modoJogo = 'dois';

    telaInicial.style.display = 'none';
    formDoisJogadores.style.display = 'flex';
    
    const labelPalavra = document.querySelector('#form-dois-jogadores label[for="input-palavra"]');
    labelPalavra.textContent = `Vez de ${jogador1.nome}: Digite a palavra secreta:`;
});

formDoisJogadores.addEventListener('submit', (e) => {
    e.preventDefault();
    const palavraInput = inputPalavra.value.trim();
    const dicaInput = inputDica.value.trim();
    if (!palavraInput || !dicaInput) return alert('Preencha palavra e dica!');

    if (!/^[a-zA-ZÀ-ÿ\s\-]+$/.test(palavraInput)) {
        return alert('Palavra deve conter apenas letras e espaços.');
    }

    palavraSecreta = palavraInput.toUpperCase().replace(/\s+/g, '-');
    dica = dicaInput;
    iniciarJogo();
    formDoisJogadores.style.display = 'none';
});

// ==================================================================
// LÓGICA PRINCIPAL DO JOGO (GAME LOOP)
// ==================================================================

function iniciarJogo() {
    erros = 0;
    letrasCorretas = new Set();
    letrasUsadas = new Set(); // Limpa as letras usadas no início de cada rodada
    atualizarLetrasUsadas(); // Limpa o display visualmente
    
    document.getElementById('gameArea').style.display = 'block'; // <<< ADICIONE ESTA LINHA

    document.getElementById('info-partida').style.display = 'flex';
    document.getElementById('letras-usadas-container').style.display = 'flex';


    if (modoJogo === 'solo') {
        document.getElementById('placar-j1').textContent = `${jogadorSolo.nome}: ${jogadorSolo.pontuacao}`;
        document.getElementById('placar-j2').textContent = '';
    } else {
        document.getElementById('placar-j1').textContent = `${jogador1.nome}: ${jogador1.pontuacao}`;
        document.getElementById('placar-j2').textContent = `${jogador2.nome}: ${jogador2.pontuacao}`;
    }

    svgFlor.style.display = 'block';
    dicaDiv.style.display = 'block';
    palavraDiv.style.display = 'block';
    mensagemDiv.style.display = 'none';
    btnReiniciar.style.display = 'inline-block';
    btnContinuar.style.display = 'none';
    tentativas.style.display = 'block';
    tentativas.textContent = 'Pétalas restantes: 6';
    dicaDiv.textContent = 'Dica: ' + dica;
    mensagemDiv.textContent = '';
    
    petalas.forEach(p => p.style.opacity = 1);

    mostrarPalavra();
    iniciarTimer();
}

// NOVA FUNÇÃO
function atualizarLetrasUsadas() {
    const display = document.getElementById('letras-usadas');
    display.innerHTML = ''; // Limpa o display
    
    // Pega as letras do Set, ordena alfabeticamente e exibe
    Array.from(letrasUsadas).sort().forEach(letra => {
        const span = document.createElement('span');
        span.textContent = letra;
        display.appendChild(span);
    });
}

// SUBSTITUÍDA: A antiga 'letraClicada' agora é 'verificarLetra'
function verificarLetra(letra) {
    if (palavraSecreta.includes(letra)) {
        letrasCorretas.add(letra);
        mostrarPalavra();
        
        if (ganhou()) {
            // ... a lógica de vitória continua EXATAMENTE a mesma de antes
            pararTimer();
            const pontosDaRodada = Math.max(10, 50 - (erros * 10) + (tempoRestante * 2));
            if (modoJogo === 'solo') {
                jogadorSolo.pontuacao += pontosDaRodada;
                mensagemDiv.textContent = `Você ganhou! +${pontosDaRodada} pontos!`;
            } else {
                if (definidorDaPalavra === 1) { 
                    jogador2.pontuacao += pontosDaRodada;
                    mensagemDiv.textContent = `Parabéns ${jogador2.nome}! +${pontosDaRodada} pontos!`;
                } else { 
                    jogador1.pontuacao += pontosDaRodada;
                    mensagemDiv.textContent = `Parabéns ${jogador1.nome}! +${pontosDaRodada} pontos!`;
                }
            }
            mensagemDiv.style.color = 'green';
            tentativas.style.display = 'none';
            finalizarJogo();
        }
    } else {
        // ... a lógica de erro continua EXATAMENTE a mesma de antes
        erros++;
        sumirPetala(erros);
        tentativas.textContent = `Pétalas restantes: ${maxErros - erros}`;
        if (erros >= maxErros) {
            pararTimer();
            if (modoJogo === 'solo') {
                mensagemDiv.textContent = 'Você perdeu! A palavra era: ' + palavraSecreta;
            } else {
                const pontosDaRodada = 50;
                if (definidorDaPalavra === 1) {
                    jogador1.pontuacao += pontosDaRodada;
                    mensagemDiv.textContent = `Palavra não descoberta! ${jogador1.nome} ganha +${pontosDaRodada} pts!`;
                } else {
                    jogador2.pontuacao += pontosDaRodada;
                    mensagemDiv.textContent = `Palavra não descoberta! ${jogador2.nome} ganha +${pontosDaRodada} pts!`;
                }
            }
            mensagemDiv.style.color = '#004d40';
            mostrarPalavraCompleta();
            finalizarJogo();
        }
    }
}

function finalizarJogo() {
    pararTimer(); 
    mensagemDiv.style.display = 'block';
    tentativas.style.display = 'none';
    btnReiniciar.style.display = 'inline-block';
    btnContinuar.style.display = 'inline-block';
}

btnContinuar.addEventListener('click', () => {
    if (modoJogo === 'solo') {
        const escolha = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)];
        palavraSecreta = escolha.palavra.toUpperCase().replace(/\s+/g, '-');
        dica = escolha.dica;
        iniciarJogo();
    } else if (modoJogo === 'dois') {
        definidorDaPalavra = definidorDaPalavra === 1 ? 2 : 1; 
        inputPalavra.value = '';
        inputDica.value = '';
        formDoisJogadores.style.display = 'flex';

        document.getElementById('gameArea').style.display = 'none';
        
        const proximoDefinidor = definidorDaPalavra === 1 ? jogador1.nome : jogador2.nome;
        document.querySelector('#form-dois-jogadores label[for="input-palavra"]').textContent = `Vez de ${proximoDefinidor}: Digite a palavra secreta:`;

        document.getElementById('info-partida').style.display = 'none';
        svgFlor.style.display = 'none';
        dicaDiv.style.display = 'none';
        palavraDiv.style.display = 'none';
        mensagemDiv.style.display = 'none';
        btnReiniciar.style.display = 'none';
        btnContinuar.style.display = 'none';
        tentativas.style.display = 'none';
    }
});

btnReiniciar.addEventListener('click', () => {
    if (modoJogo === 'solo') {
        if (jogadorSolo.nome && jogadorSolo.pontuacao > 0) {
            const confirmar = confirm(`Fim de jogo! Sua pontuação final foi ${jogadorSolo.pontuacao}. Deseja salvar no ranking?`);
            if (confirmar) {
                salvarPontuacao(jogadorSolo.nome, jogadorSolo.pontuacao, modoJogo);
            }
        }
    } else if (modoJogo === 'dois') {
        let vencedor;
        if (jogador1.pontuacao > jogador2.pontuacao) {
            vencedor = jogador1;
        } else if (jogador2.pontuacao > jogador1.pontuacao) {
            vencedor = jogador2;
        }

        if (vencedor) {
            alert(`A sessão terminou! O grande vencedor é ${vencedor.nome} com ${vencedor.pontuacao} pontos!`);
            const confirmar = confirm("Deseja salvar a pontuação do vencedor no ranking?");
            if (confirmar) {
                salvarPontuacao(vencedor.nome, vencedor.pontuacao, modoJogo);
            }
        } else {
            alert(`A sessão terminou em empate com ${jogador1.pontuacao} pontos! Nenhuma pontuação será salva.`);
        }
    }
    location.reload(); 
});


// ==================================================================
// FUNÇÕES AUXILIARES E DE UTILIDADE
// ==================================================================

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

function sumirPetala(num) {
    if (num <= petalas.length) {
        petalas[num - 1].style.opacity = 0;
    }
}

function ganhou() {
    for (let letra of palavraSecreta) {
        if (letra !== '-' && !letrasCorretas.has(letra)) return false;
    }
    return true;
}

function mostrarPalavraCompleta() {
    let display = '';
    for (let letra of palavraSecreta) {
        display += letra + ' ';
    }
    palavraDiv.textContent = display.trim();
}

// ==================================================================
// FUNÇÕES DE TIMER
// ==================================================================

function iniciarTimer() {
    tempoRestante = Math.max(25, palavraSecreta.replace(/-/g, '').length * 4);
    const timerDisplay = document.getElementById('info-timer');
    timerDisplay.textContent = `Tempo: ${tempoRestante}s`;

    clearInterval(timer); 

    timer = setInterval(() => {
        tempoRestante--;
        timerDisplay.textContent = `Tempo: ${tempoRestante}s`;
        if (tempoRestante <= 0) {
            clearInterval(timer);
            if (modoJogo === 'solo') {
                mensagemDiv.textContent = 'O tempo acabou! Você perdeu a rodada.';
            } else {
                const pontosDaRodada = 50;
                if (definidorDaPalavra === 1) {
                    jogador1.pontuacao += pontosDaRodada;
                    mensagemDiv.textContent = `Tempo esgotado! ${jogador1.nome} ganha +${pontosDaRodada} pts!`;
                } else {
                    jogador2.pontuacao += pontosDaRodada;
                    mensagemDiv.textContent = `Tempo esgotado! ${jogador2.nome} ganha +${pontosDaRodada} pts!`;
                }
            }
            mensagemDiv.style.color = '#004d40';
            mostrarPalavraCompleta();
            finalizarJogo();
        }
    }, 1000);
}

function pararTimer() {
    clearInterval(timer);
}

// ==================================================================
// FUNÇÕES DE RANKING (localStorage)
// ==================================================================

function carregarRankings() {
    const rankingSolo = JSON.parse(localStorage.getItem('rankingSolo')) || [];
    const rankingDoisJogadores = JSON.parse(localStorage.getItem('rankingDoisJogadores')) || [];
    atualizarDisplayRanking(rankingSolo, 'lista-ranking-solo');
    atualizarDisplayRanking(rankingDoisJogadores, 'lista-ranking-dois');
}

function atualizarDisplayRanking(ranking, elementoId) {
    const listaElemento = document.getElementById(elementoId);
    listaElemento.innerHTML = '';
    if (ranking.length === 0) {
        listaElemento.innerHTML = '<li>Nenhum registro ainda</li>';
        return;
    }
    ranking.sort((a, b) => b.pontuacao - a.pontuacao);
    const top5 = ranking.slice(0, 5);
    top5.forEach(jogador => {
        const li = document.createElement('li');
        li.textContent = `${jogador.nome} - ${jogador.pontuacao} pts`;
        listaElemento.appendChild(li);
    });
}

function salvarPontuacao(nome, pontuacao, modo) {
    const chaveRanking = modo === 'solo' ? 'rankingSolo' : 'rankingDoisJogadores';
    const ranking = JSON.parse(localStorage.getItem(chaveRanking)) || [];
    ranking.push({ nome, pontuacao });
    localStorage.setItem(chaveRanking, JSON.stringify(ranking));
    carregarRankings();
}

// Carrega os rankings assim que a página é aberta
document.addEventListener('DOMContentLoaded', carregarRankings);