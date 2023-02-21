import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import { AVAILABLE_LANGS, DEFAULT_LANG, ILang, IPage } from '~/util/Content';

interface ILangContext {
    currentLang : ILang,
    availableLangs : Array<ILang>,
    pageContent: IPage,
    changeLang ?: (newLang: string) => void;
}

const defaultState : ILangContext = {
    currentLang: DEFAULT_LANG,
    pageContent: DEFAULT_LANG.page,
    availableLangs: AVAILABLE_LANGS
}

const LangContext = createContext<ILangContext>(defaultState);

export function LangProvider({ children } : {children: React.ReactNode}) {
    const [currentLang, setCurrentLang] = useState(defaultState.currentLang);
    const [pageContent, setPageContent] = useState(defaultState.pageContent);
    const [availableLangs] = useState(defaultState.availableLangs);

    const changeLang = useCallback((newLang : string) => {
      const langToSet = availableLangs.find( lang => lang.value === newLang ) || defaultState.currentLang;
      localStorage.setItem('@franklingg/portfolium', langToSet.value);
      setCurrentLang(langToSet);
    }, [availableLangs]);

    useEffect(()=>{
      const previousSetLang = localStorage.getItem('@franklingg/portfolium');
      if(previousSetLang) changeLang(previousSetLang)
      else changeLang(defaultState.currentLang.value)
      setPageContent(currentLang.page);
    }, [changeLang, currentLang]);

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
