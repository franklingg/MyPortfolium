import Recommendation1 from '~/assets/eduardo.svg';
import Recommendation2 from '~/assets/maria.svg';
export interface ILang {
    value: string,
    label: string
};

export interface IRecommendation {
    text: string,
    author: string,
    occupation: string,
    icon: string
};

export interface IInformation {
    value: number,
    content: string
}
export default class Content {
    static _DATA  = {
        "pt-BR": {
            "navbar": {
                "home": "Home",
                "about": "Sobre mim",
                "skills": "Habilidades",
                "projects": "Projetos"
            },
            "contactButton": "Entre em contato",
            "simpleButton": {
                "findMore": "Saiba mais"
            },
            "home": {
                "recommendations": "Recomendações"
            },
            "recommendations": [
                {
                    "text": "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                    "author": "Eduardo Sousa",
                    "occupation": "Líder de desenvolvimento",
                    "icon": Recommendation1
                },
                {
                    "text": "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                    "author": "Maria da Paz",
                    "occupation": "Chefe de QA",
                    "icon": Recommendation2
                },
                {
                    "text": "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                    "author": "Joana Ferreira",
                    "occupation": "Desenvolvedora Júnior",
                    "icon": Recommendation2
                }
            ],
            "about": {
                "who": "Quem sou eu?",
                "text": `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.`,
                "informations": "Informações",
                "info": [
                    {value: 2, content: 'anos de experiência atuando como frontend developer'},
                    {value: 5, content: 'anos de experiência atuando como frontend developer'},
                    {value: 10, content: 'anos de experiência'},
                    {value: 2, content: 'anos de experiência atuando como frontend developer'},
                    {value: 5, content: 'anos de experiência atuando como frontend developer'},
                    {value: 10, content: 'anos de experiência'},
                ]
            }
        },
        "en-US": {
            "navbar": {
                "home": "Home",
                "about": "About Me",
                "skills": "My Skills",
                "projects": "Projects"
            },
            "contactButton": "Contact me",
            "simpleButton": {
                "findMore": "Find out more"
            },
            "home": {
                "recommendations": "Recommendations"
            },
            "recommendations": [
                {
                    "text": "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                    "author": "Eduardo Sousa",
                    "occupation": "Development Leader",
                    "icon": "eduardo.svg"
                },
                {
                    "text": "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                    "author": "Maria da Paz",
                    "occupation": "QA Leader",
                    "icon": "maria.svg"
                },
                {
                    "text": "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                    "author": "Joana Ferreira",
                    "occupation": "Junior Developer",
                    "icon": "maria.svg"
                }
            ],
            "about": {
                "who": "Who am I?",
                "text": `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.`,
                "informations": "Informations",
                "info": []
            }
        }
    };

    static AVAILABLE_LANGS : ILang[] = [
        {value: 'pt-BR', label: 'PT BR'}, 
        {value: 'en-US', label: 'EN'}
    ];

    static DEFAULT_LANG : ILang = {value: 'pt-BR', label: 'PT BR'};

    static DEFAULT_PAGE = Content._DATA[Content.DEFAULT_LANG.value];

    static getPage(targetLang: ILang) : object {
        const foundLang = Content.AVAILABLE_LANGS.find( lang => lang.value === targetLang.value);
        if(foundLang){
            return Content._DATA[foundLang.value];
        }
        return Content._DATA[Content.DEFAULT_LANG.value];
    };

    static getSection(targetLang: ILang, section: string) : object {
        return Content.getPage(targetLang)[section];
    };
}