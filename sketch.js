// Array de objetos de livros, cada um com nome, idade mínima, ano escolar, nacionalidade, gêneros, sinopse e importância cultural.
let livros = [
  {
    nome: "Dom Casmurro",
    idadeMinima: 15,
    anoEscolar: 2,
    nacional: true,
    generos: ["romance", "literatura brasileira", "realismo"],
    sinopse: "Bentinho e Capitu crescem juntos e se apaixonam, mas a paixão de Capitu e a suspeita de traição com Escobar, amigo de Bentinho, corroem a mente do protagonista, levando-o a uma obsessão que questiona a fidelidade da amada. A obra é famosa por sua ambiguidade e por deixar o leitor decidir sobre a culpa de Capitu.",
    importanciaCultural: "Considerado um dos maiores romances da literatura brasileira, 'Dom Casmurro' é uma obra-prima de Machado de Assis. Aborda temas como ciúme, traição, memória e a subjetividade da verdade, sendo essencial para a compreensão do realismo brasileiro e da psicologia dos personagens."
  },
  {
    nome: "Memórias Póstumas de Brás Cubas",
    idadeMinima: 16,
    anoEscolar: 3,
    nacional: true,
    generos: ["romance", "literatura brasileira", "realismo", "humor"],
    sinopse: "Narrado por um defunto autor, Brás Cubas, o livro é uma autobiografia 'escrita' após sua morte. De forma irônica e cínica, ele revisita sua vida, seus amores, suas ambições e a sociedade do Segundo Reinado no Brasil, criticando a hipocrisia e as convenções sociais.",
    importanciaCultural: "Marco inicial do Realismo no Brasil, esta obra de Machado de Assis rompe com as convenções românticas e introduz uma narrativa inovadora, com humor ácido e crítica social. É fundamental para entender a transição literária e a visão machadiana sobre a condição humana."
  },
  {
    nome: "Vidas Secas",
    idadeMinima: 14,
    anoEscolar: 1,
    nacional: true,
    generos: ["drama", "literatura brasileira", "realismo"],
    sinopse: "Acompanha a saga da família de retirantes nordestinos, Fabiano, Sinha Vitória, e seus filhos, em sua luta diária pela sobrevivência no sertão castigado pela seca. A narrativa minimalista e a linguagem seca refletem a aridez da vida e a desumanização dos personagens.",
    importanciaCultural: "Um dos maiores clássicos do Modernismo brasileiro e do regionalismo nordestino, 'Vidas Secas', de Graciliano Ramos, é uma obra-prima que retrata a miséria, a seca e a condição subumana dos trabalhadores rurais. É um retrato pungente da realidade social do Brasil."
  },
  {
    nome: "O Cortiço",
    idadeMinima: 15,
    anoEscolar: 2,
    nacional: true,
    generos: ["realismo", "literatura brasileira", "naturalismo"],
    sinopse: "Retrata a vida em um cortiço no Rio de Janeiro do século XIX, mostrando a ascensão social do português João Romão e a degradação moral dos moradores. A obra explora o determinismo social e biológico, a influência do ambiente e a luta por sobrevivência em um cenário de miséria e ambição.",
    importanciaCultural: "Considerado um dos maiores expoentes do Naturalismo no Brasil, 'O Cortiço', de Aluísio Azevedo, é um estudo social aprofundado sobre a vida urbana e as relações humanas em um ambiente coletivo. É uma crítica contundente às desigualdades sociais e à 'animalização' do ser humano."
  },
  {
    nome: "Orgulho e Preconceito",
    idadeMinima: 14,
    anoEscolar: 1,
    nacional: false,
    generos: ["romance", "clássico", "drama", "histórico"],
    sinopse: "A história de Elizabeth Bennet, uma jovem inteligente e espirituosa, e Mr. Darcy, um homem orgulhoso e rico. Através de mal-entendidos e preconceitos iniciais, eles precisam superar suas próprias falhas e as expectativas sociais para encontrar o amor verdadeiro na Inglaterra do século XIX.",
    importanciaCultural: "Um dos romances mais amados da literatura inglesa, 'Orgulho e Preconceito', de Jane Austen, é um clássico atemporal que explora temas como amor, casamento, classe social e feminismo. Sua influência na cultura popular é imensa, com inúmeras adaptações."
  },
  {
    nome: "1984",
    idadeMinima: 16,
    anoEscolar: 3,
    nacional: false,
    generos: ["distopia", "ficção científica", "político"],
    sinopse: "Winston Smith vive em um mundo totalitário controlado pelo Partido e pelo Grande Irmão, onde a verdade é manipulada e a liberdade individual é inexistente. Ele tenta se rebelar contra o sistema, mas descobre a terrível extensão do controle do governo sobre a mente e o corpo.",
    importanciaCultural: "Um dos livros mais influentes do século XX, '1984', de George Orwell, é uma distopia que alerta sobre os perigos do totalitarismo, da vigilância em massa e da manipulação da linguagem. Seus conceitos como 'Grande Irmão' e 'Novilíngua' são amplamente utilizados até hoje."
  },
  {
    nome: "O Pequeno Príncipe",
    idadeMinima: 12,
    anoEscolar: 1,
    nacional: false,
    generos: ["fantasia", "filosofia", "infantil"],
    sinopse: "Um aviador, após uma queda no deserto, encontra um pequeno príncipe que veio de outro planeta. Através de suas conversas, o livro aborda temas como amizade, amor, perda, a importância da imaginação e a crítica ao mundo adulto.",
    importanciaCultural: "Uma das obras literárias mais traduzidas e lidas do mundo, 'O Pequeno Príncipe', de Antoine de Saint-Exupéry, é uma fábula poética e filosófica que encanta crianças e adultos. Transmite lições universais sobre a vida, o amor e a essência do ser humano."
  },
  {
    nome: "A Culpa é das Estrelas",
    idadeMinima: 14,
    anoEscolar: 1,
    nacional: false,
    generos: ["romance", "drama", "literatura jovem adulta"],
    sinopse: "Hazel Grace Lancaster, uma adolescente com câncer terminal, conhece Augustus Waters em um grupo de apoio. Juntos, eles embarcam em uma jornada que os leva a questionar a vida, a morte e o significado do amor, enquanto enfrentam a doença com humor e sensibilidade.",
    importanciaCultural: "Um best-seller contemporâneo que popularizou a literatura jovem adulta, 'A Culpa é das Estrelas', de John Green, aborda temas delicados como doença, morte e luto de forma acessível e emocionante. Gerou grande impacto cultural, especialmente entre o público adolescente."
  },
  {
    nome: "Cem Anos de Solidão",
    idadeMinima: 16,
    anoEscolar: 3,
    nacional: false,
    generos: ["realismo mágico", "literatura estrangeira", "histórico", "drama"],
    sinopse: "A saga da família Buendía ao longo de sete gerações na mítica cidade de Macondo. A história mistura o real e o fantástico, explorando temas como o tempo, a solidão, o amor, a guerra e a busca por conhecimento, tudo sob a ótica do realismo mágico.",
    importanciaCultural: "Obra-prima de Gabriel García Márquez e um dos pilares do realismo mágico, 'Cem Anos de Solidão' é um dos romances mais importantes da literatura latino-americana e mundial. Influenciou gerações de escritores e é fundamental para entender a cultura e a história do continente."
  },
  {
    nome: "Ensaio Sobre a Cegueira",
    idadeMinima: 16,
    anoEscolar: 3,
    nacional: false,
    generos: ["drama", "filosofia", "distopia"],
    sinopse: "Uma inexplicável epidemia de cegueira branca atinge uma cidade, levando a sociedade ao caos e à barbárie. Um grupo de cegos, incluindo uma mulher que milagrosamente não perde a visão, luta para sobreviver e manter sua humanidade em meio ao desespero.",
    importanciaCultural: "Uma alegoria poderosa de José Saramago, Nobel de Literatura, 'Ensaio Sobre a Cegueira' é uma crítica contundente à natureza humana, à sociedade e à fragilidade da civilização. Questiona a moralidade, a solidariedade e a capacidade do ser humano de lidar com o desconhecido."
  },
  {
    nome: "Quarto de Despejo: Diário de uma Favelada",
    idadeMinima: 15,
    anoEscolar: 2,
    nacional: true,
    generos: ["diário", "realidade brasileira", "documentário", "histórico"],
    sinopse: "Diário de Carolina Maria de Jesus, uma catadora de papel que vive na favela do Canindé, em São Paulo. Ela narra seu cotidiano de miséria, fome, preconceito e a luta para criar seus filhos, oferecendo um olhar cru e honesto sobre a vida na periferia.",
    importanciaCultural: "Um documento social e literário de imenso valor, 'Quarto de Despejo' é um testemunho único da realidade das favelas brasileiras. A obra de Carolina Maria de Jesus, uma mulher negra e favelada, é um marco na literatura marginal e na representação das vozes silenciadas."
  },
  {
    nome: "O Amor nos Tempos do Cólera",
    idadeMinima: 16,
    anoEscolar: 3,
    nacional: false, // É colombiano, então não nacional para um usuário brasileiro
    generos: ["romance", "realismo mágico", "literatura estrangeira", "histórico"],
    sinopse: "Acompanha a história de amor épica de Florentino Ariza e Fermina Daza, que se estende por mais de cinquenta anos, em meio a epidemias de cólera e transformações sociais no Caribe. Uma ode à persistência do amor.",
    importanciaCultural: "Outra obra-prima de Gabriel García Márquez, que celebra a capacidade do amor de resistir ao tempo e às adversidades. Um marco do realismo mágico e da literatura latino-americana, explorando temas como o envelhecimento, a memória e a paixão."
  },
  {
    nome: "A Casa dos Espíritos",
    idadeMinima: 15,
    anoEscolar: 2,
    nacional: false, // É chilena
    generos: ["realismo mágico", "drama", "histórico", "literatura estrangeira"],
    sinopse: "A saga da família Trueba ao longo de várias gerações em um país não nomeado da América Latina, que reflete o Chile. A história abrange eventos políticos e sociais, misturando o sobrenatural com o real e explorando temas como amor, vingança e destino.",
    importanciaCultural: "Primeiro grande romance de Isabel Allende, que a estabeleceu como uma voz proeminente na literatura latino-americana e no realismo mágico. É uma obra que aborda a história política do Chile e o papel da mulher na sociedade."
  },
  {
    nome: "Grande Sertão: Veredas",
    idadeMinima: 17, // Idade mínima um pouco maior pela complexidade
    anoEscolar: 3,
    nacional: true,
    generos: ["romance", "literatura brasileira", "filosofia", "regionalismo"],
    sinopse: "Um longo monólogo do jagunço Riobaldo, que narra suas aventuras no sertão mineiro, seus amores, suas batalhas e suas reflexões existenciais sobre o bem e o mal, Deus e o diabo. A obra é famosa pela sua linguagem inovadora e poética.",
    importanciaCultural: "Considerado por muitos o maior romance da literatura brasileira, 'Grande Sertão: Veredas', de Guimarães Rosa, é uma obra monumental que explora a alma do Brasil e a condição humana em sua complexidade. Sua linguagem única e profundidade filosófica são referências na literatura mundial."
  }
];

