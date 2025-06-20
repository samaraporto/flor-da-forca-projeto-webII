const bancoPalavras = [
  { palavra: "ABACAXI", dica: "Fruta tropical com casca espinhosa" },
  { palavra: "AEROPORTO", dica: "Lugar onde aviões decolam e aterrissam" },
  { palavra: "AMIZADE", dica: "Relação de afeto entre pessoas" },
  { palavra: "ANIVERSÁRIO", dica: "Data em que se comemora o nascimento" },
  { palavra: "ARCO-ÍRIS", dica: "Fenômeno colorido no céu após a chuva" },
  { palavra: "AVENTURA", dica: "Experiência cheia de emoções e riscos" },
  { palavra: "BALANÇO", dica: "Brinquedo que vai para frente e para trás" },
  { palavra: "BANHO", dica: "Atividade para se limpar com água" },
  { palavra: "BARULHO", dica: "Som alto ou incômodo" },
  { palavra: "BIBLIOTECA", dica: "Lugar com muitos livros para leitura" },
  { palavra: "BOMBASTICO", dica: "Algo impressionante e exagerado" },
  { palavra: "BORBOLETA", dica: "Inseto colorido que voa de flor em flor" },
  { palavra: "CAFÉ", dica: "Bebida energética muito consumida de manhã" },
  { palavra: "CAMINHADA", dica: "Atividade de andar como exercício" },
  { palavra: "CARAMBOLA", dica: "Fruta em formato de estrela" },
  { palavra: "CASTELO", dica: "Construção antiga, lar de reis e rainhas" },
  { palavra: "CELEBRAÇÃO", dica: "Ato de comemorar algo especial" },
  { palavra: "CHAPÉU", dica: "Acessório usado na cabeça" },
  { palavra: "CHUVA", dica: "Gotas de água que caem do céu" },
  { palavra: "CINZENTO", dica: "Cor entre o preto e o branco" },
  { palavra: "CLARIDADE", dica: "Presença de muita luz" },
  { palavra: "COELHO", dica: "Animal conhecido por suas orelhas longas" },
  { palavra: "COMETA", dica: "Corpo celeste com cauda brilhante" },
  { palavra: "CONQUISTA", dica: "Ato de alcançar um objetivo" },
  { palavra: "CORAGEM", dica: "Falta de medo diante de desafios" },
  { palavra: "CORAÇÃO", dica: "Órgão que bombeia sangue e símbolo do amor" },
  { palavra: "CRIANÇA", dica: "Pessoa em fase de infância" },
  { palavra: "DELICIOSO", dica: "Algo com sabor muito bom" },
  { palavra: "DESAFIO", dica: "Tarefa difícil que testa habilidades" },
  { palavra: "DESENHO", dica: "Arte de criar imagens com lápis ou tinta" },
  { palavra: "DESERTO", dica: "Lugar com muito calor e pouca água" },
  { palavra: "DESTINO", dica: "Lugar para onde se vai" },
  { palavra: "DIAMANTE", dica: "Pedra preciosa muito valiosa" },
  { palavra: "DIVERSÃO", dica: "Atividade que causa alegria" },
  { palavra: "ECLIPSE", dica: "Quando a Lua ou o Sol ficam encobertos" },
  { palavra: "ELEFANTE", dica: "Maior mamífero terrestre" },
  { palavra: "ENERGIA", dica: "O que nos dá força para agir" },
  { palavra: "ESCURIDÃO", dica: "Ausência total de luz" },
  { palavra: "ESPETÁCULO", dica: "Apresentação artística para o público" },
  { palavra: "ESTAÇÃO", dica: "Período do ano como verão ou inverno" },
  { palavra: "ESTRELA", dica: "Corpo celeste que brilha no céu" },
  { palavra: "FANTASIA", dica: "Roupa usada em festas e carnavais" },
  { palavra: "FERIADO", dica: "Dia de descanso sem trabalho" },
  { palavra: "FERNANDO", dica: "Nome próprio masculino" },
  { palavra: "FLAMINGO", dica: "Ave rosa de pernas compridas" },
  { palavra: "FLORESTA", dica: "Conjunto denso de árvores" },
  { palavra: "FRAMBOESA", dica: "Pequena fruta vermelha e doce" },
  { palavra: "GALÁXIA", dica: "Conjunto de bilhões de estrelas" },
  { palavra: "GIRAFA", dica: "Animal de pescoço muito longo" },
  { palavra: "GUARDA-CHUVA", dica: "Usado para se proteger da chuva" },
  { palavra: "HARMONIA", dica: "Combinação agradável de elementos" },
  { palavra: "HIPOPÓTAMO", dica: "Grande mamífero que vive na água" },
  { palavra: "ILUMINAÇÃO", dica: "Ato de fornecer luz a um ambiente" },
  { palavra: "IMAGINAÇÃO", dica: "Capacidade de criar coisas na mente" },
  { palavra: "INSPIRAÇÃO", dica: "Motivação para criar ou agir" },
  { palavra: "INVERNO", dica: "Estação mais fria do ano" },
  { palavra: "JASMIM", dica: "Flor de perfume suave" },
  { palavra: "JORNADA", dica: "Viagem longa ou missão" },
  { palavra: "JUVENTUDE", dica: "Período da vida entre a infância e a idade adulta" },
  { palavra: "LABIRINTO", dica: "Caminho cheio de curvas e becos sem saída" },
  { palavra: "LANTERNA", dica: "Objeto usado para iluminar no escuro" },
  { palavra: "LIBERDADE", dica: "Estado de estar livre" },
  { palavra: "LIMONADA", dica: "Bebida feita com limão" },
  { palavra: "LUZ", dica: "O que permite enxergar no escuro" },
  { palavra: "MAGIA", dica: "Ato de fazer coisas incríveis acontecerem" },
  { palavra: "MARAVILHA", dica: "Algo muito bonito ou impressionante" },
  { palavra: "MERCÚRIO", dica: "Planeta mais próximo do Sol" },
  { palavra: "MIRAGEM", dica: "Ilusão de ótica no deserto" },
  { palavra: "MISTÉRIO", dica: "Algo desconhecido ou secreto" },
  { palavra: "MONTANHA", dica: "Grande elevação de terra" },
  { palavra: "MÚSICA", dica: "Sequência de sons agradáveis" },
  { palavra: "NEVE", dica: "Água congelada em flocos" },
  { palavra: "OCEANO", dica: "Grande massa de água salgada" },
  { palavra: "ORQUESTRA", dica: "Grupo de músicos tocando juntos" },
  { palavra: "OUTONO", dica: "Estação em que as folhas caem" },
  { palavra: "PANDERETA", dica: "Instrumento de percussão" },
  { palavra: "PANTANAL", dica: "Maior planície alagada do mundo" },
  { palavra: "PARALELEPÍPEDO", dica: "Bloco usado em calçamentos" },
  { palavra: "PASSEIO", dica: "Saída para lazer" },
  { palavra: "PAZ", dica: "Ausência de conflitos" },
  { palavra: "PÉTALA", dica: "Parte delicada de uma flor" },
  { palavra: "PIQUENIQUE", dica: "Refeição ao ar livre" },
  { palavra: "PIRÂMIDE", dica: "Estrutura com base larga e topo pontudo" },
  { palavra: "PLANETA", dica: "Corpo celeste que orbita uma estrela" },
  { palavra: "PORTA", dica: "Entrada de um ambiente" },
  { palavra: "PRIMAVERA", dica: "Estação das flores" },
  { palavra: "QUADRO", dica: "Objeto de decoração com pintura ou foto" },
  { palavra: "RAPOSA", dica: "Animal conhecido por sua astúcia" },
  { palavra: "RELÂMPAGO", dica: "Clarão no céu durante tempestades" },
  { palavra: "RISO", dica: "Som de alguém feliz" },
  { palavra: "ROCHEDO", dica: "Grande formação de pedra" },
  { palavra: "SABEDORIA", dica: "Conhecimento profundo e experiência" },
  { palavra: "SAUDADE", dica: "Sentimento de falta de algo ou alguém" },
  { palavra: "SEGREDO", dica: "Informação guardada" },
  { palavra: "SERENIDADE", dica: "Estado de calma e tranquilidade" },
  { palavra: "SORVETE", dica: "Sobremesa gelada" },
  { palavra: "TEMPESTADE", dica: "Fenômeno com ventos fortes e chuva" },
  { palavra: "TESOURO", dica: "Algo de muito valor escondido" },
  { palavra: "TRAVESSIA", dica: "Ato de atravessar de um lado ao outro" },
  { palavra: "TROVÃO", dica: "Som após o relâmpago" },
  { palavra: "VENTANIA", dica: "Vento muito forte" },
  { palavra: "VIAGEM", dica: "Ir a outro lugar distante" },
  { palavra: "VIOLINO", dica: "Instrumento de cordas tocado com arco" }
];


