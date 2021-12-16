import PT_BR from './PT_BR';
import EN_US from './EN_US';
export interface ILang {
    value: string,
    label: string,
    page: IPage
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

interface ISkill {
    icon: string,
    text: string
}

export interface IPage {
    navbar: {
        home: string,
        about: string,
        skills: string,
        projects: string
    },
    contactButton: string,
    simpleButton: {
        findMore: string,
        backHome: string
    },
    home: {
        recommendationsTitle: string,
        recommendations: Array<IRecommendation>
    },
    about: {
        who: string,
        text: string,
        informationsTitle: string,
        informations: Array<IInformation>
    },
    skills: {
        tops: Array<String>,
        topsList: Array<ISkill>
    },
    "404": Array<String>
}

export const AVAILABLE_LANGS : ILang[] = [
    {value: 'pt-BR', label: 'PT-BR', page: new PT_BR()}, 
    {value: 'en-US', label: 'EN-US', page: new EN_US()}
];

export const DEFAULT_LANG : ILang = AVAILABLE_LANGS[0];