export interface ILang {
    value: string,
    label: string
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
            "contactButton": "Entre em contato"
        },
        "en-US": {
            "navbar": {
                "home": "Home",
                "about": "About Me",
                "skills": "My Skills",
                "projects": "Projects"
            },
            "contactButton": "Contact me"
        }
    };

    static AVAILABLE_LANGS : ILang[] = [
        {value: 'pt-BR', label: 'PT BR'}, 
        {value: 'en-US', label: 'EN'}
    ];

    static DEFAULT_LANG : ILang = {value: 'pt-BR', label: 'PT BR'};

    static DEFAULT_PAGE = this._DATA[this.DEFAULT_LANG.value];

    static getPage(targetLang: ILang) : object {
        const foundLang = this.AVAILABLE_LANGS.find( lang => lang.value === targetLang.value);
        if(foundLang){
            return this._DATA[foundLang.value];
        }
        return this._DATA[this.DEFAULT_LANG.value];
    };

    static getSection(targetLang: ILang, section: string) : object {
        return this.getPage(targetLang)[section];
    };
}