// Banco de questões - Prova UNIVESP 2021 - Eixo de Computação
const QUESTIONS = [
  // ========== MATEMÁTICA (1-7) ==========
  {
    n: 1, topic: 'matematica', topicName: 'Matemática',
    statement: 'Em uma papelaria, os valores de uma caixa de lápis, de um caderno, de um fichário e de uma agenda, nesta ordem, formam uma progressão aritmética cuja soma dos termos é R$ 72,00. Se a razão dessa progressão é um quarto do valor do caderno, o valor do fichário é',
    options: ['R$ 16,00', 'R$ 18,00', 'R$ 20,00', 'R$ 22,00', 'R$ 24,00'],
    answer: 2,
    explanation: 'Sejam os 4 termos da PA: a, a+r, a+2r, a+3r. Soma = 4a+6r = 72. A razão r é 1/4 do caderno (a+r): 4r = a+r, então a = 3r. Substituindo: 4(3r)+6r = 18r = 72 → r=4. Caderno = a+r = 16. Fichário = a+2r = 12+8 = 20. Resposta: R$ 20,00.'
  },
  {
    n: 2, topic: 'matematica', topicName: 'Matemática',
    statement: 'As funções f(x) = log₂(x + k) e g(x) = 2^(bx–1), com k e b reais, se intersectam em (1, 2). O valor de g(k/b) é igual a',
    options: ['5', '4', '3', '2', '1'],
    answer: 1,
    explanation: 'f(1)=2: log₂(1+k)=2 → 1+k=4 → k=3. g(1)=2: 2^(b-1)=2 → b-1=1 → b=2. Logo k/b = 3/2. g(3/2) = 2^(2·3/2 - 1) = 2^2 = 4.'
  },
  {
    n: 3, topic: 'matematica', topicName: 'Matemática',
    statement: 'Em uma caixa há 7 canetas azuis, 5 vermelhas e 3 verdes. Retirando duas canetas sem reposição, a probabilidade de pelo menos uma ser verde é',
    options: ['8/35', '2/7', '13/35', '2/5', '3/7'],
    answer: 2,
    explanation: 'Total = 15 canetas, 12 não-verdes. P(nenhuma verde) = 12/15 · 11/14 = 132/210 = 22/35. P(pelo menos 1 verde) = 1 - 22/35 = 13/35.'
  },
  {
    n: 4, topic: 'matematica', topicName: 'Matemática',
    statement: 'A área total de um cubo de aresta 4 cm é igual à área lateral de um prisma reto de base quadrada com 8 cm de altura. O volume do prisma é',
    options: ['96 cm³', '88 cm³', '80 cm³', '72 cm³', '64 cm³'],
    answer: 3,
    explanation: 'Área total cubo = 6·4² = 96 cm². Área lateral prisma = 4·x·8 = 32x = 96 → x = 3 cm. Volume prisma = x²·h = 9·8 = 72 cm³.'
  },
  {
    n: 5, topic: 'matematica', topicName: 'Matemática',
    image: '[Figura: escada formando triângulo retângulo com base 4m, dividido em 4 partes iguais por 3 prateleiras P1, P2, P3 paralelas ao chão]',
    statement: 'Em uma residência, a escada da sala forma com a parede um vão livre, no qual foram colocadas 3 prateleiras (P1, P2, P3) paralelas ao chão e equidistantes entre si (base do triângulo = 4m). A soma dos comprimentos das 3 prateleiras é igual a',
    options: ['5 m', '6 m', '7 m', '8 m', '9 m'],
    answer: 1,
    explanation: 'Por semelhança de triângulos: as prateleiras têm comprimentos proporcionais à altura. Se dividimos em 4 partes iguais, P1 = 1m, P2 = 2m, P3 = 3m. Soma = 1+2+3 = 6m.'
  },
  {
    n: 6, topic: 'matematica', topicName: 'Matemática',
    statement: 'Um estudante tem 200 folhas (azul + amarelo). Após usar 50 azuis e 10 amarelas, sobrou o mesmo número das duas cores. Quantas folhas amarelas restaram?',
    options: ['110', '100', '90', '80', '70'],
    answer: 4,
    explanation: 'A + B = 200. Após uso: A-50 = B-10 → A-B=40. Sistema: A=120, B=80. Amarelas restantes = 80-10 = 70.'
  },
  {
    n: 7, topic: 'matematica', topicName: 'Matemática',
    statement: 'Pontuações: 30, 24, 34, 36, 28, ?. Sabendo que a moda é 34, a média e a mediana são, respectivamente,',
    options: ['34 e 32', '32 e 34', '31 e 35', '31 e 32', '31 e 34'],
    answer: 3,
    explanation: 'Para moda ser 34, ?=34 (já temos 1 valor 34, precisa repetir). Soma = 30+24+34+36+28+34 = 186. Média = 186/6 = 31. Ordenado: 24,28,30,34,34,36. Mediana = (30+34)/2 = 32. Resposta: 31 e 32.'
  },

  // ========== PORTUGUÊS (8-14) ==========
  {
    n: 8, topic: 'portugues', topicName: 'Português',
    image: '[Tirinha de Pietro Soldi: nos quadrinhos a casa "fala" — "Que histórias minha casa contaria sobre mim..."  — interrompida pela campainha; última fala: "Nem me fale! Se a quarentena não acabar logo vou ficar maluca!"]',
    statement: 'Contribui para o efeito de humor da tirinha o recurso',
    options: [
      'à antítese: oposição de palavras de sentido contrário',
      'ao eufemismo: atenuação do sentido desagradável',
      'à personificação: atribuição de características humanas a seres inanimados',
      'ao pleonasmo: repetição desnecessária de palavras',
      'à hipérbole: ênfase pelo exagero'
    ],
    answer: 2,
    explanation: 'A casa "imagina" o que diria — atribuição de características humanas (pensar/falar) a um ser inanimado = personificação (prosopopeia).'
  },
  {
    n: 9, topic: 'portugues', topicName: 'Português',
    statement: 'Observa-se o emprego de verbo no modo imperativo na tirinha',
    options: [
      'no primeiro quadrinho, apenas',
      'no segundo quadrinho, apenas',
      'no terceiro quadrinho, apenas',
      'no quarto quadrinho, apenas',
      'no terceiro e no quarto quadrinhos'
    ],
    answer: 3,
    explanation: '"Nem me fale!" é uma forma imperativa (ordem/pedido), aparece no quarto quadrinho.'
  },
  {
    n: 10, topic: 'portugues', topicName: 'Português',
    statement: '(Texto de Evgeny Morozov sobre Big Tech) De acordo com o autor,',
    options: [
      'o avanço social dependerá do abandono completo da economia do petróleo',
      'a ideia de que dados são o petróleo do século XXI mostra-se falha por desconsiderar as origens distintas desses recursos',
      'a acumulação de dados solucionará as contradições do capitalismo global',
      'a ideia mostra-se falha por ignorar mudanças sociais da revolução digital',
      'o petróleo continuará desempenhando papel central nos embates geopolíticos'
    ],
    answer: 1,
    explanation: 'O autor critica explicitamente: "a forma como produzimos dados é muito diferente daquela como a natureza produz seus recursos" — exatamente a ideia de origens distintas (B).'
  },
  {
    n: 11, topic: 'portugues', topicName: 'Português',
    statement: 'O autor inclui-se em seu texto (trata a si mesmo como objeto) no trecho:',
    options: [
      '"Já é quase um clichê afirmar que dados são o petróleo do século XXI"',
      '"Há muito a criticar nessa definição"',
      '"a forma como produzimos dados é muito diferente daquela como a natureza produz seus recursos"',
      '"Todas essas previsões podem ter seu fundo de verdade"',
      '"Se os dados são o petróleo do século XXI, quem vai ser o Saddam Hussein deste século?"'
    ],
    answer: 2,
    explanation: 'O verbo "produzimos" está na 1ª pessoa do plural, incluindo o autor entre os produtores de dados.'
  },
  {
    n: 12, topic: 'portugues', topicName: 'Português',
    statement: 'Em "...vai acabar solucionando todas as contradições que o sistema capitalista global não consegue resolver...", o "que" sublinhado refere-se a:',
    options: ['contradições', 'ideia', 'sociedade', 'dados', 'sistema'],
    answer: 0,
    explanation: 'O pronome relativo "que" retoma o substantivo imediatamente anterior: "contradições" (são elas que o sistema não consegue resolver).'
  },
  {
    n: 13, topic: 'portugues', topicName: 'Português',
    statement: '"...pode parecer não só excessivamente sarcástico, como também ridículo." A expressão "como também" indica',
    options: ['consequência', 'proporção', 'comparação', 'causa', 'adição'],
    answer: 4,
    explanation: 'A construção "não só... como também..." é uma estrutura aditiva: soma um elemento ao outro.'
  },
  {
    n: 14, topic: 'portugues', topicName: 'Português',
    statement: '"Esse movimento procurou a naturalidade racional, simplicidade estilística, integração entre literatura, sociedade e Natureza. O bucolismo ajustou-se a essa perspectiva, com imagens tranquilas da contemplação pastoril..." O texto refere-se ao movimento',
    options: ['barroco', 'árcade', 'romântico', 'naturalista', 'simbolista'],
    answer: 1,
    explanation: 'Naturalidade racional, bucolismo, contemplação pastoril, simplicidade — características clássicas do Arcadismo (séc. XVIII), em oposição ao excesso barroco.'
  },

  // ========== INGLÊS (15-21) ==========
  {
    n: 15, topic: 'ingles', topicName: 'Inglês',
    statement: '(Text on bioplastic sequins in fashion) According to the text,',
    options: [
      'fashion industry can improve on inclusivity',
      'fashion should embrace second hand market',
      'eco-friendly fashion always damages the environment',
      'fashion industry can act to reduce its greenhouse gas emissions',
      'sustainable fashion should be more affordable'
    ],
    answer: 3,
    explanation: 'O texto fala de bioplástico feito de algas que captura carbono — uma forma da indústria da moda reduzir suas emissões. As outras opções não são tema do texto.'
  },
  {
    n: 16, topic: 'ingles', topicName: 'Inglês',
    statement: 'In "Once cooled, the sheets of bioplastic are finally cut into sequins", the underlined word "Once" means',
    options: ['since', 'while', 'after', 'then', 'also'],
    answer: 2,
    explanation: '"Once" aqui é conjunção temporal = "depois que / assim que" (after). "Once cooled" = "depois de resfriadas".'
  },
  {
    n: 17, topic: 'ingles', topicName: 'Inglês',
    statement: 'Em "is not a scarce resource", a expressão sublinhada refere-se a',
    options: ['algae', 'carbon', 'fossil fuels', 'bioplastic', 'regular plastic'],
    answer: 0,
    explanation: 'Trecho completo: "Perhaps the most obvious is algae, which unlike fossil fuels, is not a scarce resource". O sujeito é "algae".'
  },
  {
    n: 18, topic: 'ingles', topicName: 'Inglês',
    statement: '"There are some downsides to bioplastic, however" estabelece, em relação ao parágrafo anterior, uma relação de',
    options: ['adição', 'explicação', 'oposição', 'conclusão', 'alternância'],
    answer: 2,
    explanation: '"However" = "entretanto/contudo" — clássico marcador de oposição/contraste. O parágrafo anterior listava vantagens; este apresenta desvantagens.'
  },
  {
    n: 19, topic: 'ingles', topicName: 'Inglês',
    statement: 'A expressão "pie in the sky" indica que a mudança não é',
    options: ['a good idea', 'an unreal thing', 'a total surprise', 'a side effect', 'a cause for alarm'],
    answer: 1,
    explanation: '"Pie in the sky" = sonho impossível, irreal, fantasia. "Isn\'t a pie in the sky" = não é algo irreal/inalcançável.'
  },
  {
    n: 20, topic: 'ingles', topicName: 'Inglês',
    statement: '"I\'d better close the drapes" pode ser substituído por',
    options: [
      'I\'m able to close the drapes',
      'I could close the drapes',
      'It would be wise to close the drapes',
      'I must close the drapes',
      'It would be a mistake to close the drapes'
    ],
    answer: 2,
    explanation: '"I\'d better" (had better) = é melhor / seria sábio fazer = "It would be wise to".'
  },
  {
    n: 21, topic: 'ingles', topicName: 'Inglês',
    image: '[Campanha Everlane: garrafa plástica "Warming the planet" / casaco "Warming you" — feito de 16 garrafas plásticas recicladas]',
    statement: 'The aim of the ad campaign is to',
    options: [
      'encourage people to recycle plastic bottles',
      'raise awareness about eco-friendly fashion',
      'highlight the importance of drinking water',
      'bring awareness to body image issues',
      'take a stand against sustainability issues'
    ],
    answer: 1,
    explanation: 'A marca de roupas mostra que transforma garrafas em casacos = conscientizar sobre moda sustentável (eco-friendly fashion).'
  },

  // ========== HISTÓRIA (22-28) ==========
  {
    n: 22, topic: 'historia', topicName: 'História',
    statement: 'A crise da República Romana (séc. II e I a.C.) decorreu',
    options: [
      'da expansão do cristianismo',
      'das guerras civis entre patrícios, plebeus e escravos que deram origem a leis escritas',
      'da extensão da cidadania aos povos dominados',
      'das conquistas na bacia do Mediterrâneo, que alteraram a estrutura socioeconômica',
      'da disputa entre generais que pôs fim ao escravismo'
    ],
    answer: 3,
    explanation: 'A expansão romana pelo Mediterrâneo trouxe escravos, comerciantes ricos e fortaleceu generais. Essas mudanças socioeconômicas geraram a crise da República.'
  },
  {
    n: 23, topic: 'historia', topicName: 'História',
    statement: 'No texto de Le Goff sobre cidades medievais (séc. X-XIV), o historiador',
    options: [
      'estabelece vínculos com o campo, de onde provinham alimentos e mão de obra',
      'minimiza a importância da nobreza feudal',
      'explica o surgimento da burguesia',
      'separa zona urbana da periferia rural',
      'destaca relações político-administrativas como base da vida urbana'
    ],
    answer: 0,
    explanation: 'O excerto explicitamente diz que cidades precisaram de "meio rural favorável" e que a "emigração do campo para a cidade" formou a nova sociedade urbana.'
  },
  {
    n: 24, topic: 'historia', topicName: 'História',
    image: '[Gráfico: entradas de escravos em Salvador (Bahia) e Rio de Janeiro entre 1700-1780. Bahia em torno de 80-100 mil; Rio cresce de ~30 mil para ~95 mil]',
    statement: 'Os dados do gráfico revelam',
    options: [
      'aumento das alforrias urbanas e auge dos engenhos',
      'mudança na mão de obra e esgotamento das minas',
      'fluxo estável e deslocamento do eixo do Sul para o Nordeste',
      'crescimento populacional pelo ouro e encarecimento de mercadorias',
      'ampliação do tráfico no Atlântico e progressiva importância comercial do Rio de Janeiro'
    ],
    answer: 4,
    explanation: 'O gráfico mostra ambos os portos crescendo — tráfico se ampliando — e o Rio crescendo mais que Salvador, refletindo a mudança do eixo econômico (ouro, cana no Sudeste) para o RJ.'
  },
  {
    n: 25, topic: 'historia', topicName: 'História',
    statement: 'O processo de independência do Brasil teve como diferencial',
    options: [
      'a continuidade da monarquia sob comando do herdeiro da Coroa portuguesa',
      'o papel decisivo das camadas populares',
      'a participação destacada dos escravos',
      'o caráter liberal com federalismo',
      'a fragmentação do território em vários países'
    ],
    answer: 0,
    explanation: 'Diferente das Américas espanhola/inglesa (republicanas, com lutas violentas), o Brasil manteve a monarquia com Dom Pedro I, herdeiro de Portugal — independência conduzida pela elite.'
  },
  {
    n: 26, topic: 'historia', topicName: 'História',
    statement: 'Segundo Marc Ferro, no final do século XIX, os colonizadores europeus,',
    options: [
      'a evolução das sociedades dependia da fusão entre saberes nativos e europeus',
      'o domínio de conhecimentos técnico-científicos embasava a crença na superioridade dos europeus',
      'a concepção de progresso baseava-se no rompimento entre colonizados e colonizadores',
      'o ideal envolvia questões religiosas desconhecidas',
      'a diferença entre povo atrasado e desenvolvido foi superada'
    ],
    answer: 1,
    explanation: 'O texto afirma que a "convicção de que encarnavam a ciência e a técnica" era o que justificava, na visão europeia, sua superioridade e missão "civilizadora".'
  },
  {
    n: 27, topic: 'historia', topicName: 'História',
    statement: 'Caracterizam o regime do Estado Novo (1937-1945)',
    options: [
      'concentração de poderes no presidente eleito + alinhamento aos fascistas',
      'censura + ampliação da autonomia sindical',
      'partido único + intervencionismo estatal',
      'aparato policial repressivo + mobilização dos trabalhadores urbanos',
      'medidas liberais + nacionalismo exacerbado'
    ],
    answer: 3,
    explanation: 'O Estado Novo combinou repressão (DIP, polícia política) com cooptação dos trabalhadores urbanos (CLT, sindicatos atrelados ao Estado, propaganda trabalhista). Vargas não foi eleito (golpe), e não houve partido único formal.'
  },
  {
    n: 28, topic: 'historia', topicName: 'História',
    image: '[Charge de outubro de 1962 com Kennedy, Kruschev e Fidel Castro - Crise dos Mísseis em Cuba]',
    statement: 'A charge refere-se',
    options: [
      'ao auge do intervencionismo norte-americano na América Latina',
      'ao conflito bélico entre EUA e URSS após a Revolução Cubana',
      'ao momento mais tenso da bipolarização entre as superpotências',
      'ao fim da Guerra Fria',
      'à consolidação do socialismo soviético na América Latina'
    ],
    answer: 2,
    explanation: 'Outubro de 1962 = Crise dos Mísseis em Cuba, considerada o momento mais perigoso da Guerra Fria, quando o mundo esteve mais próximo de uma guerra nuclear.'
  },

  // ========== GEOGRAFIA (29-35) ==========
  {
    n: 29, topic: 'geografia', topicName: 'Geografia',
    statement: 'Para estimular a industrialização, uma das medidas adotadas pelos Tigres Asiáticos (Hong Kong, Singapura, Taiwan, Coreia do Sul) foi',
    options: [
      'incentivo às exportações com a redução de impostos',
      'cancelamento das medidas protecionistas',
      'estímulo à sindicalização',
      'veto às empresas transnacionais',
      'leis rígidas de proteção ambiental'
    ],
    answer: 0,
    explanation: 'Os Tigres adotaram modelo "export-oriented" (voltado à exportação), com isenções fiscais, baixa tributação e incentivos para indústrias exportadoras — oposto da "substituição de importações" latino-americana.'
  },
  {
    n: 30, topic: 'geografia', topicName: 'Geografia',
    statement: 'A análise sobre cidade e urbano no excerto revela',
    options: [
      'a produção da cidade como traço cultural',
      'o cooperativismo como estratégia de mercado',
      'a insustentabilidade das ocupações urbanas',
      'o solo urbano enquanto mercadoria, sujeito à especulação imobiliária que reforça diferenças socioeconômicas',
      'a desvalorização da propriedade privada'
    ],
    answer: 3,
    explanation: 'O texto explicitamente coloca o solo urbano como objeto de "ganhos pautados na acumulação" — definição clássica de mercadoria sujeita à especulação, que aumenta segregação socioespacial.'
  },
  {
    n: 31, topic: 'geografia', topicName: 'Geografia',
    image: '[Mapa: comercialização concentrada em MT, MS, GO, PR, BA - regiões de fronteira agrícola moderna]',
    statement: 'O mapa apresenta dados sobre a comercialização de',
    options: [
      'cana-de-açúcar para usinas no Seridó',
      'carvão para energia no Sudeste',
      'minérios para siderurgia da Zona Franca',
      'trigo para indústrias do Sul',
      'agrotóxicos utilizados nas agroindústrias do Matopiba'
    ],
    answer: 4,
    explanation: 'A distribuição (MT, MS, GO, PR, oeste BA) coincide com áreas de agronegócio do Cerrado e Matopiba — uso intensivo de agrotóxicos em soja, milho, algodão. Seridó é semiárido (não cana), ZFM é eletroeletrônica (não siderurgia).'
  },
  {
    n: 32, topic: 'geografia', topicName: 'Geografia',
    image: '[Diagrama: nível da cheia do rio com mata de igapó (alagada), mata de várzea (sazonalmente) e mata de terra firme]',
    statement: 'A vegetação representada na imagem corresponde ao domínio morfoclimático denominado',
    options: ['Mares de Morros', 'Amazônico', 'Pradarias', 'Cerrado', 'Araucárias'],
    answer: 1,
    explanation: 'Mata de igapó (sempre inundada), várzea (inundação sazonal) e terra firme são as três fitofisionomias clássicas do domínio Amazônico — relacionadas ao regime de cheias dos rios amazônicos.'
  },
  {
    n: 33, topic: 'geografia', topicName: 'Geografia',
    statement: 'O excerto (sobre Parque do Iguaçu, Lençóis Maranhenses, ICMBio, redução orçamentária) expõe os riscos',
    options: [
      'aos cinturões agrícolas',
      'à reforma agrária',
      'às unidades de conservação',
      'à prática de biopirataria',
      'aos divisores de águas'
    ],
    answer: 2,
    explanation: 'Parques Nacionais e Estações Ecológicas são tipos de Unidades de Conservação. O ICMBio é o órgão responsável pela gestão das UCs federais.'
  },
  {
    n: 34, topic: 'geografia', topicName: 'Geografia',
    image: '[Mapa-múndi: concentração de algo (kg/km²) em 5 grandes manchas centrais nos oceanos Pacífico, Atlântico e Índico, com setas indicando correntes oceânicas]',
    statement: 'O mapa apresenta',
    options: [
      'convergência de efluentes industriais para baixas latitudes',
      'aumento de extrativismo nas cadeias mesoatlânticas',
      'multiplicidade de emissários submarinos',
      'acúmulo de geleiras',
      'a concentração de plásticos em giros oceânicos'
    ],
    answer: 4,
    explanation: 'Os 5 grandes giros oceânicos concentram lixo plástico — fenômeno conhecido como "ilhas de plástico" (a do Pacífico Norte é a mais famosa). As setas no mapa representam as correntes que formam os giros.'
  },
  {
    n: 35, topic: 'geografia', topicName: 'Geografia',
    statement: 'O fim da Segunda Guerra e a criação da ONU impulsionaram a independência de países africanos e asiáticos, promovendo',
    options: [
      'enclaves de luta étnica com soberania para minorias',
      'novas possessões mantendo poder autoritário',
      'disputas entre superpotências por zonas de influência, marcando guerras nas ex-colônias',
      'acordos para industrializar humanitariamente as ex-colônias',
      'grupos terroristas em rede contra governos teocráticos'
    ],
    answer: 2,
    explanation: 'No contexto da Guerra Fria, as ex-colônias se tornaram palco de disputa por influência entre EUA e URSS — Vietnã, Coreia, Angola, Moçambique etc. tiveram guerras civis nesse contexto.'
  },

  // ========== QUÍMICA (36-42) ==========
  {
    n: 36, topic: 'quimica', topicName: 'Química',
    statement: 'Propeno: PF=–185°C, PE=–48°C. Fórmula molecular e estados físicos a –156°C e –35°C, respectivamente:',
    options: [
      'C₃H₆, sólido e gasoso',
      'C₃H₈, líquido e gasoso',
      'C₃H₆, líquido e líquido',
      'C₃H₈, líquido e sólido',
      'C₃H₆, líquido e gasoso'
    ],
    answer: 4,
    explanation: 'Propeno = alceno de 3 carbonos = C₃H₆ (CₙH₂ₙ). A –156°C: entre PF(-185) e PE(-48) → líquido. A –35°C: acima do PE(-48) → gasoso. Resposta: C₃H₆, líquido e gasoso.'
  },
  {
    n: 37, topic: 'quimica', topicName: 'Química',
    statement: 'Considere o íon ¹³⁴A²⁺ com número atômico 52. Quantidades de prótons, nêutrons e elétrons:',
    options: [
      '52, 82 e 54',
      '52, 82 e 50',
      '52, 134 e 50',
      '54, 84 e 134',
      '54, 84 e 54'
    ],
    answer: 1,
    explanation: 'Z=52 → 52 prótons. A=134 → nêutrons = A-Z = 134-52 = 82. Carga 2+ → perdeu 2 elétrons → 52-2 = 50 elétrons.'
  },
  {
    n: 38, topic: 'quimica', topicName: 'Química',
    statement: 'Sobre SO₂, SO₃ e H₂SO₄:',
    options: [
      'no SO₂ o enxofre tem dois pares de elétrons não compartilhados',
      'no H₂SO₄ há apenas um hidrogênio ionizável',
      'SO₃ é óxido básico',
      'H₂SO₄ é hidrácido',
      'a molécula de SO₃ é apolar, com momento dipolar igual a zero'
    ],
    answer: 4,
    explanation: 'SO₃ tem geometria trigonal plana — as três ligações S=O são simétricas, vetores de dipolo se anulam, resultando em molécula apolar. SO₃ é óxido ácido (não básico); H₂SO₄ é oxiácido com 2 H ionizáveis (não hidrácido); SO₂ tem 1 par não-ligante.'
  },
  {
    n: 39, topic: 'quimica', topicName: 'Química',
    statement: 'CO + 2H₂ → CH₃OH. Com 25 g de H₂ e 100% de rendimento, a quantidade máxima de metanol é',
    options: ['50 g', '100 g', '200 g', '400 g', '800 g'],
    answer: 2,
    explanation: 'Massa H₂ = 2 g/mol → 25 g = 12,5 mol. Razão: 2 mols H₂ → 1 mol CH₃OH, então 12,5/2 = 6,25 mol CH₃OH. Massa CH₃OH = 32 g/mol → 6,25 × 32 = 200 g.'
  },
  {
    n: 40, topic: 'quimica', topicName: 'Química',
    statement: '2Cl₂(g) + 2H₂O(g) + 113 kJ ⇌ 4HCl(g) + O₂(g). Para aumentar o rendimento de HCl é preciso',
    options: [
      'reduzir a quantidade de Cl₂',
      'aumentar a temperatura do sistema',
      'adicionar maior quantidade de O₂',
      'adicionar catalisador',
      'aumentar a pressão sobre o sistema'
    ],
    answer: 1,
    explanation: 'Reação direta absorve 113 kJ → endotérmica. Aumentar T desloca para o lado endotérmico (direta) → mais HCl. Reduzir Cl₂ desloca contrário; aumentar O₂ desloca contrário; catalisador não muda equilíbrio; aumentar pressão favorece o lado com menos mols (esquerda = 4 mols), prejudicando HCl.'
  },
  {
    n: 41, topic: 'quimica', topicName: 'Química',
    image: '[Estrutura: dois anéis benzênicos ligados a CH-O-CH₂-CH₂-N(CH₃)CH₃ (estrutura típica da difenidramina)]',
    statement: 'Funções orgânicas no anti-histamínico:',
    options: [
      'amina e éter',
      'aldeído e éter',
      'amina e cetona',
      'aldeído e amida',
      'amina e éster'
    ],
    answer: 0,
    explanation: 'A estrutura tem N ligado a 3 carbonos (amina terciária) e O entre dois carbonos (éter, R-O-R\'). Sem C=O (descarta aldeído/cetona/amida/éster).'
  },
  {
    n: 42, topic: 'quimica', topicName: 'Química',
    statement: 'P₁V₁/T₁ = P₂V₂/T₂. A 300K, gás H₂ ocupa 0,15 L a 0,5 atm. Volume aproximado a 293 K em transformação isobárica é',
    options: ['107 mL', '146 mL', '153 mL', '500 mL', '586 mL'],
    answer: 1,
    explanation: 'Isobárica → P constante: V₁/T₁ = V₂/T₂. V₂ = 0,15 × 293/300 ≈ 0,1465 L = 146,5 mL ≈ 146 mL.'
  },

  // ========== BIOLOGIA (43-49) ==========
  {
    n: 43, topic: 'biologia', topicName: 'Biologia',
    statement: 'Sobre os níveis de organização em ecologia:',
    options: [
      'população é composta por diferentes espécies de uma comunidade',
      'comunidade é o conjunto de todos os seres vivos de um ecossistema',
      'ecossistema é definido pelos fatores abióticos ambientais',
      'biosfera consiste na atmosfera do planeta Terra',
      'fatores bióticos correspondem aos fatores químicos e físicos'
    ],
    answer: 1,
    explanation: 'Comunidade biológica = conjunto de TODAS as populações (todos os seres vivos) que vivem em um ecossistema. População é UMA espécie; ecossistema = comunidade + abióticos; biosfera engloba tudo, não só atmosfera.'
  },
  {
    n: 44, topic: 'biologia', topicName: 'Biologia',
    image: '[Gráfico: energia x tempo. Curva vermelha (sem X) tem energia de ativação alta. Curva azul (com X) tem energia de ativação reduzida. Mesma energia liberada]',
    statement: 'A molécula orgânica X é',
    options: [
      'um colesterol de alta densidade',
      'um carboidrato com ação digestiva',
      'um polinucleotídeo com ação replicante',
      'um peptídeo com ação catalisadora',
      'um hormônio esteroide'
    ],
    answer: 3,
    explanation: 'A redução da energia de ativação sem alterar produtos/reagentes é característica de catalisador. Em seres vivos, catalisadores biológicos são enzimas, que são proteínas (peptídeos = cadeias de aminoácidos).'
  },
  {
    n: 45, topic: 'biologia', topicName: 'Biologia',
    statement: 'Para que exista fluxo de água do solo para os tecidos internos da raiz vegetal é preciso',
    options: [
      'diferentes concentrações osmóticas entre o solo e os tecidos da raiz',
      'gasto de energia (ATP) para bombeamento',
      'concentrações osmóticas idênticas entre meios intra e extracelular',
      'proteínas com canais nas células dos pelos radiculares',
      'estômatos abertos nos pelos radiculares'
    ],
    answer: 0,
    explanation: 'A absorção de água pela raiz é por OSMOSE — passiva, sem ATP. Requer diferença de concentração: meio interno (raiz) mais concentrado em solutos que o solo, fazendo a água entrar.'
  },
  {
    n: 46, topic: 'biologia', topicName: 'Biologia',
    image: '[Esquema do dogma central: DNA ↔ RNA → Proteína. Replicação no DNA, Transcrição DNA→RNA, Tradução RNA→Proteína]',
    statement: 'A partir',
    options: [
      'de uma proteína é possível determinar exatamente o DNA que a codificou',
      'de RNA, DNA é produzido por replicação',
      'de DNA, proteína é produzida diretamente por tradução',
      'de uma das fitas do DNA, RNA é produzido por transcrição',
      'de uma proteína, aminoácidos são produzidos por tradução'
    ],
    answer: 3,
    explanation: 'TRANSCRIÇÃO = DNA → RNA mensageiro (uma das fitas serve de molde). A tradução é RNA→proteína (não DNA→proteína direto). Replicação é DNA→DNA. Da proteína não dá para inferir DNA exato (código degenerado).'
  },
  {
    n: 47, topic: 'biologia', topicName: 'Biologia',
    statement: 'O sistema excretor humano relaciona-se mais diretamente',
    options: [
      'à eliminação das fezes',
      'à quebra de toxinas pelo fígado',
      'à ação dos leucócitos',
      'à produção do suor',
      'à filtração do sangue realizada pelos néfrons renais'
    ],
    answer: 4,
    explanation: 'O sistema excretor humano é, fundamentalmente, o sistema urinário, cuja unidade funcional é o néfron — onde ocorre filtração do sangue, formação da urina e eliminação de ureia, ácido úrico e creatinina.'
  },
  {
    n: 48, topic: 'biologia', topicName: 'Biologia',
    statement: 'Eritroblastose fetal: mãe Rh⁻, pai Rh⁺, criança Rh⁺. Condição não-genética necessária:',
    options: [
      'sensibilização da criança durante a gestação',
      'sensibilização do pai e da mãe antes da gestação',
      'sensibilização da mãe, anteriormente à gestação da criança',
      'sensibilização da criança após o parto',
      'sensibilização da mãe após o parto e durante a amamentação'
    ],
    answer: 2,
    explanation: 'Para haver eritroblastose, a mãe Rh⁻ deve ter produzido anticorpos anti-Rh em uma gestação ANTERIOR (sensibilização) — geralmente uma gestação anterior de filho Rh⁺ ou transfusão. Esses anticorpos atacam a criança Rh⁺ atual.'
  },
  {
    n: 49, topic: 'biologia', topicName: 'Biologia',
    image: '[Figura I: cladograma com 3 grupos X,Y,Z divergindo de um mesmo ponto. Figura II: cladograma onde Y se ramifica primeiro, depois X e Z divergem]',
    statement: 'A interpretação correta das figuras:',
    options: [
      'ambas representam os mesmos níveis de parentesco',
      'em ambas, X, Y e Z têm o mesmo nível de parentesco',
      'em I, Y tem com X o mesmo nível de parentesco que com Z',
      'em II, Z é ancestral de X e Y',
      'em I, Y tem maior parentesco com Z; em II, X e Z têm maior parentesco'
    ],
    answer: 2,
    explanation: 'Na Figura I (politomia: 3 ramos saindo do mesmo ponto), X, Y e Z são equidistantes — Y tem o mesmo grau de parentesco com X e com Z. Na Figura II (Y se separa primeiro), X e Z são mais aparentados entre si.'
  },

  // ========== FÍSICA (50-56) ==========
  {
    n: 50, topic: 'fisica', topicName: 'Física',
    statement: 'Carro de 1000 kg com aceleração máxima 2,4 m/s². Adiciona-se blindagem de 200 kg. Nova aceleração máxima:',
    options: ['1,2 m/s²', '1,4 m/s²', '1,6 m/s²', '2,0 m/s²', '2,9 m/s²'],
    answer: 3,
    explanation: 'Força do motor é a mesma: F = m·a = 1000 × 2,4 = 2400 N. Nova massa = 1200 kg. Nova aceleração = 2400/1200 = 2,0 m/s².'
  },
  {
    n: 51, topic: 'fisica', topicName: 'Física',
    image: '[Bola de 450g muda direção em 90°: V_inicial = 16 m/s horizontal, V_final = 12 m/s vertical]',
    statement: 'Goleiro desvia bola (450 g) em 90°. v_inicial=16 m/s, v_final=12 m/s. Impulso recebido:',
    options: ['1,5 N·s', '4,5 N·s', '6,3 N·s', '9,0 N·s', '12,6 N·s'],
    answer: 3,
    explanation: 'Impulso = ΔP (vetorial). Velocidades perpendiculares: |Δv| = √(v₁² + v₂²) = √(16² + 12²) = √(256+144) = √400 = 20 m/s. Impulso = m·|Δv| = 0,45 × 20 = 9,0 N·s.'
  },
  {
    n: 52, topic: 'fisica', topicName: 'Física',
    statement: 'Em 21/03, Sol sobre Macapá (Equador). São Gabriel da Cachoeira está 15° a oeste. Sol estará verticalmente sobre ela após',
    options: ['15 minutos', '20 minutos', '30 minutos', '40 minutos', '60 minutos'],
    answer: 4,
    explanation: 'Terra rotaciona 360° em 24h → 15° por hora (60 min). Como São Gabriel está 15° a oeste, o Sol leva 1 hora para chegar lá.'
  },
  {
    n: 53, topic: 'fisica', topicName: 'Física',
    statement: 'Diferença de gelo fundido por ano entre 2010 (470 bi ton) e 1990 (80 bi ton). L_fusão = 80 cal/g. Calor necessário para essa diferença:',
    options: ['6,4×10¹⁸ cal', '9,6×10¹⁸ cal', '3,1×10¹⁹ cal', '3,8×10¹⁹ cal', '4,4×10¹⁹ cal'],
    answer: 2,
    explanation: 'Diferença = 470 − 80 = 390 bi ton = 390×10⁹ ton × 10⁶ g/ton = 3,9×10¹⁷ g. Q = m·L = 3,9×10¹⁷ × 80 = 3,12×10¹⁹ cal ≈ 3,1×10¹⁹ cal.'
  },
  {
    n: 54, topic: 'fisica', topicName: 'Física',
    statement: 'Lente biconvexa de vidro (n=1,62), convergente no ar (f) com n_ar=1, n_água=1,34. Imersa em água, comporta-se como',
    options: [
      'convergente, distância focal maior que f',
      'convergente, distância focal menor que f',
      'convergente, distância focal igual a f',
      'divergente, distância focal igual a –f',
      'divergente, distância focal menor que –f'
    ],
    answer: 0,
    explanation: 'Equação dos fabricantes: 1/f = (n_lente/n_meio − 1)·K. No ar: (1,62/1 − 1) = 0,62. Na água: (1,62/1,34 − 1) ≈ 0,21. Como o fator é positivo (lente continua convergente) mas menor, 1/f diminui → f aumenta.'
  },
  {
    n: 55, topic: 'fisica', topicName: 'Física',
    statement: 'AM (535-1705 kHz) vs FM (88-108 MHz). Comparando AM com FM, as ondas AM têm',
    options: [
      'comprimentos de onda e períodos maiores',
      'comprimentos de onda e períodos menores',
      'maiores comprimentos de onda e menores períodos',
      'maiores comprimentos de onda e períodos iguais',
      'menores comprimentos de onda e maiores períodos'
    ],
    answer: 0,
    explanation: 'AM tem frequência MENOR. Como T = 1/f, menor frequência → MAIOR período. Como λ = c/f (c constante), menor frequência → MAIOR comprimento de onda. Ambos maiores.'
  },
  {
    n: 56, topic: 'fisica', topicName: 'Física',
    image: '[Gráfico: resistência de LDR cai exponencialmente de 100kΩ (baixa luz) para ~10Ω (alta luz)]',
    statement: 'LDR sob ddp constante: aumentando luminosidade, intensidade da corrente e potência dissipada',
    options: ['diminuem', 'aumentam', 'aumenta e permanece constante', 'aumenta e diminui', 'diminui e aumenta'],
    answer: 1,
    explanation: 'Maior luminosidade → MENOR resistência (gráfico). Com U constante: i = U/R aumenta. Potência: P = U²/R aumenta também. Ambos aumentam.'
  }
];