let idadeUsuario;
let anoEscolarUsuario;
let prefereNacionais;
let gostaRealismoMagico;
let gostaRomance;
let gostaRealismo;
let gostaHistorico;
let livrosRecomendados = [];
let recommendationsReady = false; // Flag para controlar quando as recomendações estão prontas para serem desenhadas

function setup() {
  createCanvas(600, 1500); // Aumentei ainda mais a altura para acomodar mais livros e detalhes
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Livros para o Ensino Médio", 20, 30);

  // Coletar e validar idade
  let inputIdade;
  do {
    inputIdade = prompt("Qual sua idade? (Digite um número)");
    idadeUsuario = int(inputIdade);
  } while (isNaN(idadeUsuario) || idadeUsuario <= 0); // Garante que a idade é um número positivo

  // Coletar e validar ano escolar
  let inputAnoEscolar;
  do {
    inputAnoEscolar = prompt("Qual o seu ano escolar no ensino médio? (1, 2 ou 3)");
    anoEscolarUsuario = int(inputAnoEscolar);
  } while (isNaN(anoEscolarUsuario) || anoEscolarUsuario < 1 || anoEscolarUsuario > 3); // Garante que o ano é 1, 2 ou 3

  // Coletar e validar preferência de nacionalidade
  let inputNacionais;
  do {
    inputNacionais = prompt("Você prefere livros nacionais ou internacionais? (nacionais/internacionais)").toLowerCase();
    prefereNacionais = (inputNacionais === "nacionais");
  } while (inputNacionais !== "nacionais" && inputNacionais !== "internacionais"); // Garante que a resposta é 'nacionais' ou 'internacionais'

  // Novas perguntas de gênero
  gostaRealismoMagico = (prompt("Você gosta de livros de realismo mágico? (sim/não)").toLowerCase() === "sim");
  gostaRomance = (prompt("Você gosta de livros de romance? (sim/não)").toLowerCase() === "sim");
  gostaRealismo = (prompt("Você gosta de livros de realismo? (sim/não)").toLowerCase() === "sim");
  gostaHistorico = (prompt("Você gosta de livros históricos? (sim/não)").toLowerCase() === "sim");


  // Limpa a lista de livros recomendados a cada execução
  livrosRecomendados = [];

  for (let livro of livros) {
    let passaFiltroIdadeAno = (idadeUsuario >= livro.idadeMinima && anoEscolarUsuario >= livro.anoEscolar);
    let passaFiltroNacionalidade = ((prefereNacionais && livro.nacional) || (!prefereNacionais && !livro.nacional));
    
    // Filtro de gênero - livro deve ter PELO MENOS UM dos gêneros preferidos
    let passaFiltroGenero = false;
    if (gostaRealismoMagico && livro.generos.includes("realismo mágico")) {
      passaFiltroGenero = true;
    }
    if (gostaRomance && livro.generos.includes("romance")) {
      passaFiltroGenero = true;
    }
    if (gostaRealismo && livro.generos.includes("realismo")) {
      passaFiltroGenero = true;
    }
    if (gostaHistorico && livro.generos.includes("histórico")) {
      passaFiltroGenero = true;
    }

    // Se nenhuma preferência de gênero foi marcada como 'sim', considera que qualquer gênero é aceitável
    // Isso evita que, se o usuário disser 'não' para todos os gêneros, nenhum livro seja recomendado
    if (!gostaRealismoMagico && !gostaRomance && !gostaRealismo && !gostaHistorico) {
      passaFiltroGenero = true;
    }


    if (passaFiltroIdadeAno && passaFiltroNacionalidade && passaFiltroGenero) {
      livrosRecomendados.push(livro); // Adiciona o objeto livro inteiro
    }
  }

  recommendationsReady = true; // Define a flag como true para indicar que as recomendações estão prontas
}