// variaveis do jogo
const maxErros = 6;
let erros;
let letrasCorretas;
let palavraSecreta = '';
let dica = '';
let modoJogo = '';
let letrasUsadas = new Set();
const palavrasUsadas = new Set();



// variáveis de sessão 
// para 2 jogadores
let jogador1 = { nome: '', pontuacao: 0 };
let jogador2 = { nome: '', pontuacao: 0 };
let definidorDaPalavra; 

// para 1 jogador
let jogadorSolo = { nome: '', pontuacao: 0 };

// para o timer
let timer;
let tempoRestante;

// elementos do dom
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
const gameArea = document.getElementById('gameArea');
const infoPartida = document.getElementById('info-partida');
const letrasUsadasContainer = document.getElementById('letras-usadas-container');
const placarJ1 = document.getElementById('placar-j1');
const placarJ2 = document.getElementById('placar-j2');
const displayLetrasUsadas = document.getElementById('letras-usadas');
const teclado = document.getElementById('teclado-virtual');



// ==================================================================
// inicio do jogo e seleção do modo
// ==================================================================

// event listener para o teclado físico
document.addEventListener('keydown', (e) => {
    if (document.getElementById('gameArea').style.display !== 'block' || mensagemDiv.textContent.includes('ganhou') || mensagemDiv.textContent.includes('perdeu') || mensagemDiv.textContent.includes('descobe')) {
        return;
    }

    const letra = e.key.toUpperCase();

    if (letra.length === 1 && letra >= 'A' && letra <= 'Z') {
        
        // se a letra já foi usada, não faz nada
        if (letrasUsadas.has(letra)) {
            return;
        }

        // adiciona a letra ao conjunto de usadas e atualiza o display
        letrasUsadas.add(letra);
        atualizarLetrasUsadas();

        // roda a lógica do jogo com a nova letra
        verificarLetra(letra);
    }
});

