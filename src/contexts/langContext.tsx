import React, { createContext, useState, useContext, ProviderProps, Provider } from "react";;

interface ILangContext {
    lang : string,
    availableLangs : Array<{value: string, label: string}>, 
    changeLang ?: (newLang: string) => void;
}

const defaultState : ILangContext = {
    lang: 'pt-BR',
    availableLangs: [
      {value: 'pt-BR', label: 'PT BR'}, 
      {value: 'en-US', label: 'EN'}
    ]
}

const LangContext = createContext<ILangContext>(defaultState);

export function LangProvider({ children } : {children: React.ReactNode}) {
    const [lang, setLang] = useState(defaultState.lang);
    const [availableLangs] = useState(defaultState.availableLangs);

    const changeLang = (newLang: string) => {
      setLang(newLang);
    }

  return (
      <LangContext.Provider value={{ lang, availableLangs, changeLang }}>
        { children }
      </LangContext.Provider>
  );
}

export function useLangContext() {
  const context = useContext(LangContext);
  return context;
}