function draw() {
  // Desenha o fundo e o título apenas uma vez
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Livros para o Ensino Médio", 20, 30);

  if (recommendationsReady) {
    displayRecommendations(); // Chama a função para exibir as recomendações
    noLoop(); // Para o loop de desenho, pois o conteúdo é estático
  }
}

function displayRecommendations() {
  let yPos = 70; // Posição Y inicial para o texto

  if (livrosRecomendados.length > 0) {
    text("Livros recomendados para você:", 20, yPos);
    yPos += 30; // Espaço após o título

    for (let i = 0; i < livrosRecomendados.length; i++) {
      let livro = livrosRecomendados[i];

      // Exibe o nome do livro
      fill(0, 0, 150); // Cor para o nome do livro
      textSize(18);
      text("- " + livro.nome, 40, yPos);
      yPos += 25;

      // Exibe a sinopse
      fill(50); // Cor padrão para o texto
      textSize(14);
      text("Sinopse:", 60, yPos);
      yPos += 20;
      // Usar wrapTextForDisplay para quebrar o texto da sinopse em várias linhas
      let sinopseWrapped = wrapTextForDisplay(livro.sinopse, 500); // 500 é a largura máxima
      for (let line of sinopseWrapped) {
        text(line, 60, yPos);
        yPos += 18; // Espaçamento entre as linhas da sinopse
      }
      yPos += 10; // Espaço após a sinopse

      // Exibe a importância cultural
      fill(50);
      textSize(14);
      text("Importância Cultural:", 60, yPos);
      yPos += 20;
      // Usar wrapTextForDisplay para quebrar o texto da importância cultural em várias linhas
      let importanciaWrapped = wrapTextForDisplay(livro.importanciaCultural, 500);
      for (let line of importanciaWrapped) {
        text(line, 60, yPos);
        yPos += 18; // Espaçamento entre as linhas da importância cultural
      }
      yPos += 30; // Espaço maior entre os livros
    }
  } else {
    text("Nenhum livro disponível para sua idade, ano escolar e preferências.", 20, yPos);
  }
}

// Função auxiliar para quebrar texto em várias linhas (não nativa do p5.js, precisa ser implementada)
function wrapTextForDisplay(textString, maxWidth) {
  let words = textString.split(' ');
  let lines = [];
  let currentLine = words[0];

  // Garante que currentLine é inicializado corretamente, mesmo que words[0] seja undefined
  if (!currentLine) {
    return [""];
  }

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    let testLine = currentLine + " " + word;
    if (textWidth(testLine) < maxWidth) {
      currentLine = testLine;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}


