import PT_BR from './PT_BR';
import EN_US from './EN_US';
import { SiFirebase, SiHaskell, SiJava, SiJavascript, SiJupyter, SiNextdotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si';
import { DiProlog } from 'react-icons/di';
import { IconType } from 'react-icons';
export interface ILang {
    value: string,
    label: string,
    page: IPage
};

interface IRecommendation {
    text: string,
    author: string,
    occupation: string,
    icon: string
};

interface IInformation {
    value: number | string,
    content: string
}

interface ISkill {
    icon: string,
    title: string,
    text: string
}

interface ILabel {
    name: string,
    color: string,
    icon: IconType
}

interface IProject {
    image: string,
    title: string,
    description: string,
    labels: Array<ILabel>,
    link: string
}

export const LABELS : { [key: string] : ILabel } = {
    JAVASCRIPT: { name: 'Javascript'        , color: 'var(--javascript)', icon: SiJavascript },
    TYPESCRIPT: { name: 'Typescript'        , color: 'var(--typescript)', icon: SiTypescript },
    FIREBASE:   { name: 'Firebase'          , color: 'var(--firebase)'  , icon: SiFirebase   },
    REACT:      { name: 'ReactJS'           , color: 'var(--react)'     , icon: SiReact      },
    NEXT:       { name: 'NextJS'            , color: 'var(--next)'      , icon: SiNextdotjs  },
    JAVA:       { name: 'Java'              , color: 'var(--java)'      , icon: SiJava       },
    PYTHON:     { name: 'Python'            , color: 'var(--python)'    , icon: SiPython     },
    HASKELL:    { name: 'Haskell'           , color: 'var(--haskell)'   , icon: SiHaskell    },
    PROLOG:     { name: 'Prolog'            , color: 'var(--prolog)'    , icon: DiProlog     },
    JUPYTER:    { name: 'Jupyter Notebook'  , color: 'var(--jupyter)'   , icon: SiJupyter    },
}
export interface IPage {
    navbar: {
        home: string,
        about: string,
        skills: string,
        projects: string
    },
    contact: {
        button: string,
        title: string,
        name: string,
        tel: string,
        message: string,
        send: string
    }
    simpleButton: {
        findMore: string,
        backHome: string
    },
    home: {
        occupation: string,
        description: string,
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
    projects: {
        title: string,
        frontend: Array<IProject>,
        software: Array<IProject>
    },
    "404": Array<String>
}

export const AVAILABLE_LANGS : ILang[] = [
    {value: 'pt-BR', label: 'PT-BR', page: new PT_BR()}, 
    {value: 'en-US', label: 'EN-US', page: new EN_US()}
];

export const DEFAULT_LANG : ILang = AVAILABLE_LANGS[0];
