/**
 * Docência Viva - Plataforma Pedagógica
 * Colegiado Oficial: Ester Melo, Juliana Fernandes, Cassia Reis e Rizolan de Jesus
 * Carga Horária: 360 Horas (90 Horas por Pedagoga) • Semipresencial
 * 3 Encontros Presenciais Práticos aos Sábados
 * Mascote: Lili, a Corujinha Pedagógica
 * Aba Certificado com Abertura Direta da Demonstração
 */

// ==========================================
// DADOS DO CURSO E DAS 4 PEDAGOGAS FORMADORAS
// ==========================================
const COURSE_DATA = {
  title: "Gestão de Sala de Aula, Convivência e Práticas Pedagógicas",
  workload: "360 Horas (EAD + 4 Sábados Presenciais a cada 15 dias)",
  totalWorkloadNum: 360,
  studentName: "Profª. Amanda Melo",
  format: "Semipresencial • 320h EAD + 40h Práticas Presenciais (4 Sábados Quinzenais)",

  // Grade de Avisos e Comunicados dos Encontros Presenciais
  presencialNotices: [
    {
      id: 1,
      icon: "calendar",
      badge: "Periodicidade Quinzenal",
      title: "Encontros a Cada 15 Dias aos Sábados",
      description: "Os 4 encontros presenciais acontecem rigorosamente aos sábados a cada 15 dias no campus. Durante o intervalo quinzenal, os cursistas realizam os estudos e atividades no Ambiente Virtual (AVA)."
    },
    {
      id: 2,
      icon: "clock",
      badge: "Horários & Carga Horária",
      title: "08h30 às 13h30 (10 Horas Vivenciais por Sábado)",
      description: "Recepção e credenciamento pedagógico a partir das 08h00. Tolerância máxima de 15 minutos para cômputo da presença integral do encontro."
    },
    {
      id: 3,
      icon: "coffee",
      badge: "Convivência & Acolhimento",
      title: "Coffee Break Pedagógico Incluso",
      description: "Pausa ativa para lanche coletivo e networking entre as educadoras às 10h15. Traga sua garrafinha de água ou caneca sustentável!"
    },
    {
      id: 4,
      icon: "award",
      badge: "Critério de Certificação",
      title: "Frequência Mínima de 75% & Entrega no 4º Sábado",
      description: "Para validar as 360 horas, é necessária a presença em ao menos 3 dos 4 sábados e a apresentação do Portfólio de Gestão de Sala no 4º Sábado."
    }
  ],

  // 4 Encontros Presenciais aos Sábados (A Cada 15 Dias • 10h cada = 40h)
  presencialEncounters: [
    {
      id: 1,
      tag: "1º Sábado Quinzenal",
      interval: "1º Encontro • Semana 02",
      day: "Sábado • 08h30 às 13h30",
      workload: "10h Práticas",
      title: "Oficina Vivencial: Acolhimento Socioemocional & Árvore dos Combinados",
      pedagogas: "Pedagoga Juliana Fernandes (Módulo 1)",
      badgeColor: "bg-yellow-400 text-purple-950",
      location: "Laboratório de Práticas Pedagógicas • Sala 101",
      description: "Montagem coletiva do mural físico da 'Árvore dos Combinados', dinâmicas de acolhimento nos primeiros 15 minutos e confecção do Termômetro Emocional.",
      topics: [
        "Dinâmica prática da 'Teia das Emoções' para início de ano letivo",
        "Confecção física do Termômetro das Emoções e Cantinho da Calma",
        "Simulação de assembleia de turma sem imposição autoritária"
      ],
      notice: "Trazer canetinhas coloridas, tesoura sem ponta e papel kraft."
    },
    {
      id: 2,
      tag: "2º Sábado Quinzenal",
      interval: "2º Encontro • Semana 04 (após 15 dias)",
      day: "Sábado • 08h30 às 13h30",
      workload: "10h Práticas",
      title: "Laboratório de Comunicação Não-Violenta (CNV) & Mediação de Conflitos",
      pedagogas: "Pedagoga Ester Melo (Módulo 2)",
      badgeColor: "bg-brand-600 text-white",
      location: "Espaço Diálogos de Paz • Sala Multiuso",
      description: "Treinamento vivencial dos 4 passos da CNV na Educação Básica, role-playing de desarmamento de atritos entre estudantes e restauração de vínculos.",
      topics: [
        "Vivência dos 4 passos da CNV: Observar, Sentir, Necessitar e Pedir",
        "Simulação de intervenção em atritos reais de recreio e sala",
        "Desarmamento de posturas defensivas sem agressividade ou punição"
      ],
      notice: "Trazer 1 relato de caso real vivido na sua escola para estudo em grupo."
    },
    {
      id: 3,
      tag: "3º Sábado Quinzenal",
      interval: "3º Encontro • Semana 06 (após 15 dias)",
      day: "Sábado • 08h30 às 13h30",
      workload: "10h Práticas",
      title: "Círculo de Justiça Restaurativa & Laboratório do Bastão da Fala",
      pedagogas: "Pedagoga Cassia Reis (Módulo 3)",
      badgeColor: "bg-purple-600 text-white",
      location: "Ciranda Pedagógica • Sala Aberta",
      description: "Oficina prática de Círculos Restaurativos e Justiça Pacificadora na Escola. Criação do Bastão da Fala e dinâmicas cooperativas em estações ativas.",
      topics: [
        "Vivência real do Círculo Restaurativo de Diálogo com Bastão da Fala",
        "Montagem de Estações Cooperativas de Aprendizagem em grupos",
        "Elaboração de acordos restaurativos e reparação afetiva de danos"
      ],
      notice: "Confecção artesanal individual do Bastão da Fala com materiais lúdicos."
    },
    {
      id: 4,
      tag: "4º Sábado Quinzenal",
      interval: "4º Encontro • Semana 08 (após 15 dias)",
      day: "Sábado • 08h30 às 14h00",
      workload: "10h Práticas",
      title: "Rotinas Inclusivas, Seminário Integrador & Entrega de Certificados",
      pedagogas: "Pedagoga Rizolan de Jesus & Colegiado das 4 Pedagogas",
      badgeColor: "bg-pink-600 text-white",
      location: "Auditório Central de Educação • Bloco Reitoria",
      description: "Apresentação dos Portfólios de Convivência elaborados pelas educadoras, debate de encerramento com as 4 Pedagogas e entrega solene dos Certificados de 360h.",
      topics: [
        "Oficina de Rotinas Visuais e Acessibilidade para TDAH e TEA",
        "Apresentação dos Projetos de Intervenção Pedagógica dos cursistas",
        "Sessão Solene de Entrega dos Certificados Oficiais de 360 Horas"
      ],
      notice: "Entrega do Portfólio de Gestão de Sala impresso e formatura solene."
    }
  ],

  pedagogas: [
    {
      id: "juliana",
      name: "Pedagoga Juliana Fernandes",
      initials: "JF",
      photo: "img/juliana-fernandes.jpg",
      avatarBg: "bg-yellow-500 text-purple-950",
      role: "Especialista em Clima Escolar & Socioemocional",
      workload: "90 Horas",
      moduleAssigned: "Módulo 1: O Clima Escolar e o Contrato de Convivência (90h)",
      lessonsAssigned: "Aulas 1 e 2 + 1º Sábado Quinzenal",
      bio: "Pesquisadora de acolhimento infantil e inteligência socioemocional. Conduz a formação sobre combinados coletivos e práticas de autorregulação emocional na infância e anos iniciais.",
      badge: "Módulo 1 • 90h"
    },
    {
      id: "ester",
      name: "Pedagoga Ester Melo",
      initials: "EM",
      photo: "img/ester-melo.jpg",
      avatarBg: "bg-brand-600 text-white",
      role: "Especialista em Comunicação Não-Violenta (CNV)",
      workload: "90 Horas",
      moduleAssigned: "Módulo 2: Mediação de Conflitos e Linguagem Empática (90h)",
      lessonsAssigned: "Aulas 3 e 4 + 2º Sábado Quinzenal",
      bio: "Facilitadora em mediação pacífica e linguagem empática na Educação Básica. Desenvolve técnicas de desarmamento de atritos interpessoais entre estudantes sem coerção.",
      badge: "Módulo 2 • 90h"
    },
    {
      id: "cassia",
      name: "Pedagoga Cassia Reis",
      initials: "CR",
      photo: "img/cassia-reis.jpg",
      avatarBg: "bg-purple-700 text-white",
      role: "Especialista em Práticas Restaurativas & Jogos",
      workload: "90 Horas",
      moduleAssigned: "Módulo 3: Círculos Restaurativos e Metodologias Ativas (90h)",
      lessonsAssigned: "Aulas 5 e 6 + 3º Sábado Quinzenal",
      bio: "Referência em justiça restaurativa escolar e dinâmicas cooperativas lúdicas. Criadora da dinâmica do Bastão da Fala para rodas de diálogo e oficinas ativas de mediação.",
      badge: "Módulo 3 • 90h"
    },
    {
      id: "rizolan",
      name: "Pedagoga Rizolan de Jesus",
      initials: "RZ",
      photo: "img/rizolan-de-jesus.jpg",
      avatarBg: "bg-pink-600 text-white",
      role: "Especialista em Ritmos, Rotinas & Famílias",
      workload: "90 Horas",
      moduleAssigned: "Módulo 4: Gestão do Tempo, Inclusão e Aliança com Pais (90h)",
      lessonsAssigned: "Aulas 7 e 8 + 4º Sábado Quinzenal",
      bio: "Pesquisadora de rotinas escolares acolhedoras e inclusão de neurodivergências (TDAH/TEA). Conduz a formação de gestão temporal e parceria colaborativa com famílias.",
      badge: "Módulo 4 • 90h"
    }
  ],

  modules: [
    {
      id: 1,
      title: "Módulo 1: O Clima Escolar e o Contrato de Convivência (90h)",
      description: "Construção de vínculos seguros, acolhimento socioemocional e pactuação coletiva de normas.",
      workload: "90 Horas",
      responsible: "Pedagoga Juliana Fernandes",
      lessons: [
        {
          id: 1,
          moduleId: 1,
          title: "Aula 1: Acolhimento Afetivo e a Árvore dos Combinados",
          subtitle: "Como iniciar o ano letivo criando um pacto participativo com dinâmicas de escuta",
          duration: "15 min (Carga: 45h)",
          instructor: "Pedagoga Juliana Fernandes",
          instructorRole: "Pedagoga Formadora • Módulo 1 (90h)",
          objective: "Compreender as bases psicológicas do acolhimento escolar e elaborar colaborativamente com os educandos as normas da turma sob a ótica da disciplina positiva.",
          keyPoints: [
            "A dinâmica da 'Árvore dos Combinados': folhas com combinados criados pelas próprias crianças.",
            "O impacto da recepção calorosa nos primeiros 15 minutos de aula no humor cognitivo da turma.",
            "Visualização do Contrato Pedagógico no mural da sala como âncora de segurança.",
            "Como revisar os combinados com assembleias periódicas sem recorrer a sermões."
          ],
          materials: [
            { id: 1, title: "Modelo Ilustrado da Árvore dos Combinados (Pedagoga Juliana Fernandes).pdf", size: "1.4 MB", type: "PDF" },
            { id: 2, title: "Roteiro da Dinâmica de Acolhimento Socioemocional.docx", size: "450 KB", type: "DOC" }
          ]
        },
        {
          id: 2,
          moduleId: 1,
          title: "Aula 2: Termômetro das Emoções & Cantinho da Calma",
          subtitle: "Articulação das competências socioemocionais da BNCC com autorregulação",
          duration: "18 min (Carga: 45h)",
          instructor: "Pedagoga Juliana Fernandes",
          instructorRole: "Pedagoga Formadora • Módulo 1 (90h)",
          objective: "Estruturar um espaço acolhedor de autorregulação emocional na sala de aula para ajudar alunos a identificarem frustrações e retomarem o foco com serenidade.",
          keyPoints: [
            "Como montar o 'Termômetro das Emoções' na porta da sala para acolhimento individual.",
            "O 'Cantinho da Calma' (não punitivo): almofadas, livros de respiração e garrafas sensoriais.",
            "Pausas ativas com respiração consciente para desacelerar a turma."
          ],
          materials: [
            { id: 3, title: "Painel Imprimível do Termômetro das Emoções (Pedagoga Juliana Fernandes).pdf", size: "890 KB", type: "PDF" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Módulo 2: Mediação de Conflitos e Linguagem Empática (90h)",
      description: "Técnicas de Comunicação Não-Violenta (CNV), gestão de atritos interpessoais e escuta ativa.",
      workload: "90 Horas",
      responsible: "Pedagoga Ester Melo",
      lessons: [
        {
          id: 3,
          moduleId: 2,
          title: "Aula 3: Comunicação Não-Violenta (CNV) na Prática da Sala",
          subtitle: "Substituindo o julgamento por observação de sentimentos e pedidos claros",
          duration: "20 min (Carga: 45h)",
          instructor: "Pedagoga Ester Melo",
          instructorRole: "Pedagoga Formadora • Módulo 2 (90h)",
          objective: "Dominar os 4 passos da CNV (Observar, Sentir, Necessitar e Pedir) adaptados à realidade dos alunos da Educação Básica.",
          keyPoints: [
            "Desarmando a postura defensiva dos alunos através da escuta ativa e validação de sentimentos.",
            "A diferença entre elogio vazio ('Você é o melhor') e encorajamento com evidências reais.",
            "Como intervir em conversas paralelas sem elevar o tom de voz usando pistas sonoras."
          ],
          materials: [
            { id: 4, title: "Guia Ilustrado de CNV para Professores (Pedagoga Ester Melo).pdf", size: "1.1 MB", type: "PDF" }
          ]
        },
        {
          id: 4,
          moduleId: 2,
          title: "Aula 4: Desarmando Atritos e Restaurando Vínculos",
          subtitle: "Superando sanções punitivas com diálogo respeitoso e reparação de danos",
          duration: "22 min (Carga: 45h)",
          instructor: "Pedagoga Ester Melo",
          instructorRole: "Pedagoga Formadora • Módulo 2 (90h)",
          objective: "Aplicar práticas de mediação rápida em sala para resolver desavenças entre colegas sem humilhação pública.",
          keyPoints: [
            "Como abordar os estudantes em conflito com postura neutra e acolhedora.",
            "Perguntas de reflexão: 'O que você estava sentindo naquele instante?'.",
            "Como transformar conflitos em oportunidades preciosas de aprendizado ético."
          ],
          materials: [
            { id: 5, title: "Roteiro de Mediação de Atritos Escolares (Pedagoga Ester Melo).pdf", size: "620 KB", type: "PDF" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Módulo 3: Círculos Restaurativos e Metodologias Ativas (90h)",
      description: "Combate à dispersão dos alunos com rodas de conversa, dinâmicas cooperativas e estações.",
      workload: "90 Horas",
      responsible: "Pedagoga Cassia Reis",
      lessons: [
        {
          id: 5,
          moduleId: 3,
          title: "Aula 5: Círculos de Diálogo e o Bastão da Fala",
          subtitle: "A prática ancestral das rodas de conversa para resolução comunitária de problemas",
          duration: "19 min (Carga: 45h)",
          instructor: "Pedagoga Cassia Reis",
          instructorRole: "Pedagoga Formadora • Módulo 3 (90h)",
          objective: "Conduzir círculos restaurativos periódicos utilizando o símbolo do Bastão da Fala para cultivar a escuta respeitosa e a cooperação.",
          keyPoints: [
            "O papel simbólico do Bastão da Fala para garantir que todos escutem sem interromper.",
            "Roteiro de abertura e fechamento para círculos de paz em sala de aula.",
            "Como envolver até os alunos mais tímidos na tomada de decisões da turma."
          ],
          materials: [
            { id: 6, title: "Guia do Bastão da Fala e Círculos de Paz (Pedagoga Cassia Reis).pdf", size: "1.8 MB", type: "PDF" }
          ]
        },
        {
          id: 6,
          moduleId: 3,
          title: "Aula 6: Estações Cooperativas de Aprendizagem",
          subtitle: "Transformando o espaço da sala de aula em ilhas dinâmicas de conhecimento",
          duration: "16 min (Carga: 45h)",
          instructor: "Pedagoga Cassia Reis",
          instructorRole: "Pedagoga Formadora • Módulo 3 (90h)",
          objective: "Organizar o espaço físico da sala de aula para incentivar a autonomia, dividindo o conteúdo em pequenas estações colaborativas.",
          keyPoints: [
            "Organização de equipes com papéis cooperativos claros.",
            "Quebrando o modelo de fileiras tradicionais para dinamizar a atenção.",
            "Rubricas simples de autoavaliação entre colegas de equipe."
          ],
          materials: [
            { id: 7, title: "Template de Estações Cooperativas (Pedagoga Cassia Reis).pdf", size: "750 KB", type: "PDF" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Módulo 4: Gestão do Tempo, Inclusão e Famílias (90h)",
      description: "Transições rítmicas, apoio visual para neurodivergências (TDAH/TEA) e aliança com responsáveis.",
      workload: "90 Horas",
      responsible: "Pedagoga Rizolan de Jesus",
      lessons: [
        {
          id: 7,
          moduleId: 4,
          title: "Aula 7: Transições Rítmicas e Gestão do Tempo de Aula",
          subtitle: "Eliminando momentos de ociosidade com pistas musicais e ecos de palmas",
          duration: "24 min (Carga: 45h)",
          instructor: "Pedagoga Rizolan de Jesus",
          instructorRole: "Pedagoga Formadora • Módulo 4 (90h)",
          objective: "Adotar pistas rítmicas sonoras (ecos de palmas e músicas-tema) para capturar a atenção sem gritos e gerenciar transições de aula.",
          keyPoints: [
            "A técnica do eco rítmico para focar a turma ao retornar do intervalo.",
            "Contagens regressivas visuais e ampulhetas pedagógicas para guardar materiais.",
            "O banco de desafios do 'Já Terminei!' para estudantes com ritmo acelerado."
          ],
          materials: [
            { id: 8, title: "Planner de Transições e Pistas Rítmicas (Pedagoga Rizolan de Jesus).pdf", size: "2.1 MB", type: "PDF" }
          ]
        },
        {
          id: 8,
          moduleId: 4,
          title: "Aula 8: Inclusão, Apoio Visual e Parceria com Famílias",
          subtitle: "Acessibilidade atitudinal para TDAH/TEA e reuniões produtivas com responsáveis",
          duration: "21 min (Carga: 45h)",
          instructor: "Pedagoga Rizolan de Jesus",
          instructorRole: "Pedagoga Formadora • Módulo 4 (90h)",
          objective: "Elaborar rotinas visuais ilustradas e construir o Portfólio Afetivo para conduzir reuniões resolutivas com os responsáveis.",
          keyPoints: [
            "A importância dos cartões de rotina visual expostos no quadro.",
            "Pausas cerebrais (Brain Breaks) com movimentos corporais leves.",
            "O Portfólio Afetivo: destacando conquistas do estudante antes dos desafios na conversa com pais."
          ],
          materials: [
            { id: 9, title: "Kit de Rotina Visual e Portfólio Afetivo (Pedagoga Rizolan de Jesus).pdf", size: "530 KB", type: "PDF" }
          ]
        }
      ]
    }
  ],

  forumComments: [
    {
      author: "Pedagoga Juliana Fernandes",
      avatarBg: "bg-yellow-500 text-purple-950",
      date: "Há 1 dia",
      lesson: "Módulo 1 (90h)",
      text: "Queridas alunas, lembrem-se: o acolhimento nos primeiros 15 minutos define o clima de todo o período letivo. A Árvore dos Combinados deve ser feita com a mãozinha dos alunos!"
    },
    {
      author: "Pedagoga Ester Melo",
      avatarBg: "bg-brand-600 text-white",
      date: "Há 2 dias",
      lesson: "Módulo 2 (90h)",
      text: "Na mediação de conflitos, a regra de ouro é: nunca discuta com um estudante no ápice da raiva. Aguarde a respiração desacelerar no Cantinho da Calma e depois pratique a CNV."
    },
    {
      author: "Pedagoga Cassia Reis",
      avatarBg: "bg-purple-700 text-white",
      date: "Há 3 dias",
      lesson: "Módulo 3 (90h)",
      text: "O Bastão da Fala é mágico! Ele ensina a criança a segurar o impulso de interromper o colega, transformando o atrito em respeito mútuo. Praticaremos no 2º Sábado presencial!"
    },
    {
      author: "Pedagoga Rizolan de Jesus",
      avatarBg: "bg-pink-600 text-white",
      date: "Há 4 dias",
      lesson: "Módulo 4 (90h)",
      text: "Turma agitada após a Educação Física ou recreio? Não grite! Use o eco de palmas e a respiração da flor e da vela. Funciona em qualquer escola."
    }
  ],

  mascotTips: [
    "Olá, Profe! São 360 horas de formação completa com 4 sábados de encontros presenciais quinzenais!",
    "Combinados construídos com afeto evitam 90% dos atritos na sala de aula!",
    "Nos nossos 4 encontros presenciais quinzenais aos sábados, vamos praticar dinâmicas reais e círculos restaurativos!",
    "No Cantinho da Calma, a criança aprende a autorregular suas emoções sem castigos punitivos.",
    "O Bastão da Fala ensina a respeitar o momento de fala do colega com empatia e escuta ativa.",
    "Comunicação Não-Violenta (CNV) na escola desarma conflitos antes que eles virem brigas.",
    "Rotinas visuais e previsibilidade salvam o dia de estudantes neurodivergentes e acalmam a turma inteira!"
  ],

  quizQuestions: [
    {
      id: 1,
      scenario: "Durante uma atividade em grupo, dois alunos do 5º ano começam a discutir asperamente pela posse de materiais coloridos, e a turma inteira se dispersa assistindo. Sob a orientação das pedagogas Juliana Fernandes e Ester Melo, como agir?",
      options: [
        { text: "Gritar com os dois alunos na frente da turma, recolher todos os materiais e mandar ambos para a secretaria como punição exemplar.", isCorrect: false },
        { text: "Aproximar-se calmamente, validar o sentimento de ambos e convidá-los a recorrer aos combinados da Árvore de Convivência estabelecida no início das aulas.", isCorrect: true, explanation: "Excelente! As pedagogas Juliana e Ester ensinam que a intervenção acolhedora e sem exposição pública resgata o pacto participativo da turma." },
        { text: "Fingir que não viu para não interferir nas disputas espontâneas das crianças.", isCorrect: false },
        { text: "Proibir que a turma toda faça atividades em grupo pelo resto do mês.", isCorrect: false }
      ]
    },
    {
      id: 2,
      scenario: "Um estudante do 7º ano cruza os braços na carteira, recusa-se a participar da rotação por estações e afirma: 'Não vou fazer nada, essa aula é chata'. Segundo a pedagoga Cassia Reis, qual a melhor abordagem?",
      options: [
        { text: "Confrontar o estudante com ironia perante todos os colegas, dizendo que ele ficará com nota zero.", isCorrect: false },
        { text: "Sem expô-lo publicamente, aproximar-se e oferecer uma escolha de responsabilidade cooperativa no grupo (como líder do cronômetro ou relator).", isCorrect: true, explanation: "Brilhante! Conforme ensina a Pedagoga Cassia, atribuir papéis de liderança devolve o senso de pertencimento e autonomia sem embates de poder." },
        { text: "Expulsar o aluno da sala imediatamente para que os outros continuem a atividade.", isCorrect: false },
        { text: "Chamar os responsáveis para que apliquem um castigo rígido em casa.", isCorrect: false }
      ]
    },
    {
      id: 3,
      scenario: "A turma chega extremamente barulhenta e agitada do recreio para a sala de aula. Qual técnica da Pedagoga Rizolan de Jesus é mais indicada para reorganizar o foco?",
      options: [
        { text: "Bater com a régua na mesa e gritar por silêncio até todos se calarem de medo.", isCorrect: false },
        { text: "Iniciar uma rotina de transição sensorial com o eco de palmas rítmicas, 2 minutos de hidratação e a respiração da flor e da vela para desacelerar o ritmo cardíaco.", isCorrect: true, explanation: "Perfeito! A prática rítmica da Pedagoga Rizolan respeita o ritmo biológico da criança, acalmando a frequência cardíaca com serenidade." },
        { text: "Passar uma prova surpresa sem aviso prévio para punir o excesso de energia.", isCorrect: false },
        { text: "Colocar todos de castigo sem poder falar nem apontar o lápis.", isCorrect: false }
      ]
    },
    {
      id: 4,
      scenario: "Ao receber a família de um aluno com histórico recente de agitação em sala de aula, qual conduta docente reflete a aliança afetiva entre escola e família?",
      options: [
        { text: "Iniciar a reunião apresentando o Portfólio Afetivo com as conquistas e produções do estudante, dialogar com empatia sobre os momentos de agitação e pactuar um plano de apoio conjunto.", isCorrect: true, explanation: "Maravilhoso! Evidenciar as potências da criança antes dos desafios fortalece o vínculo familiar e gera compromisso recíproco de apoio." },
        { text: "Entregar uma lista de reclamações e exigir que os pais tirem o celular e o videogame do filho.", isCorrect: false },
        { text: "Dizer aos pais que o comportamento do filho não tem conserto na escola.", isCorrect: false },
        { text: "Omitir tudo o que aconteceu para que a família não fique preocupada.", isCorrect: false }
      ]
    }
  ]
};

// ==========================================
// ESTADO DA APLICAÇÃO (STATE)
// ==========================================
let currentView = 'landing';
let currentLessonId = 1;
let completedLessons = new Set([1]);
let studentName = localStorage.getItem('dv_student_name') || "Profª. Amanda Melo";
let quizCurrentIndex = 0;
let quizScore = 0;
let quizAnswerSelected = null;
let isVideoPlaying = false;
let currentMascotTipIndex = 0;

// ==========================================
// INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadSavedState();
  renderPedagogasGrid();
  renderCurriculumAccordion();
  renderPresencialEncounters();
  renderDashboardLessons();
  renderSidebarLessons();
  renderForumComments();
  loadLesson(currentLessonId);
  updateProgressUI();
  updateStudentNameDisplays();
  lucide.createIcons();
});

// ==========================================
// ABA CERTIFICADO: DEMONSTRAÇÃO COMPLETA DIRETA (360H)
// ==========================================
function openCertificateDemo() {
  // Preenche a demonstração com todas as 8 aulas concluídas, 4 sábados quinzenais validados e quiz aprovado
  const allLessons = COURSE_DATA.modules.flatMap(m => m.lessons);
  allLessons.forEach(l => completedLessons.add(l.id));
  quizScore = 4;
  saveState();
  updateProgressUI();
  updateStudentNameDisplays();
  
  const statusEl = document.getElementById('dash-quiz-status');
  if (statusEl) {
    statusEl.innerText = "4/4 Aprovada ⭐ (100% das 360h)";
    statusEl.className = "text-base font-bold text-yellow-700 font-ludic";
  }

  showNotification("🎓 Demonstração do Certificado Oficial de 360 Horas (com 4 Sábados Presenciais a cada 15 dias) aberta!");
  navigate('certificate');
}

// ==========================================
// INTERATIVIDADE DO MASCOTE FOFO (LILI)
// ==========================================
function toggleMascotBubble() {
  const bubble = document.getElementById('mascot-bubble');
  if (bubble) {
    bubble.classList.toggle('hidden');
  }
}

function cycleMascotTip() {
  currentMascotTipIndex = (currentMascotTipIndex + 1) % COURSE_DATA.mascotTips.length;
  const tipEl = document.getElementById('mascot-tip-text');
  if (tipEl) {
    tipEl.style.opacity = 0;
    setTimeout(() => {
      tipEl.innerText = `"${COURSE_DATA.mascotTips[currentMascotTipIndex]}"`;
      tipEl.style.opacity = 1;
    }, 200);
  }
}

function pokeMascot() {
  const bubble = document.getElementById('mascot-bubble');
  if (bubble && bubble.classList.contains('hidden')) {
    bubble.classList.remove('hidden');
  }
  const mascot = document.getElementById('mascot-character');
  if (mascot) {
    mascot.classList.remove('mascot-poke');
    void mascot.offsetWidth;
    mascot.classList.add('mascot-poke');
  }
  cycleMascotTip();
}

// ==========================================
// GERENCIADOR DE ESTADO LOCAL
// ==========================================
function loadSavedState() {
  const savedCompleted = localStorage.getItem('dv_completed_lessons');
  if (savedCompleted) {
    try {
      const arr = JSON.parse(savedCompleted);
      completedLessons = new Set(arr);
    } catch (e) {
      console.error(e);
    }
  }
}

function saveState() {
  localStorage.setItem('dv_completed_lessons', JSON.stringify([...completedLessons]));
  localStorage.setItem('dv_student_name', studentName);
}

// ==========================================
// NAVEGAÇÃO ENTRE TELAS
// ==========================================
function navigate(viewId) {
  currentView = viewId;
  
  document.querySelectorAll('.view-section').forEach(el => {
    el.classList.add('hidden');
  });

  const target = document.getElementById(`view-${viewId}`);
  if (target) {
    target.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Atualiza menu principal
  document.querySelectorAll('.nav-link').forEach(btn => {
    if (btn.id !== 'nav-btn-certificate') {
      btn.classList.remove('text-brand-600', 'bg-brand-50');
    }
  });
  const activeNavBtn = document.getElementById(`nav-btn-${viewId}`);
  if (activeNavBtn && activeNavBtn.id !== 'nav-btn-certificate') {
    activeNavBtn.classList.add('text-brand-600', 'bg-brand-50');
  }

  if (viewId === 'quiz') {
    renderQuizQuestion();
  }

  setTimeout(() => lucide.createIcons(), 50);
}

function scrollToModules() {
  const section = document.getElementById('modules-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================================
// RENDERIZAÇÃO DAS 4 PEDAGOGAS COM FOTOS (90H CADA • TOTAL 360H)
// ==========================================
function uploadPedagogaPhoto(pedId, input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      localStorage.setItem(`dv_photo_${pedId}`, dataUrl);
      const img = document.getElementById(`ped-img-${pedId}`);
      const fallback = document.getElementById(`ped-fallback-${pedId}`);
      if (img) {
        img.src = dataUrl;
        img.style.display = 'block';
      }
      if (fallback) {
        fallback.style.display = 'none';
      }
      showNotification(`Foto da educadora atualizada com sucesso! 📸✨`);
    };
    reader.readAsDataURL(file);
  }
}

function renderPedagogasGrid() {
  const container = document.getElementById('pedagogas-cards-grid');
  if (!container) return;

  container.innerHTML = COURSE_DATA.pedagogas.map(ped => {
    const savedPhoto = localStorage.getItem(`dv_photo_${ped.id}`);
    const photoSrc = savedPhoto || ped.photo;

    return `
    <div class="bg-white rounded-3xl p-5 sm:p-6 border-2 border-brand-100 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all flex flex-col justify-between group relative">
      <div>
        <div class="flex items-start justify-between gap-3 mb-3.5">
          
          <!-- Espaço da Foto da Educadora com Fallback e Botão de Carregar -->
          <div class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-md flex-shrink-0 bg-brand-50 group/photo">
            <img src="${photoSrc}" alt="${ped.name}" 
                 id="ped-img-${ped.id}"
                 class="w-full h-full object-cover transition-transform group-hover:scale-105"
                 onerror="this.style.display='none'; document.getElementById('ped-fallback-${ped.id}').style.display='flex';" />
            
            <div id="ped-fallback-${ped.id}" 
                 class="w-full h-full ${ped.avatarBg} font-black text-xl flex items-center justify-center font-ludic hidden">
              ${ped.initials}
            </div>

            <label for="input-photo-${ped.id}" 
                   class="absolute inset-0 bg-black/60 text-white text-[10px] font-bold opacity-0 group-hover/photo:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-opacity backdrop-blur-[2px]" 
                   title="Carregar foto de ${ped.name}">
              <i data-lucide="camera" class="w-4 h-4 text-yellow-300 mb-0.5"></i>
              <span>Foto</span>
              <input type="file" id="input-photo-${ped.id}" accept="image/*" class="hidden" onchange="uploadPedagogaPhoto('${ped.id}', this)" />
            </label>
          </div>

          <div class="text-right flex flex-col items-end">
            <span class="bg-yellow-100 text-yellow-900 border border-yellow-300 text-[11px] sm:text-xs font-black px-2.5 py-1 rounded-full shadow-sm mb-1.5">
              ⭐ ${ped.workload}
            </span>
            <label for="input-photo-${ped.id}" class="text-[10px] text-brand-700 hover:text-brand-900 font-bold cursor-pointer flex items-center gap-1 bg-brand-50 hover:bg-yellow-100 px-2.5 py-1 rounded-xl border border-brand-200 transition-colors">
              <i data-lucide="camera" class="w-3 h-3 text-brand-600"></i>
              <span>Carregar Foto</span>
            </label>
          </div>
        </div>

        <h3 class="text-base sm:text-lg font-bold text-slate-900 font-ludic leading-tight">${ped.name}</h3>
        <p class="text-xs text-brand-700 font-bold mt-1 mb-2">${ped.role}</p>
        <p class="text-xs text-slate-600 leading-relaxed mb-3">${ped.bio}</p>
      </div>

      <div class="pt-2.5 border-t border-brand-100 space-y-2">
        <div class="text-[11px] bg-brand-50/80 p-2.5 rounded-2xl border border-brand-200/60 text-brand-900">
          <span class="font-bold block text-[10px] uppercase text-brand-600">Módulo & Encontro Presencial:</span>
          <span class="font-semibold block text-[11px]">${ped.moduleAssigned}</span>
          <span class="text-[10px] text-amber-800 font-bold block mt-1">📅 ${ped.lessonsAssigned}</span>
        </div>
        <button onclick="navigate('player')" class="w-full text-center text-xs font-black text-yellow-900 bg-yellow-400 hover:bg-yellow-300 py-2 rounded-xl transition-all shadow-sm">
          Assistir Aulas da Pedagoga
        </button>
      </div>
    </div>
    `;
  }).join('');
}

// ==========================================
// RENDERIZAÇÃO DOS 4 SÁBADOS QUINZENAIS & GRADE DE AVISOS
// ==========================================
function renderPresencialEncounters() {
  const containerLanding = document.getElementById('presencial-encounters-grid');
  const containerLandingNotices = document.getElementById('presencial-notices-grid');
  const containerDash = document.getElementById('dashboard-presencial-list');
  const containerDashNotices = document.getElementById('dashboard-notices-list');

  // Renderiza os 4 Sábados Quinzenais na Vitrine
  if (containerLanding) {
    containerLanding.innerHTML = COURSE_DATA.presencialEncounters.map(enc => `
      <div class="bg-white rounded-3xl p-5 sm:p-6 border-2 border-brand-100 shadow-md hover:shadow-xl hover:border-yellow-400 transition-all flex flex-col justify-between relative overflow-hidden group">
        <div class="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-bl-full pointer-events-none group-hover:bg-yellow-400/20 transition-all"></div>
        <div>
          <div class="flex items-center justify-between gap-2 mb-2.5">
            <span class="text-xs font-black px-3 py-1 rounded-full ${enc.badgeColor} shadow-sm">
              📅 ${enc.tag}
            </span>
            <span class="text-[10px] font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-lg">
              ${enc.interval}
            </span>
          </div>

          <div class="mb-2">
            <span class="text-[11px] font-bold text-brand-700 block">⏰ ${enc.day}</span>
            <h4 class="text-base font-bold text-slate-900 font-ludic leading-snug mt-1">${enc.title}</h4>
          </div>

          <p class="text-xs text-slate-600 leading-relaxed mb-3">${enc.description}</p>

          <div class="space-y-1 mb-3 bg-brand-50/60 p-2.5 rounded-2xl border border-brand-100/70">
            <span class="text-[10px] font-bold text-brand-800 uppercase block tracking-wider">Atividades Vivenciais:</span>
            ${enc.topics.map(t => `
              <div class="text-[11px] text-slate-700 flex items-start gap-1.5">
                <span class="text-yellow-600 font-bold">✓</span>
                <span>${t}</span>
              </div>
            `).join('')}
          </div>

          <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-2.5 text-[11px] text-yellow-950 font-medium mb-3">
            <strong>📌 Aviso aos cursistas:</strong> ${enc.notice}
          </div>
        </div>

        <div class="pt-2.5 border-t border-brand-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
          <span class="text-[11px] text-slate-500">
            📍 <strong>${enc.location}</strong>
          </span>
          <span class="text-[11px] font-bold text-brand-700 bg-white px-2 py-0.5 rounded-xl border border-brand-200">
            👩‍🏫 ${enc.pedagogas}
          </span>
        </div>
      </div>
    `).join('');
  }

  // Renderiza Grade de Avisos na Vitrine
  if (containerLandingNotices) {
    containerLandingNotices.innerHTML = COURSE_DATA.presencialNotices.map(notice => `
      <div class="p-4 rounded-2xl bg-white border-2 border-brand-100 shadow-sm flex items-start gap-3 hover:border-yellow-400 transition-colors">
        <div class="w-10 h-10 rounded-xl bg-yellow-400 text-purple-950 flex items-center justify-center font-bold text-base flex-shrink-0 shadow-sm">
          <i data-lucide="${notice.icon}" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="text-[10px] font-black uppercase tracking-wider text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full inline-block mb-1">
            ${notice.badge}
          </span>
          <h5 class="text-xs sm:text-sm font-bold text-slate-900 font-ludic">${notice.title}</h5>
          <p class="text-xs text-slate-600 leading-snug mt-1">${notice.description}</p>
        </div>
      </div>
    `).join('');
  }

  // Renderiza no Painel do Aluno
  if (containerDash) {
    containerDash.innerHTML = COURSE_DATA.presencialEncounters.map((enc, idx) => `
      <div class="p-4 rounded-2xl border-2 border-brand-100 bg-white flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-sm hover:border-yellow-300 transition-colors">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-2xl bg-yellow-400 text-purple-950 font-black flex items-center justify-center text-sm font-ludic shadow-sm flex-shrink-0">
            S0${idx + 1}
          </div>
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-0.5">
              <span class="text-xs sm:text-sm font-bold text-slate-900 font-ludic">${enc.title}</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">${enc.interval}</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">Presença Confirmada ✓</span>
            </div>
            <p class="text-[11px] text-slate-500">📅 ${enc.day} • 📍 ${enc.location} • 👩‍🏫 ${enc.pedagogas}</p>
            <p class="text-[11px] text-yellow-900 font-medium mt-1">📌 <strong>Aviso:</strong> ${enc.notice}</p>
          </div>
        </div>
        <button onclick="showNotification('Roteiro do ${enc.tag} enviado ao seu e-mail institucional!')" class="text-xs font-bold text-brand-700 bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-xl border border-brand-200 transition-colors self-start md:self-auto whitespace-nowrap">
          Ver Orientações & Sala
        </button>
      </div>
    `).join('');
  }

  // Avisos rápidos no Dashboard
  if (containerDashNotices) {
    containerDashNotices.innerHTML = COURSE_DATA.presencialNotices.map(notice => `
      <div class="p-3 rounded-2xl bg-brand-50 border border-brand-200 flex items-start gap-2.5">
        <i data-lucide="${notice.icon}" class="w-4 h-4 text-brand-700 flex-shrink-0 mt-0.5"></i>
        <div>
          <span class="font-bold text-brand-900 block text-xs">${notice.title}</span>
          <p class="text-[11px] text-slate-600">${notice.description}</p>
        </div>
      </div>
    `).join('');
  }

  lucide.createIcons();
}

// ==========================================
// ACCORDION DE MÓDULOS COM AS 4 PEDAGOGAS
// ==========================================
function renderCurriculumAccordion() {
  const container = document.getElementById('curriculum-accordion');
  if (!container) return;

  container.innerHTML = COURSE_DATA.modules.map((mod, index) => `
    <div class="bg-white rounded-3xl border-2 border-brand-100 overflow-hidden shadow-sm hover:border-brand-300 transition-all">
      <div class="accordion-header p-4 sm:p-5 flex items-center justify-between" onclick="toggleAccordion('acc-mod-${mod.id}')">
        <div class="flex items-center gap-3 sm:gap-4 truncate mr-2">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-100 text-brand-800 flex items-center justify-center font-bold text-sm sm:text-base font-ludic border border-brand-200 flex-shrink-0">
            0${mod.id}
          </div>
          <div class="truncate">
            <h4 class="font-bold text-slate-900 text-xs sm:text-base font-ludic truncate">${mod.title}</h4>
            <p class="text-[11px] sm:text-xs text-brand-700 font-medium truncate">Pedagoga: <strong>${mod.responsible}</strong></p>
          </div>
        </div>
        <div class="w-8 h-8 rounded-2xl bg-yellow-100 text-yellow-800 flex items-center justify-center font-bold flex-shrink-0">
          <i data-lucide="chevron-down" class="w-4 h-4 transition-transform" id="acc-icon-mod-${mod.id}"></i>
        </div>
      </div>
      <div id="acc-mod-${mod.id}" class="px-4 sm:px-5 pb-4 pt-1 space-y-2 border-t border-brand-50 ${index === 0 ? '' : 'hidden'}">
        ${mod.lessons.map(l => `
          <div class="flex items-center justify-between p-3 rounded-2xl bg-brand-50/60 hover:bg-yellow-50/70 transition-colors text-xs border border-brand-100/60">
            <div class="flex items-center gap-2.5 truncate mr-2">
              <span class="text-sm">👩‍🏫</span>
              <div class="truncate">
                <span class="font-bold text-slate-900 block truncate">${l.title}</span>
                <span class="text-brand-700 block text-[10px] font-semibold truncate">${l.instructorRole}</span>
              </div>
            </div>
            <span class="text-brand-800 font-mono text-[10px] sm:text-[11px] font-bold bg-white px-2 py-0.5 rounded-xl border border-brand-200 flex-shrink-0">${l.duration}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function toggleAccordion(id) {
  const el = document.getElementById(id);
  const icon = document.getElementById(`acc-icon-${id.replace('acc-', '')}`);
  if (el) {
    el.classList.toggle('hidden');
    if (icon) {
      icon.classList.toggle('rotate-180');
    }
  }
}

// ==========================================
// RENDERIZAÇÃO DO DASHBOARD (ÁREA DO ALUNO)
// ==========================================
function renderDashboardLessons() {
  const grid = document.getElementById('dashboard-lessons-grid');
  if (!grid) return;

  const allLessons = COURSE_DATA.modules.flatMap(m => m.lessons);

  grid.innerHTML = allLessons.map(lesson => {
    const isDone = completedLessons.has(lesson.id);
    const isCurrent = currentLessonId === lesson.id;

    return `
      <div class="p-4 sm:p-5 rounded-3xl border-2 transition-all ${isCurrent ? 'border-brand-500 bg-brand-50/40 ring-2 ring-yellow-400' : 'border-brand-100 bg-white hover:border-brand-300'} flex flex-col justify-between shadow-sm">
        <div class="flex items-start justify-between gap-2 mb-2">
          <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${isDone ? 'bg-yellow-100 text-yellow-900 border border-yellow-300' : 'bg-brand-50 text-brand-700 border border-brand-200'}">
            ${isDone ? '✓ Concluída' : 'Pendente'}
          </span>
          <span class="text-[11px] text-brand-600 font-mono font-bold">${lesson.duration}</span>
        </div>
        <div class="mb-3">
          <h4 class="font-bold text-slate-900 text-xs sm:text-sm leading-tight font-ludic">${lesson.title}</h4>
          <p class="text-[11px] text-brand-800 font-semibold mt-1">${lesson.instructorRole}</p>
        </div>
        <div class="flex items-center justify-between pt-2.5 border-t border-brand-100">
          <span class="text-[10px] text-slate-500">Módulo ${lesson.moduleId}</span>
          <button onclick="selectLesson(${lesson.id})" class="text-xs font-bold text-yellow-900 bg-yellow-400 hover:bg-yellow-300 px-3 py-1 rounded-xl flex items-center gap-1 shadow-sm transition-transform hover:scale-105">
            <span>Assistir</span>
            <i data-lucide="arrow-right" class="w-3 h-3"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// RENDERIZAÇÃO DA SIDEBAR NO PLAYER
// ==========================================
function renderSidebarLessons() {
  const container = document.getElementById('sidebar-lessons-list');
  if (!container) return;

  container.innerHTML = COURSE_DATA.modules.map(mod => `
    <div class="space-y-1.5">
      <div class="text-[10px] font-black uppercase tracking-wider text-yellow-300 px-2 pt-1.5">
        ${mod.title}
      </div>
      ${mod.lessons.map(lesson => {
        const isDone = completedLessons.has(lesson.id);
        const isActive = currentLessonId === lesson.id;

        return `
          <div onclick="selectLesson(${lesson.id})" class="p-2.5 rounded-2xl transition-all cursor-pointer flex items-center justify-between gap-2.5 ${isActive ? 'bg-yellow-400 text-purple-950 font-bold shadow-md' : 'bg-purple-900/40 hover:bg-purple-900/80 text-purple-200 border border-purple-800/60'}">
            <div class="flex items-center gap-2 overflow-hidden truncate">
              <button onclick="event.stopPropagation(); toggleLessonDone(${lesson.id})" class="flex-shrink-0 text-purple-400 hover:text-yellow-300">
                <i data-lucide="${isDone ? 'check-circle-2' : 'circle'}" class="w-4 h-4 ${isDone ? (isActive ? 'text-purple-950' : 'text-yellow-400') : ''}"></i>
              </button>
              <div class="truncate text-xs">
                <p class="truncate leading-tight text-[11px] sm:text-xs">${lesson.title}</p>
                <span class="text-[10px] ${isActive ? 'text-purple-900 font-bold' : 'text-purple-300'}">${lesson.instructor}</span>
              </div>
            </div>
            ${isActive ? '<i data-lucide="play" class="w-3.5 h-3.5 fill-current flex-shrink-0 text-purple-950"></i>' : ''}
          </div>
        `;
      }).join('')}
    </div>
  `).join('');

  lucide.createIcons();
}

// ==========================================
// SELEÇÃO E CARREGAMENTO DE AULA
// ==========================================
function selectLesson(lessonId) {
  currentLessonId = lessonId;
  loadLesson(lessonId);
  navigate('player');
}

function loadLesson(lessonId) {
  const allLessons = COURSE_DATA.modules.flatMap(m => m.lessons);
  const lesson = allLessons.find(l => l.id === lessonId);
  if (!lesson) return;

  document.getElementById('player-current-module-badge').innerText = `Módulo ${lesson.moduleId}`;
  document.getElementById('player-current-lesson-breadcrumb').innerText = lesson.title;
  document.getElementById('player-video-title').innerText = lesson.title;
  document.getElementById('player-video-subtitle').innerText = lesson.subtitle;

  document.getElementById('player-instructor-badge').innerText = `${lesson.instructorRole}`;
  document.getElementById('player-instructor-label').innerText = `Docente: ${lesson.instructor}`;

  document.getElementById('lesson-objective-text').innerText = lesson.objective;
  
  const keypointsList = document.getElementById('lesson-keypoints-list');
  if (keypointsList) {
    keypointsList.innerHTML = lesson.keyPoints.map(kp => `<li>${kp}</li>`).join('');
  }

  if (lesson.materials && lesson.materials.length > 0) {
    document.getElementById('mat-title-1').innerText = lesson.materials[0].title;
    if (lesson.materials[1]) {
      document.getElementById('mat-title-2').innerText = lesson.materials[1].title;
    }
  }

  updateCurrentLessonDoneButton();
  renderSidebarLessons();
  renderDashboardLessons();
}

function updateCurrentLessonDoneButton() {
  const isDone = completedLessons.has(currentLessonId);
  const btn = document.getElementById('btn-toggle-current-completed');
  const label = document.getElementById('btn-toggle-label');
  const icon = document.getElementById('btn-toggle-icon');

  if (isDone) {
    btn.className = "px-2.5 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition-all bg-yellow-400 hover:bg-yellow-300 text-purple-950 shadow-md";
    label.innerText = "Concluída ⭐";
    icon.setAttribute('data-lucide', 'check-circle-2');
  } else {
    btn.className = "px-2.5 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition-all bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-700";
    label.innerText = "Concluir";
    icon.setAttribute('data-lucide', 'circle');
  }
  lucide.createIcons();
}

function toggleCurrentLessonCompleted() {
  toggleLessonDone(currentLessonId);
}

function toggleLessonDone(lessonId) {
  if (completedLessons.has(lessonId)) {
    completedLessons.delete(lessonId);
    showNotification("Aula desmarcada.");
  } else {
    completedLessons.add(lessonId);
    showNotification("Aula concluída com sucesso! ⭐");
  }
  saveState();
  updateProgressUI();
  updateCurrentLessonDoneButton();
  renderSidebarLessons();
  renderDashboardLessons();
}

function goToNextLesson() {
  const allLessons = COURSE_DATA.modules.flatMap(m => m.lessons);
  const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex < allLessons.length - 1) {
    completedLessons.add(currentLessonId);
    selectLesson(allLessons[currentIndex + 1].id);
    showNotification("Avançando para a próxima aula...");
  } else {
    completedLessons.add(currentLessonId);
    showNotification("Todas as aulas foram concluídas! Faça os casos práticos.");
    navigate('quiz');
  }
  saveState();
  updateProgressUI();
}

// ==========================================
// SIMULAÇÃO DO PLAYER DE VÍDEO
// ==========================================
function simulatePlayVideo() {
  isVideoPlaying = !isVideoPlaying;
  const playBtn = document.getElementById('video-play-btn');
  const playIcon = document.getElementById('video-play-icon');
  const timeline = document.getElementById('video-timeline-fill');
  const timer = document.getElementById('video-timer');

  if (isVideoPlaying) {
    playBtn.classList.add('scale-95', 'bg-yellow-300');
    playIcon.setAttribute('data-lucide', 'pause');
    showNotification("Reproduzindo aula... 🎬");
    timeline.style.width = "75%";
    timer.innerText = "11:42 / 15:40";
  } else {
    playBtn.classList.remove('scale-95', 'bg-yellow-300');
    playIcon.setAttribute('data-lucide', 'play');
    showNotification("Aula pausada.");
  }
  lucide.createIcons();
}

function scrubVideo(event) {
  const fill = document.getElementById('video-timeline-fill');
  const rect = event.currentTarget.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const percent = Math.round((clickX / rect.width) * 100);
  fill.style.width = `${percent}%`;
}

function toggleFullscreen() {
  const container = document.getElementById('video-container');
  if (!document.fullscreenElement) {
    if (container.requestFullscreen) container.requestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

// ==========================================
// ABAS DE CONTEÚDO
// ==========================================
function switchLessonTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active', 'text-yellow-300', 'border-b-2', 'border-yellow-300');
    btn.classList.add('text-purple-300');
  });

  const targetContent = document.getElementById(`lesson-tab-${tabName}`);
  const targetBtn = document.getElementById(`tab-btn-${tabName}`);

  if (targetContent) targetContent.classList.remove('hidden');
  if (targetBtn) {
    targetBtn.classList.add('active', 'text-yellow-300', 'border-b-2', 'border-yellow-300');
    targetBtn.classList.remove('text-purple-300');
  }
  lucide.createIcons();
}

// ==========================================
// FÓRUM / COMENTÁRIOS DAS 4 PEDAGOGAS
// ==========================================
function renderForumComments() {
  const container = document.getElementById('forum-comments-container');
  if (!container) return;

  container.innerHTML = COURSE_DATA.forumComments.map(c => `
    <div class="p-3 rounded-2xl bg-purple-900/40 border border-purple-800/70 space-y-1.5">
      <div class="flex items-center justify-between text-xs">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded-full ${c.avatarBg} flex items-center justify-center font-bold text-[10px] border border-yellow-300">
            ${c.author.substring(9, 11)}
          </div>
          <span class="font-bold text-white font-ludic text-xs">${c.author}</span>
          <span class="text-[9px] bg-yellow-400 text-purple-950 font-bold px-1.5 py-0.2 rounded-full">${c.lesson}</span>
        </div>
        <span class="text-[9px] text-purple-300">${c.date}</span>
      </div>
      <p class="text-[11px] text-purple-100 leading-relaxed pl-8">${c.text}</p>
    </div>
  `).join('');
}

function postForumComment() {
  const input = document.getElementById('forum-input');
  const text = input.value.trim();
  if (!text) {
    showNotification("Por favor, digite seu relato ou pergunta!");
    return;
  }

  COURSE_DATA.forumComments.unshift({
    author: studentName,
    avatarBg: "bg-brand-600 text-white",
    date: "Agora mesmo",
    lesson: `Aula ${currentLessonId}`,
    text: text
  });

  input.value = "";
  renderForumComments();
  showNotification("Seu relato foi enviado para as 4 Pedagogas! ✨");
  lucide.createIcons();
}

// ==========================================
// DOWNLOAD SIMULADO DE MATERIAIS
// ==========================================
function downloadSampleMaterial(matId) {
  const titles = {
    1: "Modelo_Arvore_dos_Combinados_Pedagoga_Juliana.txt",
    2: "Roteiro_Acolhimento_Docencia_Viva.txt"
  };
  const contents = {
    1: "DOCÊNCIA VIVA - MODELO DA ÁRVORE DOS COMBINADOS\nPedagoga Responsável: Juliana Fernandes (Módulo 1 • 90h - Formação 360h)\n\n1. Raízes: O que nossa turma precisa para ser amiga e respeitosa?\n2. Tronco: Nossos combinados diários de escuta ativa e empatia.\n3. Folhas Coloridas: As soluções criadas pelos próprios educandos.\n4. Prática Vivencial: Atividade aprofundada no 1º Encontro Presencial de Sábado.",
    2: "DOCÊNCIA VIVA - DINÂMICA DE ACOLHIMENTO E ESCUTA SOCIOEMOCIONAL\nPedagoga Responsável: Ester Melo (Módulo 2 • 90h - Formação 360h)\n\nTempo estimado: 35 minutos\nObjetivo: Construir pertencimento e segurança emocional no início do ano letivo.\nEncontro Presencial: Oficina prática vivenciada no 1º e 2º Sábados."
  };

  const filename = titles[matId] || "Material_Pedagogico.txt";
  const content = contents[matId] || "Conteúdo do curso Docência Viva.";

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showNotification(`Download iniciado: ${filename} 📄`);
}

// ==========================================
// QUIZ / ESTUDOS DE CASO
// ==========================================
function renderQuizQuestion() {
  const q = COURSE_DATA.quizQuestions[quizCurrentIndex];
  if (!q) {
    finishQuiz();
    return;
  }

  document.getElementById('quiz-question-counter').innerText = `Caso ${quizCurrentIndex + 1} de ${COURSE_DATA.quizQuestions.length}`;
  document.getElementById('quiz-scenario-text').innerText = q.scenario;
  document.getElementById('quiz-score-indicator').innerText = `Pontuação: ${quizScore} / ${COURSE_DATA.quizQuestions.length}`;

  const feedbackBox = document.getElementById('quiz-feedback-box');
  feedbackBox.className = "hidden";
  feedbackBox.innerHTML = "";

  quizAnswerSelected = null;
  const nextBtn = document.getElementById('btn-next-quiz');
  nextBtn.innerHTML = `<span>Confirmar</span> <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-yellow-300"></i>`;

  const optionsContainer = document.getElementById('quiz-options-container');
  optionsContainer.innerHTML = q.options.map((opt, idx) => `
    <div onclick="selectQuizOption(${idx})" class="quiz-option p-3 sm:p-3.5 rounded-2xl border-2 border-brand-100 text-xs font-medium text-slate-700 flex items-start gap-2.5 bg-white" id="quiz-opt-${idx}">
      <div class="w-5 h-5 rounded-xl bg-brand-100 border border-brand-300 text-brand-800 flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5" id="quiz-opt-bullet-${idx}">
        ${String.fromCharCode(65 + idx)}
      </div>
      <div class="leading-relaxed text-[11px] sm:text-xs">${opt.text}</div>
    </div>
  `).join('');

  lucide.createIcons();
}

function selectQuizOption(idx) {
  const feedbackBox = document.getElementById('quiz-feedback-box');
  if (!feedbackBox.classList.contains('hidden')) return;

  quizAnswerSelected = idx;
  document.querySelectorAll('.quiz-option').forEach((el, i) => {
    el.classList.remove('selected');
    const bullet = document.getElementById(`quiz-opt-bullet-${i}`);
    if (bullet) {
      bullet.className = "w-5 h-5 rounded-xl bg-brand-100 border border-brand-300 text-brand-800 flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5";
    }
  });

  const selectedEl = document.getElementById(`quiz-opt-${idx}`);
  if (selectedEl) {
    selectedEl.classList.add('selected');
    const bullet = document.getElementById(`quiz-opt-bullet-${idx}`);
    if (bullet) {
      bullet.className = "w-5 h-5 rounded-xl bg-yellow-400 border border-yellow-500 text-purple-950 flex items-center justify-center text-[11px] font-black flex-shrink-0 mt-0.5 shadow-sm";
    }
  }
}

function handleNextQuizStep() {
  const feedbackBox = document.getElementById('quiz-feedback-box');

  if (!feedbackBox.classList.contains('hidden')) {
    quizCurrentIndex++;
    if (quizCurrentIndex < COURSE_DATA.quizQuestions.length) {
      renderQuizQuestion();
    } else {
      finishQuiz();
    }
    return;
  }

  if (quizAnswerSelected === null) {
    showNotification("Escolha uma opção para continuar!");
    return;
  }

  const q = COURSE_DATA.quizQuestions[quizCurrentIndex];
  const selectedOpt = q.options[quizAnswerSelected];
  const isCorrect = selectedOpt.isCorrect;

  if (isCorrect) {
    quizScore++;
    feedbackBox.className = "p-3 rounded-2xl text-xs bg-yellow-100 text-yellow-950 border-2 border-yellow-300 block";
    feedbackBox.innerHTML = `<strong>⭐ Resposta Correta:</strong> ${selectedOpt.explanation}`;
  } else {
    const correctOpt = q.options.find(o => o.isCorrect);
    feedbackBox.className = "p-3 rounded-2xl text-xs bg-red-100 text-red-900 border-2 border-red-300 block";
    feedbackBox.innerHTML = `<strong>✗ Conduta Inadequada:</strong> A conduta recomendada pelas pedagogas seria: <em>"${correctOpt.text}"</em>`;
  }

  document.getElementById('quiz-score-indicator').innerText = `Pontuação: ${quizScore} / ${COURSE_DATA.quizQuestions.length}`;
  
  const nextBtn = document.getElementById('btn-next-quiz');
  if (quizCurrentIndex + 1 < COURSE_DATA.quizQuestions.length) {
    nextBtn.innerHTML = `<span>Próximo</span> <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-yellow-300"></i>`;
  } else {
    nextBtn.innerHTML = `<span>Ver Certificado</span> <i data-lucide="award" class="w-3.5 h-3.5 text-yellow-300"></i>`;
  }
  lucide.createIcons();
}

function finishQuiz() {
  document.getElementById('dash-quiz-status').innerText = `${quizScore}/4 Aprovada ⭐`;
  document.getElementById('dash-quiz-status').className = "text-base font-bold text-yellow-700 font-ludic";
  
  showNotification(`Avaliação concluída! Aproveitamento: ${Math.round((quizScore / COURSE_DATA.quizQuestions.length) * 100)}% 🎓`);
  navigate('certificate');
}

// ==========================================
// ATUALIZAÇÃO DA INTERFACE DE PROGRESSO
// ==========================================
function updateProgressUI() {
  const total = COURSE_DATA.modules.flatMap(m => m.lessons).length;
  const count = completedLessons.size;
  const percent = Math.min(100, Math.round((count / total) * 100));

  const bar = document.getElementById('dash-progress-bar');
  if (bar) bar.style.width = `${percent}%`;

  const percentLabel = document.getElementById('dash-progress-percent');
  if (percentLabel) percentLabel.innerText = `${percent}%`;

  const textLabel = document.getElementById('dash-progress-text');
  if (textLabel) textLabel.innerText = `${count} de ${total} aulas concluídas`;

  const sidebarBadge = document.getElementById('sidebar-progress-badge');
  if (sidebarBadge) sidebarBadge.innerText = `${percent}% Feito`;
}

// ==========================================
// PERSONALIZAÇÃO DO NOME DO ALUNO
// ==========================================
function editUserName() {
  const modal = document.getElementById('modal-edit-name');
  const input = document.getElementById('modal-name-input');
  input.value = studentName;
  modal.classList.remove('hidden');
  input.focus();
  lucide.createIcons();
}

function closeNameModal() {
  document.getElementById('modal-edit-name').classList.add('hidden');
}

function saveStudentName() {
  const input = document.getElementById('modal-name-input');
  const newName = input.value.trim();
  if (newName) {
    studentName = newName;
    saveState();
    updateStudentNameDisplays();
    closeNameModal();
    showNotification("Nome atualizado com sucesso! ✨");
  }
}

function updateStudentNameDisplays() {
  document.getElementById('user-name-display').innerText = studentName;
  document.getElementById('dash-user-name').innerText = studentName;
  document.getElementById('cert-student-name').innerText = studentName;

  const words = studentName.replace("Profª.", "").replace("Prof.", "").trim().split(" ");
  let initials = "AM";
  if (words.length >= 2) {
    initials = (words[0][0] + words[1][0]).toUpperCase();
  } else if (words.length === 1 && words[0].length >= 1) {
    initials = words[0].substring(0, 2).toUpperCase();
  }
  document.getElementById('user-avatar-initials').innerText = initials;

  const today = new Date();
  const dateStr = today.toLocaleDateString('pt-BR');
  document.getElementById('cert-date-display').innerText = dateStr;
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
let toastTimer = null;
function showNotification(msg) {
  const toast = document.getElementById('toast');
  const text = document.getElementById('toast-text');
  if (!toast || !text) return;

  text.innerText = msg;
  toast.classList.remove('translate-y-20', 'opacity-0');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3500);
}