btnSolo.addEventListener('click', () => {
    const nome = prompt("Digite o nome do jogador (Modo Solo):");
    if (!nome || nome.trim() === "") {
        alert("Nome inválido. O jogo não pode começar.");
        return;
    }
    
    jogadorSolo = { nome: nome.trim().toUpperCase(), pontuacao: 0 };
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

    jogador1 = { nome: nomeJ1.trim().toUpperCase(), pontuacao: 0 };
    jogador2 = { nome: nomeJ2.trim().toUpperCase(), pontuacao: 0 };
    definidorDaPalavra = 1;
    modoJogo = 'dois';

    telaInicial.style.display = 'none';
    formDoisJogadores.style.display = 'flex';
    btnReiniciar.style.display = 'inline-block';
    
    const labelPalavra = document.querySelector('#form-dois-jogadores label[for="input-palavra"]');
    labelPalavra.textContent = `Vez de ${jogador1.nome}: Digite a palavra secreta:`;
    labelPalavra.innerHTML = `${jogador1.nome} escolhe a palavra e ${jogador2.nome} tenta adivinhar a palavra <br/><br/>${jogador1.nome}, digite a palavra secreta:`;

});

formDoisJogadores.addEventListener('submit', (e) => {
    e.preventDefault();
    const palavraInput = inputPalavra.value.trim();
    const dicaInput = inputDica.value.trim();
    if (!palavraInput || !dicaInput) return alert('Preencha palavra e dica!');

    if (!/^[a-zA-ZÀ-ÿ\s\-]+$/.test(palavraInput)) {
        return alert('Palavra deve conter apenas letras, espaços e hífens.');
    }

    palavraSecreta = palavraInput.toUpperCase().replace(/\s+/g, '-');
    dica = dicaInput;
    iniciarJogo();
    formDoisJogadores.style.display = 'none';
    btnReiniciar.style.display = 'inline-block';
});


