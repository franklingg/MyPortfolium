import { IPage, LABELS } from "~/util/Content";
import { 
    RecomDebora, RecomTiago, 
    Book, Bulb, Gear,
    DiscordLogo, SigesLogo, LittleGamesLogo, PlantManagerLogo, PortfoliumLogo, DesafioTsLogo, DsBeginsLogo
} from '~/assets'

export default class PT_BR implements IPage {
    navbar = {
        home: "Home",
        about: "Sobre mim",
        skills: "Habilidades",
        projects: "Projetos"
    };

    contact = {
        button: "Entre em contato",
        title: "Vamos conversar sobre o seu projeto/empresa?",
        name: "Nome",
        tel: "Telefone",
        message: "Mensagem",
        send: "Enviar"
    };

    simpleButton = {
        findMore: "Saiba mais",
        backHome: "Voltar para o Início"
    };

    home = {
        occupation: 'Desenvolvedor de Software',
        description: `
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.`,
        recommendationsTitle: "Recomendações",
        recommendations: [
            {
                text: "“Proativo, responsável, dedicado e bem-humorado! Franklin colabora com a equipe resolvendo problemas com inovação e desejo de aprender mais 😄",
                author: "Débora Lêda",
                occupation: "Líder de desenvolvimento",
                icon: RecomDebora
            },
            {
                text: "“Trabalhei com o Franklin em um projeto complexo e sua capacidade de resolver problemas nos ajudou a realizar as entregas no prazo. Tenho certeza de que ele será um grande trunfo para qualquer equipe que ingressar.",
                author: "Tiago Chaves",
                occupation: "Gerente de QA",
                icon: RecomTiago
            },
            {
                text: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                author: "Taynara Lacerda",
                occupation: "Designer UX/UI",
                icon: RecomDebora
            }
        ]
    };

    about = {
        who: "Quem sou eu?",
        text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.`,
        informationsTitle: "Informações",
        informations: [
            { value: 5, content: 'meses de experiência atuando como Desenvolvedor Frontend' },
            { value: 6, content: 'meses de experiência atuando como Desenvolvedor Web PD&I' },
            { value: 1, content: 'participação em Olímpiada Internacional' },
            { value: 1, content: 'ano de experiência com projetos de Extensão e Inovação Tecnológica' },
            { value: 'B2', content: 'Nível QCE de Inglês (Avançado)' },
            { value: 2, content: 'artigos publicados em congresso nacional' },
        ]
    };

    skills = {
        tops: ['Melhores', 'Habilidades'],
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