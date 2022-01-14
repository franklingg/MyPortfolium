import { IPage, LABELS } from "~/util/Content";
import { 
    RecomDebora, RecomTiago, RecomTaynara,
    Book, Bulb, Gear,
    DiscordLogo, SigesLogo, LittleGamesLogo, PlantManagerLogo, PortfoliumLogo, DesafioTsLogo, DsBeginsLogo
} from '~/assets'

export default class PT_BR implements IPage {
    navbar = {
        home: "Home",
        about: "About Me",
        skills: "Skills",
        projects: "Projects"
    };

    contact = {
        title: "Let's talk about your project/company?",
        name: "Name",
        tel: "Telephone",
        message: "Message",
        send: "Send",
        success: ['Thank you!', 'I\'ll be contacting you shortly'],
        failure: ['ERROR!', 'Unfortanetly your message has not been sent']
    };

    simpleButton = {
        findMore: "Get to know me",
        backHome: "Return Home"
    };

    home = {
        occupation: 'Software Developer',
        description: `
            Hi, welcome to my portfolium!
            Here you'll get to know about me, my skills and my projects!
            Are you ready?!`,
        recommendationsTitle: "Recommendations",
        recommendations: [
            {
                text: "“Proativo, responsável, dedicado e bem-humorado! Franklin colabora com a equipe resolvendo problemas com inovação e desejo de aprender mais 😄",
                author: "Débora Lêda",
                occupation: "Development Leader",
                icon: RecomDebora
            },
            {
                text: "“Trabalhei com o Franklin em um projeto complexo e sua capacidade de resolver problemas nos ajudou a realizar as entregas no prazo. Tenho certeza de que ele será um grande trunfo para qualquer equipe que ingressar.",
                author: "Tiago Chaves",
                occupation: "QA Manager",
                icon: RecomTiago
            },
            {
                text: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                author: "Taynara Lacerda",
                occupation: "UX/UI Designer",
                icon: RecomTaynara
            }
        ]
    };

    about = {
        who: "Quem sou eu?",
        text:  [`Me chamo Franklin Regis, tenho 22 anos e sou graduando em Ciência da Computação na Universidade Federal 
                de Campina Grande.`,
                `Nos momentos de lazer costumo jogar e ler bastante (sou fã de carteirinha de Tolkien!),
                além de estar sempre a par dos memes - como um bom jovem moderno.`,
                `Sou um rapaz muito tranquilo, extrovertido e apaixonado pelo que faço, sempre buscando
                fazer as pessoas ao meu redor se sentirem bem e confortáveis.`],
        informationsTitle: "Informações",
        informations: [
            { type: 'Trabalho', value: 5, content: 'meses de experiência atuando como Desenvolvedor Frontend' },
            { type: 'Trabalho', value: 6, content: 'meses de experiência atuando como Desenvolvedor Web PD&I' },
            { type: 'Competições', value: 1, content: 'participação em Olímpiada Internacional' },
            { type: 'Inovação', value: 1, content: 'ano de experiência com projetos de Extensão e Inovação Tecnológica' },
            { type: 'Inglês', value: 'B2', content: 'Nível QCE de Inglês (Avançado)' },
            { type: 'Produção', value: 2, content: 'artigos publicados em congresso nacional' },
        ]
    };

    skills = {
        tops: 'Melhores Habilidades',
        topsList: [
            { 
                icon: Bulb,
                title: 'Habilidade 1',
                text: 'Autodidatismo e versatilidade. Capacidade de aprender e evoluir com os problemas que surgirem.' 
            },
            { 
                icon: Book, 
                title: 'Habilidade 2', 
                text: 'Desenvolvimento de páginas estáticas e dinâmicas com boas práticas de SEO.' 
            },
            { 
                icon: Gear,
                title: 'Habilidade 3',
                text: 'Trabalho organizado e escalável, seguindo os padrões de projeto e requisitos do sistema.' 
            }
        ]
    };

    "404" = [
        'A página que você está procurando não está disponível no momento :(',
        'Atualize a página ou retorne para o menu principal!'
    ]

    projects = {
        title: "Meus projetos",
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