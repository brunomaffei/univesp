// ============================================================
// CANTINHO DE ESTUDOS - Conteúdo por matéria
// Dados curados para o vestibular UNIVESP 2026 (banca Vunesp)
// ============================================================

const STUDY_CONTENT = {
  matematica: {
    icon: '📐',
    name: 'Matemática',
    color: '#e63946',
    topFreq: [
      { topic: 'Progressões (PA/PG)', freq: 90, vezes: '4 das últimas 5 provas' },
      { topic: 'Probabilidade e Estatística', freq: 85, vezes: 'Cai todo ano' },
      { topic: 'Geometria Plana e Espacial', freq: 95, vezes: 'Sempre cai' },
      { topic: 'Funções (1º e 2º grau, exponencial, log)', freq: 80, vezes: 'Cai todo ano' },
      { topic: 'Trigonometria', freq: 60, vezes: '3 das últimas 5' },
      { topic: 'Matemática Financeira (juros)', freq: 50, vezes: '2-3 das últimas 5' },
      { topic: 'Sistemas Lineares / Equações', freq: 70, vezes: 'Frequente' },
      { topic: 'Análise Combinatória', freq: 55, vezes: 'Eventual' }
    ],
    teoria: [
      {
        titulo: 'Progressão Aritmética (PA)',
        formulas: 'aₙ = a₁ + (n-1)·r\nSₙ = (a₁ + aₙ)·n / 2',
        exemplo: 'PA: 2, 5, 8, 11... razão r=3. a₁₀ = 2 + 9·3 = 29.',
        macete: 'Quando o problema fala em "termos consecutivos", chame de (a-r), a, (a+r) — soma vira 3a, fácil de isolar!'
      },
      {
        titulo: 'Progressão Geométrica (PG)',
        formulas: 'aₙ = a₁ · q^(n-1)\nSₙ = a₁·(qⁿ-1)/(q-1)\nSoma infinita |q|<1: S = a₁/(1-q)',
        exemplo: 'PG: 3, 6, 12, 24... razão q=2. S₅ = 3·(32-1)/1 = 93.',
        macete: 'Em PG, divida termos consecutivos pra achar q (a₂/a₁ = a₃/a₂ = q).'
      },
      {
        titulo: 'Probabilidade',
        formulas: 'P(A) = casos favoráveis / casos totais\nP(A∩B) = P(A)·P(B|A)\nP("pelo menos 1") = 1 - P(nenhum)',
        exemplo: '3 verdes em 15 canetas, 2 sorteios sem reposição. P(pelo menos 1 verde) = 1 - (12/15)(11/14) = 13/35.',
        macete: '"Pelo menos um" → SEMPRE use o complementar (1 - P(nenhum)). Economiza tempo.'
      },
      {
        titulo: 'Estatística',
        formulas: 'Média = soma/n\nMediana = valor central (ordenar primeiro!)\nModa = valor que mais aparece',
        exemplo: 'Dados: 24, 28, 30, 34, 34, 36. Mediana = (30+34)/2 = 32. Moda = 34. Média = 31.',
        macete: 'Mediana: SEMPRE ordene primeiro. Se n par, é a média dos 2 do meio.'
      },
      {
        titulo: 'Geometria — Áreas e Volumes',
        formulas: 'Cubo: V=a³, A_total=6a²\nPrisma: V=A_base·h\nCilindro: V=πr²h\nPirâmide: V=A_base·h/3\nCone: V=πr²h/3\nEsfera: V=4πr³/3, A=4πr²',
        exemplo: 'Cubo aresta 4: A=96 cm². Prisma quadrado h=8 com mesma área lateral: 4·x·8=96 → x=3. V=72.',
        macete: 'Cuidado com "área total" vs "área lateral". Total inclui as bases!'
      },
      {
        titulo: 'Função Exponencial e Logarítmica',
        formulas: 'log_a(b) = c ⟺ a^c = b\nlog(xy) = log(x) + log(y)\nlog(x/y) = log(x) - log(y)\nlog(xⁿ) = n·log(x)',
        exemplo: 'log₂(8) = 3 (porque 2³=8). 2^(x-1) = 8 → x-1=3 → x=4.',
        macete: 'Quando ver log com base estranha, tente reescrever como potência. Sempre simplifique antes de calcular.'
      },
      {
        titulo: 'Semelhança de Triângulos',
        formulas: 'Razão de semelhança k\nLados: razão = k\nÁreas: razão = k²\nVolumes: razão = k³',
        exemplo: 'Triângulos semelhantes com k=2: lados dobram, áreas quadruplicam, volumes octuplicam.',
        macete: 'Em problema com escada/sombra/projeção: SEMPRE pense em semelhança. Desenhe os triângulos!'
      },
      {
        titulo: 'Matemática Financeira',
        formulas: 'Juros simples: M = C(1 + i·t)\nJuros compostos: M = C(1 + i)^t\nDesconto: D = i·t·C',
        exemplo: 'R$1000 a 10% a.a. por 3 anos compostos: M = 1000·(1.1)³ = R$1331.',
        macete: 'i sempre em decimal (10% = 0,10). Tempo na mesma unidade da taxa (anual com anos).'
      }
    ],
    macetes: [
      '🎯 Vunesp adora questão de PA/PG misturada com soma de termos. Decora as fórmulas!',
      '🎯 Probabilidade quase sempre tem "pelo menos um" — use complementar.',
      '🎯 Em geometria com figura, MARQUE tudo que sabe na figura antes de começar a calcular.',
      '🎯 Se a alternativa tem 5 valores próximos (ex: 16, 18, 20, 22, 24), faça contas com cuidado — pequenos erros levam pra alternativa errada.',
      '🎯 Questões de média/mediana/moda: ordene os dados PRIMEIRO antes de qualquer cálculo.'
    ],
    youtube: [
      { titulo: 'Progressões — Equaciona com Paulo Pereira', q: 'progressão aritmética e geométrica equaciona' },
      { titulo: 'Probabilidade do zero — Matemática Rio', q: 'probabilidade vestibular matemática rio' },
      { titulo: 'Geometria Espacial completo — Ferretto', q: 'geometria espacial professor ferretto' },
      { titulo: 'Funções e Logaritmos — Equaciona', q: 'função logaritmo equaciona' },
      { titulo: 'Estatística básica — Matemática Rio', q: 'média mediana moda estatística vestibular' },
      { titulo: 'Análise Combinatória — Ferretto', q: 'análise combinatória ferretto' }
    ]
  },

  portugues: {
    icon: '📖',
    name: 'Português',
    color: '#1d3557',
    topFreq: [
      { topic: 'Interpretação de Texto', freq: 100, vezes: 'Sempre cai (peso alto!)' },
      { topic: 'Figuras de Linguagem', freq: 85, vezes: 'Cai todo ano' },
      { topic: 'Coesão e Coerência (conectivos)', freq: 80, vezes: 'Frequente' },
      { topic: 'Funções da Linguagem', freq: 50, vezes: 'Eventual' },
      { topic: 'Concordância e Regência', freq: 45, vezes: 'Eventual' },
      { topic: 'Literatura — Movimentos', freq: 70, vezes: 'Quase sempre 1 questão' },
      { topic: 'Pronomes e Coesão Referencial', freq: 75, vezes: 'Frequente' }
    ],
    teoria: [
      {
        titulo: 'Figuras de Linguagem (as que mais caem)',
        formulas: '• Metáfora: comparação implícita ("seus olhos são estrelas")\n• Antítese: oposição ("o sol e a sombra")\n• Personificação: dar humanidade a objetos ("a casa contava histórias")\n• Hipérbole: exagero ("morri de rir")\n• Eufemismo: suavizar ("ele nos deixou" = morreu)\n• Pleonasmo: redundância ("subir pra cima")\n• Ironia: dizer o oposto do que pensa\n• Metonímia: parte pelo todo ("li Machado")',
        macete: 'Vunesp adora confundir personificação ↔ metáfora. Se atribui CARACTERÍSTICA HUMANA → personificação.'
      },
      {
        titulo: 'Conectivos (Conjunções)',
        formulas: '• Adição: e, além disso, ademais, não só...mas também\n• Oposição: mas, porém, contudo, todavia, entretanto\n• Causa: porque, pois, já que, visto que\n• Consequência: logo, portanto, por isso\n• Condição: se, caso, desde que\n• Comparação: como, assim como, tal qual\n• Conformidade: conforme, segundo',
        macete: 'Questões de conectivo: substitua mentalmente pela palavra simples. "Como também" cabe "e" → adição.'
      },
      {
        titulo: 'Pronomes Relativos (que, qual, cujo)',
        formulas: '"que" retoma o substantivo IMEDIATAMENTE anterior.\n"cujo" indica posse: "o livro cujo autor..."\n"onde" só pra LUGAR físico (não use pra tempo!)',
        macete: 'Pra achar a quem o "que" se refere: leia a oração SEM o "que" e veja qual substantivo encaixa antes.'
      },
      {
        titulo: 'Movimentos Literários',
        formulas: '• Barroco (séc XVII): contradição, jogo de palavras, dualismo (Gregório de Matos)\n• Arcadismo (séc XVIII): naturalidade, pastoralismo, "fugere urbem" (Tomás A. Gonzaga)\n• Romantismo (séc XIX): sentimentalismo, nacionalismo, idealização (José de Alencar)\n• Realismo/Naturalismo: crítica social, objetividade (Machado, Aluísio Azevedo)\n• Modernismo: ruptura, semana de 22 (Mário, Oswald, Drummond)',
        macete: 'Palavras-chave: "natureza/pastoril" = arcadismo. "Idealização/sentimento" = romantismo. "Crítica social" = realismo.'
      },
      {
        titulo: 'Funções da Linguagem',
        formulas: '• Referencial: informa (jornal, ciência)\n• Emotiva/Expressiva: 1ª pessoa, sentimentos\n• Conativa/Apelativa: vocativo, imperativo (publicidade)\n• Fática: contato ("alô?", "está me ouvindo?")\n• Metalinguística: linguagem fala da própria linguagem (dicionário)\n• Poética: foco na forma (poesia, slogans)',
        macete: 'Propaganda chama atenção/dá ordem → conativa. Se foca em rimas/forma → poética.'
      },
      {
        titulo: 'Modos Verbais',
        formulas: '• Indicativo: certeza ("eu vou")\n• Subjuntivo: dúvida/hipótese ("se eu fosse")\n• Imperativo: ordem/pedido ("vá!", "fale!")',
        macete: 'Imperativo pode ser afirmativo ("fale") ou negativo ("não fale"). É o tom de comando que importa.'
      }
    ],
    macetes: [
      '🎯 Em interpretação: sempre VOLTE ao texto pra confirmar. Não responda de cabeça.',
      '🎯 Vunesp adora pedir o referente de pronome ("a que se refere o termo X"). Localize o pronome e olhe o substantivo IMEDIATAMENTE anterior.',
      '🎯 Em figuras de linguagem, leia a alternativa antes de procurar — assim você sabe o que procurar.',
      '🎯 Em literatura, foque em palavras-chave do enunciado: "racional/natural" = arcadismo, "sentimento" = romantismo.',
      '🎯 Conectivos: a palavra-chave do conectivo dá a relação. "Mas" = oposição, "logo" = consequência, etc.'
    ],
    youtube: [
      { titulo: 'Figuras de linguagem — Pablo Jamilk', q: 'figuras de linguagem pablo jamilk' },
      { titulo: 'Interpretação de texto — Português com Letícia', q: 'interpretação de texto português com letícia' },
      { titulo: 'Conectivos e coesão — Noslen', q: 'conectivos coesão professor noslen' },
      { titulo: 'Movimentos literários resumão — Débora Aladim', q: 'movimentos literários resumo débora aladim' },
      { titulo: 'Funções da linguagem — Pablo Jamilk', q: 'funções da linguagem pablo jamilk' }
    ]
  },

  ingles: {
    icon: '🇬🇧',
    name: 'Inglês',
    color: '#2a9d8f',
    topFreq: [
      { topic: 'Interpretação de Texto (main idea)', freq: 100, vezes: 'Sempre cai' },
      { topic: 'Vocabulário em contexto', freq: 95, vezes: 'Sempre cai' },
      { topic: 'Conectivos (however, therefore, etc.)', freq: 80, vezes: 'Cai todo ano' },
      { topic: 'Modal Verbs (had better, must, should)', freq: 60, vezes: 'Frequente' },
      { topic: 'Reference (this/that/it refere a...)', freq: 70, vezes: 'Frequente' },
      { topic: 'Idioms (pie in the sky, etc.)', freq: 40, vezes: 'Eventual' }
    ],
    teoria: [
      {
        titulo: 'Conectivos em inglês (chaves)',
        formulas: '• However / Nevertheless / Yet — oposição\n• Therefore / Thus / Hence — consequência\n• Moreover / Furthermore — adição\n• Because / Since / As — causa\n• Although / Even though — concessão\n• Whereas / While — contraste\n• In fact / Indeed — ênfase',
        macete: '"However" = oposição. "Therefore" = consequência. Decora esses dois pelo menos!'
      },
      {
        titulo: 'Modal Verbs',
        formulas: '• Must / Have to — obrigação forte\n• Should / Ought to — recomendação\n• Had better — é melhor (recomendação forte)\n• Could / May / Might — possibilidade\n• Can — capacidade\n• Would — condicional/educado',
        macete: '"I\'d better" = "had better" = "it would be wise to". É recomendação forte.'
      },
      {
        titulo: 'Once / While / After (subordinadas temporais)',
        formulas: '• Once = depois que / assim que (after)\n• While = enquanto\n• After = depois que\n• Before = antes de\n• As soon as = assim que',
        macete: '"Once cooled" = "after it cools". Em pergunta de sinônimo, troque "once" por "after" e veja se faz sentido.'
      },
      {
        titulo: 'Idioms comuns em vestibular',
        formulas: '• Pie in the sky = sonho impossível, fantasia\n• Piece of cake = muito fácil\n• Break the ice = quebrar o gelo\n• Once in a blue moon = raramente\n• Spill the beans = revelar segredo\n• Cost an arm and a leg = custar muito caro',
        macete: 'Idiom geralmente NÃO é literal. Se a frase literal não faz sentido, é idiom.'
      },
      {
        titulo: 'Estratégia: leitura de texto na prova',
        formulas: '1. Leia o título e a fonte (revista? site sustentável? jornal?)\n2. Olhe as PERGUNTAS antes de ler o texto\n3. Leia o texto buscando as respostas\n4. Não traduza palavra por palavra — capture a ideia geral\n5. Em palavras desconhecidas, use o CONTEXTO',
        macete: 'Vunesp não cobra inglês avançado. Tudo está no texto. Confie no contexto!'
      }
    ],
    macetes: [
      '🎯 Sempre leia as ALTERNATIVAS antes de ler o texto inteiro. Você sabe o que procurar.',
      '🎯 Em vocabulário em contexto, substitua a palavra pelas alternativas e veja qual mantém o sentido.',
      '🎯 "However" no início = vai vir oposição. "Therefore/Thus" = vai vir conclusão.',
      '🎯 Cognatos ajudam MUITO em inglês de vestibular: bioplastic = bioplástico, important = importante, etc.',
      '🎯 Não chute por "tradução estranha". Vunesp prova justamente quem confia no contexto.'
    ],
    youtube: [
      { titulo: 'Inglês para vestibular — Inglês Winner', q: 'inglês para vestibular inglês winner' },
      { titulo: 'Modal verbs explicados — Small Advantages', q: 'modal verbs english small advantages' },
      { titulo: 'Conectivos em inglês — Teacher Paula', q: 'conectivos em inglês linkers vestibular' },
      { titulo: 'Interpretação de texto em inglês — Mairo Vergara', q: 'interpretação texto inglês vestibular' },
      { titulo: 'Idioms mais comuns — Inglês Winner', q: 'idioms inglês mais comuns vestibular' }
    ]
  },

  historia: {
    icon: '🏛️',
    name: 'História',
    color: '#9b2226',
    topFreq: [
      { topic: 'Era Vargas e Estado Novo', freq: 90, vezes: 'Cai quase todo ano' },
      { topic: 'Brasil Colônia (escravidão, economia)', freq: 80, vezes: 'Cai todo ano' },
      { topic: 'República Velha e Café com Leite', freq: 60, vezes: 'Frequente' },
      { topic: 'Ditadura Militar (1964-1985)', freq: 70, vezes: 'Frequente' },
      { topic: 'Guerra Fria', freq: 75, vezes: 'Frequente' },
      { topic: 'Idade Média / Cidades medievais', freq: 60, vezes: 'Eventual' },
      { topic: 'Independência do Brasil', freq: 65, vezes: 'Frequente' },
      { topic: 'Imperialismo séc XIX', freq: 60, vezes: 'Eventual' }
    ],
    teoria: [
      {
        titulo: 'Era Vargas (1930-1945)',
        formulas: '• Governo Provisório (1930-34): Revolução de 30, Constituição 34\n• Governo Constitucional (1934-37)\n• Estado Novo (1937-45): DITADURA, golpe, censura, DIP, Polaca\n• CLT (1943) — direitos trabalhistas\n• Industrialização: Vale do Rio Doce, CSN\n• 1942: Brasil entra na 2ª Guerra ao lado dos Aliados',
        macete: 'Estado Novo = ditadura + repressão + cooptação dos trabalhadores. NÃO foi eleito (golpe). Sem partido único formal.'
      },
      {
        titulo: 'Brasil Colônia',
        formulas: '• Pau-brasil (1500-1530)\n• Cana-de-açúcar (NE, escravos africanos)\n• Bandeirantes — interior, mineração\n• Ciclo do Ouro (séc XVIII): MG, SP, GO\n• Eixo se desloca pro RJ (capital em 1763)\n• Tráfico crescente, RJ ultrapassa BA',
        macete: 'Em gráfico de tráfico de escravos: o crescimento do RJ x estabilidade de Salvador = mudança do eixo econômico do açúcar pro ouro/sudeste.'
      },
      {
        titulo: 'Independência do Brasil (1822)',
        formulas: '• Família real chega em 1808 (fugindo de Napoleão)\n• Abertura dos portos (1808) — fim do pacto colonial\n• Reino Unido a Portugal (1815)\n• Volta de D. João VI (1821)\n• Dia do Fico (Jan 1822)\n• 7 de Setembro: D. Pedro proclama independência\n• DIFERENCIAL: monarquia mantida (não virou república), elite portuguesa no comando',
        macete: 'Brasil = único país da América Latina que virou monarquia. Diferente de EUA, México, Argentina (todos repúblicas violentas).'
      },
      {
        titulo: 'Crise da República Romana (séc II-I a.C.)',
        formulas: '• Expansão pelo Mediterrâneo trouxe: escravos em massa, comerciantes ricos, generais poderosos\n• Crise: plebeus pobres, reformas de Tibério e Caio Graco\n• Guerras civis (Mário vs Sila, Pompeu vs César)\n• Fim: Otaviano Augusto (27 a.C.) — começa o Império',
        macete: 'A crise NÃO foi gerada por cristianismo (vem depois) nem por leis escritas (vieram com a Lei das Doze Tábuas, mais antigas). Foi pela mudança socioeconômica das conquistas.'
      },
      {
        titulo: 'Guerra Fria (1947-1991)',
        formulas: '• Bipolaridade: EUA (capitalismo) x URSS (socialismo)\n• OTAN x Pacto de Varsóvia\n• Marshall x COMECON\n• Crise de Berlim (1948, 1961 muro)\n• Guerra da Coreia (1950-53)\n• CRISE DOS MÍSSEIS EM CUBA (1962) — momento mais tenso\n• Guerra do Vietnã (1955-75)\n• Distensão (Détente)\n• Glasnost/Perestroika — Gorbachev\n• Queda do Muro (1989), fim URSS (1991)',
        macete: 'Outubro de 1962 + Kennedy + Kruschev + Castro = Crise dos Mísseis. Não confunda com a Revolução Cubana (1959).'
      },
      {
        titulo: 'Cidades Medievais (Le Goff)',
        formulas: '• Renascimento urbano séc X-XIV\n• Cidades dependiam do CAMPO (alimentos, mão de obra)\n• Surgimento da BURGUESIA (artesãos, comerciantes)\n• Corporações de ofício, guildas\n• Universidades (Bolonha, Paris, Oxford)\n• Burgos = origem de "burguês"',
        macete: 'O excerto enfatiza VÍNCULOS campo-cidade. As cidades não nascem isoladas — dependem do campo.'
      },
      {
        titulo: 'Imperialismo (séc XIX)',
        formulas: '• Conferência de Berlim (1884-85) — partilha da África\n• Ideologia: missão civilizadora, "fardo do homem branco"\n• Justificativa: superioridade técnica e científica europeia\n• Darwinismo social\n• Resistências: Sudão (Mahdi), Etiópia (Adwa 1896)',
        macete: 'A justificativa central do imperialismo era a CONVICÇÃO da superioridade científica/técnica — não religião apenas.'
      }
    ],
    macetes: [
      '🎯 Decora as DATAS-CHAVE: 1500, 1822, 1889, 1930, 1937, 1945, 1964, 1985.',
      '🎯 Em charges/imagens, IDENTIFIQUE primeiro os personagens (presidentes, líderes) — isso já te dá o contexto.',
      '🎯 Era Vargas é a queridinha da Vunesp. Entenda Estado Novo (1937-45) como ditadura + nacionalismo + trabalhismo.',
      '🎯 Em gráfico, leia EIXOS primeiro. Vunesp coloca pegadinha na escala.',
      '🎯 Cuidado com pegadinhas tipo "fim do escravismo" no Estado Novo (escravidão acabou em 1888, ANTES de Vargas).'
    ],
    youtube: [
      { titulo: 'Era Vargas resumão — Débora Aladim', q: 'era vargas resumo débora aladim' },
      { titulo: 'Brasil Colônia completo — Pirula', q: 'brasil colônia história vestibular' },
      { titulo: 'Guerra Fria explicada — Foca História', q: 'guerra fria resumo vestibular foca história' },
      { titulo: 'Crise dos Mísseis em Cuba — Nostalgia History', q: 'crise dos mísseis cuba 1962 explicada' },
      { titulo: 'Independência do Brasil — Débora Aladim', q: 'independência do brasil 1822 vestibular' }
    ]
  },

  geografia: {
    icon: '🌎',
    name: 'Geografia',
    color: '#2a9d8f',
    topFreq: [
      { topic: 'Domínios morfoclimáticos do Brasil', freq: 80, vezes: 'Cai todo ano' },
      { topic: 'Urbanização e Cidades', freq: 90, vezes: 'Sempre cai' },
      { topic: 'Geopolítica (BRICS, Tigres Asiáticos)', freq: 75, vezes: 'Frequente' },
      { topic: 'Questões Ambientais (UCs, plástico, clima)', freq: 95, vezes: 'Sempre cai' },
      { topic: 'Agronegócio brasileiro (Matopiba)', freq: 70, vezes: 'Frequente' },
      { topic: 'Globalização e fluxos', freq: 60, vezes: 'Eventual' },
      { topic: 'Hidrografia e bacias', freq: 50, vezes: 'Eventual' },
      { topic: 'População (migrações, demografia)', freq: 60, vezes: 'Eventual' }
    ],
    teoria: [
      {
        titulo: 'Domínios Morfoclimáticos do Brasil (Aziz Ab\'Saber)',
        formulas: '• Amazônico (NE da AM): floresta densa, cheias, mata de igapó/várzea/terra firme\n• Cerrado (Centro): savana, árvores tortas, estação seca\n• Caatinga (NE): semiárido, xerófilas\n• Mata Atlântica / Mares de Morros (litoral): morros arredondados\n• Araucárias (S): pinheiros, clima subtropical\n• Pradarias / Pampas (RS): campos, gramíneas\n• Faixas de transição',
        macete: 'Mata de igapó/várzea/terra firme = AMAZÔNICO (relacionado a cheias dos rios). Pinheiro = Araucárias.'
      },
      {
        titulo: 'Urbanização e Especulação Imobiliária',
        formulas: '• Solo urbano = MERCADORIA → especulação\n• Segregação socioespacial: ricos no centro/áreas valorizadas, pobres na periferia\n• Gentrificação: revitalização que expulsa moradores antigos\n• Conurbação: cidades que se "fundem"\n• Metropolização',
        macete: 'Vunesp adora a ideia de cidade como espaço de DESIGUALDADE. Solo urbano vira mercadoria de especulação.'
      },
      {
        titulo: 'Tigres Asiáticos (Coreia do Sul, Taiwan, Hong Kong, Singapura)',
        formulas: '• Modelo EXPORT-ORIENTED (oposto da substituição de importações latina)\n• Incentivos fiscais à indústria\n• Mão de obra qualificada e barata\n• Atração de transnacionais\n• Investimento pesado em educação\n• Estado planejador',
        macete: 'Tigres = exportar é a chave. Modelo OPOSTO ao da América Latina (que era proteção do mercado interno).'
      },
      {
        titulo: 'Unidades de Conservação (UCs)',
        formulas: '• Proteção Integral: Parque Nacional, Estação Ecológica, Reserva Biológica, Monumento Natural, Refúgio de Vida Silvestre\n• Uso Sustentável: APA, RPPN, RDS, Floresta Nacional, Reserva Extrativista\n• Gestão federal: ICMBio',
        macete: 'Parque Nacional, Estação Ecológica = proteção integral (uso restrito). ICMBio é o órgão federal.'
      },
      {
        titulo: 'Matopiba (nova fronteira agrícola)',
        formulas: '• MA + TO + PI + BA (cerrados desses 4 estados)\n• Soja, milho, algodão\n• Uso intensivo de AGROTÓXICOS\n• Conflitos por terra (povos tradicionais)\n• Desmatamento do cerrado',
        macete: 'Matopiba = sigla dos 4 estados. Tema "verde" e tema "social" misturados (desmatamento + conflitos fundiários).'
      },
      {
        titulo: 'Giros Oceânicos e Plástico',
        formulas: '• 5 grandes giros: Pacífico Norte/Sul, Atlântico Norte/Sul, Índico\n• Correntes oceânicas formam giros que CONCENTRAM lixo\n• "Ilhas de plástico" — Pacífico Norte é a mais famosa\n• Microplásticos entram na cadeia alimentar',
        macete: 'Mapa-múndi com 5 manchas circulares + setas de correntes = GIROS DE PLÁSTICO.'
      },
      {
        titulo: 'Descolonização e Guerra Fria',
        formulas: '• Pós-1945: independências África e Ásia\n• Conferência de Bandung (1955) — Não-Alinhados\n• EUA x URSS disputaram zonas de influência nas ex-colônias\n• Guerras: Vietnã, Coreia, Angola, Moçambique\n• Hoje: legado de fronteiras artificiais e conflitos étnicos',
        macete: 'Independências pós-2ª Guerra + ONU + Guerra Fria = disputa entre superpotências por influência.'
      }
    ],
    macetes: [
      '🎯 Mapa do Brasil com pintura/concentração: identifique as REGIÕES coloridas (MT/MS/GO = Cerrado/agronegócio).',
      '🎯 Vunesp ama tema ambiental. UCs, plástico, mudanças climáticas — sempre tem.',
      '🎯 Solo urbano = mercadoria. Decora isso pra qualquer questão de cidade.',
      '🎯 Em mapas-múndi com correntes oceânicas e manchas: pense em PLÁSTICO em giros.',
      '🎯 Cuidado com confusão: ZFM = Zona Franca de Manaus = ELETRÔNICOS, não siderurgia.'
    ],
    youtube: [
      { titulo: 'Domínios morfoclimáticos — Geografia em Mapas', q: 'domínios morfoclimáticos brasil aziz ab saber' },
      { titulo: 'Urbanização brasileira — Professor Marcus', q: 'urbanização brasileira vestibular' },
      { titulo: 'Tigres Asiáticos — Foca Geo', q: 'tigres asiáticos geografia vestibular' },
      { titulo: 'Questões ambientais 2026 — Geografia em Mapas', q: 'questões ambientais geografia vestibular' },
      { titulo: 'Agronegócio e Matopiba — Curso Enem Gratuito', q: 'matopiba agronegócio brasileiro' }
    ]
  },

  quimica: {
    icon: '⚗️',
    name: 'Química',
    color: '#f4a261',
    topFreq: [
      { topic: 'Estequiometria (cálculos)', freq: 90, vezes: 'Quase sempre' },
      { topic: 'Funções Orgânicas', freq: 85, vezes: 'Cai todo ano' },
      { topic: 'Tabela Periódica e Atomística', freq: 80, vezes: 'Cai todo ano' },
      { topic: 'Equilíbrio Químico (Le Chatelier)', freq: 70, vezes: 'Frequente' },
      { topic: 'Soluções e Concentração', freq: 60, vezes: 'Frequente' },
      { topic: 'Gases e Estados Físicos', freq: 65, vezes: 'Frequente' },
      { topic: 'Funções Inorgânicas (ácidos, bases, óxidos)', freq: 75, vezes: 'Frequente' },
      { topic: 'Geometria Molecular e Polaridade', freq: 60, vezes: 'Eventual' }
    ],
    teoria: [
      {
        titulo: 'Atomística (Z, A, prótons, nêutrons, elétrons)',
        formulas: '• Z (número atômico) = nº de PRÓTONS\n• A (massa) = prótons + nêutrons\n• Nêutrons = A - Z\n• Átomo neutro: prótons = elétrons\n• Cátion (X⁺): perdeu elétrons\n• Ânion (X⁻): ganhou elétrons',
        macete: 'X²⁺: perdeu 2 e⁻, então elétrons = Z - 2. X²⁻: ganhou 2, elétrons = Z + 2.'
      },
      {
        titulo: 'Funções Orgânicas (identificação rápida)',
        formulas: '• Álcool: R-OH (OH ligado a C sp³)\n• Aldeído: R-CHO (carbonila no fim)\n• Cetona: R-CO-R\' (carbonila no meio)\n• Ácido carboxílico: R-COOH\n• Éster: R-COO-R\'\n• Éter: R-O-R\' (sem C=O)\n• Amina: R-NH₂ ou R-NR\'-R"\n• Amida: R-CO-NR\'-R"',
        macete: 'Tem N? Pode ser amina (sem C=O) ou amida (com C=O ligado). Tem só O entre Cs? Éter. Tem C=O? Verifica vizinhos.'
      },
      {
        titulo: 'Hidrocarbonetos',
        formulas: '• Alcano (CₙH₂ₙ₊₂) — só ligações simples (metano, etano)\n• Alceno (CₙH₂ₙ) — uma dupla (eteno, propeno)\n• Alcino (CₙH₂ₙ₋₂) — uma tripla (etino/acetileno)\n• Aromático: benzeno (C₆H₆) e derivados',
        macete: 'Propeno = alceno C₃H₆. Propano = alcano C₃H₈. Diferença é UMA dupla = MENOS 2 H.'
      },
      {
        titulo: 'Estados Físicos (PF, PE)',
        formulas: 'Abaixo do PF: SÓLIDO\nEntre PF e PE: LÍQUIDO\nAcima do PE: GASOSO',
        exemplo: 'Propeno: PF=-185, PE=-48. A -156°C: entre eles → líquido. A -35°C: acima de -48 → gás.',
        macete: 'Desenhe a reta numérica: PF | líquido | PE | gás. Marque a temperatura pedida.'
      },
      {
        titulo: 'Princípio de Le Chatelier (equilíbrio)',
        formulas: 'Sistema em equilíbrio reage pra MINIMIZAR perturbações:\n• Aumentar reagente → desloca pra produtos\n• Aumentar produto → desloca pra reagentes\n• Aumentar T (endotérmica) → favorece direta\n• Diminuir T (exotérmica) → favorece direta\n• Aumentar P → favorece lado com MENOS mols gasosos\n• Catalisador: NÃO desloca, só acelera',
        macete: 'Reação tem "+ E kJ" no lado dos REAGENTES = ENDOtérmica direta (absorve calor). Aumentar T = mais produtos.'
      },
      {
        titulo: 'Estequiometria (passo-a-passo)',
        formulas: '1. BALANCEIE a equação\n2. Converta dados para MOLS (massa/M)\n3. Use a PROPORÇÃO da equação balanceada\n4. Volte para a unidade pedida (g, mL, mol)',
        exemplo: 'CO + 2H₂ → CH₃OH. 25g H₂ = 12,5 mol. Proporção 2:1 → 6,25 mol CH₃OH = 200g.',
        macete: 'Sempre BALANCEIE primeiro. Esquecer isso = errar tudo.'
      },
      {
        titulo: 'Geometria Molecular e Polaridade',
        formulas: '• 2 ligantes, 0 par livre: linear (CO₂, BeH₂)\n• 3 ligantes, 0 par livre: trigonal plana (BF₃, SO₃)\n• 4 ligantes, 0 par livre: tetraédrica (CH₄, CCl₄)\n• 3 ligantes, 1 par livre: piramidal (NH₃)\n• 2 ligantes, 2 pares livres: angular (H₂O)\n\nMolécula POLAR: vetores não se anulam. APOLAR: simétrica, vetores anulam.',
        macete: 'CO₂: linear simétrica = APOLAR. H₂O: angular = POLAR. SO₃: trigonal simétrica = APOLAR.'
      },
      {
        titulo: 'Funções Inorgânicas',
        formulas: '• Ácidos: liberam H⁺ (HCl, H₂SO₄)\n  - Hidrácidos: SEM oxigênio (HCl, HBr)\n  - Oxiácidos: COM oxigênio (H₂SO₄, HNO₃)\n• Bases: liberam OH⁻ (NaOH, Ca(OH)₂)\n• Sais: cátion ≠ H⁺ + ânion ≠ OH⁻ (NaCl)\n• Óxidos: O + outro elemento (CO₂, Na₂O)\n  - Óxido ácido: forma ácido com água (CO₂, SO₃)\n  - Óxido básico: forma base com água (Na₂O)',
        macete: 'H₂SO₄ = oxiácido (tem O), 2 H ionizáveis. SO₃ = óxido ácido (não básico).'
      }
    ],
    macetes: [
      '🎯 SEMPRE balanceie a equação antes de fazer estequiometria.',
      '🎯 Em equilíbrio, identifique se é endotérmica ou exotérmica pelos kJ no enunciado.',
      '🎯 Estado físico em temperatura T: compare T com PF e PE. T<PF=sólido, PF<T<PE=líquido, T>PE=gás.',
      '🎯 Em geometria molecular, conte LIGANTES + PARES DE ELÉTRONS LIVRES no átomo central.',
      '🎯 Pra contar elétrons em íon: comece com Z (átomo neutro), some/subtraia a carga (com sinal trocado).'
    ],
    youtube: [
      { titulo: 'Estequiometria do zero — Química em Ação', q: 'estequiometria química em ação vestibular' },
      { titulo: 'Funções orgânicas — Paulo Valim', q: 'funções orgânicas paulo valim' },
      { titulo: 'Equilíbrio químico Le Chatelier — Profa Bianca', q: 'le chatelier equilíbrio químico vestibular' },
      { titulo: 'Geometria molecular e polaridade — Química em Ação', q: 'geometria molecular polaridade vestibular' },
      { titulo: 'Atomística — Pirula', q: 'atomística prótons elétrons nêutrons química' }
    ]
  },

  biologia: {
    icon: '🧬',
    name: 'Biologia',
    color: '#52b788',
    topFreq: [
      { topic: 'Ecologia (níveis, cadeias, biomas)', freq: 95, vezes: 'Sempre cai' },
      { topic: 'Citologia (membrana, organelas)', freq: 80, vezes: 'Cai todo ano' },
      { topic: 'Genética (Mendel, Rh, sangue)', freq: 80, vezes: 'Cai todo ano' },
      { topic: 'Fisiologia humana (sistemas)', freq: 85, vezes: 'Sempre cai' },
      { topic: 'Biologia Molecular (DNA, RNA)', freq: 75, vezes: 'Frequente' },
      { topic: 'Botânica (raízes, transporte)', freq: 60, vezes: 'Eventual' },
      { topic: 'Evolução (cladogramas, ancestralidade)', freq: 65, vezes: 'Frequente' },
      { topic: 'Enzimas e Metabolismo', freq: 60, vezes: 'Frequente' }
    ],
    teoria: [
      {
        titulo: 'Níveis de organização ecológica',
        formulas: '• Indivíduo → População → Comunidade → Ecossistema → Bioma → Biosfera\n• POPULAÇÃO: indivíduos da MESMA espécie\n• COMUNIDADE: populações DIFERENTES (todos os seres vivos do local)\n• ECOSSISTEMA: comunidade + fatores ABIÓTICOS\n• BIOSFERA: tudo que tem vida na Terra',
        macete: 'POPULAÇÃO = uma espécie. COMUNIDADE = várias espécies juntas. Não confunda!'
      },
      {
        titulo: 'Dogma Central da Biologia Molecular',
        formulas: 'DNA → RNA → Proteína\n• Replicação: DNA → DNA (cópia idêntica)\n• Transcrição: DNA → RNA (uma fita serve de molde)\n• Tradução: RNA → Proteína (ribossomo monta aminoácidos)',
        macete: 'TRANSCRIÇÃO = DNA→RNA (mesma "linguagem" - nucleotídeos). TRADUÇÃO = RNA→PROTEÍNA (muda de "linguagem" para aminoácidos).'
      },
      {
        titulo: 'Enzimas',
        formulas: '• São PROTEÍNAS catalisadoras\n• REDUZEM a energia de ativação\n• NÃO mudam reagentes nem produtos\n• Atuam em substrato específico\n• Sensíveis a pH e temperatura',
        macete: 'Gráfico mostra curva mais BAIXA (energia ativação menor) com molécula presente = ENZIMA. Resposta: peptídeo catalisador.'
      },
      {
        titulo: 'Sistema Excretor Humano',
        formulas: '• Rins: filtram o sangue\n• Néfrons: unidade funcional\n• Etapas: filtração glomerular → reabsorção tubular → secreção → excreção\n• Excretas: ureia, ácido úrico, creatinina, água, sais\n\nPulmões excretam CO₂, mas o sistema EXCRETOR principal é o URINÁRIO.',
        macete: 'Excreção = eliminação de TOXINAS metabólicas. O foco é o RIM (filtração nos néfrons). Suor é secundário.'
      },
      {
        titulo: 'Eritroblastose Fetal (incompatibilidade Rh)',
        formulas: '• Mãe Rh⁻ + Pai Rh⁺ = bebê pode ser Rh⁺\n• Primeira gestação: SEM problema (mas pode haver sensibilização no parto)\n• Mãe produz anticorpos anti-Rh\n• Segunda gestação Rh⁺: anticorpos atacam o feto\n• PRECISA de gestação ANTERIOR para se sensibilizar',
        macete: 'Eritroblastose = SEMPRE em gestações posteriores à primeira. A mãe precisa ter sido sensibilizada antes.'
      },
      {
        titulo: 'Osmose nas Plantas',
        formulas: '• Água entra na raiz por OSMOSE (passiva, sem ATP)\n• Solo: menor concentração de solutos\n• Raiz: maior concentração de solutos\n• Água vai do hipotônico → hipertônico\n• Pelos radiculares aumentam superfície',
        macete: 'Osmose é PASSIVA — não gasta ATP. Precisa de DIFERENÇA de concentração osmótica.'
      },
      {
        titulo: 'Cladogramas (Filogenia)',
        formulas: '• Mostram relações evolutivas\n• Ramos próximos = parentesco maior\n• Politomia (3+ ramos juntos) = parentesco igual\n• "Ancestral comum" = nó na árvore',
        macete: 'Politomia (todos saindo do mesmo ponto): X, Y, Z são EQUIDISTANTES — mesmo grau de parentesco entre todos.'
      },
      {
        titulo: 'Biomas Brasileiros',
        formulas: '• Amazônia: maior floresta tropical, alta biodiversidade\n• Cerrado: árvores tortas, gramíneas, fogo natural\n• Caatinga: ÚNICO bioma exclusivo do BR, semiárido\n• Mata Atlântica: muito desmatada, alta biodiversidade\n• Pampa: campos do RS\n• Pantanal: maior área alagada do mundo',
        macete: 'Caatinga = ÚNICO bioma 100% brasileiro. Pantanal NÃO é só BR (vai pra Bolívia/Paraguai).'
      }
    ],
    macetes: [
      '🎯 Em ecologia: POPULAÇÃO = 1 espécie, COMUNIDADE = várias. Pegadinha clássica.',
      '🎯 Dogma central: TRANSCRIÇÃO (DNA→RNA), TRADUÇÃO (RNA→Proteína). Não inverta!',
      '🎯 Enzima sempre reduz energia de ativação. Quando vir gráfico assim, é enzima.',
      '🎯 Osmose é PASSIVA — não pede ATP. Difusão facilitada também.',
      '🎯 Eritroblastose: SEGUNDA gestação ou posteriores. Mãe Rh⁻ precisa ter contato anterior com Rh⁺.'
    ],
    youtube: [
      { titulo: 'Ecologia completa — Biologia com Samuel Cunha', q: 'ecologia samuel cunha biologia' },
      { titulo: 'Genética sanguínea (ABO e Rh) — Paulo Jubilut', q: 'genética sanguínea ABO Rh paulo jubilut' },
      { titulo: 'DNA RNA Proteína — Biologia Total', q: 'DNA RNA proteína dogma central biologia' },
      { titulo: 'Sistema excretor humano — Samuel Cunha', q: 'sistema excretor néfrons biologia vestibular' },
      { titulo: 'Cladogramas e evolução — Paulo Jubilut', q: 'cladograma filogenia evolução vestibular' }
    ]
  },

  fisica: {
    icon: '⚛️',
    name: 'Física',
    color: '#457b9d',
    topFreq: [
      { topic: 'Cinemática (MRU, MRUV, lançamentos)', freq: 80, vezes: 'Cai todo ano' },
      { topic: 'Dinâmica (F = m·a, atrito)', freq: 85, vezes: 'Cai todo ano' },
      { topic: 'Quantidade de movimento e Impulso', freq: 70, vezes: 'Frequente' },
      { topic: 'Termodinâmica (calor, dilatação)', freq: 75, vezes: 'Frequente' },
      { topic: 'Eletricidade (Lei de Ohm, potência)', freq: 80, vezes: 'Sempre cai' },
      { topic: 'Óptica (lentes, espelhos)', freq: 60, vezes: 'Frequente' },
      { topic: 'Ondas (frequência, comprimento)', freq: 65, vezes: 'Frequente' },
      { topic: 'Energia mecânica (cinética, potencial)', freq: 70, vezes: 'Frequente' }
    ],
    teoria: [
      {
        titulo: '2ª Lei de Newton',
        formulas: 'F = m · a\n• F em Newtons (N)\n• m em kg\n• a em m/s²',
        exemplo: 'Carro 1000 kg, a=2,4 m/s² → F=2400N. Adiciona 200kg blindagem (massa=1200): a = 2400/1200 = 2 m/s².',
        macete: 'Mesmo motor = MESMA FORÇA. Aumentou massa? Calcule F primeiro, divide pela nova massa.'
      },
      {
        titulo: 'Impulso e Quantidade de Movimento',
        formulas: 'Q = m · v (momento linear)\nI = F · Δt = ΔQ (impulso = variação do momento)\nVetorial! Quando direções mudam, use Pitágoras.',
        exemplo: 'Bola 0,45 kg muda direção 90°. v_in=16, v_fin=12. |Δv|=√(16²+12²)=20. I = 0,45·20 = 9 N·s.',
        macete: 'Mudança de DIREÇÃO ≠ mudança de módulo. Sempre faça VETOR. Em 90°, use Pitágoras.'
      },
      {
        titulo: 'Movimento e Velocidade Angular',
        formulas: 'Volta completa = 360° em T (período)\nω = 2π/T (rad/s) ou 360°/T\nf = 1/T (frequência)',
        exemplo: 'Terra: 360° em 24h. 15° por hora. 15° de longitude = 1 hora de diferença solar.',
        macete: 'Diferença de fuso: 15° = 1h. 30° = 2h. Sempre múltiplo de 15.'
      },
      {
        titulo: 'Calor Latente (mudança de fase)',
        formulas: 'Q = m · L\n• L_fusão da água: 80 cal/g\n• L_vaporização da água: 540 cal/g',
        exemplo: 'Derreter 3,9·10¹⁷ g de gelo: Q = 3,9·10¹⁷ · 80 = 3,12·10¹⁹ cal.',
        macete: 'Mudança de FASE: usa calor LATENTE (Q = mL), sem ΔT. Só aquecer/esfriar: Q = m·c·ΔT.'
      },
      {
        titulo: 'Lentes Esféricas',
        formulas: 'Convergente: f > 0 (forma imagem real, lupa)\nDivergente: f < 0\n\nEquação dos fabricantes: 1/f = (n_lente/n_meio - 1)·K\n\nQuando lente está em meio com n maior: comportamento INVERTIDO.',
        exemplo: 'Vidro (n=1,62) em ar (n=1): convergente. Em água (n=1,34): n_lente/n_água menor → ainda convergente, mas f maior.',
        macete: 'Mesma lente, meio MAIS denso = f maior. Se meio mais denso que vidro, inverte tipo (mas raro em prova).'
      },
      {
        titulo: 'Ondas (relação f, λ, T)',
        formulas: 'v = λ · f\nT = 1/f\n\nEletromagnéticas no vácuo: v = c (constante)',
        exemplo: 'AM (~1 MHz) vs FM (~100 MHz): AM tem f menor → λ maior, T maior. Ambos no ar com mesma v.',
        macete: 'f baixa = λ grande, T grande. f alta = λ pequeno, T pequeno. RELAÇÃO INVERSA!'
      },
      {
        titulo: 'Lei de Ohm e Potência',
        formulas: 'U = R · i\nP = U · i = U²/R = R·i²\n\nQuando R diminui (com U constante):\n• i = U/R AUMENTA\n• P = U²/R AUMENTA',
        exemplo: 'LDR sob luz: R diminui → i aumenta, P aumenta.',
        macete: 'U constante: R↓ → i↑ e P↑. Ambos aumentam juntos.'
      },
      {
        titulo: 'Energia Mecânica',
        formulas: 'E_cinética = m·v²/2\nE_potencial gravitacional = m·g·h\nE_potencial elástica = k·x²/2\n\nConservação: E_total = constante (sem atrito)',
        macete: 'Sem atrito: o que perde de potencial vira cinético, e vice-versa. Atrito vira calor (perda).'
      }
    ],
    macetes: [
      '🎯 Em problema com vetores, SEMPRE desenhe. Direção importa tanto quanto módulo.',
      '🎯 Mesmo motor = mesma F. Mudou massa? Recalcula a aceleração com F constante.',
      '🎯 Mudança de fase: Q=mL (não Q=mcΔT, não tem ΔT na fase!).',
      '🎯 Em ondas: f e λ são INVERSAMENTE proporcionais. AM tem λ maior porque f menor.',
      '🎯 Em lentes em meios diferentes, calcule (n_lente/n_meio - 1) — se positivo, ainda convergente.'
    ],
    youtube: [
      { titulo: 'Mecânica completa — Física Total', q: 'mecânica newton física total' },
      { titulo: 'Impulso e momento — Professor Boaro', q: 'impulso quantidade movimento boaro' },
      { titulo: 'Termodinâmica — Pi — Hexag', q: 'termodinâmica calorimetria física vestibular' },
      { titulo: 'Eletrodinâmica — Física Total', q: 'eletrodinâmica lei de ohm vestibular' },
      { titulo: 'Óptica geométrica — Boaro', q: 'óptica lentes professor boaro' },
      { titulo: 'Ondas e MHS — Física Total', q: 'ondas mecânicas e eletromagnéticas vestibular' }
    ]
  }
};

