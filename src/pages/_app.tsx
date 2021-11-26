import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { LangProvider } from '~/contexts/langContext';
import { Navbar, ContactButton, Footer } from '~/components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Franklin Regis | Developer</title>
      </Head>
      <LangProvider>
        <Navbar />
        <ContactButton />
        <Component {...pageProps} />
        <Footer />
      </LangProvider>
    </>
  );
}
export default MyApp
