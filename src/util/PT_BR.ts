import { IPage, LABELS } from "~/util/Content";
import { RecomDebora, RecomTiago, Book, Bulb, Gear, TODELETE } from '~/assets'

export default class PT_BR implements IPage {
    navbar = {
        home: "Home",
        about: "Sobre mim",
        skills: "Habilidades",
        projects: "Projetos"
    };

    contactButton = "Entre em contato";

    simpleButton = {
        findMore: "Saiba mais",
        backHome: "Voltar para o Início"
    };

    home = {
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
                icon: Book, 
                title: 'Habilidade 1', 
                text: 'Desenvolvimento de páginas estáticas e dinâmicas com boas práticas de SEO.' 
            },
            { 
                icon: Bulb,
                title: 'Habilidade 2',
                text: 'Autodidatismo e versatilidade. Capacidade de aprender e evoluir com os problemas que surgirem.' 
            },
            { 
                icon: Gear,
                title: 'Habilidade 3',
                text: '' 
            }
        ]
    };

    "404" = [
        'A página que você está procurando não está disponível no momento :(',
        'Atualize a página ou retorne para o menu principal!'
    ]

    projects = {
        title: "Meus projetos",
        web: [
            {
                image: TODELETE,
                title: 'TESTE 1',
                description: 'TESTE1',
                labels: [LABELS.JAVASCRIPT],
                link: ''
            },
            {
                image: TODELETE,
                title: 'TESTE 2',
                description: 'TESTE2',
                labels: [LABELS.FIREBASE, LABELS.REACT],
                link: ''
            },
            {
                image: TODELETE,
                title: 'TESTE 3',
                description: 'TESTE3',
                labels: [],
                link: ''
            }
        ],
        software: []
    };
}