import React, { createContext, useState, useContext, ProviderProps, Provider, useEffect } from "react";
import Content, { ILang } from '~/util/Content';

interface ILangContext {
    currentLang : ILang,
    availableLangs : Array<ILang>,
    pageContent: object,
    changeLang ?: (newLang: string) => void;
}

const defaultState : ILangContext = {
    currentLang: Content.DEFAULT_LANG,
    pageContent: Content.DEFAULT_PAGE,
    availableLangs: Content.AVAILABLE_LANGS
}

const LangContext = createContext<ILangContext>(defaultState);

export function LangProvider({ children } : {children: React.ReactNode}) {
    const [currentLang, setCurrentLang] = useState(defaultState.currentLang);
    const [pageContent, setPageContent] = useState(defaultState.pageContent);
    const [availableLangs] = useState(defaultState.availableLangs);

    const changeLang = (newLang : string) => {
      setCurrentLang(availableLangs.find( lang => lang.value === newLang ) || defaultState.currentLang);
    }

    useEffect(()=>{
      setPageContent(Content.getPage(currentLang));
    }, [currentLang]);

  return (
      <LangContext.Provider value={{ currentLang, availableLangs, changeLang, pageContent }}>
        { children }
      </LangContext.Provider>
  );
}

export function useLangContext() {
  const context = useContext(LangContext);
  return context;
}
