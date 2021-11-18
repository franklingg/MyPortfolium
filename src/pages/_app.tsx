import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { LangProvider } from '~/contexts/langContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="distribution" content="web" />
        <meta name="distribution" content="global" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Franklin Regis | Developer</title>
        <meta name="author" content="Franklin Regis" />
        <meta name="description" content="Portfólio com as principais informações sobre o desenvolvedor de software Franklin Regis" />
        <meta name="keywords" content="Desenvolvedor de Software,Desenvolvedor Frontend,Franklin Regis" />
        <meta name="web_author" content="Franklin Regis" />
        <meta name="subject" content="Personal" />
        <meta name="reply-to" content="franklin.oliveira@ccc.ufcg.edu.br" />
        <meta name="country" content="BR" />

        <meta httpEquiv="Content-Style-Type" content="text/css" />
        <meta httpEquiv="Content-Script-Type" content="text/javascript" />
        <link rel="manifest" href="/manifest.json"></link>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </>
  );
}
export default MyApp
