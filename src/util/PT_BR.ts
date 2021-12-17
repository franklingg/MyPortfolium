import { IPage } from "~/util/Content";
import { RecomDebora, RecomTiago, Book, Bulb, Gear } from '~/assets'

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
                text: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                author: "Débora Lêda",
                occupation: "Líder de desenvolvimento",
                icon: RecomDebora
            },
            {
                text: "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
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
            { value: 2, content: 'anos de experiência atuando como frontend developer' },
            { value: 5, content: 'anos de experiência atuando como frontend developer' },
            { value: 10, content: 'anos de experiência' },
            { value: 2, content: 'anos de experiência atuando como frontend developer' },
            { value: 5, content: 'anos de experiência atuando como frontend developer' },
            { value: 10, content: 'anos de experiência' },
        ]
    };

    skills = {
        tops: ['Melhores', 'Habilidades'],
        topsList: [
            { icon: Book, text: 'anos de experiência atuando como frontend developer' },
            { icon: Bulb, text: 'anos de experiência atuando como frontend developer' },
            { icon: Gear, text: 'anos de experiência atuando como frontend developer' }
        ]
    };

    "404" = [
        'A página que você está procurando não está disponível no momento :(',
        'Atualize a página ou retorne para o menu principal!'
    ]

    projects = {
        title: "Meus projetos",
        web: [],
        software: []
    };
}