// ============================================================
// QUESTÕES EXTRAS - Treino adicional baseado em padrões Vunesp
// ============================================================
const EXTRA_QUESTIONS = [
  // ============= MATEMÁTICA EXTRAS =============
  {
    n: 'M1', topic: 'matematica', topicName: 'Matemática', extra: true,
    statement: 'Em uma PG de 4 termos, o primeiro vale 3 e o último 24. A razão da PG é',
    options: ['1,5', '2', '2,5', '3', '4'],
    answer: 1,
    explanation: 'a₄ = a₁·q³ → 24 = 3·q³ → q³ = 8 → q = 2.'
  },
  {
    n: 'M2', topic: 'matematica', topicName: 'Matemática', extra: true,
    statement: 'Numa empresa de TI, a probabilidade de um servidor cair em um dia é 0,1. Em 2 dias independentes, a probabilidade de NENHUMA queda é',
    options: ['0,01', '0,18', '0,80', '0,81', '0,90'],
    answer: 3,
    explanation: 'P(não cai em 1 dia) = 0,9. P(não cai em 2 dias) = 0,9 × 0,9 = 0,81.'
  },
  {
    n: 'M3', topic: 'matematica', topicName: 'Matemática', extra: true,
    statement: 'Um cilindro tem raio 3 cm e altura 10 cm. Seu volume é (use π=3,14)',
    options: ['94,2 cm³', '188,4 cm³', '282,6 cm³', '376,8 cm³', '565,2 cm³'],
    answer: 2,
    explanation: 'V = πr²h = 3,14 × 9 × 10 = 282,6 cm³.'
  },
  {
    n: 'M4', topic: 'matematica', topicName: 'Matemática', extra: true,
    statement: 'Se log₂(x) = 5, o valor de x é',
    options: ['10', '16', '25', '32', '64'],
    answer: 3,
    explanation: 'log₂(x) = 5 ⟺ x = 2⁵ = 32.'
  },
  {
    n: 'M5', topic: 'matematica', topicName: 'Matemática', extra: true,
    statement: 'Capital de R$ 5.000 aplicado a juros compostos de 10% a.a. Após 2 anos, o montante é',
    options: ['R$ 5.500', 'R$ 6.000', 'R$ 6.050', 'R$ 6.100', 'R$ 6.500'],
    answer: 2,
    explanation: 'M = C(1+i)^t = 5000·(1,1)² = 5000·1,21 = R$ 6.050.'
  },

  // ============= PORTUGUÊS EXTRAS =============
  {
    n: 'P1', topic: 'portugues', topicName: 'Português', extra: true,
    statement: 'Em "O computador pensa, sente e sofre quando travamos", o recurso linguístico é',
    options: ['ironia', 'metonímia', 'personificação', 'eufemismo', 'antítese'],
    answer: 2,
    explanation: 'Atribuir sentimentos humanos (pensar, sentir, sofrer) a um objeto inanimado = personificação (prosopopeia).'
  },
  {
    n: 'P2', topic: 'portugues', topicName: 'Português', extra: true,
    statement: 'O conectivo "todavia" estabelece relação de',
    options: ['causa', 'oposição', 'consequência', 'condição', 'adição'],
    answer: 1,
    explanation: '"Todavia" = "mas/porém/contudo/entretanto" = oposição/contraste.'
  },
  {
    n: 'P3', topic: 'portugues', topicName: 'Português', extra: true,
    statement: 'Movimento literário marcado pela ruptura, semana de 22 e nomes como Mário e Oswald de Andrade:',
    options: ['Romantismo', 'Realismo', 'Parnasianismo', 'Modernismo', 'Simbolismo'],
    answer: 3,
    explanation: 'Modernismo brasileiro tem início oficial na Semana de Arte Moderna de 1922 (SP), com Mário e Oswald de Andrade entre seus principais nomes.'
  },
  {
    n: 'P4', topic: 'portugues', topicName: 'Português', extra: true,
    statement: 'Em "A inteligência artificial revolucionará o mercado, mas trará desafios éticos", a oração após "mas" indica',
    options: ['adição', 'oposição', 'causa', 'comparação', 'finalidade'],
    answer: 1,
    explanation: '"Mas" é conjunção adversativa = oposição/contraste entre as duas ideias.'
  },

  // ============= INGLÊS EXTRAS =============
  {
    n: 'I1', topic: 'ingles', topicName: 'Inglês', extra: true,
    statement: 'In "AI will reshape the workplace; however, jobs will not disappear", "however" expresses',
    options: ['addition', 'cause', 'contrast', 'conclusion', 'time'],
    answer: 2,
    explanation: '"However" is a contrast/opposition connector — equivalent to "porém/entretanto".'
  },
  {
    n: 'I2', topic: 'ingles', topicName: 'Inglês', extra: true,
    statement: '"You should learn Python" can be replaced, without change in meaning, by',
    options: [
      'You can learn Python',
      "It would be wise to learn Python",
      "You're going to learn Python",
      "You're learning Python",
      "You must learn Python or else"
    ],
    answer: 1,
    explanation: '"Should" = recomendação = "it would be wise to". "Must" é mais forte (obrigação).'
  },
  {
    n: 'I3', topic: 'ingles', topicName: 'Inglês', extra: true,
    statement: 'In "Machine learning models become biased when trained on biased data", "when" introduces a clause of',
    options: ['contrast', 'condition/time', 'addition', 'reason', 'purpose'],
    answer: 1,
    explanation: '"When" + condition = "quando" / "se" → tempo ou condição. Aqui o sentido é "se forem treinados...".'
  },

  // ============= HISTÓRIA EXTRAS =============
  {
    n: 'H1', topic: 'historia', topicName: 'História', extra: true,
    statement: 'O período entre 1937 e 1945 no Brasil ficou conhecido como',
    options: ['República Velha', 'Estado Novo', 'República Liberal', 'Segundo Reinado', 'Era Lula'],
    answer: 1,
    explanation: 'Estado Novo: ditadura de Vargas iniciada com golpe em 1937, encerrada em 1945. Caracterizada por censura (DIP), centralismo, CLT.'
  },
  {
    n: 'H2', topic: 'historia', topicName: 'História', extra: true,
    statement: 'A queda do Muro de Berlim (1989) simboliza',
    options: [
      'o início da Guerra Fria',
      'a vitória do socialismo soviético',
      'o fim da bipolarização e início da queda da URSS',
      'a unificação alemã sob domínio soviético',
      'o início da Revolução Russa'
    ],
    answer: 2,
    explanation: 'A queda do Muro (09/11/1989) é símbolo do colapso do bloco socialista e do fim da bipolaridade EUA-URSS, com dissolução da URSS em 1991.'
  },
  {
    n: 'H3', topic: 'historia', topicName: 'História', extra: true,
    statement: 'A Lei Áurea (1888) e a Proclamação da República (1889) estão ligadas à crise do Império porque',
    options: [
      'ambas foram defendidas pelo imperador D. Pedro II',
      'o fim da escravidão indispôs a aristocracia rural com a monarquia',
      'a Igreja apoiava a monarquia incondicionalmente',
      'os EUA pressionaram pela proclamação da República',
      'a abolição foi seguida de guerra civil'
    ],
    answer: 1,
    explanation: 'A abolição (sem indenização) revoltou os fazendeiros escravocratas, que retiraram apoio à monarquia. Junto com Igreja, militares e setores urbanos descontentes, criou as condições para a Proclamação.'
  },

  // ============= GEOGRAFIA EXTRAS =============
  {
    n: 'G1', topic: 'geografia', topicName: 'Geografia', extra: true,
    statement: 'O bioma exclusivamente brasileiro, marcado pela vegetação xerófila e clima semiárido, é',
    options: ['Cerrado', 'Caatinga', 'Mata Atlântica', 'Pampa', 'Pantanal'],
    answer: 1,
    explanation: 'Caatinga é o único bioma 100% brasileiro, no semiárido nordestino. Pantanal não é exclusivo (Bolívia/Paraguai).'
  },
  {
    n: 'G2', topic: 'geografia', topicName: 'Geografia', extra: true,
    statement: 'O Matopiba refere-se a uma área de expansão agrícola que abrange os estados de',
    options: [
      'Mato Grosso, Tocantins, Piauí e Bahia',
      'Maranhão, Tocantins, Piauí e Bahia',
      'Mato Grosso, Triângulo Mineiro, Pará e Bahia',
      'Mato Grosso do Sul, Tocantins, Pará e Bahia',
      'Maranhão, Tocantins, Pernambuco e Bahia'
    ],
    answer: 1,
    explanation: 'MATOPIBA = MAranhão + TOcantins + PIauí + BAhia. Nova fronteira agrícola do cerrado.'
  },
  {
    n: 'G3', topic: 'geografia', topicName: 'Geografia', extra: true,
    statement: 'A globalização contemporânea intensifica',
    options: [
      'fluxos de capital, mercadorias e informação entre países',
      'o protecionismo dos países desenvolvidos',
      'a autossuficiência das economias nacionais',
      'a desigualdade entre países exclusivamente do Norte',
      'a redução do papel das corporações transnacionais'
    ],
    answer: 0,
    explanation: 'Globalização = aumento dos fluxos internacionais (econômicos, informacionais, culturais), conectados por tecnologia.'
  },

  // ============= QUÍMICA EXTRAS =============
  {
    n: 'Q1', topic: 'quimica', topicName: 'Química', extra: true,
    statement: 'A substância CH₃-CH₂-OH apresenta a função orgânica',
    options: ['éter', 'álcool', 'aldeído', 'cetona', 'éster'],
    answer: 1,
    explanation: 'O grupo -OH ligado a um carbono saturado caracteriza um álcool. Trata-se do etanol.'
  },
  {
    n: 'Q2', topic: 'quimica', topicName: 'Química', extra: true,
    statement: 'Em N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + calor, para favorecer a formação de NH₃, deve-se',
    options: [
      'aumentar a temperatura',
      'diminuir a pressão',
      'remover N₂',
      'aumentar a pressão',
      'adicionar catalisador'
    ],
    answer: 3,
    explanation: 'A reação direta tem 4 mols → 2 mols. Aumentar pressão favorece o lado com MENOS mols (produto). Como é exotérmica direta, baixar T também ajudaria.'
  },
  {
    n: 'Q3', topic: 'quimica', topicName: 'Química', extra: true,
    statement: 'O íon Mg²⁺ (Z=12) tem',
    options: [
      '12 prótons e 12 elétrons',
      '12 prótons e 10 elétrons',
      '10 prótons e 12 elétrons',
      '14 prótons e 12 elétrons',
      '12 prótons e 14 elétrons'
    ],
    answer: 1,
    explanation: 'Z=12 → 12 prótons. Carga 2+ = perdeu 2 elétrons → 12-2 = 10 elétrons.'
  },
  {
    n: 'Q4', topic: 'quimica', topicName: 'Química', extra: true,
    statement: 'A geometria molecular do CO₂ é',
    options: ['angular', 'linear', 'trigonal plana', 'piramidal', 'tetraédrica'],
    answer: 1,
    explanation: 'CO₂: O=C=O. Carbono central com 2 ligantes e 0 par livre → linear. Por isso é apolar (vetores opostos se anulam).'
  },

  // ============= BIOLOGIA EXTRAS =============
  {
    n: 'B1', topic: 'biologia', topicName: 'Biologia', extra: true,
    statement: 'O processo pelo qual o DNA serve de molde para sintetizar RNA mensageiro chama-se',
    options: ['replicação', 'transcrição', 'tradução', 'transcriptase', 'mutação'],
    answer: 1,
    explanation: 'Transcrição = DNA → RNA. Tradução = RNA → Proteína. Replicação = DNA → DNA.'
  },
  {
    n: 'B2', topic: 'biologia', topicName: 'Biologia', extra: true,
    statement: 'Um conjunto de indivíduos da mesma espécie em uma região constitui',
    options: ['comunidade', 'população', 'ecossistema', 'bioma', 'biosfera'],
    answer: 1,
    explanation: 'Indivíduos da MESMA espécie = população. Várias populações juntas = comunidade.'
  },
  {
    n: 'B3', topic: 'biologia', topicName: 'Biologia', extra: true,
    statement: 'Filtração do sangue, formação da urina e equilíbrio hídrico são funções principais do(a)',
    options: ['fígado', 'pâncreas', 'rim', 'baço', 'pulmão'],
    answer: 2,
    explanation: 'Os rins, através dos néfrons, filtram o sangue, formam urina e regulam volume hídrico/eletrolítico.'
  },

  // ============= FÍSICA EXTRAS =============
  {
    n: 'F1', topic: 'fisica', topicName: 'Física', extra: true,
    statement: 'Uma força resultante de 50 N atua sobre um corpo de 5 kg. A aceleração produzida é',
    options: ['2 m/s²', '5 m/s²', '10 m/s²', '25 m/s²', '50 m/s²'],
    answer: 2,
    explanation: 'F = m·a → 50 = 5·a → a = 10 m/s².'
  },
  {
    n: 'F2', topic: 'fisica', topicName: 'Física', extra: true,
    statement: 'Uma onda eletromagnética de frequência 100 MHz no vácuo (c=3·10⁸ m/s) tem comprimento de onda',
    options: ['0,3 m', '3 m', '30 m', '300 m', '3000 m'],
    answer: 1,
    explanation: 'λ = c/f = 3·10⁸ / 10⁸ = 3 m. (Faixa típica de FM.)'
  },
  {
    n: 'F3', topic: 'fisica', topicName: 'Física', extra: true,
    statement: 'Resistor de R=10 Ω submetido a U=20 V dissipa potência de',
    options: ['2 W', '20 W', '40 W', '200 W', '400 W'],
    answer: 2,
    explanation: 'P = U²/R = 400/10 = 40 W. (Ou: i = U/R = 2 A; P = U·i = 40 W.)'
  },
  {
    n: 'F4', topic: 'fisica', topicName: 'Física', extra: true,
    statement: 'Quanto calor é necessário para fundir 200 g de gelo a 0°C? (L_fusão = 80 cal/g)',
    options: ['1.000 cal', '8.000 cal', '16.000 cal', '20.000 cal', '160.000 cal'],
    answer: 2,
    explanation: 'Q = m·L = 200·80 = 16.000 cal.'
  }
];

// Adiciona as questões extras ao banco principal
if (typeof QUESTIONS !== 'undefined') {
  EXTRA_QUESTIONS.forEach(q => QUESTIONS.push(q));
}
