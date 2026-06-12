// ==========================================
// MÓDULO 1: CALCULADORA AGROSUSTENTÁVEL
// ==========================================
function calcularSustentabilidade() {
  const area = parseFloat(document.getElementById("txt-area").value);
  const chkDireto = document.getElementById("chk-direto").checked;
  const chkGotejamento = document.getElementById("chk-gotejamento").checked;
  const chkSolar = document.getElementById("chk-solar").checked;
  
  const textoImpacto = document.getElementById("texto-impacto");
  const barra = document.getElementById("barra-impacto");
  
  // Limpa classes anteriores da barra
  barra.className = "barra-progresso";

  if (isNaN(area) || area <= 0) {
    textoImpacto.innerText = "Por favor, digite o tamanho da área.";
    return;
  }

  // Contagem de quantas práticas sustentáveis foram marcadas
  let praticasMarcadas = 0;
  if (chkDireto) praticasMarcadas++;
  if (chkGotejamento) praticasMarcadas++;
  if (chkSolar) praticasMarcadas++;

  // Condicionais baseadas nos intervalos de práticas adotadas
  if (praticasMarcadas === 0) {
    textoImpacto.innerText = "Sustentabilidade Baixa. Adote práticas sustentáveis para proteger sua terra!";
    barra.classList.add("nivel-baixo");
  } 
  else if (praticasMarcadas === 1 || praticasMarcadas === 2) {
    // Exemplo matemático de estimativa fictícia de água poupada (Prática do Agrinho)
    const litrosPoupados = area * praticasMarcadas * 150;
    textoImpacto.innerText = `Boa iniciativa! Sua propriedade economiza estimadamente ${litrosPoupados}L de água/mês.`;
    barra.classList.add("nivel-medio");
  } 
  else {
    textoImpacto.innerText = "Excelente! Propriedade modelo do Agrinho com pegada ecológica ideal.";
    barra.classList.add("nivel-alto");
  }
}

// ==========================================
// MÓDULO 2: QUIZ EDUCATIVO DO AGRINHO
// ==========================================
const perguntasQuiz = [
  {
    pergunta: "Qual dessas práticas ajuda a evitar a erosão do solo no campo?",
    opcoes: ["Queimada controlada", "Plantio Direto na palha", "Uso intensivo de tratores"],
    correta: 1
  },
  {
    pergunta: "O Programa Agrinho incentiva a conexão e o respeito entre quais ambientes?",
    opcoes: ["Apenas grandes metrópoles", "Campo e Cidade", "Indústria e Comércio"],
    correta: 1
  },
  {
    pergunta: "Qual método de irrigação evita o desperdício controlando as gotas de água?",
    opcoes: ["Gotejamento", "Aspersão convencional", "Inundação de sulcos"],
    correta: 0
  }
];

let indicePerguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta() {
  if (indicePerguntaAtual < perguntasQuiz.length) {
    const dadosPergunta = perguntasQuiz[indicePerguntaAtual];
    document.getElementById("pergunta-texto").innerText = dadosPergunta.pergunta;
    
    // Atualiza o texto dos botões de opção
    document.getElementById("op0").innerText = dadosPergunta.opcoes[0];
    document.getElementById("op1").innerText = dadosPergunta.opcoes[1];
    document.getElementById("op2").innerText = dadosPergunta.opcoes[2];
  } else {
    // Fim do jogo
    document.getElementById("pergunta-texto").innerText = "Quiz concluído! Parabéns por aprender mais sobre o campo.";
    document.getElementById("op0").style.display = "none";
    document.getElementById("op1").style.display = "none";
    document.getElementById("op2").style.display = "none";
    document.getElementById("btn-reiniciar").style.display = "block";
  }
}

function verificarResposta(opcaoSelecionada) {
  const respostaCorreta = perguntasQuiz[indicePerguntaAtual].correta;
  
  if (opcaoSelecionada === respostaCorreta) {
    pontuacao++;
  }
  
  indicePerguntaAtual++;
  document.getElementById("texto-quiz").innerText = `Pontuação: ${pontuacao} de ${perguntasQuiz.length}`;
  carregarPergunta();
}

function reiniciarQuiz() {
  indicePerguntaAtual = 0;
  pontuacao = 0;
  document.getElementById("texto-quiz").innerText = "Pontuação: 0";
  document.getElementById("op0").style.display = "block";
  document.getElementById("op1").style.display = "block";
  document.getElementById("op2").style.display = "block";
  document.getElementById("btn-reiniciar").style.display = "none";
  carregarPergunta();
}

// Inicializa o quiz ao carregar a página
carregarPergunta();
