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
        // TODO
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
        who: "Who am I?",
        text:  [`My name is Franklin Regis, I'm 22 years old and I'm an undergraduate student in Computer Science at the 
                 Federal University of Campina Grande.`,
                `During my fre time I usually play games and read a lot (great fan of Tolkien here!),
                as well as always being tuned on the "memes" - like a good modern person.`,
                `I'm a very peaceful boy, extrovert and passioned with my work, always seeking for the
                well being of the people around me, whether we are in a workplace or not.`],
        informationsTitle: "Informations",
        informations: [
            { type: 'Work', value: 5, content: 'months of experience acting as Frontend Developer' },
            { type: 'Work', value: 6, content: 'months of experience acting as Web Developer RD&I' },
            { type: 'Competitions', value: 1, content: 'participation on International Olympiads' },
            { type: 'Innovation', value: 1, content: 'year of experience with extension and technology projects' },
            { type: 'English', value: 'B2', content: 'QCE English level (Advanced)' },
            { type: 'Production', value: 2, content: 'articles published on national congress' },
        ]
    };

    skills = {
        tops: 'Best Skills',
        topsList: [
            { 
                icon: Bulb,
                title: 'Self-learning and versatility',
                text: 'Capable of learning and evolving from the problems that arise.' 
            },
            { 
                icon: Book, 
                title: 'SEO skillset', 
                text: 'Static and dynamic pages development with good SEO practices.' 
            },
            { 
                icon: Gear,
                title: 'Organization and Scalability',
                text: 'Following all the project patterns and client/system requirements, as well as code readability.' 
            }
        ]
    };

    "404" = [
        'The page you\'re attempting to reach is not available right now :(',
        'Refresh the page or return to home page!'
    ]

    projects = {
        title: "My projects",
        frontend: [
            {
                image: PlantManagerLogo,
                title: 'PlantManager',
                description: 'Mobile application for register and management of your home plants.',
                labels: [LABELS.TYPESCRIPT, LABELS.REACT, LABELS.FIREBASE],
                link: 'https://github.com/franklingg/PlantManager'
            },
            {
                image: PortfoliumLogo,
                title: 'MyPortfolium',
                description: 'Source-code of this portfolium, using Static Site Generation (SSG).',
                labels: [LABELS.TYPESCRIPT, LABELS.NEXT],
                link: 'https://github.com/franklingg/MyPortfolium'
            },
            {
                image: DesafioTsLogo,
                title: 'Desafio-TS',
                description: 'Building a food delivery page that is reponsive and dynamic.',
                labels: [LABELS.REACT, LABELS.JAVASCRIPT],
                link: 'https://github.com/franklingg/desafio-teamsoft'
            }
        ],
        software: [
            {
                image: SigesLogo,
                title: 'SIGES',
                description: 'Management system that deals with occupation of rooms, laboratories and public environments.',
                labels: [LABELS.HASKELL, LABELS.PROLOG],
                link: 'https://github.com/franklingg/SIGES'
            },
            {
                image: DiscordLogo,
                title: 'Gummy',
                description: 'Discord bot with playful/daytime functionalities.',
                labels: [LABELS.JAVASCRIPT],
                link: 'https://github.com/franklingg/Gummy'
            },
            {
                image: LittleGamesLogo,
                title: 'LittleGames',
                description: 'Authoral games made for learning gaming programming.',
                labels: [LABELS.PYTHON],
                link: 'https://github.com/franklingg/LittleGames'
            },
            {
                image: DsBeginsLogo,
                title: 'DS-Begins',
                description: 'A set of introductory models for Data Science, Machine Learning and Deep Learning.',
                labels: [LABELS.JUPYTER, LABELS.PYTHON],
                link: 'https://github.com/franklingg/DS-Begins'
            }
        ]
    };
}