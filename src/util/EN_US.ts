import { IPage } from "~/util/Content";
import { RecomDebora, RecomTiago, Book, Bulb, Gear } from '~/assets'

export default class EN_US implements IPage {
    navbar = {
        home: "Home",
        about: "About Me",
        skills: "My Skills",
        projects: "Projects",
    };

    contactButton = "Contact me";

    simpleButton = {
        findMore: "Find out more",
        backHome: "Return to Home",
    };

    home = {
        recommendationsTitle: "Recommendations",
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
        ],
    };

    about = {
        who: "Who am I?",
        text: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.`,
        informationsTitle: "Informations",
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
        tops: ['Best', 'Skills'],
        topsList: [
            { 
                icon: Book,
                title: 'Skill 1',
                text: 'anos de experiência atuando como frontend developer' 
            },
            { 
                icon: Bulb, 
                title: 'Skill 2',
                text: 'anos de experiência atuando como frontend developer' 
            },
            { 
                icon: Gear,
                title: 'Skill 3',
                text: 'anos de experiência atuando como frontend developer' 
            }
        ]
    };

    "404": [
        'The page you\'re looking for is not available at the moment :(',
        'Please refresh or return to the home page!'
    ];

    projects = {
        title: "My Projects",
        web: [],
        software: []
    };
}