btnContinuar.addEventListener('click', () => {
  if (modoJogo === 'solo') {
    const escolha = sortearPalavraNova();
    if (!escolha) {
      // todas as palavras já foram usadas, encerra o jogo
      mensagemDiv.textContent = 'Parabéns! Você já adivinhou todas as palavras disponíveis.';
      mensagemDiv.style.color = '#004d40';
      finalizarJogo();
      return;
    }
    palavraSecreta = escolha.palavra.toUpperCase().replace(/\s+/g, '-');
    dica = escolha.dica;
    iniciarJogo();
  }else if (modoJogo === 'dois') {
        definidorDaPalavra = definidorDaPalavra === 1 ? 2 : 1; 
        inputPalavra.value = '';
        inputDica.value = '';
        formDoisJogadores.style.display = 'flex';

        //gameArea.style.display = 'none';
        btnReiniciar.style.display = 'inline-block';
        
        const proximoDefinidor = definidorDaPalavra === 1 ? jogador1.nome : jogador2.nome;
        const proximoAdidvinhador = definidorDaPalavra === 1 ? jogador2.nome : jogador1.nome;

        document.querySelector('#form-dois-jogadores label[for="input-palavra"]').innerHTML = `${proximoDefinidor} escolhe a palavra e ${proximoAdidvinhador} tenta adivinhar a palavra <br/><br/>${proximoDefinidor}, digite a palavra secreta:`;

        document.getElementById('info-partida').style.display = 'none';
        svgFlor.style.display = 'none';
        dicaDiv.style.display = 'none';
        palavraDiv.style.display = 'none';
        mensagemDiv.style.display = 'none';
        btnContinuar.style.display = 'none';
        tentativas.style.display = 'none';
        btnReiniciar.style.display = 'inline-block';

    }
});

btnReiniciar.addEventListener('click', () => {
    palavrasUsadas.clear(); // limpa as palavras usadas

    if (modoJogo === 'solo') {
        if (jogadorSolo.nome && jogadorSolo.pontuacao > 0) {
            alert(`Fim de jogo! ${jogadorSolo.nome} fez ${jogadorSolo.pontuacao} pontos!`);

            const confirmar = confirm(`Deseja salvar a pontuação de ${jogadorSolo.nome}?`);
            if (confirmar) {
                salvarPontuacao(jogadorSolo.nome, jogadorSolo.pontuacao, modoJogo);
            }
        }
    } else if (modoJogo === 'dois') {
        let vencedor;
        let mensagem = '';

        if (jogador1.pontuacao > jogador2.pontuacao) {
            vencedor = jogador1;
            mensagem = `🏆 ${vencedor.nome} venceu com ${vencedor.pontuacao} pontos!`;
        } else if (jogador2.pontuacao > jogador1.pontuacao) {
            vencedor = jogador2;
            mensagem = `🏆 ${vencedor.nome} venceu com ${vencedor.pontuacao} pontos!`;
        } else {
            mensagem = `🤝 Empate! Ambos fizeram ${jogador1.pontuacao} pontos!`;
        }

        alert(`Fim de jogo!\n${mensagem}`);

        if (vencedor) {
            const confirmar = confirm(`Deseja salvar a pontuação de ${vencedor.nome}?`);
            if (confirmar) {
                salvarPontuacao(vencedor.nome, vencedor.pontuacao, modoJogo);
            }
        }
    }

    // Se o botão foi clicado enquanto estava no formulário
    if (formDoisJogadores.style.display === 'flex') {
        formDoisJogadores.style.display = 'none';
        telaInicial.style.display = 'block';
        btnReiniciar.style.display = 'none';
        return;
    }

    // Recarrega a página para resetar tudo
    location.reload();
});



