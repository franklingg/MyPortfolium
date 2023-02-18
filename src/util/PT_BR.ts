import { IPage, LABELS } from "~/util/Content";
import { 
    RecomDebora, RecomTiago, RecomTaynara,
    Book, Bulb, Gear,
    DiscordLogo, SigesLogo, LittleGamesLogo, PlantManagerLogo, PortfoliumLogo, DesafioTsLogo, DsBeginsLogo, FriacaPartyLogo
} from '~/assets'

export default class PT_BR implements IPage {
    navbar = {
        home: "Home",
        about: "Sobre mim",
        skills: "Habilidades",
        projects: "Projetos"
    };

    contact = {
        title: "Vamos conversar sobre o seu projeto/empresa?",
        name: "Nome",
        tel: "Telefone",
        message: "Mensagem",
        send: "Enviar",
        success: ['Muito obrigado!', 'Logo mais entrarei em contato com você.'],
        failure: ['ERRO!', 'Infelizmente sua mensagem não foi enviada.']
    };

    simpleButton = {
        findMore: "Saiba mais",
        backHome: "Voltar para o Início"
    };

    home = {
        occupation: 'Desenvolvedor de Software',
        description: `
            Olá, seja bem vindo ao meu portfólio!
            Por aqui você irá conhecer um pouco sobre mim, minhas habilidades e meus projetos! 
            Preparado?!`,
        recommendationsTitle: "Recomendações",
        recommendations: [
            {
                text: "“Trabalhei com o Franklin em um projeto complexo e sua capacidade de resolver problemas nos ajudou a realizar as entregas no prazo. Tenho certeza de que ele será um grande trunfo para qualquer equipe que ingressar.”",
                author: "Tiago Chaves",
                occupation: "Gerente de QA",
                icon: RecomTiago
            },
            {
                text: "“Franklin é um profissional muito proativo e dedicado, sempre busca compreender as necessidades do time. Foi um dos primeiros desenvolvedores que vi fazendo questão de trabalhar e compreender as demandas do designer, com o objetivo de entregar o melhor resultado possível. Foi um enorme prazer trabalhar ao seu lado!”",
                author: "Taynara Lacerda",
                occupation: "Designer UX/UI",
                icon: RecomTaynara
            },
            {
                text: "“Proativo, responsável, dedicado e bem-humorado! Franklin colabora com a equipe resolvendo problemas com inovação e desejo de aprender mais 😄”",
                author: "Débora Lêda",
                occupation: "Líder de desenvolvimento",
                icon: RecomDebora
            }
        ]
    };

    about = {
        who: "Quem sou eu?",
        text:  [`Me chamo Franklin Regis, tenho 23 anos e sou graduando em Ciência da Computação na Universidade Federal 
                de Campina Grande.`,
                `Nos momentos de lazer costumo jogar e ler bastante (sou fã de carteirinha de Tolkien!),
                além de estar sempre a par dos memes - como um bom jovem moderno.`,
                `Sou um rapaz muito tranquilo, extrovertido e apaixonado pelo que faço, sempre buscando
                fazer as pessoas ao meu redor se sentirem bem e confortáveis.`],
        informationsTitle: "Informações",
        informations: [
            { type: 'Trabalho', value: 5, content: 'meses de experiência atuando como Desenvolvedor Frontend' },
            { type: 'Trabalho', value: 1, content: 'ano de experiência atuando como Desenvolvedor FullStack' },
            { type: 'Competições', value: 1, content: 'participação em Olímpiada Internacional' },
            { type: 'Inovação', value: 1, content: 'ano de experiência com projetos de Extensão e Inovação Tecnológica' },
            { type: 'Inglês', value: 'B2', content: 'nível QCE de inglês (Avançado)' },
            { type: 'Produção', value: 2, content: 'artigos publicados em congresso nacional' },
        ]
    };

    skills = {
        tops: 'Melhores Habilidades',
        topsList: [
            { 
                icon: Bulb,
                title: 'Autodidatismo e versatilidade',
                text: 'Capacidade de aprender e evoluir com os problemas que surgirem.' 
            },
            { 
                icon: Book, 
                title: 'Habilidade com SEO', 
                text: 'Desenvolvimento de páginas estáticas e dinâmicas com boas práticas de SEO.' 
            },
            { 
                icon: Gear,
                title: 'Organização e Escalabilidade',
                text: 'Seguindo os padrões de projeto e requisitos do cliente e do sistema.' 
            }
        ]
    };

    "404" = [
        'A página que você está procurando não está disponível no momento :(',
        'Atualize a página ou retorne para o menu principal!'
    ]

    projects = {
        title: "Meus Projetos",
        frontend: [
            {
                image: PlantManagerLogo,
                title: 'PlantManager',
                description: 'Aplicação Mobile para cadastrar e gerenciar suas plantas de casa.',
                labels: [LABELS.TYPESCRIPT, LABELS.REACT, LABELS.FIREBASE],
                link: 'https://github.com/franklingg/PlantManager'
            },
            {
                image: PortfoliumLogo,
                title: 'MyPortfolium',
                description: 'Código-fonte deste portfólio, usando Static Site Generation (SSG).',
                labels: [LABELS.TYPESCRIPT, LABELS.NEXT],
                link: 'https://github.com/franklingg/MyPortfolium'
            },
            {
                image: DesafioTsLogo,
                title: 'Desafio-TS',
                description: 'Construção de uma página de delivery responsiva e dinâmica.',
                labels: [LABELS.REACT, LABELS.JAVASCRIPT],
                link: 'https://github.com/franklingg/desafio-teamsoft'
            },
            {
                image: FriacaPartyLogo,
                title: 'Friaca Party',
                description: 'Site para confirmação de presença em eventos de forma divertida.',
                labels: [LABELS.REACT, LABELS.FIREBASE],
                link: 'https://github.com/franklingg/friaca-party'
            }
        ],
        software: [
            {
                image: SigesLogo,
                title: 'SIGES',
                description: 'Sistema de gerenciamento e ocupação de salas, laboratórios e ambientes coletivos.',
                labels: [LABELS.HASKELL, LABELS.PROLOG],
                link: 'https://github.com/franklingg/SIGES'
            },
            {
                image: DiscordLogo,
                title: 'Gummy',
                description: 'Bot para o Discord com funcionalidades lúdicas/do dia-a-dia.',
                labels: [LABELS.JAVASCRIPT],
                link: 'https://github.com/franklingg/Gummy'
            },
            {
                image: LittleGamesLogo,
                title: 'LittleGames',
                description: 'Games autorais (código e assets) feitos para aprender programação de jogos.',
                labels: [LABELS.PYTHON],
                link: 'https://github.com/franklingg/LittleGames'
            },
            {
                image: DsBeginsLogo,
                title: 'DS-Begins',
                description: 'Modelos introdutórios de Ciência de Dados, Machine Learning e Deep Learning.',
                labels: [LABELS.JUPYTER, LABELS.PYTHON],
                link: 'https://github.com/franklingg/DS-Begins'
            }
        ]
    };
}