// ==================================================================
// logica principal do jogo (game loop)
// ==================================================================

function iniciarJogo() {
    erros = 0;
    letrasCorretas = new Set();
    letrasUsadas = new Set(); 
    atualizarLetrasUsadas(); 
    
    gameArea.style.display = 'block';
    infoPartida.style.display = 'flex';
    letrasUsadasContainer.style.display = 'flex';

    if (modoJogo === 'solo') {
        placarJ1.textContent = `${jogadorSolo.nome}: ${jogadorSolo.pontuacao}`;
        placarJ2.textContent = '';
    } else {
        placarJ1.textContent = `${jogador1.nome}: ${jogador1.pontuacao}`;
        placarJ2.textContent = `${jogador2.nome}: ${jogador2.pontuacao}`;
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
    criarTecladoVirtual();
}

function atualizarLetrasUsadas() {
    displayLetrasUsadas.innerHTML = ''; 
    
    // pega as letras do set, ordena alfabeticamente e exibe
    Array.from(letrasUsadas).sort().forEach(letra => {
        const span = document.createElement('span');
        span.textContent = letra;
        displayLetrasUsadas.appendChild(span);
    });
}

function sortearPalavraNova() {
  if (palavrasUsadas.size === bancoPalavras.length) {
    return null;  // sinaliza que não tem mais palavra para sortear
  }
  let escolha;
  do {
    escolha = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)];
  } while (palavrasUsadas.has(escolha.palavra));
  palavrasUsadas.add(escolha.palavra);
  return escolha;
}



function verificarLetra(letra) {
    if (palavraSecreta.includes(letra)) {
        letrasCorretas.add(letra);
        mostrarPalavra();
        
        if (ganhou()) {
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
    letrasUsadasContainer.style.display = 'none';
    teclado.style.display = 'none';
    if (modoJogo === 'solo') {
        placarJ1.textContent = `${jogadorSolo.nome}: ${jogadorSolo.pontuacao}`;
    } else {
        placarJ1.textContent = `${jogador1.nome}: ${jogador1.pontuacao}`;
        placarJ2.textContent = `${jogador2.nome}: ${jogador2.pontuacao}`;
    }
}



// ==================================================================
// funções auxiliares e de utilidades
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

function atualizarNomeAdivinhador() {
    const infoPartida = document.getElementById('info-partida');
    let nomeAdivinhador = definidorDaPalavra === 1 ? jogador2.nome : jogador1.nome;
    infoPartida.innerHTML = `Vez de adivinhar: <span style="color: green;">(${nomeAdivinhador})</span>`;
}


function mostrarPalavraCompleta() {
    let display = '';
    for (let letra of palavraSecreta) {
        display += letra + ' ';
    }
    palavraDiv.textContent = display.trim();
}

function criarTecladoVirtual() {
    const tecladoDiv = document.getElementById('teclado-virtual');
    tecladoDiv.innerHTML = ''; // Limpa se já existir algo

    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÂÊÔÃÕÇ'.split('');

    letras.forEach(letra => {
        const botao = document.createElement('button');
        botao.textContent = letra;
        botao.classList.add('tecla-virtual');
        botao.addEventListener('click', () => {
            if (!letrasUsadas.has(letra)) {
                letrasUsadas.add(letra);
                atualizarLetrasUsadas();
                verificarLetra(letra);
                botao.disabled = true; // Desabilita a tecla depois de clicada
            }
        });
        tecladoDiv.appendChild(botao);
    });

    tecladoDiv.style.display = 'flex';
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

// carrega os rankings assim que a página é aberta
document.addEventListener('DOMContentLoaded', carregarRankings);